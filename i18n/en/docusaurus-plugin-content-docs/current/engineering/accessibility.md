---
sidebar_position: 10
title: Accessibility
description: Screen-reader labels, roles and states, semantic grouping, font scaling, and contrast thresholds.
---

# Accessibility

## First: leave native controls alone

Controls from `@expo/ui/swift-ui` and `@expo/ui/jetpack-compose` — `Button`,
`Toggle`, `TextField`, and so on — get their **role, state, and label from the OS
via native props** (`label`, `value`, `disabled`). The Host bridge maps that
native accessibility tree straight through to VoiceOver and TalkBack.

**Do not add RN accessibility props on top.** They are redundant, and they make
the announcement noisier.

The rules below apply to **custom `Pressable`-based interactive surfaces** and
custom composite views.

## 1. Labels

| Case | Rule |
| --- | --- |
| **Icon-only `Pressable`** | An `accessibilityLabel` is **required** (e.g. "Close sheet"). Without it a screen reader announces nothing useful |
| **Text-labelled `Pressable`** | If the visible text already describes the action, **do not** add `accessibilityLabel`. The screen reader reads the text; a duplicate label is noise |

## 2. Roles and states

Prefer **`role` over `accessibilityRole`.** Per the RN docs, `role` takes
precedence when both are set. Use `accessibilityRole` only for an RN-specific
value that has no ARIA `role` equivalent.

The valid `role` values:

```
adjustable · alert · button · checkbox · combobox · grid · header · image
imagebutton · keyboardkey · link · menu · menubar · menuitem · none
progressbar · radio · radiogroup · scrollbar · search · spinbutton · summary
switch · tab · tablist · text · timer · togglebutton · toolbar
```

`accessibilityState` takes five keys:

| Key | Type |
| --- | --- |
| `disabled` | `boolean` |
| `selected` | `boolean` |
| `checked` | `boolean` or `'mixed'` |
| `busy` | `boolean` |
| `expanded` | `boolean` |

:::warning[A disabled state must look disabled]

Setting `accessibilityState={{ disabled: true }}` without greying or dimming the
element misleads sighted users. State and appearance travel together.

:::

## 3. Group by meaning

When several visual elements form one logical unit — a star icon plus a rating
number, an avatar plus a name, an icon plus a price — wrap them in a `View` with
`accessible={true}` and one combined `accessibilityLabel`, so the screen reader
announces the unit once.

Without it each fragment is read separately, and a listener cannot tell which
value belongs to what.

## 4. Hiding decorative elements — set both props

To hide a decorative image or a modal backdrop from screen readers you must set
**both** props, because each one works on a single platform.

| Prop | Platform |
| --- | --- |
| `accessibilityElementsHidden={true}` | **iOS only** |
| `importantForAccessibility="no-hide-descendants"` | **Android only** |

Set just one and the element stays discoverable on the other platform. The
Android prop's valid values are `auto`, `yes`, `no`, and
`no-hide-descendants`.

## 5. Font scaling

:::danger[Never use `allowFontScaling={false}`]

It breaks the app for visually impaired users. The one exception is system tab
bar icons, where a scaled label destroys the layout.

:::

Cap it instead. Put `maxFontSizeMultiplier={1.5}` on text and `TextInput` inside
fixed-height containers — cards, buttons, chips. With no cap, a user on the
largest OS text size gets clipped content.

The defaults are `allowFontScaling: true` and `maxFontSizeMultiplier: undefined`
(inheriting the parent or global value).

## 6. Contrast

| Target | Minimum ratio |
| --- | --- |
| Body text against background | **4.5:1** (WCAG 2.1 AA) |
| Large text (≥ 18pt regular, or ≥ 14pt bold) | **3:1** |
| Interactive borders and focus indicators | **3:1** against adjacent colours |

The semantic tokens in [Conventions](./conventions.md#design-tokens) are the
canonical source. Verify a new token clears these thresholds before introducing
it — and take particular care with low-opacity tokens like `textMuted` and
`textTertiary` on brand-coloured backgrounds.

## Not covered here

- **Per-primitive accessibility** — questions like "does `Button` already set
  `role=button`?" are documented alongside each primitive.
- **Minimum touch targets** (44pt iOS / 48dp Android) live in
  [Design Rules](./design-rules.md#icons-and-touch-targets).
