import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Bookmark, BookOpen, Utensils, X, ArrowUpRight, Menu } from 'lucide-react';
import { useKitchen } from '../context/KitchenContext';
import { RECIPES } from '../data/recipes';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { favorites, toggleFavorite } = useKitchen();
  const [isBoxOpen, setIsBoxOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close menus and scroll to top on route change
  useEffect(() => {
    setIsBoxOpen(false);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [location.pathname]);

  // Escape key closes drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsBoxOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const savedRecipes = RECIPES.filter((r) => favorites.includes(r.id));
  const isRecipeDetailActive = location.pathname.startsWith('/recipes/') && location.pathname !== '/recipes';

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF7EE] text-[#231F1D]">
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-[#231F1D] focus:text-[#FBF7EE] focus:px-4 focus:py-2.5 focus:rounded font-ui text-sm font-medium shadow-lg"
      >
        Skip to main content
      </a>

      {/* Top Periodical Ledger Bar */}
      <div className="border-b border-[#D8C8B0] bg-[#F2E9D8] text-[#5A4231] font-ui text-xs">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 py-2 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 tabular-nums">
            <span className="font-semibold text-[#231F1D]">Issue No. 14</span>
            <span aria-hidden="true" className="text-[#B59F82]">·</span>
            <span className="hidden sm:inline">The Autumn &amp; Late Harvest Larder</span>
            <span className="sm:hidden">Late Harvest</span>
          </div>

          <p className="hidden md:block font-serif-body italic text-[#5A4231] text-xs tracking-normal">
            “Good food is better when there’s room for one more.”
          </p>

          <div className="flex items-center gap-4">
            <Link
              to="/stories#share-recipe"
              className="hidden sm:inline-flex items-center gap-1 text-[#5A4231] hover:text-[#B83A24] underline decoration-[#D8C8B0] underline-offset-4 transition-colors"
            >
              Contribute a Family Card
            </Link>
            <button
              type="button"
              onClick={() => setIsBoxOpen(true)}
              aria-expanded={isBoxOpen}
              aria-controls="recipe-box-drawer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#E7DBC6]/80 hover:bg-[#D8C8B0] text-[#231F1D] font-medium transition-colors cursor-pointer min-h-[28px]"
            >
              <Bookmark className="w-3.5 h-3.5 text-[#B83A24] fill-[#B83A24]" aria-hidden="true" />
              <span>Recipe Box</span>
              <span className="tabular-nums px-1.5 py-0.2 bg-[#B83A24] text-[#FBF7EE] rounded-full text-[11px] font-semibold">
                {favorites.length}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Editorial Masthead & Navigation */}
      <header className="sticky top-0 z-30 bg-[#FBF7EE]/95 backdrop-blur-sm border-b border-[#D8C8B0]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between py-4 lg:py-5">
            {/* Brand Masthead */}
            <Link
              to="/"
              className="group flex flex-col focus-visible:outline-2 focus-visible:outline-[#B83A24]"
            >
              <span className="font-display text-2xl sm:text-3xl lg:text-[2.15rem] font-normal tracking-[-0.025em] text-[#231F1D] leading-none">
                The Sunday Table
              </span>
              <span className="font-ui text-[11px] text-[#6E5441] mt-1 tracking-wide">
                Food, Memory &amp; the People We Gather Around
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-1 xl:gap-2">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `px-4 py-2 rounded font-ui text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#F2E9D8] text-[#B83A24] border border-[#D8C8B0]'
                      : 'text-[#231F1D] hover:bg-[#F2E9D8]/60 hover:text-[#B83A24]'
                  }`
                }
              >
                Gather Around
              </NavLink>

              <NavLink
                to="/recipes"
                end
                className={({ isActive }) =>
                  `px-4 py-2 rounded font-ui text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#F2E9D8] text-[#B83A24] border border-[#D8C8B0]'
                      : 'text-[#231F1D] hover:bg-[#F2E9D8]/60 hover:text-[#B83A24]'
                  }`
                }
              >
                The Recipe Book
                <span className="ml-1.5 text-xs text-[#6E5441] tabular-nums">({RECIPES.length})</span>
              </NavLink>

              <Link
                to={
                  isRecipeDetailActive
                    ? location.pathname
                    : '/recipes/herb-roasted-chicken-shallots-figs'
                }
                aria-current={isRecipeDetailActive ? 'page' : undefined}
                className={`px-4 py-2 rounded font-ui text-sm font-medium transition-colors inline-flex items-center gap-1.5 ${
                  isRecipeDetailActive
                    ? 'bg-[#F2E9D8] text-[#B83A24] border border-[#D8C8B0]'
                    : 'text-[#231F1D] hover:bg-[#F2E9D8]/60 hover:text-[#B83A24]'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5 text-[#4A5838]" aria-hidden="true" />
                <span>At the Table</span>
              </Link>

              <NavLink
                to="/stories"
                className={({ isActive }) =>
                  `px-4 py-2 rounded font-ui text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#F2E9D8] text-[#B83A24] border border-[#D8C8B0]'
                      : 'text-[#231F1D] hover:bg-[#F2E9D8]/60 hover:text-[#B83A24]'
                  }`
                }
              >
                Stories &amp; About
              </NavLink>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-nav-panel"
                aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                className="p-2.5 rounded border border-[#D8C8B0] bg-[#F2E9D8] text-[#231F1D] min-w-[44px] min-h-[44px] inline-flex items-center justify-center cursor-pointer"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" aria-hidden="true" />
                ) : (
                  <Menu className="w-5 h-5" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Panel */}
          {isMobileMenuOpen && (
            <nav
              id="mobile-nav-panel"
              aria-label="Mobile Navigation"
              className="lg:hidden py-4 border-t border-[#D8C8B0] flex flex-col gap-1.5 font-ui"
            >
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `px-4 py-3 rounded text-base font-medium ${
                    isActive
                      ? 'bg-[#F2E9D8] text-[#B83A24] border border-[#D8C8B0]'
                      : 'text-[#231F1D] hover:bg-[#F2E9D8]/50'
                  }`
                }
              >
                1. Gather Around (Home)
              </NavLink>
              <NavLink
                to="/recipes"
                end
                className={({ isActive }) =>
                  `px-4 py-3 rounded text-base font-medium ${
                    isActive
                      ? 'bg-[#F2E9D8] text-[#B83A24] border border-[#D8C8B0]'
                      : 'text-[#231F1D] hover:bg-[#F2E9D8]/50'
                  }`
                }
              >
                2. The Recipe Book ({RECIPES.length} Recipes)
              </NavLink>
              <Link
                to={
                  isRecipeDetailActive
                    ? location.pathname
                    : '/recipes/herb-roasted-chicken-shallots-figs'
                }
                className={`px-4 py-3 rounded text-base font-medium ${
                  isRecipeDetailActive
                    ? 'bg-[#F2E9D8] text-[#B83A24] border border-[#D8C8B0]'
                    : 'text-[#231F1D] hover:bg-[#F2E9D8]/50'
                }`}
              >
                3. At the Table (Open Recipe Spread)
              </Link>
              <NavLink
                to="/stories"
                className={({ isActive }) =>
                  `px-4 py-3 rounded text-base font-medium ${
                    isActive
                      ? 'bg-[#F2E9D8] text-[#B83A24] border border-[#D8C8B0]'
                      : 'text-[#231F1D] hover:bg-[#F2E9D8]/50'
                  }`
                }
              >
                4. Stories &amp; About
              </NavLink>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content Landmark */}
      <main id="main-content" className="flex-1">
        {children}
      </main>

      {/* Slide-Over "My Recipe Box" Drawer */}
      {isBoxOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-[#231F1D]/45 backdrop-blur-[1px]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="recipe-box-title"
          id="recipe-box-drawer"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsBoxOpen(false);
          }}
        >
          <div className="w-full max-w-md bg-[#FBF7EE] border-l border-[#B59F82] h-full flex flex-col shadow-2xl">
            <div className="p-6 border-b border-[#D8C8B0] bg-[#F2E9D8] flex items-center justify-between">
              <div>
                <h2 id="recipe-box-title" className="font-display text-2xl text-[#231F1D]">
                  My Wooden Recipe Box
                </h2>
                <p className="font-ui text-xs text-[#5A4231] mt-0.5">
                  Saved index cards stored in your browser for Sunday cooking
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsBoxOpen(false)}
                aria-label="Close Recipe Box"
                className="p-2 rounded border border-[#D8C8B0] bg-[#FBF7EE] text-[#231F1D] hover:border-[#B83A24] min-w-[40px] min-h-[40px] inline-flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {savedRecipes.length === 0 ? (
                <div className="p-6 rounded border border-dashed border-[#B59F82] bg-[#F2E9D8]/50 text-center space-y-3">
                  <Utensils className="w-6 h-6 text-[#5A4231] mx-auto" aria-hidden="true" />
                  <p className="font-display text-xl text-[#231F1D]">Your recipe box is empty</p>
                  <p className="font-serif-body text-sm text-[#5A4231]">
                    Bookmark any dish across The Recipe Book to keep its card handy while you shop or cook.
                  </p>
                  <Link
                    to="/recipes"
                    onClick={() => setIsBoxOpen(false)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#B83A24] text-[#FBF7EE] font-ui text-sm font-medium"
                  >
                    Browse The Recipe Book
                  </Link>
                </div>
              ) : (
                savedRecipes.map((recipe) => (
                  <div
                    key={recipe.id}
                    className="p-4 rounded border border-[#D8C8B0] bg-[#F2E9D8]/70 flex gap-3.5 items-start"
                  >
                    <img
                      src={recipe.image}
                      alt={recipe.imageAlt}
                      className="w-20 h-20 rounded object-cover border border-[#D8C8B0] shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <Link
                        to={`/recipes/${recipe.slug}`}
                        onClick={() => setIsBoxOpen(false)}
                        className="font-display text-lg text-[#231F1D] hover:text-[#B83A24] leading-snug block"
                      >
                        {recipe.title}
                      </Link>
                      <p className="font-ui text-xs text-[#5A4231] mt-1 tabular-nums">
                        {recipe.category} · {recipe.totalTime} · {recipe.baseServings} {recipe.servingsLabel}
                      </p>
                      <div className="mt-2.5 flex items-center gap-3">
                        <Link
                          to={`/recipes/${recipe.slug}`}
                          onClick={() => setIsBoxOpen(false)}
                          className="font-ui text-xs font-semibold text-[#B83A24] hover:underline inline-flex items-center gap-1"
                        >
                          Open Spread <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
                        </Link>
                        <button
                          type="button"
                          onClick={() => toggleFavorite(recipe.id, recipe.title)}
                          className="font-ui text-xs text-[#6E5441] hover:text-[#231F1D] underline cursor-pointer"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="p-5 border-t border-[#D8C8B0] bg-[#F2E9D8] flex items-center justify-between">
              <Link
                to="/recipes?filter=favorites"
                onClick={() => setIsBoxOpen(false)}
                className="w-full py-2.5 px-4 rounded bg-[#231F1D] hover:bg-[#B83A24] text-[#FBF7EE] font-ui text-sm font-medium text-center transition-colors"
              >
                View All Saved Cards in Recipe Book
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Print-Inspired Cookbook Back-Cover Footer */}
      <footer className="border-t border-[#B59F82] bg-[#F2E9D8] text-[#231F1D] mt-20">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-[#D8C8B0]">
            {/* Colophon & Tagline */}
            <div className="lg:col-span-5 space-y-4">
              <h2 className="font-display text-3xl text-[#231F1D] tracking-tight">
                The Sunday Table
              </h2>
              <p className="font-display italic text-xl text-[#B83A24]">
                “Good food is better when there’s room for one more.”
              </p>
              <p className="font-serif-body text-sm text-[#5A4231] leading-relaxed max-w-md">
                An independent quarterly food and culture publication dedicated to family traditions,
                regional ingredients, oil-stained recipe cards, and the people who gather around the
                home kitchen table. Printed on unbleached cotton rag paper and published digitally
                four times a year.
              </p>
            </div>

            {/* Table of Contents */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="font-display text-xl text-[#231F1D] border-b border-[#D8C8B0] pb-2">
                In This Issue
              </h3>
              <ul className="space-y-2 font-ui text-sm">
                <li>
                  <Link to="/" className="text-[#5A4231] hover:text-[#B83A24] transition-colors">
                    I. Gather Around — Issue Manifesto
                  </Link>
                </li>
                <li>
                  <Link to="/recipes" className="text-[#5A4231] hover:text-[#B83A24] transition-colors">
                    II. The Recipe Book — 12 Tested Dishes
                  </Link>
                </li>
                <li>
                  <Link
                    to="/recipes/herb-roasted-chicken-shallots-figs"
                    className="text-[#5A4231] hover:text-[#B83A24] transition-colors"
                  >
                    III. At the Table — Sunday Centerpiece Spread
                  </Link>
                </li>
                <li>
                  <Link
                    to="/recipes/country-hearth-sourdough-boule"
                    className="text-[#5A4231] hover:text-[#B83A24] transition-colors"
                  >
                    IV. Saturday-Night Country Levain
                  </Link>
                </li>
                <li>
                  <Link to="/stories" className="text-[#5A4231] hover:text-[#B83A24] transition-colors">
                    V. Stories, Marginalia &amp; Submissions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Kitchen Inside-Cover Larder Reference */}
            <div className="lg:col-span-4 space-y-3">
              <h3 className="font-display text-xl text-[#231F1D] border-b border-[#D8C8B0] pb-2">
                Inside-Cover Kitchen Ledger
              </h3>
              <div className="bg-[#FBF7EE] p-4 rounded border border-[#D8C8B0] font-ui text-xs text-[#5A4231] space-y-2 tabular-nums">
                <div className="flex justify-between border-b border-[#E7DBC6] pb-1.5">
                  <span className="font-semibold text-[#231F1D]">Moderate Oven</span>
                  <span>180°C · 350°F · Gas Mark 4</span>
                </div>
                <div className="flex justify-between border-b border-[#E7DBC6] pb-1.5">
                  <span className="font-semibold text-[#231F1D]">Roasting Oven</span>
                  <span>220°C · 425°F · Gas Mark 7</span>
                </div>
                <div className="flex justify-between border-b border-[#E7DBC6] pb-1.5">
                  <span className="font-semibold text-[#231F1D]">Bread Hearth (Dutch Oven)</span>
                  <span>245°C · 475°F · Gas Mark 9</span>
                </div>
                <div className="flex justify-between pt-0.5">
                  <span className="font-semibold text-[#231F1D]">1 Cup Unbleached Flour</span>
                  <span>125 grams (weighed, never scooped)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-ui text-xs text-[#5A4231]">
            <p>
              © {new Date().getFullYear()} The Sunday Table Quarterly. Typeset in EB Garamond, Literata &amp; Karla.
            </p>
            <p className="tabular-nums">
              ISSN 2791-0419 · Autumn / Late Harvest Edition · Printed &amp; Bound with Care
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

