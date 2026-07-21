# Weekly Deals Refresh — Agent Instructions

You are running as part of a weekly automated routine for tryorthokeys.com.
Your job is to keep the /deals page accurate: update stale deals, remove expired
ones, and add new ones from the same vendors. Follow every step in order.

---

## Step 1 — Read Current State

Read these three files before touching anything:

- `pages/deals.js` — the `deals` array (all current deal cards) and `quickDealPicks`
- `seo/affiliates.json` — every affiliate ID and its URL (with ref params)
- `components/specialdeals.js` — the two featured deal cards

Note down:
- Each deal's `slug`, `name`, `savings`, `code`, `status`, and the affiliate ID used in `link: getUrl('...')`
- The ref param pattern each vendor uses in `affiliates.json` (you will need these when adding new entries)

---

## Step 2 — Check Each Vendor (Sequentially, Throttled)

Check vendors ONE AT A TIME with a 3-second pause between requests (`sleep 3`).
Do NOT fetch all vendors in parallel — the parallel burst is what triggers
rate-limiting (403/429). Make ONE request per vendor; only retry once (after
another 3-second pause) if the first request fails.

Prefer `curl` with a browser User-Agent over WebFetch — some vendors throttle
requests with no user-agent more aggressively:

```bash
curl -s -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" --max-time 30 <url>
sleep 3
```

Three of the vendors are Shopify stores with public JSON product endpoints —
use those instead of scraping HTML (cleaner data, less likely to rate-limit).
Endpoints verified working as of 2026-07-20:

| Vendor     | URL to fetch                                                | Format | Current affiliate ID |
|------------|-------------------------------------------------------------|--------|----------------------|
| KBDcraft   | https://kbdcraft.store/products.json?limit=250              | Shopify JSON | kbdcraft-store |
| KPRepublic | https://kprepublic.com/collections/sale/products.json       | Shopify JSON | kprepublic-store-try-ortho-keys |
| KBDFans    | https://kbdfans.com/collections/on-sale-items/products.json | Shopify JSON | kbdfans-weekin-y-40-diy-kit |
| Drop       | https://drop.com                                            | HTML   | (see affiliates.json for drop entries) |
| Work Louder| https://worklouder.cc                                       | HTML   | work-louder-xyz-work-board-r2 |
| Akko       | https://en.akkogear.com                                     | HTML   | akko-deals-page |
| FKcaps     | https://fkcaps.com                                          | HTML   | fkcaps-custom-keycaps |

Notes on the JSON endpoints:
- A product is on sale when a variant's `compare_at_price` is set and greater
  than `price`. Also scan `tags` and `title` for named promos.
- KBDcraft's `/collections/sale/products.json` exists but is empty — use the
  full `/products.json` and filter by `compare_at_price`.
- If a JSON endpoint fails or returns empty, fall back to that vendor's
  homepage HTML (this counts as the one retry).

**Vendor cache — `scripts/deals-vendor-cache.json`:** after each successful
fetch, write an entry `{ "vendor": ..., "fetchedAt": "YYYY-MM-DD", "promos":
[one-line summaries of active promotions] }` (replace the vendor's previous
entry). If a vendor is unreachable after the retry:
- If the cache has an entry for it, base your decisions on the cached data and
  add `[vendor: used cache from <fetchedAt>]` to the commit message.
- If there is no cached entry, leave that vendor's deals unchanged and add
  `[vendor unreachable — skipped]` to the commit message.

For each vendor, look for:
- Active coupon codes with specific savings (e.g. "$5 off orders over $15")
- Percentage discounts (e.g. "15% off all keyboards")
- Free shipping thresholds (e.g. "free shipping on orders over $50")
- Active sale events with a named promo
- Pre-order or new product launches with a specific deal

Do NOT treat vague CTAs like "Shop now", "New arrivals", or "Check out our store"
as deals — these are not worth adding.

---

## Step 3 — Update Existing Deals in `pages/deals.js`

For each deal currently in the `deals` array:

**If the deal is still valid:**
Update `savings`, `description`, `code`, and `status` to match what you found on the
site. If the seasonal name changed (e.g. "Easter sale" is gone but a summer sale is
running), update accordingly. Keep `slug`, `name`, `category`, `badge`, and
`link: getUrl('...')` unchanged unless the vendor changed.

**If the deal has clearly expired (sale page gone, code returns error, promo ended):**
Remove that object from the `deals` array entirely.

**If the site was unreachable:**
Follow the cache rule from Step 2: use the cached vendor data if available
(noting `[vendor: used cache from <date>]` in the commit message), otherwise
leave the deal unchanged and note `[vendor unreachable — skipped]`.

---

## Step 4 — Discover New Deals

While browsing each vendor, if you find additional active promotions not already in
the `deals` array, add them.

Rules:
- Only add if there is a concrete, specific saving (%, $, free shipping) — not vague
- Max **15 deals** total in the `deals` array. If already at 15, replace the weakest
  existing deal (least specific savings, most generic description).
- New deal objects must follow this exact shape:

```js
{
  slug: "vendor-product-or-promo",   // lowercase, hyphenated, unique
  name: "Vendor Name",
  category: "Keyboards",             // one of: Keyboards | Keycaps | Accessories
  offerType: "Coupon code",          // one of: Coupon code | Affiliate discount |
                                     //   Affiliate link | Referral offer | Sale |
                                     //   Shipping discount
  savings: "Exact saving description",
  code: "CODE" | null,               // null if no code needed
  link: getUrl('affiliate-id'),      // ALWAYS getUrl() — never a raw URL
  badge: "Short badge label",        // 3-5 words
  description: "1-2 sentence card description.",
  status: "Active",                  // or "Pre-order"
}
```

