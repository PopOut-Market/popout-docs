---
sidebar_position: 2
title: Marketplace
description: The browse, chat, meet, and sold loop — plus search, garage sales, and listing management.
---

# Marketplace

The whole app exists to complete one loop: **a buyer finds an item, talks to the
seller, they meet, the item changes hands.** Everything on this page is a step in
that loop or a shortcut into it.

## Browsing

Home opens to a two-column grid of listing cards for the currently selected
suburb, ranked by a score rather than by time alone — proximity to the selected
suburb and freshness both push a post upward. Changing suburb re-ranks the same
broad set of posts rather than swapping it out.

Above the grid sits a single-select filter row. Exactly one filter is always lit,
and a cold start of the app always resets it to **All**:

| Chip | Shows |
| --- | --- |
| All | Everything in the feed |
| Giveaway | Free items only |
| Under $20 | Items priced below $20 |

Two more controls share that row but are **not** filters, and never take a lit
state — both open a separate page and leave the feed underneath untouched.
**Garage sales** sits second, and **Category** closes the row.

The filter row collapses out of the way once you scroll past a small threshold and
re-expands near the top, so long scrolls use the full screen. If the grid is
replaced by an empty state or an error there is nothing left to scroll, so the row
reappears on its own and the filters stay reachable.

Returning to the app refreshes the feed quietly in the background — no banner, no
spinner, and your scroll position is preserved.

## Search

Search is for when you already know what you want. The home feed is sorted by
nearness; typing "dining table" is a different shape of intent, and search answers
it directly.

- Search covers **the whole city**, not just the selected suburb.
- It is **multilingual by construction**. Every listing's title and description is
  stored in all 8 supported languages, so a search typed in any one of them finds
  posts written in any other.
- A recent-searches list sits under the search box. It is **per-device**, survives
  sign-out, and is cleared with "Clear all".

For a signed-in member, search terms are retained server-side for twelve months
and are readable by nobody inside the app. A guest's typed words are not retained
anywhere.

## Garage sales

Close to nine in ten live listings belong to someone who has three or more items
up at once — and in an ordinary feed those items sit scattered as unrelated cards.
A shopper who would happily take three of them has no way to notice, and no way to
ask for all three in one message.

Garage sales gathers nearby sellers who have several items live and shows each
person's pile together, so a shopper can see the whole lot before saying a word.
The goal is **one trip instead of three**: the shopper carries more home, the
seller clears more in a single meeting.

Sellers do nothing to appear here. There is no box to tick and no form to fill —
the app groups what is already listed.

## Selling

The sell flow runs in two modes that converge on the same listing shape.

### Single post

1. Pick 1–3 photos from the gallery.
2. Choose whether to let the AI assistant pre-fill the text fields, then continue.
3. If the assistant is on, an "Analysing your photos" overlay covers the form for
   roughly five to ten seconds while it reasons about the images.
4. The form fills with a title (naming brand and model where it can identify
   them), a short listing-style description, and a pre-selected category.
5. Review and edit anything, set a price or mark it a giveaway, pick a meetup
   spot, and post.

With the assistant off, the form opens immediately with every field empty and the
seller fills it themselves. Either way the photo row stays editable right up to
posting.

Two things the assistant deliberately never decides for the seller:

- **It never picks a side of Fashion.** When it can tell an item is a shoe but
  genuinely cannot tell whose, it offers Women's and Men's and chooses neither.
- **It never chooses "Other".** That is a judgement only a person makes.

### Bulk post

Pick a batch of photos and the app groups them into buckets, one per likely item —
eight photos might become three drafts. Each bucket becomes a draft listing the
seller can review, move photos between, split, or delete. The assistant fills the
same text fields per draft. "Submit all" posts each in turn with per-bucket
progress.

### Categories

Categories are **two levels**. Where a broad category has finer categories
underneath it — Women's Fashion, Men's Fashion, and Home & Kitchen — picking one
of those is mandatory on the create, bulk, and edit forms. The remaining broad
categories have no second level and ask for nothing extra.

Nine of the finer names are identical across the two sides of Fashion (Shoes,
Tops, Bags, and so on), so the app tracks *which* category was chosen rather than
what it is called.

### Meetup spots

A seller tags a listing with where they would like to hand the item over. The
picker offers a searchable list of well-known public places near the seller — there
is no map and no custom pin-dropping. The note pre-fills with the chosen place's
own name, and clearing it falls back to that name rather than being refused.

A meetup spot is optional; posting without one raises a confirmation sheet first.
A saved spot belongs to the seller rather than to any particular suburb claim, so
it survives suburb re-verification.

## Chat

Every conversation is anchored to **three** things at once: the seller, the buyer,
and the post. The same pair can hold several separate conversations if several
listings are involved, and two buyers asking about one listing land in two separate
rooms. That per-post, per-pair shape keeps each thread focused and gives the seller
an inbox where every row maps to one listing-and-buyer pair.

Chat covers text, image attachments, message translation, push notifications, and
the seller-side mark-as-sold flow. Messages are permanent once sent. There are no
read receipts on individual bubbles and no typing indicator.

**Draft rooms.** Tapping "Chat with seller" opens the room view locally and
persists nothing. It does not appear in either inbox and consumes no server
resource. Back out without sending and no trace remains; send the first message
and the room plus that message are created in a single server call.

**Inbox.** The Chat tab holds Buy and Sell sub-tabs. A cold start always lands on
Buy; within a session your last choice is preserved. Each row shows the other
party, a message preview, the time of last activity, a "needs you" indicator, and
a thumbnail of the anchor post.

Every system-style row in a thread is written by the app, never by a person — the
intro line at the top of a room, the "Item sold" row that lands in sibling rooms,
hold notes, and the review invitation.

### The performance bar

In plain language, "chat works well" means:

- My message appears in my own thread the moment I tap send.
- A message sent to me while I am in the room appears within about two seconds,
  with no refresh.
- The Chat tab's inbox appears within about a second.
- Switching between Buy and Sell feels instant.

Those bars apply to a recent device on 4G, 5G, or Wi-Fi.

## Closing the trade

The seller marks the item sold and picks which of the people they chatted with
actually bought it — either from inside the chat, or from their listings. Sibling
rooms about the same post receive an "Item sold" row, and the buyer gets a note
naming what was recorded as sold to them.

That completed trade unlocks a **review** for both sides. See
[Community & Rewards](./community-and-rewards.md#reviews-after-a-trade).

## Listing management

Beyond create and sell, a listing supports:

- **Editing** — text, price, category, photos, and meetup spot after publishing.
- **Reserving** — putting the item on hold for a specific buyer, which posts a
  "Reserved for you" note into their room. A reserved listing is still a real,
  live listing.
- **Status control** — marking a listing sold, or taking it down.
- **Price drops** — with a hint surfaced to people who showed interest.
- **Sharing** — a link that opens the listing directly, usable signed in or out.
- **View counts** — shown on the listing.

## Trust and safety

- **Report** a listing, a community post, or a member.
- **Block** a member, which removes them from your surfaces.
- **Restricted listings and posts** — content held back from general view, with
  its own screen explaining the state.
- **Bans** — enforced server-side, not by client checks.
- **Admin review** of listings and community content.
