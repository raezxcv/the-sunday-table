# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React 19, TypeScript, Vite, Tailwind CSS v4, React Router v7, Lucide Icons (specified by project brief).

## Users

Home cooks, cookbook collectors, food culture readers, and hosts who view cooking as an act of memory, care, and gathering rather than a race for 15-minute weeknight hacks. They read recipes like literature at the kitchen counter, stain pages with olive oil, scale batches when an extra friend knocks on the door, and pass down index cards with margin notes.

## Product Purpose

**The Sunday Table** is an independent food and culture publication ("Food, Memory, and the People We Gather Around") that explores food beyond transactional recipe cards. It documents family traditions, shared meals, regional ingredients, handwritten recipes, cooking rituals, and the people who bring everyone together. Central tagline: *"Good food is better when there's room for one more."*

## Positioning

Unlike SEO-bloated food blogs, restaurant directories, or clinical meal-prep apps, The Sunday Table combines the tactile intimacy of a well-loved, linen-bound heirloom cookbook left open on a wooden kitchen table with the literary journalism of an independent print food journal (akin to *kinfolk*, *Gastronomica*, *The Art of Eating*, and classic Richard Olney or Patience Gray cookbooks).

## Operating Context

Used in two distinct modes:
1. **Armchair / Table Reading Mode**: Slow Sunday morning reading—exploring long-form essays on heirloom flour, nonna's handwritten ragù notes, and seasonal produce rituals.
2. **Active Kitchen / Counter Mode**: Propped open on a tablet or laptop beside a cutting board with flour-dusted hands—checking off ingredients, scaling servings from 4 to 8 when extra guests arrive, reading clear step-by-step instructions with comfortable typography, and saving favorite dishes to a personal recipe box (`localStorage`).

## Capabilities and Constraints

- Four distinct, multi-layout pages:
  1. **Home — Gather Around** (`/`): Editorial food hero, publication manifesto, featured Sunday centerpiece recipe, seasonal ingredient larder showcase, curated food essays, and visual invitation to gather.
  2. **Recipes — The Recipe Book** (`/recipes`): Indexed collection of 12 original, deeply tested recipes across 6 categories (*Breakfast*, *Main Dishes*, *Comfort Food*, *Baking*, *Desserts*, *Seasonal Dishes*), with live search, category filtering, dietary tags, favorites filter, and kitchen index layout.
  3. **Recipe Detail — At the Table** (`/recipes/:slug`): Cookbook spread layout with large natural-light photography, origin story & handwritten margin notes, interactive yield/servings scaler (0.5x, 1x, 1.5x, 2x, or custom), checkable ingredient list persisted per recipe, step-by-step method with cook-along focus mode, serving ritual suggestions, and next/previous/related recipe navigation.
  4. **Stories & About** (`/stories`): Long-form editorial essays on family recipes, food traditions, cooking for friends, seasonal ingredients, and meal memories, plus the publication's masthead philosophy and an interactive Family Recipe & Table Memory submission form.
- Persistent user state in `localStorage` for saved favorite recipes ("My Recipe Box"), checked-off ingredients per recipe, and submitted community table stories.

## Brand Commitments

- **Colors**: Butter Cream (`#FBF7EE`), Warm Parchment (`#F3ECE0`), Heirloom Tomato Red (`#B83A24`), Pressed Olive Green (`#4A5838`), Toasted Walnut / Warm Brown (`#6E4E37`), Cast-Iron Charcoal (`#231F1D`).
- **Typography**: Expressive cookbook editorial serif (*Cormorant Garamond* / *Newsreader* / *Playfair* character—we will pair **Instrument Serif** & **Source Serif 4** with **Plus Jakarta Sans** / **Work Sans** and handwritten/archival **Caveat** / **Courier Prime** for index card annotations).
- **Photography**: 15 original realistic food photographs with natural window light, linen, ceramic plates, wooden tables, and candid human warmth.

## Accessibility & Inclusion

WCAG 2.2 AA compliance: ≥4.5:1 contrast for body copy on warm butter-cream and parchment grounds, semantic landmarks, full keyboard operability for ingredient checkboxes, yield scalers, category filters, and recipe navigation, visible focus rings styled in Cast-Iron Charcoal and Tomato Red, and complete `prefers-reduced-motion` support.

