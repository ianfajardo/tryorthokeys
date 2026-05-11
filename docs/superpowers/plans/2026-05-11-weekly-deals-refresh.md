# Weekly Deals Refresh Routine — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a weekly scheduled Claude agent that browses keyboard vendor sites, keeps `pages/deals.js` accurate and fresh, and auto-commits/pushes changes to `main` — with affiliate referral links always preserved.

**Architecture:** A Markdown prompt file (`scripts/deals-agent-prompt.md`) contains the full agent instructions. A cron-scheduled task runs that prompt every Monday at 9am ET. The agent reads the current deals, browses each vendor site, applies edits to `pages/deals.js`, `components/specialdeals.js`, and `seo/affiliates.json` (add-only), then commits and pushes.

**Tech Stack:** Claude Code scheduled tasks (CronCreate), Next.js/JavaScript file edits, Git, WebFetch for browsing vendor sites.

---

## Task 1: Write the Agent Prompt File

**Files:**
- Create: `scripts/deals-agent-prompt.md`

This is the core deliverable. The scheduled agent reads this file on every run. It must be complete and unambiguous — the agent has no memory of previous runs.

- [ ] **Step 1: Create `scripts/deals-agent-prompt.md` with the following exact content**

```markdown
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

## Step 2 — Browse Each Vendor Site

Visit the store page for each vendor currently in the deals array. Use WebFetch or
web browsing to load the page and find active promotions.

| Vendor     | URL to visit                          | Current affiliate ID          |
|------------|---------------------------------------|-------------------------------|
| KBDcraft   | https://kbdcraft.store                | kbdcraft-store                |
| KPRepublic | https://kprepublic.com                | kprepublic-store-try-ortho-keys |
| Drop       | https://drop.com                      | (see affiliates.json for drop entries) |
| Work Louder| https://worklou.com/store             | work-louder-xyz-work-board-r2 |
| Akko       | https://en.akkogear.com               | akko-deals-page               |
| FKcaps     | https://fkcaps.com                    | fkcaps-custom-keycaps         |
| KBDFans    | https://kbdfans.com                   | kbdfans-weekin-y-40-diy-kit   |

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
Leave the deal unchanged. Add the vendor name to the commit message with the note
`[site unreachable — skipped]`.

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

---

## Step 5 — Affiliate Link Rules (CRITICAL — READ CAREFULLY)

### Never hardcode a URL in `pages/deals.js`
Every `link` field must be `getUrl('some-id')`. If you write a raw URL like
`https://kbdcraft.store/products/adam?ref=TRYORTHOKEYS` directly in the deals array,
that is a bug. Always look up or create an affiliate ID and use `getUrl()`.

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

After updating the deals array, review the picks. If a referenced slug no longer
exists, replace it with the slug of the best current deal in that category.
Update `label` and `reason` to match the deal you picked.

---

## Step 7 — Update `components/specialdeals.js`

This file has two featured deal cards. If the deals they feature have changed
(different savings, description, or status), update the card content to match.

All `href` or `Link` values must still use `getUrl('affiliate-id')` — never raw URLs.

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
git add pages/deals.js components/specialdeals.js seo/affiliates.json
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

If nothing changed after reviewing all vendors, exit without committing.
```

- [ ] **Step 2: Verify the file was written correctly**

Run:
```bash
node -e "const fs=require('fs'); const c=fs.readFileSync('scripts/deals-agent-prompt.md','utf8'); console.log('Lines:', c.split('\n').length); console.log('Has Step 1:', c.includes('## Step 1')); console.log('Has affiliate rules:', c.includes('Never hardcode')); console.log('Has checklist:', c.includes('Pre-Commit Checklist'));"
```

Expected output:
```
Lines: [150 or more]
Has Step 1: true
Has affiliate rules: true
Has checklist: true
```

- [ ] **Step 3: Commit the prompt file**

```bash
git add scripts/deals-agent-prompt.md
git commit -m "feat: add weekly deals refresh agent prompt"
```

---

## Task 2: Register the Weekly Scheduled Task

**Files:**
- No files created — this registers a scheduled task in Claude Code

The scheduled task runs the agent prompt every Monday at 9am Eastern time (13:00 UTC during EDT / 14:00 UTC during EST — use 13:00 UTC since the site is active in summer).

- [ ] **Step 1: Load the schedule skill and invoke it**

Use the `schedule` skill (Skill tool) to create the scheduled task. When invoking, provide these parameters:

- **Name:** `weekly-deals-refresh`
- **Description:** Weekly agent that refreshes the /deals page on tryorthokeys.com — verifies vendor promotions, updates stale deals, removes expired ones, adds new ones, preserves affiliate links, and pushes to main.
- **Schedule:** Every Monday at 13:00 UTC (9am US Eastern EDT)
- **Prompt:** The full contents of `scripts/deals-agent-prompt.md` (read the file first and paste its content as the task prompt)

- [ ] **Step 2: Confirm the task appears in the schedule list**

Use `list_scheduled_tasks` (or the equivalent schedule skill command) to verify the task was registered with:
- Correct name: `weekly-deals-refresh`
- Correct cron: Mondays at 13:00 UTC
- Status: active

- [ ] **Step 3: Do a manual dry-run to verify the agent can execute**

Trigger the task once manually (using `run_scheduled_task` or the schedule skill's on-demand run). The agent should:
1. Read `pages/deals.js` and `seo/affiliates.json`
2. Browse at least one vendor site
3. Either make changes and commit, or exit cleanly with "no changes needed"

Verify the run appears as a session in the Claude Code desktop app.

- [ ] **Step 4: Commit the confirmation note**

```bash
git add -A
git commit -m "feat: register weekly deals refresh scheduled task (Mondays 13:00 UTC)"
```

---

## Self-Review

**Spec coverage check:**

| Spec requirement | Covered by |
|-----------------|-----------|
| Run on a schedule (weekly) | Task 2 |
| Auto-apply changes | Task 1, Step 10 (git push) |
| Browse vendor sites | Task 1, Step 2 |
| Update existing deals | Task 1, Step 3 |
| Remove expired deals | Task 1, Step 3 |
| Discover new deals | Task 1, Step 4 |
| Max 15 deals | Task 1, Step 4 + Step 9 checklist |
| Preserve affiliate links (never hardcode) | Task 1, Step 5 |
| Never overwrite affiliates.json urls | Task 1, Step 5 |
| New vendor ref param pattern | Task 1, Step 5 table |
| Update quickDealPicks | Task 1, Step 6 |
| Update specialdeals.js | Task 1, Step 7 |
| Update dateModified | Task 1, Step 8 |
| Commit message format | Task 1, Step 10 |
| No commit if nothing changed | Task 1, Step 10 |
| Show up in Claude Code desktop app | Task 2, Step 3 |

All spec requirements covered. No placeholders. No TBDs.
