import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Bookmark,
  Clock,
  Users,
  ArrowLeft,
  ArrowRight,
  Check,
  RotateCcw,
  Utensils,
  Sparkles,
  Printer,
} from 'lucide-react';
import { RECIPES } from '../data/recipes';
import { useKitchen } from '../context/KitchenContext';
import { formatScaledAmount } from '../utils/formatQuantity';

const SCALE_OPTIONS = [
  { value: 0.5, label: '½× Half' },
  { value: 1, label: '1× Standard' },
  { value: 1.5, label: '1½× Generous' },
  { value: 2, label: '2× Double Table' },
];

export const RecipeDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const {
    isFavorite,
    toggleFavorite,
    checkedIngredients,
    toggleIngredient,
    clearRecipeChecks,
    getRecipeMultiplier,
    setRecipeMultiplier,
  } = useKitchen();

  const [counterMode, setCounterMode] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const recipeIndex = useMemo(() => {
    const idx = RECIPES.findIndex((r) => r.slug === slug);
    return idx >= 0 ? idx : 0;
  }, [slug]);

  const recipe = RECIPES[recipeIndex];
  const prevRecipe = RECIPES[(recipeIndex - 1 + RECIPES.length) % RECIPES.length];
  const nextRecipe = RECIPES[(recipeIndex + 1) % RECIPES.length];

  const relatedRecipes = useMemo(() => {
    const sameCategory = RECIPES.filter(
      (r) => r.id !== recipe.id && r.category === recipe.category
    );
    const others = RECIPES.filter(
      (r) => r.id !== recipe.id && r.category !== recipe.category
    );
    return [...sameCategory, ...others].slice(0, 3);
  }, [recipe]);

  const multiplier = getRecipeMultiplier(recipe.id);
  const checkedIds = checkedIngredients[recipe.id] || [];
  const scaledServings = Math.max(1, Math.round(recipe.baseServings * multiplier));

  const groupedIngredients = useMemo(() => {
    const groups: Record<string, typeof recipe.ingredients> = {};
    for (const item of recipe.ingredients) {
      const groupName = item.group || 'Ingredients';
      if (!groups[groupName]) groups[groupName] = [];
      groups[groupName].push(item);
    }
    return Object.entries(groups);
  }, [recipe]);

  const toggleStepDone = (stepNum: number) => {
    setCompletedSteps((prev) =>
      prev.includes(stepNum) ? prev.filter((n) => n !== stepNum) : [...prev, stepNum]
    );
  };

  return (
    <article className="page-enter">
      {/* TOP COOKBOOK RUNNING HEAD & BREADCRUMB */}
      <div className="border-b border-[#D8C8B0] bg-[#F2E9D8]/60">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 py-3.5 flex flex-wrap items-center justify-between gap-4 font-ui text-xs text-[#5A4231]">
          <div className="flex items-center gap-2">
            <Link
              to="/recipes"
              className="inline-flex items-center gap-1.5 font-semibold text-[#231F1D] hover:text-[#B83A24] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Back to The Recipe Book</span>
            </Link>
            <span aria-hidden="true">·</span>
            <span>{recipe.category}</span>
            <span aria-hidden="true">·</span>
            <span className="font-semibold text-[#B83A24] tabular-nums">{recipe.indexNumber}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setCounterMode(!counterMode)}
              aria-pressed={counterMode}
              className={`px-3 py-1.5 rounded border font-medium transition-colors cursor-pointer ${
                counterMode
                  ? 'bg-[#4A5838] border-[#4A5838] text-[#FBF7EE]'
                  : 'bg-[#FBF7EE] border-[#B59F82] text-[#231F1D] hover:border-[#4A5838]'
              }`}
            >
              {counterMode ? 'Kitchen Counter Mode: ON (Large Type)' : 'Kitchen Counter Mode'}
            </button>

            <button
              type="button"
              onClick={() => window.print()}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-[#B59F82] bg-[#FBF7EE] hover:border-[#231F1D] text-[#231F1D] cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Print Card</span>
            </button>
          </div>
        </div>
      </div>

      {/* HERO SPREAD: TITLE, ORIGIN SUMMARY & LARGE PHOTOGRAPHY */}
      <header className="border-b border-[#D8C8B0]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 py-10 lg:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left 6 Columns: Recipe Title, Ledger & Actions */}
            <div className="lg:col-span-6 space-y-6">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] text-[#231F1D] leading-[1.06] tracking-[-0.025em]">
                {recipe.title}
              </h1>

              <p className="font-serif-body text-lg text-[#5A4231] leading-relaxed">
                {recipe.subtitle}
              </p>

              {/* Timing & Yield Ledger Table */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded border border-[#B59F82] bg-[#F2E9D8]/70 font-ui text-xs tabular-nums">
                <div>
                  <span className="text-[#6E5441] block">Prep Time</span>
                  <strong className="text-[#231F1D] text-sm">{recipe.prepTime}</strong>
                </div>
                <div>
                  <span className="text-[#6E5441] block">Cook Time</span>
                  <strong className="text-[#231F1D] text-sm">{recipe.cookTime}</strong>
                </div>
                <div>
                  <span className="text-[#6E5441] block">Total Time</span>
                  <strong className="text-[#231F1D] text-sm">{recipe.totalTime}</strong>
                </div>
                <div>
                  <span className="text-[#6E5441] block">Yield</span>
                  <strong className="text-[#B83A24] text-sm">
                    {scaledServings} {recipe.servingsLabel}
                  </strong>
                </div>
              </div>

              {/* Dietary Notes & Save to Box */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                <div className="flex flex-wrap items-center gap-2">
                  {recipe.dietaryNotes.map((note) => (
                    <span
                      key={note}
                      className="px-2.5 py-1 rounded bg-[#E4E8DC] text-[#4A5838] font-ui text-xs font-medium"
                    >
                      {note}
                    </span>
                  ))}
                  <span className="px-2.5 py-1 rounded bg-[#F2E9D8] border border-[#D8C8B0] text-[#5A4231] font-ui text-xs">
                    {recipe.season}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => toggleFavorite(recipe.id, recipe.title)}
                  className={`btn-tactile inline-flex items-center gap-2 px-4 py-2.5 rounded border font-ui text-sm font-medium cursor-pointer ${
                    isFavorite(recipe.id)
                      ? 'bg-[#B83A24] border-[#B83A24] text-[#FBF7EE]'
                      : 'bg-[#F2E9D8] border-[#B59F82] text-[#231F1D] hover:border-[#B83A24]'
                  }`}
                >
                  <Bookmark
                    className={`w-4 h-4 ${
                      isFavorite(recipe.id) ? 'fill-[#FBF7EE] text-[#FBF7EE]' : 'text-[#B83A24]'
                    }`}
                    aria-hidden="true"
                  />
                  <span>
                    {isFavorite(recipe.id) ? 'Saved in Recipe Box' : 'Save to Recipe Box'}
                  </span>
                </button>
              </div>

              {/* Handwritten Margin Note Card */}
              <div className="recipe-index-card p-5 rounded border border-[#B59F82]">
                <p className="font-hand text-lg text-[#231F1D] leading-relaxed">
                  “{recipe.handwrittenNote.text}”
                </p>
                <p className="font-ui text-xs text-[#5A4231] mt-2">
                  — {recipe.handwrittenNote.attribution}
                </p>
              </div>
            </div>

            {/* Right 6 Columns: Large Food Photograph & Caption */}
            <figure className="lg:col-span-6 space-y-2.5">
              <div className="photo-frame overflow-hidden rounded border border-[#B59F82] bg-[#F2E9D8] shadow-[0_14px_34px_-14px_rgba(35,31,29,0.2)]">
                <img
                  src={recipe.image}
                  alt={recipe.imageAlt}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <figcaption className="font-ui text-xs text-[#5A4231] flex items-center justify-between gap-4 px-1">
                <span>{recipe.imageCaption}</span>
                <span className="tabular-nums text-[#6E5441] shrink-0">{recipe.indexNumber}</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </header>

      {/* MAIN OPEN-COOKBOOK DOUBLE SPREAD: LARDER LEFT / ORIGIN & METHOD RIGHT */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* LEFT COLUMN (5 Cols): SCALEABLE, CHECKABLE INGREDIENT LARDER & COOKWARE */}
          <aside className="lg:col-span-5 lg:sticky lg:top-24 space-y-8">
            <div className="rounded-lg border border-[#B59F82] bg-[#F2E9D8]/80 p-6 sm:p-7 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#D8C8B0]">
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl text-[#231F1D]">
                    The Larder &amp; Measures
                  </h2>
                  <p className="font-ui text-xs text-[#5A4231] tabular-nums mt-0.5">
                    {checkedIds.length} of {recipe.ingredients.length} items checked off on your
                    board
                  </p>
                </div>

                {checkedIds.length > 0 && (
                  <button
                    type="button"
                    onClick={() => clearRecipeChecks(recipe.id)}
                    className="inline-flex items-center gap-1 font-ui text-xs text-[#B83A24] hover:underline cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Clear checks</span>
                  </button>
                )}
              </div>

              {/* Batch / Servings Scaler Controls */}
              <div className="p-3.5 rounded bg-[#FBF7EE] border border-[#D8C8B0] space-y-2.5">
                <div className="flex items-center justify-between font-ui text-xs">
                  <span className="font-semibold text-[#231F1D] inline-flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#4A5838]" aria-hidden="true" />
                    Scale Batch for Your Table:
                  </span>
                  <span className="tabular-nums font-bold text-[#B83A24]">
                    {scaledServings} {recipe.servingsLabel}
                  </span>
                </div>

                <div
                  className="grid grid-cols-4 gap-1.5"
                  role="group"
                  aria-label="Scale recipe ingredient quantities"
                >
                  {SCALE_OPTIONS.map((opt) => {
                    const active = multiplier === opt.value;
                    return (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setRecipeMultiplier(recipe.id, opt.value)}
                        aria-pressed={active}
                        className={`py-2 px-2 rounded font-ui text-xs transition-colors cursor-pointer tabular-nums min-h-[36px] ${
                          active
                            ? 'bg-[#231F1D] text-[#FBF7EE] font-semibold'
                            : 'bg-[#F2E9D8] text-[#5A4231] hover:bg-[#E7DBC6] hover:text-[#231F1D]'
                        }`}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Checkable Ingredient Groups */}
              <div className="space-y-6">
                {groupedIngredients.map(([groupTitle, items]) => (
                  <div key={groupTitle} className="space-y-2.5">
                    <h3 className="font-display italic text-xl text-[#5A4231] border-b border-[#D8C8B0] pb-1">
                      {groupTitle}
                    </h3>

                    <ul className="space-y-1.5">
                      {items.map((ing) => {
                        const isChecked = checkedIds.includes(ing.id);
                        const formattedQty = formatScaledAmount(ing.amount, multiplier, ing.unit);

                        return (
                          <li key={ing.id}>
                            <label
                              className={`flex items-start gap-3 p-2.5 rounded border transition-colors cursor-pointer select-none ${
                                isChecked
                                  ? 'bg-[#E4E8DC]/70 border-[#4A5838]/40 text-[#5A4231]'
                                  : 'bg-[#FBF7EE] border-[#D8C8B0] hover:border-[#B59F82] text-[#231F1D]'
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => toggleIngredient(recipe.id, ing.id)}
                                className="sr-only"
                              />
                              <span
                                aria-hidden="true"
                                className={`mt-0.5 w-5 h-5 rounded flex items-center justify-center border shrink-0 transition-colors ${
                                  isChecked
                                    ? 'bg-[#4A5838] border-[#4A5838] text-[#FBF7EE]'
                                    : 'bg-[#FBF7EE] border-[#B59F82]'
                                }`}
                              >
                                {isChecked && <Check className="w-3.5 h-3.5 stroke-[2.5]" />}
                              </span>

                              <span
                                className={`font-ui ${
                                  counterMode ? 'text-base' : 'text-sm'
                                } leading-snug ${isChecked ? 'line-through opacity-75' : ''}`}
                              >
                                {formattedQty && (
                                  <strong className="tabular-nums font-bold text-[#231F1D] mr-1">
                                    {formattedQty} {ing.unit}
                                  </strong>
                                )}
                                <span>{ing.item}</span>
                                {ing.prepNote && (
                                  <span className="text-[#6E5441] italic ml-1">
                                    — {ing.prepNote}
                                  </span>
                                )}
                              </span>
                            </label>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Essential Cookware & Dietary Substitution Note */}
              <div className="pt-4 border-t border-[#D8C8B0] space-y-4">
                <div>
                  <h3 className="font-display text-lg text-[#231F1D] mb-2">
                    Vessels &amp; Tools Needed
                  </h3>
                  <ul className="space-y-1 font-ui text-xs text-[#5A4231]">
                    {recipe.cookware.map((tool) => (
                      <li key={tool} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B83A24]" aria-hidden="true" />
                        <span>{tool}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3.5 rounded bg-[#E4E8DC]/70 border border-[#4A5838]/30 font-ui text-xs text-[#231F1D] space-y-1">
                  <strong className="text-[#4A5838] block">Dietary &amp; Larder Notes:</strong>
                  <p className="text-[#5A4231] leading-relaxed">{recipe.dietaryDetail}</p>
                </div>
              </div>
            </div>
          </aside>

          {/* RIGHT COLUMN (7 Cols): STORY ORIGIN, STEP-BY-STEP INSTRUCTIONS, & SERVING RITUAL */}
          <div className="lg:col-span-7 space-y-12">
            {/* Origin Story Section */}
            <section className="space-y-4 pb-10 border-b border-[#D8C8B0]">
              <h2 className="font-display text-3xl text-[#231F1D]">
                Origin &amp; Kitchen Notes
              </h2>
              <div
                className={`space-y-4 font-serif-body ${
                  counterMode ? 'text-xl leading-[1.8]' : 'text-base sm:text-[1.08rem] leading-[1.75]'
                } text-[#231F1D] reading-measure`}
              >
                {recipe.originStory.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </section>

            {/* Step-by-Step Method */}
            <section className="space-y-6 pb-10 border-b border-[#D8C8B0]">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="font-display text-3xl text-[#231F1D]">
                    Method — Step by Step
                  </h2>
                  <p className="font-ui text-xs text-[#5A4231] mt-0.5">
                    Click any step as you cook to mark your place on the counter
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setCounterMode(!counterMode)}
                  className="font-ui text-xs font-semibold text-[#B83A24] hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{counterMode ? 'Standard Reading Size' : 'Enlarge Type for Cooking'}</span>
                </button>
              </div>

              <ol className="space-y-6">
                {recipe.instructions.map((inst) => {
                  const isDone = completedSteps.includes(inst.step);
                  return (
                    <li
                      key={inst.step}
                      className={`p-6 rounded-lg border transition-colors ${
                        isDone
                          ? 'bg-[#F2E9D8]/60 border-[#4A5838]/50'
                          : 'bg-[#FBF7EE] border-[#D8C8B0]'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4 mb-2.5">
                        <h3 className="font-display text-2xl text-[#231F1D] leading-snug">
                          <span className="text-[#B83A24] mr-2 tabular-nums">
                            Step {inst.step}.
                          </span>
                          {inst.title}
                        </h3>

                        <button
                          type="button"
                          onClick={() => toggleStepDone(inst.step)}
                          aria-pressed={isDone}
                          className={`px-3 py-1 rounded font-ui text-xs font-medium shrink-0 cursor-pointer border ${
                            isDone
                              ? 'bg-[#4A5838] border-[#4A5838] text-[#FBF7EE]'
                              : 'bg-[#F2E9D8] border-[#D8C8B0] text-[#5A4231] hover:text-[#231F1D]'
                          }`}
                        >
                          {isDone ? 'Completed ✓' : 'Mark Step'}
                        </button>
                      </div>

                      {inst.durationLabel && (
                        <p className="font-ui text-xs text-[#4A5838] font-semibold tabular-nums mb-3 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#E4E8DC]">
                          <Clock className="w-3 h-3" aria-hidden="true" />
                          <span>Timing cue: {inst.durationLabel}</span>
                        </p>
                      )}

                      <p
                        className={`font-serif-body ${
                          counterMode ? 'text-xl leading-[1.8]' : 'text-base leading-[1.75]'
                        } text-[#231F1D] ${isDone ? 'opacity-75' : ''}`}
                      >
                        {inst.body}
                      </p>

                      {inst.cooksTip && (
                        <div className="mt-4 p-3.5 rounded bg-[#F2E9D8] border border-[#D8C8B0] font-serif-body text-xs text-[#5A4231]">
                          <strong className="text-[#231F1D] font-ui mr-1">Cook’s Margin Tip:</strong>
                          {inst.cooksTip}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ol>
            </section>

            {/* Serving Ritual & Secondary Table Photograph */}
            <section className="rounded-lg border border-[#B59F82] bg-[#F2E9D8]/70 p-6 sm:p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-7 space-y-4">
                  <h2 className="font-display text-2xl sm:text-3xl text-[#231F1D] flex items-center gap-2">
                    <Utensils className="w-5 h-5 text-[#B83A24]" aria-hidden="true" />
                    <span>At the Table — Serving &amp; Pairing</span>
                  </h2>
                  <p className="font-serif-body text-sm sm:text-base text-[#231F1D] leading-relaxed">
                    {recipe.servingSuggestion}
                  </p>
                  <div className="pt-2 border-t border-[#D8C8B0] font-ui text-xs text-[#5A4231]">
                    <strong className="text-[#231F1D] block mb-0.5">
                      Alongside on the Board:
                    </strong>
                    {recipe.tablePairing}
                  </div>
                </div>

                {recipe.secondaryImage && (
                  <div className="md:col-span-5">
                    <img
                      src={recipe.secondaryImage}
                      alt={`Table setting companion for ${recipe.title}`}
                      className="w-full aspect-[4/3] object-cover rounded border border-[#B59F82]"
                    />
                  </div>
                )}
              </div>
            </section>

            {/* Turn-Page Navigation Ribbon (Previous / Next Recipe in Book) */}
            <nav
              aria-label="Turn cookbook page to adjacent recipes"
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2"
            >
              <Link
                to={`/recipes/${prevRecipe.slug}`}
                className="p-5 rounded border border-[#B59F82] bg-[#F2E9D8]/60 hover:bg-[#F2E9D8] transition-colors flex flex-col justify-between gap-2"
              >
                <span className="font-ui text-xs text-[#5A4231] inline-flex items-center gap-1">
                  <ArrowLeft className="w-3.5 h-3.5 text-[#B83A24]" aria-hidden="true" />
                  Previous Page ({prevRecipe.indexNumber})
                </span>
                <span className="font-display text-xl text-[#231F1D] leading-snug">
                  {prevRecipe.title}
                </span>
              </Link>

              <Link
                to={`/recipes/${nextRecipe.slug}`}
                className="p-5 rounded border border-[#B59F82] bg-[#F2E9D8]/60 hover:bg-[#F2E9D8] transition-colors flex flex-col justify-between gap-2 sm:text-right"
              >
                <span className="font-ui text-xs text-[#5A4231] inline-flex items-center sm:justify-end gap-1">
                  Next Page ({nextRecipe.indexNumber})
                  <ArrowRight className="w-3.5 h-3.5 text-[#B83A24]" aria-hidden="true" />
                </span>
                <span className="font-display text-xl text-[#231F1D] leading-snug">
                  {nextRecipe.title}
                </span>
              </Link>
            </nav>
          </div>
        </div>
      </section>

      {/* RELATED RECIPES FOR THIS TABLE */}
      <section className="border-t border-[#D8C8B0] bg-[#F2E9D8]/45">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 py-12 lg:py-16">
          <div className="flex items-end justify-between gap-4 pb-6 border-b border-[#D8C8B0]">
            <div>
              <h2 className="font-display text-3xl text-[#231F1D]">
                Companion Dishes for This Table
              </h2>
              <p className="font-serif-body text-sm text-[#5A4231] mt-0.5">
                Courses that share the oven, the season, or the same Sunday afternoon prep.
              </p>
            </div>
            <Link
              to="/recipes"
              className="font-ui text-xs font-semibold text-[#B83A24] hover:underline"
            >
              Full Index (12) →
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedRecipes.map((rel) => (
              <article
                key={rel.id}
                className="rounded border border-[#D8C8B0] bg-[#FBF7EE] p-5 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <Link
                    to={`/recipes/${rel.slug}`}
                    className="photo-frame block overflow-hidden rounded border border-[#D8C8B0]"
                  >
                    <img
                      src={rel.image}
                      alt={rel.imageAlt}
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </Link>
                  <h3 className="font-display text-2xl text-[#231F1D] leading-snug">
                    <Link
                      to={`/recipes/${rel.slug}`}
                      className="hover:text-[#B83A24] transition-colors"
                    >
                      {rel.title}
                    </Link>
                  </h3>
                  <p className="font-ui text-xs text-[#5A4231] tabular-nums">
                    {rel.indexNumber} · {rel.category} · {rel.totalTime}
                  </p>
                </div>

                <Link
                  to={`/recipes/${rel.slug}`}
                  className="font-ui text-xs font-semibold text-[#B83A24] hover:underline inline-flex items-center gap-1 pt-2 border-t border-[#E7DBC6]"
                >
                  <span>Open Recipe Spread</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
};

