# Weekly Deals Refresh Routine — Design Spec

**Date:** 2026-05-07  
**Status:** Approved

## Overview

A scheduled Claude Code agent runs every Monday at 9am. It browses each vendor site on the `/deals` page, verifies current promotions, updates stale deals, removes expired ones, and discovers new deals — then commits and pushes to `main` with no human intervention required.

## Files Modified by the Agent

| File | What changes |
|------|-------------|
| `pages/deals.js` | `deals` array and `quickDealPicks` array |
| `components/specialdeals.js` | Featured deal card content (still via `getUrl()`) |
| `seo/affiliates.json` | New entries only — existing `url` fields are never overwritten |

All other files are read-only for this agent.

## Agent Workflow

1. **Read current state** — load `pages/deals.js` (existing deals + quick picks) and `seo/affiliates.json` (all affiliate IDs and their URLs with ref params)
2. **Browse each vendor** — visit the store page for each current deal (KBDcraft, KPRepublic, Drop, Work Louder, Akko, FKcaps, KBDFans) and check what promotions are currently live
3. **Update existing deals** — for each deal, update `savings`, `description`, `code`, and `status` to reflect what is actually on the site today; replace expired seasonal deals with whatever is currently running
4. **Discover new deals** — while on each vendor site, look for other active promotions worth featuring; only add deals with a concrete saving (%, $, free shipping) — skip vague "new arrivals" or generic store links
5. **Preserve affiliate links** — always reference URLs through `getUrl('affiliate-id')`; never hardcode a URL with a ref param directly in `deals.js`
6. **Update `quickDealPicks`** — review the 3 featured picks and update them to reference the best current deals
7. **Update `specialdeals.js`** — update the two featured cards if the deals they reference have changed
8. **Update `dateModified`** — set to today's date in the structured data block inside `deals.js`
9. **Commit and push** — single commit to `main` with message: `Weekly deals update — YYYY-MM-DD: [brief summary of changes]`

## Affiliate Link Rules

- **Never rewrite an existing `url` in `affiliates.json`** — these contain ref params and are the source of truth
- **Always use `getUrl('id')` in `deals.js`** — every `link` field in the deals array must call `getUrl()`, never a raw URL
- **New affiliate entry for existing vendor** — use the same ref param pattern already present for that vendor (e.g. KBDcraft always appends `?ref=TRYORTHOKEYS`)
- **New affiliate entry for a brand-new vendor** — add the entry without a ref param and flag it in the commit message as `[needs affiliate ref]` so the owner can add the ref param manually
- **`specialdeals.js`** — also uses `getUrl()` exclusively; never paste a raw URL

## Quality Controls

- **Max 15 deals** — if the page already has 15 deals, replace a weaker one rather than adding more
- **Concrete savings required** — only add deals with a specific value (%, $, free shipping code); no vague promotions
- **Conservative on removal** — if a site is unreachable or the deal status is unclear, leave the deal as-is and note it in the commit message
- **Expired deals are removed** — not just marked inactive; a dead deal is worse than a shorter list
- **No commit if nothing changed** — if all deals are already accurate after checking, exit cleanly without a commit

## Schedule

- **Frequency:** Weekly
- **Day/Time:** Every Monday at 9am
- **Trigger:** Scheduled Claude Code agent (via `schedule` skill / CronCreate)
- **Prompt file:** `scripts/deals-agent-prompt.md`

## Deliverables

1. `scripts/deals-agent-prompt.md` — the instruction file the agent reads on each run
2. A scheduled task (cron) that runs the agent weekly with that prompt