**Important:** Only use `offerType` values from the list above. `pages/deals.js`
contains a `dealTypeClass` lookup object that maps `offerType` to a CSS badge class.
If you use a value not in that list, the badge will render with no styling. Do not
add new `offerType` values.

---

## Step 5 — Affiliate Link Rules (CRITICAL — READ CAREFULLY)

### Never hardcode a URL in `pages/deals.js`
Every `link` field must be `getUrl('some-id')`. If you write a raw URL like
`https://kbdcraft.store/products/adam?ref=TRYORTHOKEYS` directly in the deals array,
that is a bug. Always look up or create an affiliate ID and use `getUrl()`.

**Exception — Drop's existing entry:** The current Drop deal uses
`link: getUrl("https://drop.com/?referer=T93XGG")` — passing the raw URL as the ID.
This is intentional: `getUrl()` falls back to returning its argument unchanged when
no matching ID exists in `affiliates.json`. Do NOT change this pattern. If you add
a new Drop deal, use one of the existing Drop affiliate IDs from `affiliates.json`
(e.g. `drop-sense75`, `olkb-planck-drop-listing`) or add a new entry with the ref
param `?utm_source=linkshare&referer=T93XGG` appended.

### Never modify existing `url` fields in `seo/affiliates.json`
These URLs contain referral parameters that earn commission. Do not touch them.
You may only **add** new entries.

### Adding a new affiliate entry for an existing vendor
Find the vendor's existing entries in `affiliates.json` and copy the ref param
pattern exactly. Reference patterns by vendor:

| Vendor      | Ref param pattern                            |
|-------------|----------------------------------------------|
| KBDcraft    | `?ref=TRYORTHOKEYS`                          |
| KPRepublic  | `?dt_id=94852`                               |
| Drop        | `?utm_source=linkshare&referer=T93XGG`       |
| Akko        | `?ref=29468`                                 |
| FKcaps      | `?a=tryorthokeys`                            |
| YMDK        | `?sca_ref=3163375.1C4wKHXQtf`               |
| Work Louder | use collabs.shop short link if available     |
| KBDFans     | `https://kbdfans.com/r?id=XXXXX` format      |

New entry shape to add to the END of `seo/affiliates.json`:
```json
{
  "id": "vendor-product-slug",
  "previousUrls": [],
  "name": "Vendor Product Name",
  "url": "https://vendor.com/product?ref=YOURCODE",
  "description": "One sentence describing the product or page.",
  "tags": ["tag1", "tag2"],
  "image": null
}
```

### Adding a new affiliate entry for a brand-new vendor
Add the entry with the base URL, no ref param, and include
`[needs affiliate ref: vendor-name]` in your commit message so the owner can add
the referral code manually.

---

## Step 6 — Update `quickDealPicks`

In `pages/deals.js`, the `quickDealPicks` array has 3 objects. Each references a
`dealSlug` that must exist in the `deals` array.

After updating the deals array, review the picks:
- If a referenced `dealSlug` no longer exists in the `deals` array, replace it with
  the slug of the best current deal in that same general category (keyboard deals,
  budget parts, customization).
- If the referenced deal still exists but its content changed significantly (e.g.
  seasonal sale name changed, savings amount updated), update the `reason` field to
  match the current deal description.
- Always update `label` and `reason` to accurately reflect the deal you are pointing to.

---

## Step 7 — Update `components/specialdeals.js`

This file has two hardcoded featured deal cards (currently KBDcraft and FKcaps).
Update the text content (savings amount, description copy) if those deals changed.

All `href` or `Link` values must still use `getUrl('affiliate-id')` — never raw URLs.

**If a featured deal has been fully removed from `deals.js`:** Replace that card
with the best current deal from the `deals` array. Pick a deal with strong, specific
savings that would stand out as a feature. Do not leave a card pointing to a deal
that no longer exists.

Do not modify `relatedGuides`, `faqItems`, or `dealTypeClass` in `pages/deals.js` —
these are out of scope for the weekly refresh.

---

## Step 8 — Update `dateModified`

In `pages/deals.js`, find the `structuredData` object. Update the `dateModified`
field to today's date in `YYYY-MM-DD` format. Only do this if you are making at
least one other change (do not commit a date-only change with no real updates).

---

## Step 9 — Pre-Commit Checklist

Before committing, verify all of the following:

- [ ] Every `link` field in the `deals` array uses `getUrl(...)`, not a raw URL
- [ ] No `url` values in `seo/affiliates.json` were modified (only new entries added)
- [ ] The `deals` array has 15 or fewer entries
- [ ] Every new deal has a concrete, specific savings value — not a vague description
- [ ] `quickDealPicks` only references slugs that exist in the `deals` array
- [ ] `dateModified` is updated to today's date (if any changes were made)

---

## Step 10 — Commit and Push

If you made changes, stage only these files:

```bash
git add pages/deals.js components/specialdeals.js seo/affiliates.json scripts/deals-vendor-cache.json
```

Commit with a message in this format:
```
Weekly deals update — YYYY-MM-DD: [what changed]

Examples:
Weekly deals update — 2026-05-12: removed expired KBDcraft Easter sale, added Akko summer 10% off, updated KBDFans shipping threshold
Weekly deals update — 2026-05-12: no changes needed, all deals verified current
```

Then push:
```bash
git push origin main
```

If no deals changed after reviewing all vendors but the vendor cache was
updated, commit just the cache file with the message
`Weekly deals check — YYYY-MM-DD: no deal changes; vendor cache refreshed`.
If nothing at all changed, exit without committing.
