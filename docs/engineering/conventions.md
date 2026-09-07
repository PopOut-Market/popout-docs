---
sidebar_position: 6
title: Conventions
description: Commit format, translations, design tokens, screen types, and UI states.
---

# Conventions

## Commits

Conventional Commits: `<type>(<scope>): <subject>`

- `<scope>` is optional. Use it when a change is scoped to a specific feature or
  area (`listings`, `auth`, `ui`).
- `<subject>` is imperative, lowercase, no full stop.

| Type | When |
| --- | --- |
| `feat` | New user-visible feature or capability |
| `fix` | Bug fix |
| `refactor` | Neither adds a feature nor fixes a bug |
| `perf` | Performance improvement |
| `test` | Tests only |
| `docs` | Documentation only |
| `chore` | Tooling, dependencies, config, non-code changes |
| `style` | Formatting only, no change in meaning |

```
feat(listings): add infinite scroll to feed
fix(auth): handle expired OTP gracefully
refactor(ui): extract Pressable surface primitive
chore: bump expo sdk to 55.0.1
```

`build` and `ci` from the default Conventional Commits set are deliberately folded
into `chore` — fewer types to remember, and the distinction does not earn its
weight on a solo project.

**No breaking-change marker** (`!` or a `BREAKING CHANGE:` footer). SemVer does
not apply to a mobile app: "breaking" means a new binary release, not a
commit-message flag.

### Branching

Single-developer project — commit directly to `main`. Use a feature branch only
for large or risky experiments that may be abandoned.

### Body and footer

Optional. Use a body when the *reason* for a change is not obvious from the
subject. Avoid restating what the diff already shows.

## Internationalisation

**All user-visible text must have a translation in every supported language.**
Hardcoded user-facing strings are not permitted, and a missing translation in any
locale is a **TypeScript build error**.

### Supported languages

| Code | Language |
| --- | --- |
| `en` | English |
| `ko` | Korean (한국어) |
| `zh-Hans` | Simplified Chinese (简体中文) |
| `zh-Hant` | Traditional Chinese (繁體中文) |
| `ja` | Japanese (日本語) |
| `vi` | Vietnamese (Tiếng Việt) |
| `fr` | French (Français) |
| `es` | Spanish (Español) |

### The coverage rule

Every string a user can see exists in all 8 languages. That includes screen text,
labels, buttons, placeholders, error and validation messages, system-generated
content such as push notifications, and accessibility labels.

**A feature is not shippable until translations exist for every supported
language**, and this is enforced at build time rather than by review.

### Layout

```
src/i18n/
├── locales/
│   ├── en.ts          source of truth for keys
│   ├── ko.ts
│   └── ...
├── i18n.ts            i18next init + settings-store bridge
├── types.d.ts         module augmentation for typed t() calls
└── useTranslation.ts
```

Locale files are hand-written **TypeScript**, not JSON — that is what powers the
typed-key and strict-completeness checks.

### Key conventions

- Keys are flat and `snake_case`, prefixed by feature: `welcome_title`,
  `welcome_start_hunt`, `common_cancel`. i18next's `keySeparator` is disabled, so
  dots have no meaning.
- `common_` prefixes strings shared across multiple screens.
- `en.ts` is the type source of truth — `TranslationKey = keyof typeof en`, and
  every other locale must satisfy `Record<keyof typeof en, string>`.
- **Language labels are not translated.** `'English'` and `'한국어'` are endonyms
  that must always appear in their own script, so a user who has not yet set their
  language can still recognise their option.

## Design tokens

The theme modules under `src/shared/theme/` are the code source of truth —
`tokens.ts` for non-colour values, `palette.ts` for raw colour primitives, and
`useThemeColors.ts` for semantic colours.

**Naming.** Dot-notation keys. Semantic tokens reference primitives by *intent*
(`text`, not `gray.900`). Components consume **semantic tokens only**, never
primitives directly.

### Light mode only

The app has no dark-mode support. Do not add `isDark` branches or
`useColorScheme` reads.

