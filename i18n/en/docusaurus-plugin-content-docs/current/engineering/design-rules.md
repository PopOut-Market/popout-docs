---
sidebar_position: 7
title: Design Rules
description: The 8pt grid, type scale, icon and touch-target sizes, card layout, and responsive rules.
---

# Design Rules

The numeric rules to follow when building a screen. The whole point of this page
is that you do not pick values arbitrarily — spacing, type size, and corner
radius all come from a fixed list.

Colour tokens and screen types live in
[Conventions](./conventions.md#design-tokens). This page covers dimensions and
layout.

## Spacing — the 8pt grid

**8pt is the base. 4pt is a fallback, used only when alignment cannot be solved
with 8pt alone.**

| Where | Value |
| --- | --- |
| Between major sections | 24 or 32 |
| Card gap in feed grids | **8** |
| Grouped elements (label + input, title + subtitle) | 12–16 |
| Icon to text | 8 |
| Card internal padding | 12–16 |
| Modal internal padding | 24 |

**Do not introduce values outside 8 / 12 / 16 / 24 / 32** without a clear reason.

There is one principle underneath it: **closer means more related** — spacing is
how the information structure is expressed.

## Typography

System fonts only — San Francisco on iOS, Roboto on Android. **Do not add custom
font families.**

| Use | Size | Weight |
| --- | --- | --- |
| Screen title | 20–24 | Bold (700) |
| Section title · price · important label | 16–18 | Medium–Bold (500–600) |
| Body · card title · button label | 14–16 | Regular (400) |
| Metadata (location, date, small labels) | 12–13 | Regular, grey |

Reduced to five steps: **12 · 14 · 16 · 20 · 24**. Do not use a size outside that
list; round to the nearest one.

- Importance is carried by **size + weight + contrast**.
- A title is always 2–4pt larger than its body text.
- Text is left-aligned by default, because it scans better.

## Icons and touch targets

| Area | Icon size |
| --- | --- |
| Tab bar · header | 24 |
| Small buttons · inside chips | 16–20 (1.2–1.4× the text height) |

:::warning[Touch targets never go below 44×44]

Even where the icon is 24, the **tappable area must be at least 44×44**. Achieve
it with invisible padding. It does not shrink on small screens.

:::

## Structural elements

| Element | Spec |
| --- | --- |
| Header height | 56–64 (including safe area) |
| Tab bar height | 56 |
| Primary button | Height ≥ 44, horizontal padding 16, radius 16–20 |
| Chip | Height 32–36, padding 6 (vertical) × 12 (horizontal), radius 16–20 |

Corner radius comes from three values only: **12 / 16 / 20**. Cards and images
use 12.

## Feed cards

The main selling feed is a two-column grid.

```
cardWidth = (screenWidth - (8 * 3)) / 2
```

The formula assumes a left margin of 8, a middle gap of 8, and a right margin
of 8.

| Element | Rule |
| --- | --- |
| Thumbnail | 1:1 square, centre-cropped |
| Card height | Thumbnail height + 48–64 for the title and price area |
| Title | Two lines maximum |
| Price | Bold, high contrast |
| Radius | 12, on both the card and the image |

A tight card gap makes the feed feel cramped. Keep it at 8.

## Responsive behaviour

Layout adapts to width. **Type size and touch targets do not scale with screen
size.** Percentage-based widths apply to grids and containers only.

| Band | Width | Rule |
| --- | --- | --- |
| Narrow | Below 360pt | Keep two columns; ellipsize long titles |
| Standard | 360–420pt | Default layout, card-width formula above |
| Large | Above 420pt | Keep two columns, widen cards proportionally (never a third column) |
| Tablet | 600pt and above | **Four columns** |

The horizontal safe margin is `min(16, screenWidth * 0.05)`, so content never
runs edge to edge.

:::note[The app is phone-only today]

The tablet band exists as a rule, but the shipped app is iPhone-only and excludes
Android tablets. See [Architecture](./architecture.md#distribution).

:::

## Shadows

| Elevation | Use | Blur |
| --- | --- | --- |
| 1–2 | Cards | 4–6 |
| 3–4 | Floating elements | 8 |
| 6+ | FAB · modal | 12–24 |

Use them **sparingly, and only where needed**. Too much looks dated and costs
performance. Avoid overlapping heavy shadows.

## Interaction

- A tap gives visual feedback **within 100ms** — an opacity change or a ripple.
- Support swipe-back where the platform expects it.
- Feeds and lists show skeletons while loading. The full rules are in
  [Conventions](./conventions.md#ui-states).
- Do not add heavy animation. Keep motion subtle and cheap.

## Contrast

Follow WCAG: **4.5:1 minimum**. Brand accent and danger colours must be clearly
distinguishable, and greys need four to six steps of hierarchy.

## What not to do

- Introduce spacing, type sizes, or radii outside the defined ranges
- Add custom font families
- Reduce a touch target below 44×44
- Move the main feed off a two-column grid without an explicit requirement

:::note[Source]

Adapted from the Confluence page
[업계 디자인 규칙](https://communitymelb.atlassian.net/wiki/spaces/SecondHand/pages/46039041)
(v4, 2025-12-13). The original also carries an LLM prompt for applying these
rules to existing code.

:::
