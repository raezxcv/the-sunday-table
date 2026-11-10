# THE SUNDAY TABLE — Creative Direction & Studio Blueprint
**Project 19 — The 20-Day Digital Design Challenge**  
*Food, Memory, and the People We Gather Around*

---

## 1. AI Skill Orchestration Plan

To build a portfolio-grade independent publication without generic template habits, we activate a focused set of four installed skills:

| Installed Skill Name | Intended Responsibility | Phase Used | Expected Contribution |
| :--- | :--- | :--- | :--- |
| `impeccable` | Creative direction, anti-AI-slop craft floor, editorial hierarchy, typographic measure, surface theming, and mechanical verification. | Phase 1 (Direction) & Phase 4 (Polish/Audit) | Enforces print-inspired cookbook layout discipline, bans generic card-grid scaffolds and eyebrow clichés, themes browser chrome (scrollbars, selection, focus), and verifies visual rhythm. |
| `emil-design-eng` | Micro-interaction engineering, custom easing curves, tactile press feedback, and restraint in animation frequency. | Phase 3 (Components & Interactions) | Guides tactile `scale(0.97)` button feedback, custom `cubic-bezier(0.23, 1, 0.32, 1)` ease-out transitions, `clip-path` image reveals, and zero-latency keyboard filtering. |
| `accessibility` | WCAG 2.2 AA compliance, semantic HTML structure, keyboard operability, focus management, and reduced-motion support. | Phase 3 (Implementation) & Phase 4 (QA) | Ensures native `<input type="checkbox">` semantics for ingredient checklists, `aria-live` announcements for recipe scaling & favorites, ≥4.5:1 contrast on warm paper tones, and 44×44px kitchen-friendly touch targets. |
| `browser-testing-with-devtools` | Real browser inspection across mobile, tablet, laptop, and desktop viewports, console cleanliness, and DOM/accessibility verification. | Phase 4 (Quality Assurance) | Verifies rendered layouts at `375px`, `390px`, `768px`, `1024px`, and `1440px`, confirms all 15 generated assets load without broken paths, and validates interactive flows. |

---

## 2. Concept, Audience & Brand Personality

### Project Concept
**The Sunday Table** is an independent quarterly print-and-digital food and culture publication dedicated to the slow rituals of home cooking. It is neither a commercial recipe aggregator cluttered with life-story SEO filler nor a restaurant hype site. Instead, it treats a recipe as an artifact of lived history—something scribbled on the back of an envelope, stained with olive oil, adjusted for the season's harvest, and served in a chipped ceramic bowl at a table where someone always pulls up an extra chair.

- **Central Tagline:** *"Good food is better when there's room for one more."*
- **Issue Designation:** *Issue No. 14 — The Autumn & Late Harvest Larder*

### Target Audience
Thoughtful home cooks, readers of culinary literature (*Gastronomica*, *The Art of Eating*, *Chez Panisse*, Patience Gray's *Honey from a Weed*, Nigel Slater's *Tender*), ceramicists, market-goers, and hosts who cook to gather people they love.

### Brand Personality & Emotional Objective
- **Personality:** Warm, literary, unhurried, tactile, generous, observant, unpretentious.
- **Emotional Objective:** The visitor should feel as though they have stepped into a sunlit, slightly worn home kitchen at 4:00 PM on a Sunday—smelling roasted garlic and rosemary, hearing bread crackle on a cooling rack, and reading a treasured cookbook left open on a scrubbed oak table.

### Visual References & Design Principles
1. **Open-Spine Cookbook Spreads:** Recipe detail pages use an asymmetric two-column binding—left column anchored like a larder margin (yield scaler, checkable ingredients, cookware notes, stained index card callout), right column flowing like literary prose and numbered method steps.
2. **Stained Index Cards & Marginalia:** Handwritten-style recipe annotations ("Nonna always adds the parmesan rind here", "If late October, use Honeynut squash instead") sit on deckle-edged or ruled paper notes pinned beside structured typography.
3. **Tabular Larder Precision:** Cooking times, fermentation windows, oven temperatures, and scaled measurements use crisp old-style/tabular numerals and hairline ledger rules inspired by vintage European household almanacs.
4. **Tactile Materiality:** Linen weave borders, warm unbleached paper grounds (`#FBF7EE` and `#F3ECE0`), deep tomato-paste red ink accents (`#B83A24`), pressed olive leaf greens (`#4A5838`), and cast-iron charcoal typography (`#231F1D`).

---

## 3. Color Palette (with HEX Values)

