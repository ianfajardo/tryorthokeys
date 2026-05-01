# Traffic Diagnostic — tryorthokeys.com

**Date:** 2026-04-30
**Source:** Ahrefs API (~1,545 units total)

## TL;DR

Organic traffic dropped **~83% from peak** (684 → 113 monthly visits). The decline started **Aug 2025** and accelerated **Q4 2025 → Q1 2026**.

**The cause is NOT lost rankings.** Most rankings are stable or improved between Jul 2025 and Apr 2026. The cause is a combination of:
1. **AI Overviews / zero-click search** absorbing the answers the site used to capture
2. **Niche contraction** — ortholinear keyboard search volume is small and shrinking
3. **High-volume keywords aren't rankable** on the existing pages — the site is hyper-niche but the keyword file targets broader mechanical keyboard terms with no matching pages
4. The one high-volume keyword the site DID rank for ("best linear switches", 2,100 vol) dropped from #26 → #36 in this window

## Traffic by month (US organic)

| Month | Org Traffic |
|---|---:|
| 2024-04 | 684 |
| 2024-07 | 289 |
| 2024-12 | 512 |
| 2025-04 | 639 |
| 2025-07 | 655 ← last "normal" month |
| 2025-08 | 538 |
| 2025-09 | 456 |
| 2025-10 | 327 |
| 2025-11 | 266 |
| 2025-12 | 216 |
| 2026-01 | 184 |
| 2026-02 | 189 |
| 2026-03 | 144 |
| 2026-04 | 113 |

The decline timing matches Google's **September 2025 Helpful Content / Core Update** and the rollout of expanded AI Overviews to long-tail informational queries.

## Top organic keywords — Jul 2025 vs Apr 2026

Sorted by Jul 2025 traffic (the "before" snapshot).

| Keyword | URL | Vol | Pos Jul 2025 | Pos Apr 2026 | Traffic Jul | Traffic Apr |
|---|---|---:|---:|---:|---:|---:|
| ortholinear | / | 350 | 10 | 10 | 10 | 11 |
| ortholinear keycaps | /keycaps | 100 | 5 | **2** | 8 | 17 |
| niu40 | /niu40 | 10 | 1 | 1 | 8 | 8 |
| id75 keyboard | /id75 | 50 | 4 | 4 | 6 | 6 |
| ortholinear keyboards | /keyboards | 100 | 9 | **5** | 5 | 12 |
| ortho keycaps | /keycaps | 40 | 3 | **2** | 5 | 6 |
| preonic keyboard | /olkb | 150 | 9 | **6** | 4 | 12 |
| ortholinear mechanical keyboard | /keyboards | 40 | 7 | **3** | 2 | 4 |
| best linear switches | /posts/best-linear-switches-... | 2,100 | 26 | **36** ↓ | 2 | 0 |
| work louder | /worklouder | 600 | 21 | **14** | 2 | 6 |
| ortho keyboards | /keyboards | 30 | 8 | **1** | 1 | 10 |

**Key insight:** rankings on the niche ortholinear keywords actually IMPROVED. But the niche itself is too small to support traffic at the scale the site had a year ago.

The one high-volume keyword that mattered (`best linear switches` at 2,100 vol) lost 10 positions and now contributes zero traffic.

## Protected pages (high-ranking — handle carefully)

These pages should NOT be rewritten or have their slugs/titles changed. Enhancements must be additive only:

| URL | Top Keyword | Current Position | Why protected |
|---|---|---:|---|
| `/keycaps` | ortholinear keycaps | 2 | High position, multiple variants ranking |
| `/keyboards` | ortholinear keyboards / ortho keyboards | 5 / **1** | Newly ranks #1 for "ortho keyboards" |
| `/niu40` | niu40 / niu mini | 1 / 1 | #1 ranking, stable |
| `/id75` | id75 keyboard | 4 | Stable top 5 |
| `/olkb` | preonic keyboard | 6 | Improved position |
| `/worklouder` | work louder | 14 | Improving |
| `/posts/best-linear-switches-for-your-mechanical-keyboard` | best linear switches | 36 | **Recovery target** — was 26, refresh content to push back to top 20 |

## Strategic implications

1. **The site's hyper-ortho focus is a ceiling, not a floor.** The biggest ranking pages are #1–#5 in micro-niche keywords (volumes 30–100). Even ranking everything #1 only adds back a few hundred visits/month.

2. **The keyword file (`seo/keywords.md`) targets broader mechanical keyboard terms** (ergonomic keyboard, best mechanical keyboard, keychron, etc.) but there are NO pages targeting those keywords. This is the growth path — but it requires either rebranding or carefully expanding scope without diluting the ortho authority.

3. **AI Overviews specifically hurt informational long-tail content.** Posts like "best linear switches", "how to remove keyboard switches", "creamy keyboard switches" used to capture clicks; now Google answers in-page.

4. **The Helpful Content Update favors:**
   - Specific products (works for ortho-only)
   - Strong author bylines / E-E-A-T signals
   - Genuine first-hand experience markers
   - Clear comparison tables and FAQ blocks (citation-friendly)

## Recommended response

### Defensive (preserve what's working)

- Refresh `/posts/best-linear-switches-for-your-mechanical-keyboard` to fight back from #36. Add a comparison table, FAQ, fresh date, schema. (This is a recovery target — touch carefully, only enhance.)
- Add JSON-LD `Product` and `ItemList` schema to `/keyboards`, `/keycaps`, `/olkb`, `/niu40`, `/id75` to improve AI citation. Additive, no copy changes.
- Add FAQ blocks to the same pages.

### Offensive (capture new traffic)

The keyword file lists broader-volume targets. Build pages for the ones with low KD:
- `/ortholinear-split-keyboard` — KD 2, 200 vol (lift "ortholinear split keyboard" from #18 to top 5)
- `/ortholinear-keyboard-kit` — KD low, expand on /keyboards
- `/silent-mechanical-keyboard` — KD 0, 2,100 vol (might fit if scope expands)
- `/quiet-mechanical-keyboard` — KD 0, 2,500 vol (same scope question)
- `/best-budget-mechanical-keyboard` — KD 5, 1,900 vol
- `/creamy-keyboard-switches` — KD 0, 900 vol (informational + commercial)
- `/magnetic-keyboard-switches` — KD 2, 400 vol
- `/types-of-keyboard-switches` — KD 6, 700 vol
- `/how-to-clean-keyboard-keycaps` — KD 0, 300 vol

### Don't do

- Don't touch existing slugs.
- Don't rewrite top-ranking page content.
- Don't merge/redirect pages currently ranking.
- Don't broaden the scope so much that the ortho-niche authority dilutes. Keep new pages framed for the ortho-curious or ortho-adjacent reader where possible.

## API spend

| Call | Units |
|---|---:|
| metrics-history (24 months) | 525 |
| organic-keywords (top 30, before/after) | 1,020 |
| **Total** | **1,545 / 100,000** |
