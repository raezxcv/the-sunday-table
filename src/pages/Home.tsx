import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bookmark, Clock, Users, Utensils } from 'lucide-react';
import { RECIPES, SEASONAL_LARDER } from '../data/recipes';
import { EDITORIAL_STORIES } from '../data/stories';
import { useKitchen } from '../context/KitchenContext';

export const Home: React.FC = () => {
  const { isFavorite, toggleFavorite } = useKitchen();
  const [activeIngredientId, setActiveIngredientId] = useState<string>(SEASONAL_LARDER[0].id);

  const featuredRecipe = RECIPES[0]; // Cast-Iron Roast Chicken with Caramelized Shallots & Late Figs
  const companionRecipes = [RECIPES[1], RECIPES[2], RECIPES[3]]; // Pappardelle, Country Levain, Squash & Borlotti Soup
  const activeIngredient =
    SEASONAL_LARDER.find((item) => item.id === activeIngredientId) || SEASONAL_LARDER[0];

  return (
    <div className="page-enter">
      {/* SECTION 1: EDITORIAL FOOD HERO & PUBLICATION INTRODUCTION */}
      <section className="border-b border-[#D8C8B0]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 py-10 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Editorial Headline & Publication Manifesto */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6 lg:pr-4">
              <div className="space-y-5">
                <h1 className="font-display text-[2.65rem] sm:text-5xl lg:text-[3.55rem] leading-[1.05] tracking-[-0.025em] text-[#231F1D]">
                  Good food is better when there’s room for one more.
                </h1>

                <p className="font-serif-body text-lg text-[#231F1D] leading-[1.72] reading-measure">
                  <strong>The Sunday Table</strong> is an independent food and culture journal about
                  the meals that outlive the evening—handwritten index cards stained with olive oil,
                  pots of white beans that stretch when an extra friend knocks, and the quiet rhythm
                  of a home kitchen at four in the afternoon.
                </p>

                <div className="p-5 rounded bg-[#F2E9D8] border border-[#D8C8B0] space-y-2.5">
                  <h2 className="font-display italic text-xl text-[#B83A24]">
                    From the Editor’s Kitchen Table
                  </h2>
                  <p className="font-serif-body text-sm text-[#5A4231] leading-relaxed">
                    In this fourteenth issue, we turn toward the late-autumn larder: bitter treviso
                    radicchio that sweetens on hot cast iron, dried woodland porcini simmered for
                    hand-cut egg ribbons, and a Saturday-night levain baked before the Sunday coffee
                    finishes dripping. Leave these pages open on your counter.
                  </p>
                  <p className="font-hand text-base text-[#231F1D] pt-1">
                    — Clara, Julian &amp; the Sunday Table editors
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <Link
                  to="/recipes"
                  className="btn-tactile inline-flex items-center gap-2 px-6 py-3.5 rounded bg-[#B83A24] hover:bg-[#8F2917] text-[#FBF7EE] font-ui text-sm font-semibold shadow-sm"
                >
                  <span>Open The Recipe Book</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/stories"
                  className="btn-tactile inline-flex items-center gap-2 px-5 py-3.5 rounded border border-[#B59F82] bg-[#F2E9D8]/70 hover:bg-[#E7DBC6] text-[#231F1D] font-ui text-sm font-medium"
                >
                  <span>Read Issue No. 14 Essays</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Large Natural-Light Hero Photograph with Caption Ledger */}
            <div className="lg:col-span-7 space-y-3">
              <figure className="photo-frame overflow-hidden rounded border border-[#B59F82] bg-[#F2E9D8] shadow-[0_14px_34px_-14px_rgba(35,31,29,0.2)]">
                <img
                  src="/images/sunday-table/sunday-dinner-table.jpg"
                  alt="A long Sunday family dinner table mid-meal with shared ceramic platters of roasted vegetables, torn sourdough bread, wine tumblers, and warm hands passing a bowl"
                  className="w-full aspect-[16/10] object-cover"
                />
                <figcaption className="p-4 bg-[#F2E9D8] border-t border-[#D8C8B0] flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-ui text-xs text-[#5A4231]">
                  <span>
                    <strong className="text-[#231F1D]">Photograph I:</strong> Sunday late-afternoon
                    gathering around the scrubbed oak table; roasted roots, braised short ribs, and
                    country levain.
                  </span>
                  <span className="tabular-nums text-[#6E5441] shrink-0">35mm · Natural Window Light</span>
                </figcaption>
              </figure>

              {/* Issue Quick-Index Strip */}
              <div className="grid grid-cols-3 gap-3 pt-1">
                <div className="p-3.5 rounded border border-[#D8C8B0] bg-[#F2E9D8]/50">
                  <p className="font-display text-2xl text-[#231F1D] tabular-nums">12 Dishes</p>
                  <p className="font-ui text-xs text-[#5A4231] mt-0.5">
                    Tested home recipes with scalable larder weights
                  </p>
                </div>
                <div className="p-3.5 rounded border border-[#D8C8B0] bg-[#F2E9D8]/50">
                  <p className="font-display text-2xl text-[#231F1D] tabular-nums">5 Essays</p>
                  <p className="font-ui text-xs text-[#5A4231] mt-0.5">
                    Long-form writing on memory, bread &amp; table rituals
                  </p>
                </div>
                <div className="p-3.5 rounded border border-[#D8C8B0] bg-[#F2E9D8]/50">
                  <p className="font-display text-2xl text-[#231F1D] tabular-nums">4 Staples</p>
                  <p className="font-ui text-xs text-[#5A4231] mt-0.5">
                    Late-harvest produce &amp; pantry notes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FEATURED SUNDAY CENTERPIECE RECIPE SPREAD */}
      <section className="border-b border-[#D8C8B0] bg-[#F2E9D8]/55">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 py-14 lg:py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-[#D8C8B0]">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] text-[#231F1D] leading-tight">
                The Sunday Centerpiece Spread
              </h2>
              <p className="font-serif-body text-base text-[#5A4231] mt-1">
                One generous skillet brought straight from the oven to the middle of the wooden board.
              </p>
            </div>
            <Link
              to="/recipes"
              className="font-ui text-sm font-semibold text-[#B83A24] hover:underline inline-flex items-center gap-1.5"
            >
              <span>Browse all 12 recipes in The Recipe Book</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          {/* Open Cookbook Double-Spread Card */}
          <div className="mt-8 rounded-lg border border-[#B59F82] bg-[#FBF7EE] shadow-[0_16px_38px_-18px_rgba(35,31,29,0.18)] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Page: Photograph + Handwritten Margin Card */}
              <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-[#D8C8B0] bg-[#F2E9D8]/40 flex flex-col justify-between gap-6">
                <div className="photo-frame overflow-hidden rounded border border-[#D8C8B0]">
                  <img
                    src={featuredRecipe.image}
                    alt={featuredRecipe.imageAlt}
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>

                {/* Stained Handwritten Index Note */}
                <div className="recipe-index-card p-5 rounded border border-[#B59F82]">
                  <p className="font-hand text-lg text-[#231F1D] leading-relaxed">
                    “{featuredRecipe.handwrittenNote.text}”
                  </p>
                  <p className="font-ui text-xs text-[#5A4231] mt-2">
                    — {featuredRecipe.handwrittenNote.attribution}
                  </p>
                </div>
              </div>

              {/* Right Page: Literary Intro, Larder Snapshot, & Action */}
              <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <h3 className="font-display text-3xl sm:text-4xl text-[#231F1D] leading-[1.12]">
                    <Link
                      to={`/recipes/${featuredRecipe.slug}`}
                      className="hover:text-[#B83A24] transition-colors"
                    >
                      {featuredRecipe.title}
                    </Link>
                  </h3>

                  {/* Metadata Ledger Row AFTER Heading */}
                  <div className="flex flex-wrap items-center gap-4 py-2.5 border-y border-[#D8C8B0] font-ui text-xs text-[#5A4231] tabular-nums">
                    <span className="font-semibold text-[#B83A24]">{featuredRecipe.indexNumber}</span>
                    <span>·</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#4A5838]" aria-hidden="true" />
                      {featuredRecipe.totalTime}
                    </span>
                    <span>·</span>
                    <span className="inline-flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-[#4A5838]" aria-hidden="true" />
                      {featuredRecipe.baseServings} {featuredRecipe.servingsLabel}
                    </span>
                    <span>·</span>
                    <span className="px-2 py-0.5 rounded bg-[#E4E8DC] text-[#4A5838] font-medium">
                      {featuredRecipe.category}
                    </span>
                  </div>

                  <p className="font-serif-body text-base text-[#231F1D] leading-relaxed">
                    {featuredRecipe.originStory[0]}
                  </p>

                  {/* Key Larder Preview */}
                  <div className="pt-2">
                    <h4 className="font-display text-xl text-[#231F1D] mb-2.5">
                      On the Butcher Block
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-ui text-xs text-[#5A4231] tabular-nums">
                      {featuredRecipe.ingredients.slice(0, 6).map((ing) => (
                        <li
                          key={ing.id}
                          className="flex items-baseline gap-2 py-1 border-b border-[#E7DBC6]"
                        >
                          <span className="font-semibold text-[#231F1D]">
                            {ing.amount} {ing.unit}
                          </span>
                          <span className="truncate">{ing.item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <Link
                    to={`/recipes/${featuredRecipe.slug}`}
                    className="btn-tactile inline-flex items-center gap-2 px-5 py-3 rounded bg-[#231F1D] hover:bg-[#B83A24] text-[#FBF7EE] font-ui text-sm font-medium transition-colors"
                  >
                    <Utensils className="w-4 h-4" aria-hidden="true" />
                    <span>Cook This Recipe at the Table</span>
                  </Link>

                  <button
                    type="button"
                    onClick={() => toggleFavorite(featuredRecipe.id, featuredRecipe.title)}
                    className={`btn-tactile inline-flex items-center gap-2 px-4 py-3 rounded border font-ui text-sm font-medium cursor-pointer ${
                      isFavorite(featuredRecipe.id)
                        ? 'bg-[#F2E9D8] border-[#B83A24] text-[#B83A24]'
                        : 'bg-[#FBF7EE] border-[#B59F82] text-[#231F1D] hover:border-[#B83A24]'
                    }`}
                  >
                    <Bookmark
                      className={`w-4 h-4 ${
                        isFavorite(featuredRecipe.id) ? 'fill-[#B83A24] text-[#B83A24]' : ''
                      }`}
                      aria-hidden="true"
                    />
                    <span>
                      {isFavorite(featuredRecipe.id) ? 'Saved in Recipe Box' : 'Save to Recipe Box'}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Three Companion Sunday Table Courses */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {companionRecipes.map((recipe) => (
              <article
                key={recipe.id}
                className="rounded border border-[#D8C8B0] bg-[#FBF7EE] p-5 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3.5">
                  <Link
                    to={`/recipes/${recipe.slug}`}
                    className="photo-frame block overflow-hidden rounded border border-[#D8C8B0]"
                  >
                    <img
                      src={recipe.image}
                      alt={recipe.imageAlt}
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </Link>

                  <h3 className="font-display text-2xl text-[#231F1D] leading-snug">
                    <Link
                      to={`/recipes/${recipe.slug}`}
                      className="hover:text-[#B83A24] transition-colors"
                    >
                      {recipe.title}
                    </Link>
                  </h3>

                  <p className="font-ui text-xs text-[#5A4231] tabular-nums">
                    {recipe.indexNumber} · {recipe.category} · {recipe.totalTime}
                  </p>

                  <p className="font-serif-body text-sm text-[#5A4231] line-clamp-3 leading-relaxed">
                    {recipe.subtitle}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#E7DBC6] flex items-center justify-between">
                  <Link
                    to={`/recipes/${recipe.slug}`}
                    className="font-ui text-xs font-semibold text-[#B83A24] hover:underline inline-flex items-center gap-1"
                  >
                    Open Recipe Spread <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => toggleFavorite(recipe.id, recipe.title)}
                    aria-label={
                      isFavorite(recipe.id)
                        ? `Remove ${recipe.title} from Recipe Box`
                        : `Save ${recipe.title} to Recipe Box`
                    }
                    className="p-1.5 rounded hover:bg-[#F2E9D8] text-[#5A4231] cursor-pointer"
                  >
                    <Bookmark
                      className={`w-4 h-4 ${
                        isFavorite(recipe.id) ? 'fill-[#B83A24] text-[#B83A24]' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: SEASONAL INGREDIENTS — THE AUTUMN LARDER ALMANAC */}
      <section className="border-b border-[#D8C8B0]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left 5 Columns: Seasonal Larder Introduction & Interactive Selector */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <h2 className="font-display text-3xl sm:text-4xl text-[#231F1D] leading-tight">
                  The Late-Harvest Larder Almanac
                </h2>
                <p className="font-serif-body text-base text-[#5A4231] leading-relaxed">
                  Good home cooking begins before the stove is lit—knowing what is heavy in the
                  market crate this month, how to judge it by smell and weight, and what it asks
                  for in the pan.
                </p>
              </div>

              {/* Interactive Ingredient Ledger Selector */}
              <div className="space-y-2" role="tablist" aria-label="Seasonal Ingredients">
                {SEASONAL_LARDER.map((item, idx) => {
                  const isSelected = item.id === activeIngredient.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      aria-controls={`panel-${item.id}`}
                      id={`tab-${item.id}`}
                      onClick={() => setActiveIngredientId(item.id)}
                      className={`w-full text-left p-4 rounded border transition-colors cursor-pointer flex items-center justify-between gap-3 ${
                        isSelected
                          ? 'bg-[#F2E9D8] border-[#B83A24] text-[#231F1D]'
                          : 'bg-[#FBF7EE] border-[#D8C8B0] text-[#5A4231] hover:bg-[#F2E9D8]/50'
                      }`}
                    >
                      <div>
                        <p className="font-display text-xl text-[#231F1D]">
                          {idx + 1}. {item.name}
                        </p>
                        <p className="font-ui text-xs text-[#6E5441] mt-0.5 italic">
                          {item.latinName} · {item.peakMonths}
                        </p>
                      </div>
                      <ArrowRight
                        className={`w-4 h-4 shrink-0 transition-transform ${
                          isSelected ? 'text-[#B83A24] translate-x-0.5' : 'text-[#B59F82]'
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  );
                })}
              </div>

              {/* Prep Table Flat-lay Miniature */}
              <figure className="rounded border border-[#D8C8B0] bg-[#F2E9D8]/60 p-3 flex items-center gap-4">
                <img
                  src="/images/sunday-table/fresh-ingredients-table.jpg"
                  alt="Ribbed heirloom tomatoes, braided garlic, fennel fronds, farm eggs, and flaky sea salt on a wooden kitchen table"
                  className="w-24 h-20 rounded object-cover border border-[#D8C8B0] shrink-0"
                />
                <figcaption className="font-ui text-xs text-[#5A4231] leading-relaxed">
                  <strong className="text-[#231F1D] block">On the Sunday Prep Table:</strong>
                  Braided softneck garlic, late ribbed tomatoes, feathery fennel bulbs, and gray
                  sea salt set out before cooking begins.
                </figcaption>
              </figure>
            </div>

            {/* Right 7 Columns: Selected Ingredient Field Guide Sheet */}
            <div
              id={`panel-${activeIngredient.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${activeIngredient.id}`}
              className="lg:col-span-7 rounded-lg border border-[#B59F82] bg-[#F2E9D8]/75 p-6 sm:p-8 lg:p-10 space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-6 photo-frame overflow-hidden rounded border border-[#B59F82]">
                  <img
                    src={activeIngredient.image}
                    alt={activeIngredient.name}
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
                <div className="md:col-span-6 space-y-3">
                  <h3 className="font-display text-3xl text-[#231F1D] leading-tight">
                    {activeIngredient.name}
                  </h3>
                  <p className="font-ui text-xs text-[#4A5838] font-semibold">
                    {activeIngredient.originRegion} · Peak: {activeIngredient.peakMonths}
                  </p>
                  <p className="font-serif-body text-sm text-[#231F1D] leading-relaxed">
                    {activeIngredient.tastingNotes}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#D8C8B0]">
                <div className="p-4 rounded bg-[#FBF7EE] border border-[#D8C8B0] space-y-1.5">
                  <h4 className="font-display text-lg text-[#231F1D]">
                    At the Market Stall
                  </h4>
                  <p className="font-serif-body text-xs text-[#5A4231] leading-relaxed">
                    {activeIngredient.selectionTip}
                  </p>
                </div>
                <div className="p-4 rounded bg-[#FBF7EE] border border-[#D8C8B0] space-y-1.5">
                  <h4 className="font-display text-lg text-[#231F1D]">
                    In the Home Kitchen
                  </h4>
                  <p className="font-serif-body text-xs text-[#5A4231] leading-relaxed">
                    {activeIngredient.kitchenRitual}
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#E7DBC6]/70 p-4 rounded border border-[#D8C8B0]">
                <div>
                  <span className="font-ui text-xs text-[#5A4231] block">
                    Featured Recipe Using This Ingredient:
                  </span>
                  <span className="font-display text-lg text-[#231F1D]">
                    {activeIngredient.linkedRecipeTitle}
                  </span>
                </div>
                <Link
                  to={`/recipes/${activeIngredient.linkedRecipeSlug}`}
                  className="btn-tactile inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#4A5838] hover:bg-[#231F1D] text-[#FBF7EE] font-ui text-xs font-semibold shrink-0"
                >
                  <span>Cook With It</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: SELECTED FOOD STORIES & ESSAYS */}
      <section className="border-b border-[#D8C8B0] bg-[#FBF7EE]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 py-14 lg:py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-[#D8C8B0]">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl text-[#231F1D] leading-tight">
                Selected Essays from the Table
              </h2>
              <p className="font-serif-body text-base text-[#5A4231] mt-1">
                Writing on family recipe cards, kitchen solitude, and the meals we remember years later.
              </p>
            </div>
            <Link
              to="/stories"
              className="font-ui text-sm font-semibold text-[#B83A24] hover:underline inline-flex items-center gap-1.5"
            >
              <span>Read all 5 stories &amp; essays</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Lead Feature Essay (7 Columns) */}
            <article className="lg:col-span-7 lg:pr-8 lg:border-r border-[#D8C8B0] flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                <Link
                  to={`/stories?story=${EDITORIAL_STORIES[0].slug}`}
                  className="photo-frame block overflow-hidden rounded border border-[#B59F82]"
                >
                  <img
                    src={EDITORIAL_STORIES[0].heroImage}
                    alt={EDITORIAL_STORIES[0].heroImageAlt}
                    className="w-full aspect-[16/10] object-cover"
                  />
                </Link>

                <h3 className="font-display text-3xl sm:text-[2.2rem] text-[#231F1D] leading-[1.12]">
                  <Link
                    to={`/stories?story=${EDITORIAL_STORIES[0].slug}`}
                    className="hover:text-[#B83A24] transition-colors"
                  >
                    {EDITORIAL_STORIES[0].title}
                  </Link>
                </h3>

                <p className="font-ui text-xs text-[#5A4231]">
                  By <strong className="text-[#231F1D]">{EDITORIAL_STORIES[0].author}</strong> ·{' '}
                  {EDITORIAL_STORIES[0].authorLocation} · {EDITORIAL_STORIES[0].readingTime}
                </p>

                <p className="font-serif-body text-base text-[#231F1D] leading-relaxed">
                  {EDITORIAL_STORIES[0].paragraphs[0]}
                </p>

                <blockquote className="p-4 rounded bg-[#F2E9D8] border border-[#D8C8B0] font-display italic text-xl text-[#5A4231]">
                  “{EDITORIAL_STORIES[0].pullQuote}”
                </blockquote>
              </div>

              <div className="pt-2">
                <Link
                  to={`/stories?story=${EDITORIAL_STORIES[0].slug}`}
                  className="font-ui text-sm font-semibold text-[#B83A24] hover:underline inline-flex items-center gap-1.5"
                >
                  <span>Read Full Essay</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </article>

            {/* Right Column: Two Companion Essays (5 Columns) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-8">
              {EDITORIAL_STORIES.slice(1, 3).map((story) => (
                <article
                  key={story.id}
                  className="pb-6 last:pb-0 border-b last:border-b-0 border-[#D8C8B0] space-y-3"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start">
                    <Link
                      to={`/stories?story=${story.slug}`}
                      className="sm:col-span-5 photo-frame block overflow-hidden rounded border border-[#D8C8B0]"
                    >
                      <img
                        src={story.heroImage}
                        alt={story.heroImageAlt}
                        className="w-full aspect-[4/3] object-cover"
                      />
                    </Link>
                    <div className="sm:col-span-7 space-y-2">
                      <h3 className="font-display text-2xl text-[#231F1D] leading-snug">
                        <Link
                          to={`/stories?story=${story.slug}`}
                          className="hover:text-[#B83A24] transition-colors"
                        >
                          {story.title}
                        </Link>
                      </h3>
                      <p className="font-ui text-xs text-[#5A4231]">
                        By {story.author} · {story.readingTime}
                      </p>
                    </div>
                  </div>
                  <p className="font-serif-body text-sm text-[#5A4231] leading-relaxed">
                    {story.subtitle}
                  </p>
                  <Link
                    to={`/stories?story=${story.slug}`}
                    className="font-ui text-xs font-semibold text-[#B83A24] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Read Story</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: A VISUAL INVITATION TO GATHER */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 pt-14 lg:pt-20">
        <div className="rounded-lg border border-[#B59F82] bg-[#F2E9D8] overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-6 p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] text-[#231F1D] leading-[1.1]">
                Pull Up an Extra Chair at Our Table
              </h2>
              <p className="font-serif-body text-base text-[#5A4231] leading-relaxed">
                Every family has one dish that never needed to be written down until someone moved
                away—the soup for the first cold night, the bread wrapped in a tea towel, the
                handwritten margin note that saves the sauce.
              </p>
              <p className="font-serif-body text-base text-[#5A4231] leading-relaxed">
                Explore our complete twelve-dish Recipe Book, or leave your own family cooking ritual
                in our reader archive.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/recipes"
                className="btn-tactile inline-flex items-center gap-2 px-5 py-3 rounded bg-[#231F1D] hover:bg-[#B83A24] text-[#FBF7EE] font-ui text-sm font-semibold"
              >
                <span>Explore All 12 Recipes</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                to="/stories#share-recipe"
                className="btn-tactile inline-flex items-center gap-2 px-5 py-3 rounded border border-[#B59F82] bg-[#FBF7EE] hover:border-[#B83A24] text-[#231F1D] font-ui text-sm font-medium"
              >
                <span>Share a Family Recipe Memory</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 border-t lg:border-t-0 lg:border-l border-[#D8C8B0]">
            <img
              src="/images/sunday-table/shared-meal-friends.jpg"
              alt="Friends gathered around a candlelit wooden dinner table passing grilled bread and braised white beans with greens"
              className="w-full h-full min-h-[300px] object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