### Brand colours

| Key | Value |
| --- | --- |
| `brand.primary` | `#FF8C00` |
| `brand.highlight` | `#00A6F4` |
| `brand.dark` | `#CC3200` |
| `brand.light` | `#FF6B3D` |

### The surface stack

Surface roles form a neutral layering stack, and the separation between them is
deliberate rather than incidental:

| Role | Sits |
| --- | --- |
| `surface.base` | Cards — the topmost layer |
| `surface.chrome` | Tab bar and header |
| `background` | The screen root, underneath everything |

Use `surface.chrome` — not a raw neutral — for any chrome SVG fill.

The neutral ramp is **generated**, not hand-picked: a script produces it at the
brand hue with zero chroma, giving pure grey with no brand tint bled into the
neutrals, while retaining the shape so warmth could be reintroduced with a
one-line change. Do not hand-edit the generated hexes — re-run the script.

## Screen types

**Every screen is exactly one of three types.** Identify yours before writing
layout code — getting it wrong causes double padding, or content hidden behind the
notch or home indicator.

### Safe-area API

**Use `useSafeAreaInsets()` exclusively. Never use `SafeAreaView`.**

The library labels `SafeAreaView` "preferred" for its native performance, but this
project always needs token spacing added on top of the raw inset
(`insets.top + spacing.lg`), which `SafeAreaView` cannot express without nesting
wrappers. Picking one API everywhere keeps screens uniform and avoids the
half-and-half ambiguity that caused inset bugs in v1.

### The three types

All three root primitives live in `src/ui/Screen`.

| Type | Chrome | Root primitive | Who owns the insets |
| --- | --- | --- | --- |
| **1 — Standalone** | No header, no tab bar | `<StandaloneScreen>` | The screen owns both edges |
| **2 — Tabbed** | Custom header **and** tab bar | `<TabbedScreen>` | Header owns top, tab bar owns bottom |
| **3 — Stack detail** | Custom header, no tab bar | `<StackScreen>` | Header owns top, the screen owns bottom |

Examples: Welcome, Auth, and Onboarding are Type 1. Home, Community, Chat, and Me
are Type 2. Listing detail, Settings, and User profile are Type 3.

**Never** call `useSafeAreaInsets()` for an edge a primitive or the shell already
handles — double-applying gives you double padding. **Never** re-implement a root
`<View>` by hand; if it diverges from the primitive, the divergence is a bug, not
a feature.

## Layout

Phone-only, portrait-only. The phone width range (roughly 360–430pt) is handled by
Flexbox — **no breakpoints needed**. Where a component genuinely must adapt, use
`useWindowDimensions()`, never `Dimensions.get('window')`, which does not react to
dynamic changes.

- The root container needs `flex: 1` so it fills the screen on every phone size.
- Never set a fixed `width` or `height` on a screen-level layout container. Use
  flex, `width: '100%'`, or a percentage. Component-intrinsic dimensions — button
  heights, icon sizes — are the exception, and carry a comment.
- The section that should grow gets `flex: 1`; anchored elements such as CTAs and
  footers get no flex and sit at their natural height.
- Grid image slots reserve their aspect ratio (`aspect-square`) so layout does not
  jump while images load.

## UI states

These apply to any screen or list that fetches data.

| State | Requirement |
| --- | --- |
| **Initial load** (`isPending`, no data) | Skeleton loaders matching the final layout shape — not a generic spinner |
| **Refetch** (`isFetching`, data present) | Keep existing data visible; show only a subtle indicator |
| **Empty** | Shown *only* when the response successfully returned zero items. Include a clear next step — never a dead-end illustration |
| **Error** | Must include an `onRetry` that calls `refetch()` |
| **Pagination error** | Keep existing items visible and show a small retry button in the list footer. Do not replace the whole list |

:::warning

**Never render an empty state for a failed request.** It tells the user no data
exists when in fact the request failed — which is a different problem with a
different fix.

:::