| Token Name | Swatch / Role | HEX | Usage & Contrast Notes |
| :--- | :--- | :--- | :--- |
| `--bg-butter` | **Butter Cream** (Primary Ground) | `#FBF7EE` | Main page canvas; warm unbleached cotton rag paper feel. |
| `--bg-parchment` | **Aged Parchment** (Secondary Surface) | `#F2E9D8` | Recipe index cards, larder sidebars, open-book left pages, callout slips. |
| `--bg-linen` | **Warm Linen** (Elevated / Recessed) | `#E7DBC6` | Table rules, active filter pills, subtle dividers, footer ground. |
| `--ink-charcoal` | **Cast-Iron Charcoal** (Primary Text) | `#231F1D` | Primary display and body copy (`14.6:1` contrast against `#FBF7EE`). |
| `--ink-walnut` | **Warm Walnut Brown** (Secondary Text) | `#5A4231` | Secondary prose, bylines, captions, culinary notes (`7.8:1` contrast against `#FBF7EE`). |
| `--ink-muted` | **Toasted Peppercorn** (Muted Metadata) | `#755B48` | Timestamps, table headers, measurement units (`4.9:1` contrast against `#FBF7EE`). |
| `--accent-tomato` | **Heirloom Tomato Red** (Primary Accent) | `#B83A24` | Editorial highlights, active states, favorite heart, wax-stamp badges (`5.6:1` on `#FBF7EE`). |
| `--accent-tomato-deep` | **Sun-Dried Tomato** (Hover / Press) | `#8F2917` | Interactive button hover and focus rings. |
| `--accent-olive` | **Pressed Olive Green** (Botanical / Seasonal) | `#4A5838` | Dietary badges, seasonal produce tags, checked-off ingredient checks (`6.9:1` on `#FBF7EE`). |
| `--accent-ochre` | **Saffron Crust** (Warm Highlight) | `#C88A2E` | Baker's notes, cooking timer highlights, margin stars. |
| `--border-rule` | **Linen Thread** (Hairline Dividers) | `#D8C8B0` | `1px solid` editorial column dividers, ledger rows, and book-spine rules. |

---

## 4. Typography Pairings & Hierarchy

We pair an expressive literary serif with a warm humanist sans-serif and a subtle archival script for handwritten kitchen margin notes:

1. **Display & Recipe Titles — `EB Garamond`:**  
   Classic Aldine book-press serif with expressive italics and timeless literary cookbook authority (in the lineage of *The Art of Eating* and *Chez Panisse* menus). Used for essay headlines, recipe titles, pull quotes, and large step numbers.
   - Hero Headline: `clamp(2.6rem, 5vw, 4.4rem)`, line-height `1.06`, tracking `-0.025em`.
   - Section / Story Title: `clamp(1.85rem, 3.2vw, 2.85rem)`, line-height `1.12`, tracking `-0.02em`.
2. **Body Prose & Culinary Instructions — `Literata`:**  
   Warm, deeply readable contemporary book serif designed for extended editorial reading at `62–72ch` measure.
   - Editorial Body & Recipe Steps: `1.125rem` (`18px`), line-height `1.72`, color `#231F1D`.
3. **UI, Larder Ledger, & Navigation — `Karla`:**  
   Friendly, unpretentious grotesque sans-serif with warm human character. Used for navigation, ingredient quantities (`font-variant-numeric: tabular-nums`), prep/cook time ledgers, and search controls.
4. **Handwritten Marginalia — `Homemade Apple`:**  
   Used sparingly and intentionally ONLY on recipe index-card margin notes (e.g., *"Use the heavy Dutch oven—don't rush the onions"*), never for primary UI or headings.

---

## 5. Grid, Spacing & Layout Logic

