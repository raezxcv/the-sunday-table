# Design System — The Sunday Table

## Visual Identity & Aesthetic World

**The Sunday Table** is an independent food and culture publication ("Food, Memory, and the People We Gather Around") modeled after an heirloom linen-bound cookbook left open on a scrubbed wooden kitchen table and an independent print culinary journal (*Gastronomica*, *The Art of Eating*, Patience Gray's *Honey from a Weed*).

## Color Tokens

- `--bg-butter: #FBF7EE` — Primary unbleached cotton rag canvas.
- `--bg-parchment: #F2E9D8` — Secondary warm parchment for recipe index cards, larder sidebars, and open-spine spreads.
- `--bg-linen: #E7DBC6` — Recessed surface for active filter chips and table rules.
- `--ink-charcoal: #231F1D` — Primary cast-iron charcoal text (`14.6:1` contrast on `#FBF7EE`).
- `--ink-walnut: #5A4231` — Secondary walnut brown body and metadata text (`7.8:1` contrast on `#FBF7EE`).
- `--ink-muted: #6E5441` — Muted peppercorn notes (`5.4:1` contrast on `#FBF7EE`).
- `--accent-tomato: #B83A24` — Heirloom tomato paste red for bookmarks, active states, and editorial pull-quote drops (`5.6:1` on `#FBF7EE`).
- `--accent-olive: #4A5838` — Pressed olive leaf green for dietary badges, checked-off ingredients, and timing cues (`6.9:1` on `#FBF7EE`).
- `--border-rule: #D8C8B0` — Hairline (`1px solid`) linen-thread column and ledger dividers.
- `--border-strong: #B59F82` — Stronger card and book-frame border.

## Typography System

- **Display (`--font-display`)**: `EB Garamond`, classic Aldine serif with expressive italics for headlines, recipe titles, and pull quotes (`tracking: -0.025em`, `line-height: 1.06–1.12`).
- **Editorial Body (`--font-serif`)**: `Literata`, optical-size book serif set at `1rem–1.125rem` (`16px–18px`) with `1.72–1.78` line height and `68ch` maximum reading measure.
- **Larder & UI (`--font-sans`)**: `Karla`, warm grotesque sans-serif with `tabular-nums` for ingredient weights, yield scalers, and periodical navigation.
- **Handwritten Marginalia (`--font-hand`)**: `Homemade Apple`, reserved strictly for brief cursive margin notes on ruled index cards.

## Layout & Component Architecture

- **No Eyebrows / Kickers**: Every heading (`h1`–`h4`) leads its text block directly; metadata (index number, chapter, timing, author) sits in a ledger row below the heading or in an adjacent column.
- **Page-Distinct Topologies**:
  - `Home`: Asymmetric 5/7 broadsheet hero, double-page featured centerpiece spread, interactive 4-part seasonal larder almanac, and 7/5 magazine essay showcase.
  - `Recipes`: Cookbook classified index with live search, chapter filters, dietary pills, and toggleable Spread vs. Compact Ledger views.
  - `Recipe Detail`: Open double-page cookbook spread with sticky left-hand scalable/checkable larder column and right-hand origin essay + step-by-step method with optional large-type Kitchen Counter Mode.
  - `Stories & About`: Interactive 5-essay magazine reader, publication philosophy, and validated reader family recipe card submission archive.

