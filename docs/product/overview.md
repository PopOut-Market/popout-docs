---
sidebar_position: 1
title: Overview
description: What PopOut Market is, who it serves, and how the app is laid out.
---

# Overview

PopOut Market is a **hyperlocal consumer-to-consumer marketplace**. People list
second-hand items from their own neighbourhood, buyers find them in a feed ranked
by proximity and freshness, the two sides agree terms in chat, and the handover
happens face to face at an agreed public spot.

"Hyperlocal" is the load-bearing word. Every surface in the app is anchored to a
**suburb**: the feed you see, the community posts you read, and the meetup spots
you are offered are all scoped to where you are, not to a national catalogue.

## Status and market

| | |
| --- | --- |
| Platforms | iOS and Android (phone only — no tablet, no landscape) |
| Market | Melbourne, Australia |
| Live since | June 2026 |
| Sign-in | Australian mobile number + SMS one-time code |
| Languages | 8 — English, Korean, Simplified and Traditional Chinese, Japanese, Vietnamese, French, Spanish |

Sign-in is phone-only by design. No email, no password, no social login. SMS is
the channel sellers already share with buyers in a marketplace like this, and a
single auth channel keeps the abuse surface to one dimension.

## What you can do without signing in

Browsing is open. An anonymous visitor can scroll the home feed, change suburbs,
apply filters, open a listing's full detail, and read the community feed. The
experience is visually identical to a signed-in one.

Sign-in is required only to **act**:

- Save a listing
- Start a chat with a seller
- Create a listing or a community post
- Like or reply to a community post
- Report or block another member

Tapping one of those as a guest raises a sign-in prompt rather than failing
silently.

## The five tabs

| Tab | What it holds |
| --- | --- |
| **Home** | The shopping feed for the selected suburb — a two-column grid of listing cards, ranked by score |
| **Community** | A single-column reading feed of neighbourhood posts, newest first |
| **Create** (centre) | The button that opens either the sell flow or the community composer |
| **Chat** | Two sub-tabs, Buy and Sell, each a list of conversations |
| **Me** | Profile, listings, saved items, rewards, vouchers, and settings |

## Suburb selection

The suburb shown on Home is resolved in this order:

1. A signed-in member's **verified suburb**, if it is still in the active suburb roster.
2. Otherwise, the **last suburb browsed** on this device.
3. Otherwise, **Melbourne CBD**.

Verification expiry never gates browsing. It gates *actions* — starting a chat,
creating a post — and nothing else. Changing the suburb from the header opens a
full-screen picker with a searchable alphabetical list and a map; picking only
previews, and nothing is written until you confirm.

## Where to go next

- The buy-and-sell loop in detail → **[Marketplace](./marketplace.md)**
- The social and reward layer → **[Community & Rewards](./community-and-rewards.md)**
- How any of it is built → **[Architecture](../engineering/architecture.md)**