- **Max Container Width:** `1360px` with `clamp(1.25rem, 4vw, 3.5rem)` horizontal padding.
- **12-Column Editorial Grid:** `1px solid #D8C8B0` visible hairline rules separating asymmetrical columns on desktop (`lg:grid-cols-12`), collapsing cleanly into stacked book chapters on tablet and mobile.
- **Page-Specific Layout Architectures:**
  - **Page 1 (`/` — Home: Gather Around):** Broadsheet magazine masthead → Asymmetric 7/5 Hero with candid Sunday dinner table & publication manifesto → Featured Sunday Centerpiece spread ("Braised Short Ribs & Polenta on the Wooden Board") → Interactive Seasonal Larder Almanac (click through 4 autumn/late-harvest ingredients with tasting notes & linked recipes) → 3-column unequal editorial essay showcase → "Pull Up a Chair" table gathering footer.
  - **Page 2 (`/recipes` — The Recipe Book):** Styled like a physical cookbook's *Classified Index & Larder*. Features a tactile search & category ledger bar, a "My Recipe Box" saved-favorites drawer/filter toggle, a featured "Cookbook Open Spread" highlight, and an alternating editorial recipe catalog (combining horizontal ledger rows, two-column feature spreads, and index-card entries rather than an identical 3×4 SaaS card grid).
  - **Page 3 (`/recipes/:slug` — Recipe Detail: At the Table):** Designed as an open double-page cookbook spread with a sticky left-hand **Larder & Yield Column** (serving scaler `0.5× / 1× / 1.5× / 2×`, interactive checkable ingredient list with progress counter and persistent `localStorage`, cookware checklist) and a right-hand **Narrative & Method Column** (origin essay, step-by-step instructions with optional **Kitchen Cook-Along Mode** that enlarges type for counter reading, handwritten margin note card, serving ritual, and Previous/Next recipe turn-page footer).
  - **Page 4 (`/stories` — Stories & About):** Magazine feature reader with an interactive story selector/reader (5 full-length original essays on family recipes, Sunday rituals, sourdough starters, market mornings, and cooking for friends), the publication's editorial manifesto & masthead, and an interactive **"Leave a Recipe at Our Table"** submission form that validates and saves reader food memories locally.

---

## 6. Original Image Art Direction (15 Bespoke Photographs)

All 15 photographs are generated specifically for **The Sunday Table** in `public/images/sunday-table/` with a cohesive photographic language: **35mm and 50mm Kodak Portra 400 editorial food photography, natural side window light, warm shadow falloff, linen napkins, stoneware ceramics, scrubbed oak and walnut wood, and candid lived-in imperfection** (crumbs on the board, olive oil sheen, steam rising, flour dust).

