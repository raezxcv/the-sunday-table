# Project 19 — The Sunday Table
**Food, Memory, and the People We Gather Around**  
*“Good food is better when there’s room for one more.”*

An independent food and culture publication built for **The 20-Day Digital Design Challenge**. Designed as a warm, tactile hybrid of an heirloom linen-bound cookbook left open on a wooden kitchen table and an independent culinary quarterly (*Gastronomica*, *The Art of Eating*, Patience Gray’s *Honey from a Weed*).

---

## Architecture & Four-Page Experience

1. **Home — Gather Around (`/`)**
   - Broadsheet periodical masthead (*Issue No. 14 · The Autumn & Late Harvest Larder*) with live **My Wooden Recipe Box** slide-over drawer.
   - Asymmetric editorial food hero with publication manifesto and editor’s kitchen letter.
   - **The Sunday Centerpiece Spread**: Open cookbook showcase for *Cast-Iron Roast Chicken with Caramelized Shallots & Late Figs*, complete with a stained handwritten index card note and larder preview.
   - **The Late-Harvest Larder Almanac**: Interactive 4-staple field guide (*Radicchio Tardivo di Treviso*, *Olio Nuovo*, *Black Mission Figs*, *Stone-Ground Heritage Wheat & Dark Rye*) with tasting notes, market stall selection tips, and linked recipes.
   - **Selected Essays from the Table** & **Pull Up an Extra Chair** gathering invitation.

2. **Recipes — The Recipe Book (`/recipes`)**
   - **12 original, deeply tested recipes** across 6 chapters (*Breakfast*, *Main Dishes*, *Comfort Food*, *Baking*, *Desserts*, *Seasonal Dishes*).
   - Live instant search across dish titles, ingredients, chapters, and dietary tags.
   - Chapter tabs, dietary quick-filters (*Vegetarian*, *Vegan*, *Gluten-Free*, *Dairy-Free*), and a **Saved in Recipe Box** toggle.
   - Switchable **Cookbook Spreads View** and **Classified Kitchen Ledger View**.

3. **Recipe Detail — At the Table (`/recipes/:slug`)**
   - Open double-page cookbook spread with a sticky left-hand **Larder & Measures** column and right-hand **Origin & Step-by-Step Method** column.
   - **Interactive Batch Scaler (`½×`, `1×`, `1½×`, `2×`)** with culinary fraction formatting (`1/2`, `3/4`, `1 1/2`) and metric rounding.
   - **Persistent Checkable Ingredients**: Check off ingredients as you prep (`localStorage` persisted per recipe).
   - **Kitchen Counter Mode**: Enlarges body and step typography for reading from across the counter with flour-dusted hands, plus step-completion markers.
   - **Turn-Page Ribbon**: Navigate directly to the previous or next recipe in the book, or explore companion dishes.

4. **Stories & About (`/stories`)**
   - Publication philosophy and test-kitchen masthead.
   - **Interactive 5-Essay Magazine Reader** covering family recipe marginalia, the 4 P.M. Sunday prep ritual, cooking for eight in a galley kitchen, bitter winter greens, and sourdough loaves that travel in linen towels.
   - **Leave a Family Recipe Card at Our Table**: Validated interactive submission form that pins reader dish memories and unwritten margin tips to the persistent **Reader Index Cards** archive.

---

## Getting Started

```bash
npm install
npm run dev
```

### Verification Commands

```bash
npm run lint    # TypeScript strict typecheck (tsc --noEmit)
npm run build   # Production bundle build (tsc -b && vite build)
```

