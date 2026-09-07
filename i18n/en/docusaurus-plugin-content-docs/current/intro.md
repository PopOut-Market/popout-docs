---
slug: /
sidebar_position: 1
title: Introduction
description: Documentation for PopOut Market — a hyperlocal buy-and-sell app for Melbourne neighbourhoods.
---

# PopOut Docs

PopOut Market is a hyperlocal C2C marketplace for iOS and Android. Neighbours
list the things they no longer need, find them in a feed ranked by how close and
how fresh they are, agree a price and a meetup spot in chat, and hand the item
over in person. It has been live in the Melbourne market since June 2026.

This site is the reference for both halves of that: what the app does, and how it
is built.

## Product

How the app behaves, written from the user's side. Start here if you want to know
what a feature does before you go looking at how it does it.

- **[Overview](./product/overview.md)** — what PopOut is, who it is for, and the
  shape of the app.
- **[Marketplace](./product/marketplace.md)** — the browse → chat → meet → sold
  loop, plus search, garage sales, and listing management.
- **[Community & Rewards](./product/community-and-rewards.md)** — the community
  feed, profile levels, coins, and gift-card vouchers.

## Engineering

How the app is built, deployed, and kept working.

- **[Architecture](./engineering/architecture.md)** — the stack, and why each
  piece was chosen.
- **[Repo Structure](./engineering/repo-structure.md)** — directory layout,
  dependency rules, and the feature-module contract.
- **[Authentication](./engineering/authentication.md)** — phone + SMS OTP,
  sessions, and where the security boundary actually sits.
- **[Environments & Releases](./engineering/environments-and-releases.md)** —
  staging vs. prod, build profiles, and over-the-air updates.
- **[Testing & CI](./engineering/testing-and-ci.md)** — the test layers, what
  blocks a merge, and coverage floors.
- **[Conventions](./engineering/conventions.md)** — commits, translations, design
  tokens, and screen types.

## Business

Why PopOut exists, and which market it targets.

- **[Business Background](./business/background.md)** — the structural problems
  in Australia's second-hand market, and the proposed solution.

## Contributing to these docs

[Getting Started](./getting-started/installation.md) covers running this site
locally, and [Writing Docs](./getting-started/writing-docs.md) covers file
layout, frontmatter, and how pages reach the sidebar.

Every page is a Markdown file under `docs/` in the
[popout-docs repository](https://github.com/PopOut-Market/popout-docs) — edit a
file, open a pull request, and the site redeploys when it merges to `main`.

:::note[Source of truth]

Product and engineering pages here summarise the app repository's own
specifications. Where a detail matters operationally — an exact threshold, a
project reference, a secret name — the app repo holds it, and this site
deliberately does not.

:::
