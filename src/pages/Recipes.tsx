import React, { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Search,
  Bookmark,
  Clock,
  Users,
  X,
  ArrowRight,
  BookOpen,
  List,
  LayoutGrid,
} from 'lucide-react';
import { RECIPES, RECIPE_CATEGORIES, RecipeCategory } from '../data/recipes';
import { useKitchen } from '../context/KitchenContext';

type DietaryFilter = 'All' | 'Vegetarian' | 'Vegan' | 'Gluten-Free' | 'Dairy-Free';

export const Recipes: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { favorites, isFavorite, toggleFavorite, checkedIngredients } = useKitchen();

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<RecipeCategory | 'All'>('All');
  const [selectedDietary, setSelectedDietary] = useState<DietaryFilter>('All');
  const [onlyFavorites, setOnlyFavorites] = useState<boolean>(
    searchParams.get('filter') === 'favorites'
  );
  const [viewMode, setViewMode] = useState<'spread' | 'ledger'>('spread');

  useEffect(() => {
    if (searchParams.get('filter') === 'favorites') {
      setOnlyFavorites(true);
    }
  }, [searchParams]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: RECIPES.length };
    for (const cat of RECIPE_CATEGORIES) {
      counts[cat] = RECIPES.filter((r) => r.category === cat).length;
    }
    return counts;
  }, []);

  const filteredRecipes = useMemo(() => {
    return RECIPES.filter((recipe) => {
      if (onlyFavorites && !favorites.includes(recipe.id)) {
        return false;
      }
      if (selectedCategory !== 'All' && recipe.category !== selectedCategory) {
        return false;
      }
      if (selectedDietary !== 'All') {
        const matchesDietary = recipe.dietaryNotes.some((note) =>
          note.toLowerCase().includes(selectedDietary.toLowerCase())
        );
        if (!matchesDietary) return false;
      }
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase().trim();
        const inTitle = recipe.title.toLowerCase().includes(q);
        const inSubtitle = recipe.subtitle.toLowerCase().includes(q);
        const inCategory = recipe.category.toLowerCase().includes(q);
        const inIngredients = recipe.ingredients.some((i) =>
          i.item.toLowerCase().includes(q)
        );
        const inDietary = recipe.dietaryNotes.some((d) => d.toLowerCase().includes(q));
        return inTitle || inSubtitle || inCategory || inIngredients || inDietary;
      }
      return true;
    });
  }, [searchQuery, selectedCategory, selectedDietary, onlyFavorites, favorites]);

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedDietary('All');
    setOnlyFavorites(false);
    setSearchParams({});
  };

  const hasActiveFilters =
    searchQuery.trim() !== '' ||
    selectedCategory !== 'All' ||
    selectedDietary !== 'All' ||
    onlyFavorites;

  return (
    <div className="page-enter">
      {/* RECIPE BOOK MASTHEAD */}
      <section className="border-b border-[#D8C8B0] bg-[#F2E9D8]/65">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 py-10 lg:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-3">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] text-[#231F1D] leading-[1.06] tracking-[-0.025em]">
                The Recipe Book
              </h1>
              <p className="font-serif-body text-base sm:text-lg text-[#5A4231] reading-measure leading-relaxed">
                Twelve original home-kitchen recipes across six chapters—from Saturday-night
                naturally leavened hearth bread and slow porcini ragù to cast-iron skillet roasts
                and burnt-honey fig tart. Every dish scales cleanly and remembers your checked
                ingredients while you cook.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end justify-between gap-3">
              <div className="inline-flex rounded border border-[#B59F82] bg-[#FBF7EE] p-1 font-ui text-xs">
                <button
                  type="button"
                  onClick={() => setViewMode('spread')}
                  aria-pressed={viewMode === 'spread'}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded cursor-pointer transition-colors ${
                    viewMode === 'spread'
                      ? 'bg-[#231F1D] text-[#FBF7EE] font-semibold'
                      : 'text-[#5A4231] hover:text-[#231F1D]'
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Cookbook Spreads</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('ledger')}
                  aria-pressed={viewMode === 'ledger'}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded cursor-pointer transition-colors ${
                    viewMode === 'ledger'
                      ? 'bg-[#231F1D] text-[#FBF7EE] font-semibold'
                      : 'text-[#5A4231] hover:text-[#231F1D]'
                  }`}
                >
                  <List className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Classified Ledger</span>
                </button>
              </div>
              <p className="font-ui text-xs text-[#6E5441] tabular-nums">
                Showing {filteredRecipes.length} of {RECIPES.length} tested dishes
              </p>
            </div>
          </div>

          {/* SEARCH, CATEGORY CHAPTERS, & DIETARY CONTROLS */}
          <div className="mt-8 pt-6 border-t border-[#D8C8B0] space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
              {/* Search by dish, ingredient, or technique */}
              <div className="lg:col-span-5 relative">
                <label htmlFor="recipe-search-input" className="sr-only">
                  Search recipes by title, ingredient, or category
                </label>
                <Search
                  className="w-4 h-4 text-[#6E5441] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                  aria-hidden="true"
                />
                <input
                  id="recipe-search-input"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by dish or ingredient (e.g., figs, porcini, sourdough, sage)..."
                  className="w-full pl-10 pr-9 py-2.5 rounded border border-[#B59F82] bg-[#FBF7EE] text-[#231F1D] placeholder:text-[#6E5441] font-ui text-sm focus:border-[#B83A24]"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear search query"
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-[#5A4231] hover:text-[#231F1D] cursor-pointer"
                  >
                    <X className="w-4 h-4" aria-hidden="true" />
                  </button>
                )}
              </div>

              {/* Dietary Filter + Saved Recipe Box Filter */}
              <div className="lg:col-span-7 flex flex-wrap items-center justify-start lg:justify-end gap-2">
                {(['All', 'Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free'] as DietaryFilter[]).map(
                  (diet) => (
                    <button
                      key={diet}
                      type="button"
                      onClick={() => setSelectedDietary(diet)}
                      aria-pressed={selectedDietary === diet}
                      className={`px-3 py-1.5 rounded font-ui text-xs transition-colors cursor-pointer min-h-[34px] ${
                        selectedDietary === diet
                          ? 'bg-[#4A5838] text-[#FBF7EE] font-semibold'
                          : 'bg-[#FBF7EE] border border-[#D8C8B0] text-[#5A4231] hover:border-[#4A5838]'
                      }`}
                    >
                      {diet === 'All' ? 'All Dietary' : diet}
                    </button>
                  )
                )}

                <button
                  type="button"
                  onClick={() => {
                    const next = !onlyFavorites;
                    setOnlyFavorites(next);
                    if (next) {
                      setSearchParams({ filter: 'favorites' });
                    } else {
                      setSearchParams({});
                    }
                  }}
                  aria-pressed={onlyFavorites}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded font-ui text-xs font-medium cursor-pointer min-h-[34px] border ${
                    onlyFavorites
                      ? 'bg-[#B83A24] border-[#B83A24] text-[#FBF7EE]'
                      : 'bg-[#FBF7EE] border-[#B59F82] text-[#231F1D] hover:border-[#B83A24]'
                  }`}
                >
                  <Bookmark
                    className={`w-3.5 h-3.5 ${
                      onlyFavorites ? 'fill-[#FBF7EE] text-[#FBF7EE]' : 'text-[#B83A24]'
                    }`}
                    aria-hidden="true"
                  />
                  <span>Saved in Recipe Box ({favorites.length})</span>
                </button>
              </div>
            </div>

            {/* Category Chapter Tabs */}
            <div
              className="flex flex-wrap items-center gap-2 pt-1"
              role="group"
              aria-label="Filter recipes by chapter"
            >
              <button
                type="button"
                onClick={() => setSelectedCategory('All')}
                aria-pressed={selectedCategory === 'All'}
                className={`px-3.5 py-2 rounded font-ui text-xs sm:text-sm transition-colors cursor-pointer ${
                  selectedCategory === 'All'
                    ? 'bg-[#231F1D] text-[#FBF7EE] font-semibold'
                    : 'bg-[#E7DBC6]/70 text-[#231F1D] hover:bg-[#D8C8B0]'
                }`}
              >
                All Chapters ({categoryCounts.All})
              </button>

              {RECIPE_CATEGORIES.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  aria-pressed={selectedCategory === category}
                  className={`px-3.5 py-2 rounded font-ui text-xs sm:text-sm transition-colors cursor-pointer tabular-nums ${
                    selectedCategory === category
                      ? 'bg-[#231F1D] text-[#FBF7EE] font-semibold'
                      : 'bg-[#E7DBC6]/70 text-[#231F1D] hover:bg-[#D8C8B0]'
                  }`}
                >
                  {category} ({categoryCounts[category]})
                </button>
              ))}

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={clearAllFilters}
                  className="ml-auto font-ui text-xs text-[#B83A24] hover:underline px-2 py-1 cursor-pointer"
                >
                  Reset all filters
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* RECIPE CATALOG BODY */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 py-12 lg:py-16">
        {filteredRecipes.length === 0 ? (
          <div className="max-w-lg mx-auto p-10 rounded border border-dashed border-[#B59F82] bg-[#F2E9D8]/50 text-center space-y-4">
            <BookOpen className="w-8 h-8 text-[#5A4231] mx-auto" aria-hidden="true" />
            <h2 className="font-display text-3xl text-[#231F1D]">
              No recipes match your current filter
            </h2>
            <p className="font-serif-body text-sm text-[#5A4231]">
              Try clearing your search term or switching back to All Chapters to browse all twelve
              dishes in Issue No. 14.
            </p>
            <button
              type="button"
              onClick={clearAllFilters}
              className="btn-tactile px-5 py-2.5 rounded bg-[#B83A24] text-[#FBF7EE] font-ui text-sm font-medium cursor-pointer"
            >
              Show All 12 Recipes
            </button>
          </div>
        ) : viewMode === 'ledger' ? (
          /* CLASSIFIED KITCHEN LEDGER VIEW */
          <div className="rounded border border-[#B59F82] bg-[#FBF7EE] overflow-hidden">
            <div className="hidden md:grid md:grid-cols-12 gap-4 px-6 py-3.5 bg-[#F2E9D8] border-b border-[#B59F82] font-ui text-xs font-semibold text-[#5A4231]">
              <div className="col-span-1">No.</div>
              <div className="col-span-4">Dish &amp; Larder Summary</div>
              <div className="col-span-2">Chapter</div>
              <div className="col-span-2">Timing &amp; Yield</div>
              <div className="col-span-2">Dietary Notes</div>
              <div className="col-span-1 text-right">Box</div>
            </div>

            <div className="divide-y divide-[#D8C8B0]">
              {filteredRecipes.map((recipe) => {
                const checkedCount = (checkedIngredients[recipe.id] || []).length;
                return (
                  <div
                    key={recipe.id}
                    className="ledger-row-hover p-5 md:px-6 md:py-4 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 items-center"
                  >
                    <div className="md:col-span-1 font-display text-lg text-[#B83A24] tabular-nums">
                      {recipe.indexNumber}
                    </div>

                    <div className="md:col-span-4 flex items-center gap-3.5">
                      <img
                        src={recipe.image}
                        alt={recipe.imageAlt}
                        className="w-14 h-14 rounded object-cover border border-[#D8C8B0] shrink-0"
                      />
                      <div>
                        <h2 className="font-display text-xl text-[#231F1D] leading-snug">
                          <Link
                            to={`/recipes/${recipe.slug}`}
                            className="hover:text-[#B83A24] transition-colors"
                          >
                            {recipe.title}
                          </Link>
                        </h2>
                        <p className="font-serif-body text-xs text-[#5A4231] line-clamp-1 mt-0.5">
                          {recipe.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="md:col-span-2 font-ui text-xs">
                      <span className="px-2.5 py-1 rounded bg-[#F2E9D8] border border-[#D8C8B0] text-[#231F1D] font-medium">
                        {recipe.category}
                      </span>
                    </div>

                    <div className="md:col-span-2 font-ui text-xs text-[#5A4231] tabular-nums">
                      <p className="font-medium text-[#231F1D]">{recipe.totalTime}</p>
                      <p>
                        {recipe.baseServings} {recipe.servingsLabel}
                      </p>
                      {checkedCount > 0 && (
                        <p className="text-[#4A5838] font-semibold mt-0.5">
                          {checkedCount}/{recipe.ingredients.length} prepped
                        </p>
                      )}
                    </div>

                    <div className="md:col-span-2 flex flex-wrap gap-1">
                      {recipe.dietaryNotes.slice(0, 2).map((note) => (
                        <span
                          key={note}
                          className="px-2 py-0.5 rounded bg-[#E4E8DC] text-[#4A5838] font-ui text-[11px] font-medium"
                        >
                          {note}
                        </span>
                      ))}
                    </div>

                    <div className="md:col-span-1 flex items-center justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => toggleFavorite(recipe.id, recipe.title)}
                        aria-label={
                          isFavorite(recipe.id)
                            ? `Remove ${recipe.title} from Recipe Box`
                            : `Save ${recipe.title} to Recipe Box`
                        }
                        className="p-2 rounded border border-[#D8C8B0] bg-[#FBF7EE] hover:border-[#B83A24] cursor-pointer"
                      >
                        <Bookmark
                          className={`w-4 h-4 ${
                            isFavorite(recipe.id)
                              ? 'fill-[#B83A24] text-[#B83A24]'
                              : 'text-[#5A4231]'
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* EDITORIAL COOKBOOK SPREAD & INDEX CARD VIEW */
          <div className="space-y-12">
            {filteredRecipes.map((recipe, idx) => {
              const isFeatureRow = idx % 4 === 0;
              const checkedCount = (checkedIngredients[recipe.id] || []).length;

              if (isFeatureRow) {
                return (
                  <article
                    key={recipe.id}
                    className="rounded-lg border border-[#B59F82] bg-[#F2E9D8]/50 p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                  >
                    <div className="lg:col-span-6 photo-frame overflow-hidden rounded border border-[#B59F82] bg-[#FBF7EE]">
                      <Link to={`/recipes/${recipe.slug}`}>
                        <img
                          src={recipe.image}
                          alt={recipe.imageAlt}
                          className="w-full aspect-[16/10] object-cover"
                        />
                      </Link>
                    </div>

                    <div className="lg:col-span-6 space-y-4">
                      <h2 className="font-display text-3xl sm:text-4xl text-[#231F1D] leading-[1.12]">
                        <Link
                          to={`/recipes/${recipe.slug}`}
                          className="hover:text-[#B83A24] transition-colors"
                        >
                          {recipe.title}
                        </Link>
                      </h2>

                      {/* Metadata Ledger Row AFTER Heading */}
                      <div className="flex flex-wrap items-center gap-3 py-2 border-y border-[#D8C8B0] font-ui text-xs text-[#5A4231] tabular-nums">
                        <span className="font-semibold text-[#B83A24]">{recipe.indexNumber}</span>
                        <span>·</span>
                        <span className="font-medium text-[#231F1D]">{recipe.category}</span>
                        <span>·</span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#4A5838]" aria-hidden="true" />
                          {recipe.totalTime}
                        </span>
                        <span>·</span>
                        <span className="inline-flex items-center gap-1">
                          <Users className="w-3.5 h-3.5 text-[#4A5838]" aria-hidden="true" />
                          {recipe.baseServings} {recipe.servingsLabel}
                        </span>
                      </div>

                      <p className="font-serif-body text-base text-[#231F1D] leading-relaxed">
                        {recipe.subtitle}
                      </p>

                      {/* Handwritten Margin Preview */}
                      <div className="recipe-index-card p-4 rounded border border-[#D8C8B0]">
                        <p className="font-hand text-base text-[#231F1D]">
                          “{recipe.handwrittenNote.text}”
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        {recipe.dietaryNotes.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded bg-[#E4E8DC] text-[#4A5838] font-ui text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                        {checkedCount > 0 && (
                          <span className="px-2.5 py-0.5 rounded bg-[#B83A24]/15 text-[#B83A24] font-ui text-xs font-semibold tabular-nums">
                            {checkedCount} of {recipe.ingredients.length} ingredients checked
                          </span>
                        )}
                      </div>

                      <div className="pt-3 flex flex-wrap items-center gap-3">
                        <Link
                          to={`/recipes/${recipe.slug}`}
                          className="btn-tactile inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#231F1D] hover:bg-[#B83A24] text-[#FBF7EE] font-ui text-sm font-medium"
                        >
                          <span>Open Recipe Spread</span>
                          <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </Link>
                        <button
                          type="button"
                          onClick={() => toggleFavorite(recipe.id, recipe.title)}
                          className={`btn-tactile inline-flex items-center gap-1.5 px-4 py-2.5 rounded border font-ui text-xs font-semibold cursor-pointer ${
                            isFavorite(recipe.id)
                              ? 'bg-[#FBF7EE] border-[#B83A24] text-[#B83A24]'
                              : 'bg-[#FBF7EE] border-[#B59F82] text-[#231F1D] hover:border-[#B83A24]'
                          }`}
                        >
                          <Bookmark
                            className={`w-3.5 h-3.5 ${
                              isFavorite(recipe.id) ? 'fill-[#B83A24] text-[#B83A24]' : ''
                            }`}
                            aria-hidden="true"
                          />
                          <span>{isFavorite(recipe.id) ? 'Saved in Box' : 'Save Card'}</span>
                        </button>
                      </div>
                    </div>
                  </article>
                );
              }

              return null;
            })}

            {/* Two-Column Cookbook Entries for Non-Feature Dishes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredRecipes
                .filter((_, idx) => idx % 4 !== 0)
                .map((recipe) => {
                  const checkedCount = (checkedIngredients[recipe.id] || []).length;
                  return (
                    <article
                      key={recipe.id}
                      className="rounded border border-[#D8C8B0] bg-[#FBF7EE] p-6 flex flex-col justify-between space-y-5 shadow-[0_8px_24px_-14px_rgba(35,31,29,0.12)]"
                    >
                      <div className="space-y-4">
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

                        <h2 className="font-display text-2xl sm:text-3xl text-[#231F1D] leading-snug">
                          <Link
                            to={`/recipes/${recipe.slug}`}
                            className="hover:text-[#B83A24] transition-colors"
                          >
                            {recipe.title}
                          </Link>
                        </h2>

                        {/* Metadata Ledger Row AFTER Heading */}
                        <div className="flex flex-wrap items-center gap-2.5 py-2 border-y border-[#E7DBC6] font-ui text-xs text-[#5A4231] tabular-nums">
                          <span className="font-semibold text-[#B83A24]">{recipe.indexNumber}</span>
                          <span>·</span>
                          <span className="font-medium text-[#231F1D]">{recipe.category}</span>
                          <span>·</span>
                          <span>{recipe.totalTime}</span>
                          <span>·</span>
                          <span>
                            {recipe.baseServings} {recipe.servingsLabel}
                          </span>
                        </div>

                        <p className="font-serif-body text-sm text-[#5A4231] leading-relaxed">
                          {recipe.subtitle}
                        </p>

                        <div className="flex flex-wrap gap-1.5">
                          {recipe.dietaryNotes.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded bg-[#E4E8DC] text-[#4A5838] font-ui text-[11px] font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                          {checkedCount > 0 && (
                            <span className="px-2 py-0.5 rounded bg-[#B83A24]/15 text-[#B83A24] font-ui text-[11px] font-semibold tabular-nums">
                              {checkedCount}/{recipe.ingredients.length} prepped
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="pt-3 border-t border-[#E7DBC6] flex items-center justify-between gap-4">
                        <Link
                          to={`/recipes/${recipe.slug}`}
                          className="font-ui text-xs font-semibold text-[#B83A24] hover:underline inline-flex items-center gap-1.5"
                        >
                          <span>Cook This Recipe</span>
                          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </Link>

                        <button
                          type="button"
                          onClick={() => toggleFavorite(recipe.id, recipe.title)}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded border font-ui text-xs font-medium cursor-pointer ${
                            isFavorite(recipe.id)
                              ? 'bg-[#F2E9D8] border-[#B83A24] text-[#B83A24]'
                              : 'bg-[#FBF7EE] border-[#D8C8B0] text-[#5A4231] hover:border-[#B83A24]'
                          }`}
                        >
                          <Bookmark
                            className={`w-3.5 h-3.5 ${
                              isFavorite(recipe.id) ? 'fill-[#B83A24] text-[#B83A24]' : ''
                            }`}
                            aria-hidden="true"
                          />
                          <span>{isFavorite(recipe.id) ? 'Saved' : 'Save Card'}</span>
                        </button>
                      </div>
                    </article>
                  );
                })}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