| # | Filename | Subject | Environment | Composition & Angle | Lens & Lighting | Aspect Ratio & Placement |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `sunday-dinner-table.png` | A long Sunday family dinner table mid-meal with shared platters, wine glasses, crusty bread, and warm hands passing bowls | Sunlit dining room with plaster walls and scrubbed oak table | Wide three-quarter editorial table view (`35°` angle) | 35mm f/2.8, late-afternoon golden window light from left | `16:10` — Home Hero & Invitation |
| 2 | `homemade-pasta-plate.png` | Handmade pappardelle pasta with slow-simmered tomato & porcini ragù on a speckled stoneware plate | Worn wooden tabletop with linen napkin and vintage fork | Close-up `45°` diner's perspective | 50mm macro f/2.4, soft directional daylight, rich sauce sheen | `4:3` — Recipe: Handmade Tagliatelle / Pappardelle |
| 3 | `freshly-baked-bread.png` | Country sourdough boule cracked open with blistered mahogany crust and open crumb beside a bread knife | Baker's wooden board with scattered flour and cultured butter | Low `30°` eye-level tabletop still life | 50mm f/2.8, raking morning side light emphasizing crust texture | `4:3` — Recipe: Country Levain & Baking Category |
| 4 | `seasonal-soup-bowl.png` | Roasted honeynut squash and white bean soup topped with crispy sage leaves and olive oil swirl | Deep handmade ceramic bowl on dark slate and rumpled linen | Overhead `75°` angle with spoon resting beside bowl | 50mm f/3.2, diffused overcast window light | `4:3` — Recipe: Autumn Squash & Borlotti Soup |
| 5 | `family-roasted-meal.png` | Whole herb-roasted chicken with caramelized shallots, figs, and pan juices in a cast-iron skillet | Warm home dining table surrounded by serving spoons and greens | Three-quarter `45°` heroic centerpiece framing | 35mm f/2.8, warm amber afternoon window light | `16:10` — Home Featured Centerpiece & Main Dish |
| 6 | `fresh-ingredients-table.png` | Heirloom tomatoes, garlic braids, fennel bulbs, eggs, and flaky sea salt arranged on a kitchen table | Sun-dappled wooden prep table before cooking begins | Flat-lay / high `80°` editorial ingredient portrait | 50mm f/4, crisp natural morning light with long soft shadows | `16:10` — Home Seasonal Larder Section |
| 7 | `home-kitchen-prep.png` | A home cook in a linen apron chopping fresh herbs and shallots at a wooden butcher block | Lived-in home kitchen with copper pots and open shelves | Candid medium shot from across the counter | 35mm f/2.0, natural side window light illuminating flying herbs | `4:3` — Story: "The 4 PM Kitchen Quiet" |
| 8 | `handwritten-recipe-card.png` | An olive-oil-stained handwritten cursive recipe card resting beside eggs, flour, and a brass measuring spoon | Warm wooden counter with vintage kitchen ephemera | Intimate `60°` tabletop close-up | 50mm macro f/2.8, warm afternoon sidelight | `4:3` — Story: "Marginalia in Blue Ink" & About |
| 9 | `olive-oil-and-herbs.png` | Golden-green extra-virgin olive oil being poured into a small ceramic dish with rosemary, thyme, and cracked pepper | Sunlit terracotta and wood surface | Tight macro close-up (`45°`) capturing liquid viscosity | 85mm macro f/2.8, backlit golden sunlight through the oil | `4:3` — Larder Detail & Focaccia / Dipping Recipe |
| 10 | `simple-breakfast-scene.png` | Dutch baby pancake / skillet ricotta pancakes with roasted plums, honey drizzle, and steaming morning coffee | Quiet Sunday morning kitchen table with crumpled linen | Inviting `45°` breakfast table perspective | 35mm f/2.4, bright airy morning window light | `4:3` — Recipe: Brown-Butter Ricotta & Plum Skillet Pancake |
| 11 | `dessert-being-served.png` | A slice of rusticburnt-honey almond & fig tart being lifted onto a vintage ceramic dessert plate with crème fraîche | Candlelit / twilight Sunday table after dinner | Intimate `40°` close-up on the tart slice and server | 50mm f/2.2, warm late-evening tungsten + twilight glow | `4:3` — Recipe: Burnt-Honey Fig & Frangipane Tart |
| 12 | `rustic-kitchen-interior.png` | Sunlit rustic kitchen interior with open wooden shelving, ceramic crocks, hanging dried herbs, and a worn farm table | Quiet European-inspired home kitchen | Wide architectural editorial shot (`0°` straight-on) | 35mm f/4, shafts of morning sunlight across plaster and wood | `16:10` — Stories & About Masthead Hero |
| 13 | `shared-meal-friends.png` | Friends gathered around a glowing evening table clinking simple tumblers of red wine over bowls of braised greens and beans | Warm indoor/courtyard dinner table with linen runner | Candid `35°` documentary framing (focus on hands, table, warmth) | 35mm f/2.0, warm tungsten and candlelight | `16:10` — Story: "Cooking for Eight in a Galley Kitchen" |
| 14 | `market-seasonal-produce.png` | Woven market basket overflowing with tardivo radicchio, chanterelles, pomegranates, leeks, and crusty loaves | Stone step / wooden bench after the Saturday farmers' market | `45°` editorial still life | 50mm f/2.8, crisp autumn morning light | `4:3` — Recipe: Charred Radicchio, Farro & Hazelnut Salad |
| 15 | `hands-preparing-dough.png` | Flour-dusted hands gently folding and shaping supple sourdough / brioche dough on a worn wooden pastry board | Baker's workbench in a quiet home kitchen | Tight `45°` documentary close-up on hands and dough texture | 50mm f/2.2, dramatic directional side window light | `4:3` — Recipe: Rosemary & Sea-Salt Hearth Focaccia |

---

## 7. Navigation & Motion Principles

### Navigation Concept — *The Cookbook Ribbon & Masthead*
- Styled like the top running head of a bound periodical combined with a stitched bookmark ribbon:
  - Top bar displays the issue number (*Issue No. 14 · Late Harvest*), the publication masthead (**The Sunday Table**), and primary destinations (`Gather Around`, `The Recipe Book`, `At the Table`, `Stories & Masthead`), plus a live **"My Recipe Box (N)"** counter pill that opens or filters the user's saved recipes.
  - On Recipe Detail pages, a secondary bottom/side **Turn-Page Ribbon** allows effortless flipping to the previous or next recipe in the book.

### Motion Principles
- **Purposeful Restraint:** In accordance with `emil-design-eng`, high-frequency actions (typing in recipe search, toggling category filters, checking off ingredients, scaling servings) respond **instantly** (`120–180ms` `cubic-bezier(0.23, 1, 0.32, 1)`) without sluggish delays.
- **Tactile Press Feedback:** Every interactive button, scaler chip, and recipe bookmark responds with `:active { transform: scale(0.97) }`.
- **Editorial Page & Image Reveals:** Gentle `clip-path` and opacity transitions on initial route entry, completely disabled when `prefers-reduced-motion: reduce` is active.
