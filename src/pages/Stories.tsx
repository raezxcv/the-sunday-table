import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, BookOpen, CheckCircle2, Feather, AlertCircle } from 'lucide-react';
import { EDITORIAL_STORIES } from '../data/stories';
import { useKitchen } from '../context/KitchenContext';

export const Stories: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { communityMemories, addCommunityMemory } = useKitchen();

  const initialStorySlug = searchParams.get('story') || EDITORIAL_STORIES[0].slug;
  const [activeStorySlug, setActiveStorySlug] = useState<string>(initialStorySlug);

  // Form State for "Leave a Family Recipe Card at Our Table"
  const [contributorName, setContributorName] = useState('');
  const [city, setCity] = useState('');
  const [dishTitle, setDishTitle] = useState('');
  const [seasonTag, setSeasonTag] = useState('Autumn Ritual');
  const [storyExcerpt, setStoryExcerpt] = useState('');
  const [handwrittenTip, setHandwrittenTip] = useState('');
  const [formError, setFormError] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const paramSlug = searchParams.get('story');
    if (paramSlug && EDITORIAL_STORIES.some((s) => s.slug === paramSlug)) {
      setActiveStorySlug(paramSlug);
    }
  }, [searchParams]);

  const activeStory =
    EDITORIAL_STORIES.find((s) => s.slug === activeStorySlug) || EDITORIAL_STORIES[0];

  const handleSelectStory = (slug: string) => {
    setActiveStorySlug(slug);
    setSearchParams({ story: slug });
    const readerEl = document.getElementById('story-reader');
    if (readerEl) {
      readerEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubmitMemory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contributorName.trim() || !dishTitle.trim() || !storyExcerpt.trim()) {
      setFormError(
        'Please include your name, the name of the dish, and the memory or tradition behind it.'
      );
      return;
    }
    setFormError(null);
    addCommunityMemory({
      contributorName: contributorName.trim(),
      city: city.trim() || 'Home Kitchen',
      dishTitle: dishTitle.trim(),
      seasonTag,
      storyExcerpt: storyExcerpt.trim(),
      handwrittenTip:
        handwrittenTip.trim() || 'Taste for salt before carrying the dish to the table.',
    });
    setContributorName('');
    setCity('');
    setDishTitle('');
    setStoryExcerpt('');
    setHandwrittenTip('');
    setFormSubmitted(true);
  };

  return (
    <div className="page-enter">
      {/* SECTION 1: PUBLICATION PHILOSOPHY & MASTHEAD HERO */}
      <section className="border-b border-[#D8C8B0] bg-[#F2E9D8]/60">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 py-10 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] text-[#231F1D] leading-[1.06] tracking-[-0.025em]">
                Stories, Memory &amp; Our Philosophy
              </h1>

              <p className="font-display italic text-2xl text-[#B83A24]">
                “Good food is better when there’s room for one more.”
              </p>

              <p className="font-serif-body text-base sm:text-lg text-[#231F1D] leading-[1.74] reading-measure">
                We started <strong>The Sunday Table</strong> because too much contemporary food
                writing treats cooking as either a thirty-minute chore to be optimized or a
                competitive restaurant spectacle. Yet the meals that stay with us for decades are
                almost always ordinary home suppers: a pot of white beans simmered while rain taps
                the window, a loaf of bread carried across town in a linen towel, or a grandmother’s
                index card with an olive oil ring in the corner.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-ui text-xs">
                <div className="p-3.5 rounded bg-[#FBF7EE] border border-[#D8C8B0]">
                  <strong className="text-[#231F1D] block text-sm font-display">
                    No Algorithms
                  </strong>
                  <span className="text-[#5A4231]">
                    Every essay and recipe is written and tested in real home kitchens.
                  </span>
                </div>
                <div className="p-3.5 rounded bg-[#FBF7EE] border border-[#D8C8B0]">
                  <strong className="text-[#231F1D] block text-sm font-display">
                    Heirloom Craft
                  </strong>
                  <span className="text-[#5A4231]">
                    Designed to be propped open on a flour-dusted wooden counter.
                  </span>
                </div>
                <div className="p-3.5 rounded bg-[#FBF7EE] border border-[#D8C8B0]">
                  <strong className="text-[#231F1D] block text-sm font-display">
                    Open Table
                  </strong>
                  <span className="text-[#5A4231]">
                    Reader family cards and regional traditions published in every issue.
                  </span>
                </div>
              </div>
            </div>

            <figure className="lg:col-span-6 space-y-2.5">
              <div className="photo-frame overflow-hidden rounded border border-[#B59F82] bg-[#FBF7EE] shadow-[0_14px_34px_-14px_rgba(35,31,29,0.18)]">
                <img
                  src="/images/sunday-table/rustic-kitchen-interior.jpg"
                  alt="Sunlit rustic home kitchen interior with open oak shelving, stoneware plates, jars of dried beans, hanging herbs, and a worn wooden farm table"
                  className="w-full aspect-[16/10] object-cover"
                />
              </div>
              <figcaption className="font-ui text-xs text-[#5A4231] flex justify-between">
                <span>
                  The editorial test kitchen: limewashed plaster, scrubbed oak, and late-morning
                  light.
                </span>
                <span className="tabular-nums text-[#6E5441]">Issue No. 14</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE FIVE EDITORIAL STORIES — MAGAZINE READER & CHAPTER INDEX */}
      <section id="story-reader" className="border-b border-[#D8C8B0]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left 4 Columns: Table of Five Stories */}
            <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-4">
              <div className="pb-3 border-b border-[#D8C8B0]">
                <h2 className="font-display text-2xl sm:text-3xl text-[#231F1D]">
                  Five Essays in Issue No. 14
                </h2>
                <p className="font-ui text-xs text-[#5A4231] mt-0.5">
                  Select any essay below to read the full feature spread
                </p>
              </div>

              <div className="space-y-2.5" role="tablist" aria-label="Editorial essays">
                {EDITORIAL_STORIES.map((story) => {
                  const isCurrent = story.slug === activeStory.slug;
                  return (
                    <button
                      key={story.id}
                      type="button"
                      role="tab"
                      aria-selected={isCurrent}
                      onClick={() => handleSelectStory(story.slug)}
                      className={`w-full text-left p-4 rounded border transition-colors cursor-pointer space-y-1.5 ${
                        isCurrent
                          ? 'bg-[#F2E9D8] border-[#B83A24] shadow-sm'
                          : 'bg-[#FBF7EE] border-[#D8C8B0] hover:bg-[#F2E9D8]/50'
                      }`}
                    >
                      <h3 className="font-display text-xl text-[#231F1D] leading-snug">
                        {story.title}
                      </h3>
                      <p className="font-ui text-xs text-[#5A4231] flex items-center justify-between">
                        <span>
                          {story.theme} · {story.author}
                        </span>
                        <span className="tabular-nums text-[#B83A24] font-semibold">
                          {story.readingTime}
                        </span>
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Masthead Credits Box */}
              <div className="p-5 rounded border border-[#D8C8B0] bg-[#F2E9D8]/60 space-y-2.5 font-ui text-xs text-[#5A4231]">
                <h3 className="font-display text-xl text-[#231F1D]">
                  Editorial Masthead
                </h3>
                <p>
                  <strong className="text-[#231F1D]">Editor-in-Chief:</strong> Clara Bellini-Vance
                </p>
                <p>
                  <strong className="text-[#231F1D]">Art Direction &amp; Photography:</strong> Julian
                  Mercer &amp; Studio
                </p>
                <p>
                  <strong className="text-[#231F1D]">Larder &amp; Recipe Testing:</strong> Soraia
                  Lindqvist, Helena Vermeer, Thomas Alverez
                </p>
              </div>
            </aside>

            {/* Right 8 Columns: Full Magazine Feature Spread */}
            <article className="lg:col-span-8 rounded-lg border border-[#B59F82] bg-[#FBF7EE] p-6 sm:p-10 lg:p-12 space-y-8 shadow-[0_14px_34px_-16px_rgba(35,31,29,0.14)]">
              <header className="space-y-4 pb-6 border-b border-[#D8C8B0]">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] text-[#231F1D] leading-[1.08] tracking-[-0.02em]">
                  {activeStory.title}
                </h2>

                <p className="font-serif-body text-lg text-[#5A4231] leading-relaxed">
                  {activeStory.subtitle}
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2 font-ui text-xs text-[#5A4231] tabular-nums">
                  <span className="px-2.5 py-0.5 rounded bg-[#E4E8DC] text-[#4A5838] font-semibold">
                    {activeStory.theme}
                  </span>
                  <span>·</span>
                  <span>
                    Words by <strong className="text-[#231F1D]">{activeStory.author}</strong> (
                    {activeStory.authorLocation})
                  </span>
                  <span>·</span>
                  <span>{activeStory.readingTime}</span>
                </div>
              </header>

              {/* Lead Essay Photograph */}
              <figure className="space-y-2">
                <div className="overflow-hidden rounded border border-[#D8C8B0]">
                  <img
                    src={activeStory.heroImage}
                    alt={activeStory.heroImageAlt}
                    className="w-full aspect-[16/10] object-cover"
                  />
                </div>
                <figcaption className="font-ui text-xs text-[#5A4231] italic">
                  {activeStory.heroCaption}
                </figcaption>
              </figure>

              {/* Editorial Columns & Pull Quote */}
              <div className="space-y-5 font-serif-body text-base sm:text-[1.1rem] text-[#231F1D] leading-[1.78] reading-measure">
                <p className="first-letter:font-display first-letter:text-5xl first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:text-[#B83A24]">
                  {activeStory.paragraphs[0]}
                </p>
                <p>{activeStory.paragraphs[1]}</p>

                {/* Pull Quote + Handwritten Margin Slip */}
                <div className="my-8 p-6 rounded bg-[#F2E9D8] border border-[#B59F82] space-y-3">
                  <blockquote className="font-display italic text-2xl text-[#231F1D] leading-snug">
                    “{activeStory.pullQuote}”
                  </blockquote>
                  <p className="font-hand text-base text-[#B83A24] pt-1">
                    {activeStory.handwrittenMargin}
                  </p>
                </div>

                {activeStory.paragraphs.slice(2).map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
              </div>

              {/* Secondary Photograph & Companion Recipe Link */}
              <div className="pt-6 border-t border-[#D8C8B0] grid grid-cols-1 sm:grid-cols-12 gap-6 items-center bg-[#F2E9D8]/60 p-5 rounded border">
                <img
                  src={activeStory.secondaryImage}
                  alt={activeStory.secondaryCaption}
                  className="sm:col-span-4 w-full aspect-[4/3] object-cover rounded border border-[#D8C8B0]"
                />
                <div className="sm:col-span-8 space-y-2">
                  <h3 className="font-display text-2xl text-[#231F1D]">
                    Cook the Companion Recipe from This Essay
                  </h3>
                  <p className="font-serif-body text-sm text-[#5A4231]">
                    {activeStory.relatedRecipeTitle}
                  </p>
                  <Link
                    to={`/recipes/${activeStory.relatedRecipeSlug}`}
                    className="btn-tactile inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#B83A24] hover:bg-[#8F2917] text-[#FBF7EE] font-ui text-xs font-semibold mt-1"
                  >
                    <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Open Recipe Spread</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* SECTION 3: READER SUBMISSION INVITATION & COMMUNITY ARCHIVE */}
      <section id="share-recipe" className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left 6 Columns: Submission Invitation Form */}
          <div className="lg:col-span-6 rounded-lg border border-[#B59F82] bg-[#F2E9D8] p-6 sm:p-8 lg:p-10 space-y-6">
            <div className="space-y-2">
              <h2 className="font-display text-3xl sm:text-4xl text-[#231F1D] flex items-center gap-2.5">
                <Feather className="w-6 h-6 text-[#B83A24] shrink-0" aria-hidden="true" />
                <span>Leave a Family Recipe Card at Our Table</span>
              </h2>
              <p className="font-serif-body text-sm text-[#5A4231] leading-relaxed">
                We collect reader food memories, regional Sunday rituals, and the unwritten kitchen
                notes passed down between generations. Share yours below to add it to our reader
                table archive.
              </p>
            </div>

            {formSubmitted && (
              <div
                role="status"
                className="p-4 rounded bg-[#E4E8DC] border border-[#4A5838] text-[#231F1D] flex items-start gap-3 font-ui text-xs"
              >
                <CheckCircle2 className="w-5 h-5 text-[#4A5838] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <strong className="block text-sm">Thank you for pulling up a chair.</strong>
                  <span>
                    Your recipe memory has been pinned to the Community Table Archive on the right
                    and saved in your browser.
                  </span>
                </div>
              </div>
            )}

            {formError && (
              <div
                role="alert"
                className="p-3.5 rounded bg-[#B83A24]/10 border border-[#B83A24] text-[#8F2917] flex items-center gap-2.5 font-ui text-xs font-medium"
              >
                <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>{formError}</span>
              </div>
            )}

            <form onSubmit={handleSubmitMemory} noValidate className="space-y-4 font-ui text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contributor-name"
                    className="block font-semibold text-[#231F1D] text-xs mb-1.5"
                  >
                    Your Name (or Family Name) *
                  </label>
                  <input
                    id="contributor-name"
                    type="text"
                    required
                    value={contributorName}
                    onChange={(e) => setContributorName(e.target.value)}
                    placeholder="e.g., Elena & Marco Rossi"
                    className="w-full px-3.5 py-2.5 rounded border border-[#B59F82] bg-[#FBF7EE] text-[#231F1D]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contributor-city"
                    className="block font-semibold text-[#231F1D] text-xs mb-1.5"
                  >
                    City or Kitchen Origin
                  </label>
                  <input
                    id="contributor-city"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g., Bologna / Chicago"
                    className="w-full px-3.5 py-2.5 rounded border border-[#B59F82] bg-[#FBF7EE] text-[#231F1D]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="dish-title"
                    className="block font-semibold text-[#231F1D] text-xs mb-1.5"
                  >
                    Name of the Dish or Ritual *
                  </label>
                  <input
                    id="dish-title"
                    type="text"
                    required
                    value={dishTitle}
                    onChange={(e) => setDishTitle(e.target.value)}
                    placeholder="e.g., Aunt Rosa’s Sunday Fennel & Pork Ragù"
                    className="w-full px-3.5 py-2.5 rounded border border-[#B59F82] bg-[#FBF7EE] text-[#231F1D]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="season-tag"
                    className="block font-semibold text-[#231F1D] text-xs mb-1.5"
                  >
                    Season
                  </label>
                  <select
                    id="season-tag"
                    value={seasonTag}
                    onChange={(e) => setSeasonTag(e.target.value)}
                    className="w-full px-3 py-2.5 rounded border border-[#B59F82] bg-[#FBF7EE] text-[#231F1D]"
                  >
                    <option value="Autumn Ritual">Autumn Ritual</option>
                    <option value="Winter Table">Winter Table</option>
                    <option value="Spring Gathering">Spring Gathering</option>
                    <option value="Summer Harvest">Summer Harvest</option>
                    <option value="Year-Round">Year-Round</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="story-excerpt"
                  className="block font-semibold text-[#231F1D] text-xs mb-1.5"
                >
                  The Memory Behind the Meal *
                </label>
                <textarea
                  id="story-excerpt"
                  rows={4}
                  required
                  value={storyExcerpt}
                  onChange={(e) => setStoryExcerpt(e.target.value)}
                  placeholder="Tell us who cooked it, what the kitchen smelled like, and why people gathered around it..."
                  className="w-full px-3.5 py-2.5 rounded border border-[#B59F82] bg-[#FBF7EE] text-[#231F1D] font-serif-body text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="handwritten-tip"
                  className="block font-semibold text-[#231F1D] text-xs mb-1.5"
                >
                  One Unwritten Margin Tip (The secret that makes it work)
                </label>
                <input
                  id="handwritten-tip"
                  type="text"
                  value={handwrittenTip}
                  onChange={(e) => setHandwrittenTip(e.target.value)}
                  placeholder="e.g., Always add a splash of pasta water and let it rest five minutes covered."
                  className="w-full px-3.5 py-2.5 rounded border border-[#B59F82] bg-[#FBF7EE] text-[#231F1D]"
                />
              </div>

              <button
                type="submit"
                className="btn-tactile w-full sm:w-auto px-6 py-3 rounded bg-[#B83A24] hover:bg-[#8F2917] text-[#FBF7EE] font-ui text-sm font-semibold cursor-pointer"
              >
                Pin Card to the Sunday Table Archive
              </button>
            </form>
          </div>

          {/* Right 6 Columns: Reader Index Cards Archive */}
          <div className="lg:col-span-6 space-y-6">
            <div className="pb-3 border-b border-[#D8C8B0]">
              <h2 className="font-display text-3xl text-[#231F1D]">
                Reader Index Cards ({communityMemories.length})
              </h2>
              <p className="font-serif-body text-sm text-[#5A4231] mt-0.5">
                Shared meals and handwritten kitchen wisdom contributed by readers of The Sunday
                Table.
              </p>
            </div>

            <div className="space-y-5">
              {communityMemories.map((card) => (
                <article
                  key={card.id}
                  className="recipe-index-card p-6 rounded border border-[#B59F82] space-y-3"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-2xl text-[#231F1D]">
                      {card.dishTitle}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded bg-[#E4E8DC] text-[#4A5838] font-ui text-xs font-medium">
                      {card.seasonTag}
                    </span>
                  </div>

                  <p className="font-ui text-xs text-[#5A4231]">
                    From the table of <strong className="text-[#231F1D]">{card.contributorName}</strong>{' '}
                    · {card.city} · {card.dateAdded}
                  </p>

                  <p className="font-serif-body text-sm text-[#231F1D] leading-relaxed">
                    {card.storyExcerpt}
                  </p>

                  <div className="pt-2 border-t border-[#D8C8B0]/80">
                    <p className="font-hand text-base text-[#B83A24]">
                      “{card.handwrittenTip}”
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

