---
sidebar_position: 1
title: Business Background
description: The Australian second-hand market PopOut targets, its structural problems, and the proposed solution.
---

# Business Background

:::note[Source]

This page is a translation of the Confluence document
[Project Background](https://communitymelb.atlassian.net/wiki/spaces/SecondHand/pages/5472257)
(v3, 2025-09-30). When the original changes, this page needs updating with it.

:::

## Summary

**The business.** A neighbourhood-based, in-person marketplace for international
students, working-holiday visitors, and locals in Australia. Facebook Marketplace
effectively holds a monopoly on second-hand trading here, but fraud, poor search,
and quality problems leave users "putting up with it" rather than choosing it.
Trading also happens piecemeal in nationality-specific communities — KakaoTalk,
WeChat, Facebook groups — where trust and convenience are low enough that demand
for an alternative is acute.

**The problem.** Hundreds of thousands of short-term residents arrive in
Australia every year, and they need cheap, safe household goods and furniture as
soon as they settle. Locals trade second-hand actively too, under cost-of-living
pressure, and trades between the two groups are frequent. But the market is
fragmented by nationality and language, and it lacks trust signals and safety
mechanisms — so every kind of user is poorly served.

**The solution.** Benchmarked on Danggeun Market in Korea and Jimoty in Japan,
both neighbourhood-based in-person platforms. The key reference is the strategy
Danggeun used entering Canada — another multicultural, immigration-driven country
— of concentrating on one large city, building network effects, then expanding
nationally. To that we add transaction safety (police-designated safe exchange
sites, user trust signals), hyperlocal matching, and a community feed.

**The opportunity.** Australia's second-hand and resale market is roughly
A$4.9bn (about US$3.3bn). Second-hand clothing alone is forecast to grow from
about A$578m in 2023 to about A$1.6bn by 2032, a 11.9% CAGR. A Monash University
survey found roughly 75% of Australians had bought or sold second-hand in the
past year — the behaviour is already normal, not niche.

## The problem

Australia is a multicultural society of about 27.4 million people, taking in more
than 600,000 international students and around 200,000 working-holiday makers
each year. Short-term residents have sharp, recurring demand to buy and sell
furniture and household goods at arrival, graduation, and departure; locals use
second-hand actively under cost-of-living pressure.

The market is led by Facebook Marketplace and otherwise scattered across
nationality-specific communities. It has these structural problems:

### Safety and trust

- **Fraud is rising.** PayID refund scams, fake delivery links, and listings for
  goods that do not exist are widespread; Australian government and media have
  repeatedly warned about Marketplace-based fraud.
- **No trust signals.** There is no objective way to check account age, response
  rate, or completion rate, which compounds user anxiety.

### Communication fatigue

- **Haggling.** Endless "what's your lowest?" negotiation costs time and energy.
- **Noise.** People with no intent to buy open chats anyway.
- **The burden of long exchanges with strangers**, made worse by language and
  cultural differences — especially for students and working-holiday visitors.

### Completion

- No-shows and non-responses are frequent and sharply reduce conversion.
- Sellers do not update listings, so already-sold items stay visible.

### Discovery

- Distance and date filters are imprecise, making it hard to see only what is
  genuinely nearby, while distant listings are over-exposed.
- Users fall back on external tools, and complain that finding what they want
  takes too long.

### Quality and operations

- Advertising and commercial posts bury individual listings; unrealistic prices
  and duplicate listings are common.
- Meta does not treat Marketplace as a strategic core service, so support and
  quality control move slowly.

### Fragmentation

- KakaoTalk, WeChat, and Xiaohongshu communities are closed and fragmented, so
  none reaches trading density.
- Network effects weaken across the market as a whole, and "trade quickly and
  safely in one place" becomes impossible.

### Listing fatigue for sellers

- AI can suggest titles and descriptions automatically; the point is to give
  sellers their time back.
- Automatic translation can generate multilingual listings.

**In short:** the Australian second-hand market today is an experience people
tolerate for lack of an alternative. Safety, trust, discovery, quality, and
operations all fall short, and the gap where a dedicated hyperlocal in-person
platform should be is conspicuous.

## The solution

### Product

- An Australian Danggeun Market — an in-person trading platform.
- **Positioning:** safe neighbourhood trading, starting in central Melbourne.
- **Core value:** safety (less fraud, fewer no-shows) + trust (reputation,
  verification) + discovery (accurate radius and filters) + speed (alerts,
  reservations).
- **Launch strategy:** a hyperlocal pilot centred on Melbourne CBD → build
  trading density → expand to adjacent areas, following the "concentrate on one
  city, then expand" pattern proven by Danggeun's Canadian launch.

### What makes it different

**Safe by default.**

- **In-person only.** Payment links, prepayment, and escrow URLs are blocked
  automatically, with warning banners on risky keywords. Restricting trades to
  face-to-face meetings with neighbours removes most of the fraud that is
  endemic on Facebook.
- **Tiered trust badges.** Phone number (SMS) as the baseline, with optional
  school-email and neighbourhood verification badges, plus visible account age
  and recent activity.
- **Public conduct signals.** Following Danggeun's "manner temperature", response
  rate, appointment-completion rate, and review dimensions (accurate description,
  punctuality, courtesy, fair pricing) are surfaced as badges.

**Maximising completion.**

- An appointment card (date, time, place) with reminders the day before and an
  hour ahead.
- No-show penalties (reduced visibility, suspension thresholds) and one-click
  status changes (reserved, completed).

**Less conversation, less fatigue.**

- Negotiation is simplified to button-based price offers and acceptances instead
  of chat.
- The buyer enters the price they want; the seller accepts or declines with one
  tap.
- **Chat only opens once a price is agreed** — unnecessary conversation is cut
  out, and messaging exists only to arrange the handover.
- Lowball spam is limited by a daily cap on offers per person, plus a
  seller-configurable minimum acceptable price.
- The model is already proven by eBay's "Best Offer" and StockX's non-conversational
  matching; this is that model tuned for in-person trading.

**Accurate hyperlocal discovery.**

- A 3km-radius feed by default, with a radius slider that updates results live.
- Precise filters (category, price, condition, language, minimum conduct score),
  plus saved searches with new-listing alerts.

**Normalising price and quality.**

- Per-category guide price ranges and outlier warnings.
- Duplicate and bulk listings suppressed automatically via image and title
  hashes; warnings on low-quality photos.

**Absorbing fragmentation through language.**

- English, Chinese, and Korean UI, automatic translation previews, and a language
  filter.
- A cross-post helper that generates thumbnails and copy for sharing to KakaoTalk,
  WeChat, and Instagram — creating an inbound loop from those platforms.

**Removing listing fatigue.**

- Photograph an item and AI generates the title and description, for a
  thirty-second listing experience.
- Multi-posting support: list here and it posts elsewhere automatically.
- Incentives — coupons, points, badges, and rankings for a seller's first few
  listings.

**In-person safety infrastructure.**

- Recommending police-designated Safer Exchange Sites and nearby landmarks to
  lower the risk of meeting offline.

### What the customer gets

| | |
| --- | --- |
| **Time saved** | Radius, instant filters, saved searches, and alerts cut search time |
| **Money saved** | Guide prices prevent overpaying; nearby trades save travel and delivery costs |
| **Better safety** | Blocked payment links, trust badges, appointment cards, safe-place recommendations |
| **Faster trades** | A dense local feed and quick-reply templates improve the enquiry → appointment → trade funnel |

### Launch and expansion

- The pilot is limited to the nine areas within the City of Melbourne — CBD,
  Carlton, Docklands, East/North/West Melbourne, Parkville, Southbank, and South
  Wharf.
- Expansion to adjacent areas (Carlton North, Brunswick, Richmond, and so on)
  follows once an internal density KPI is met.
- University partnerships seed listings, with moving and graduation sales pinned
  to the top.
- December to February — graduation season and the end of lease cycles — is the
  window targeted for user acquisition.

## Not yet written

The following sections exist as headings in the source document but have no
content yet. They will be reflected here as they are filled in:

market opportunity detail (TAM/SAM/SOM), business model, go-to-market strategy,
competitive landscape, traction, product roadmap, financial projections, team,
and investment ask.
