export interface EditorialStory {
  id: string;
  slug: string;
  issueNumber: string;
  theme: 'Family Recipes' | 'Food Traditions' | 'Cooking for Friends' | 'Seasonal Ingredients' | 'Meal Memories';
  title: string;
  subtitle: string;
  author: string;
  authorLocation: string;
  readingTime: string;
  datePublished: string;
  heroImage: string;
  heroImageAlt: string;
  heroCaption: string;
  secondaryImage: string;
  secondaryCaption: string;
  pullQuote: string;
  handwrittenMargin: string;
  relatedRecipeSlug: string;
  relatedRecipeTitle: string;
  paragraphs: string[];
}

export interface CommunityMemory {
  id: string;
  contributorName: string;
  city: string;
  dishTitle: string;
  storyExcerpt: string;
  handwrittenTip: string;
  seasonTag: string;
  dateAdded: string;
}

export const EDITORIAL_STORIES: EditorialStory[] = [
  {
    id: 'marginalia-in-blue-ink',
    slug: 'marginalia-in-blue-ink',
    issueNumber: 'Essay I · Family Recipes',
    theme: 'Family Recipes',
    title: 'Marginalia in Blue Ink: What the Stains on an Index Card Remember',
    subtitle: 'Printed cookbooks tell you how a dish ought to behave in an ideal kitchen. Handwritten cards tell you who was standing at the stove when the rain started.',
    author: 'Clara Bellini-Vance',
    authorLocation: 'Modena & Providence',
    readingTime: '6 min read',
    datePublished: 'Issue No. 14 · Late Autumn',
    heroImage: '/images/sunday-table/handwritten-recipe-card.jpg',
    heroImageAlt: 'An aged olive-oil-stained cream index card with cursive ink beside two farm eggs, flour, thyme, and a vintage brass spoon',
    heroCaption: 'A recipe card from 1978, softened at the corners by forty winters of olive oil and damp thumbs.',
    secondaryImage: '/images/sunday-table/homemade-pasta-plate.jpg',
    secondaryCaption: 'Sunday pappardelle, rolled thin on the same walnut board and dressed with dried porcini ragù.',
    pullQuote: 'A recipe becomes an heirloom the first time someone crosses out a measurement in pencil and writes “too dry—add another yolk” beside it.',
    handwrittenMargin: '“Use three eggs and two extra yolks if the flour feels thirsty in November.”',
    relatedRecipeSlug: 'handmade-pappardelle-porcini-ragu',
    relatedRecipeTitle: 'Hand-Cut Egg Pappardelle with Slow Tomato & Porcini Ragù',
    paragraphs: [
      'Inside the cedar box on the top shelf of my pantry sit seventy-four ruled three-by-five cards, bound together not by subject or alphabet, but by a faded red rubber band that gave up its elasticity during the first Bush administration. Most of the cards are written in my grandmother Elena’s slanting fountain-pen script, though halfway down the stack my mother’s broader blue ballpoint interrupts to translate handfuls into cups.',
      'You can tell without reading a single word which recipes actually fed our family and which ones were copied down out of polite admiration at a neighbor’s bridge night. The polite recipes remain ivory-white and crisp as bank stationery. The real ones—the Sunday porcini ragù, the almond fig tart, the fennel-seed roast chicken—are translucent at the bottom right corner where generations of olive-oiled thumbs held them flat against the counter.',
      'What I love most about a handwritten card is its refusal to pretend that ingredients are standardized industrial parts. Where a modern recipe specifies “300 grams Tipo 00 flour,” Elena wrote: “Enough flour to drink three dark eggs and two yolks until the dough stops sticking to your wedding ring.” She knew that flour in August behaves differently from flour in a drafty November kitchen with the radiator hissing.',
      'Every time I roll pappardelle on Sunday afternoon, I set her card beside the brass measuring spoon even though I know the proportions by heart. Setting the card out is how I invite her to stand beside the butcher block while the dried mushrooms steep.'
    ]
  },
  {
    id: 'the-four-pm-kitchen-quiet',
    slug: 'the-four-pm-kitchen-quiet',
    issueNumber: 'Essay II · Food Traditions',
    theme: 'Food Traditions',
    title: 'The 4 P.M. Kitchen Quiet: Why Sunday Supper Begins Two Hours Before Anyone Arrives',
    subtitle: 'Before the doorbell rings and the wine glasses are set out, there is an hour of chopping shallots in late-afternoon window light that belongs solely to the cook.',
    author: 'Julian Mercer',
    authorLocation: 'Hudson Valley',
    readingTime: '5 min read',
    datePublished: 'Issue No. 14 · Late Autumn',
    heroImage: '/images/sunday-table/home-kitchen-prep.jpg',
    heroImageAlt: 'A home cook in a washed olive-green linen apron finely chopping fresh parsley and shallots on a thick wooden butcher block',
    heroCaption: 'Four o’clock in November: the last low slant of daylight across the butcher block before the lamps are turned on.',
    secondaryImage: '/images/sunday-table/rustic-kitchen-interior.jpg',
    secondaryCaption: 'The kitchen in stillness before the table is cleared for company.',
    pullQuote: 'Cooking for people you love is not a performance at seven o’clock; it is a quiet ritual that starts at four when the house is still.',
    handwrittenMargin: '“Sharp knife, dry board, cold wine in the glass, onions on low heat.”',
    relatedRecipeSlug: 'herb-roasted-chicken-shallots-figs',
    relatedRecipeTitle: 'Cast-Iron Roast Chicken with Caramelized Shallots & Late Figs',
    paragraphs: [
      'People who do not like to cook often imagine that hosting Sunday dinner is a frantic sprint between seven and eight o’clock—pots boiling over, smoke detectors chirping, and the host apologizing from behind the stove. When it feels that way, the trouble almost always started three hours earlier.',
      'In our house, the best hour of the entire week is four o’clock on Sunday afternoon. The afternoon walk is over, the phone is left in the hallway basket, and the autumn sun drops low enough to throw long amber rectangles across the scrubbed oak table. Nobody is arriving until six-thirty. There is nowhere else to be.',
      'I tie on the washed olive linen apron, sharpen the carbon-steel knife with four strokes on the ceramic rod, and begin peeling shallots. There is a rhythm to unhurried prep work that steadies the mind better than any meditation app: the dry rustle of papery skins falling into the compost bowl, the steady tap of the blade through flat-leaf parsley, the first warm breath of crushed fennel seed hitting a cast-iron pan.',
      'By the time the first knock sounds at the front door, the chicken is resting on the board, the kitchen smells of roasted figs and rosemary, and the cook has had two hours of peace to give away.'
    ]
  },
  {
    id: 'cooking-for-eight-in-a-galley-kitchen',
    slug: 'cooking-for-eight-in-a-galley-kitchen',
    issueNumber: 'Essay III · Cooking for Friends',
    theme: 'Cooking for Friends',
    title: 'Cooking for Eight in a Four-Foot Galley Kitchen',
    subtitle: 'You do not need a marble island or matching dinnerware to gather a crowd. You need one deep pot of white beans, a stack of mismatched bowls, and an extra folding chair.',
    author: 'Mateo &Soraia Lindqvist',
    authorLocation: 'Lisbon & Brooklyn',
    readingTime: '7 min read',
    datePublished: 'Issue No. 14 · Late Autumn',
    heroImage: '/images/sunday-table/shared-meal-friends.jpg',
    heroImageAlt: 'Friends gathered around a warm evening table reaching for braised white beans with greens, grilled bread, and red wine',
    heroCaption: 'When the table is narrow, passing the platters across each other’s sleeves is half the pleasure.',
    secondaryImage: '/images/sunday-table/sunday-dinner-table.jpg',
    secondaryCaption: 'Good food is better when there’s room for one more—even if one more means sitting on the piano bench.',
    pullQuote: 'Waiting until you own a bigger dining table to invite people over is waiting to live until the furniture approves.',
    handwrittenMargin: '“Always soak half a pound more beans than you think you need.”',
    relatedRecipeSlug: 'braised-cannellini-cavolo-nero-garlic-toast',
    relatedRecipeTitle: 'Braised Heirloom White Beans & Cavolo Nero over Garlic-Rubbed Toast',
    paragraphs: [
      'For six years we lived in a third-floor walk-up whose kitchen could be crossed in a single stride. If you opened the oven door all the way, it bumped gently against the refrigerator handle. We owned four speckled stoneware bowls from a potter in Alentejo, three chipped vintage plates from a thrift store, and a table that technically seated four if everyone kept their elbows polite.',
      'Yet that narrow apartment hosted more Sunday suppers for seven, eight, and nine people than any house we have lived in since. When someone called at five o’clock to ask if they could bring an visiting cousin or a new neighbor, the answer was always yes, because the menu was built to stretch.',
      'You cannot easily stretch four individual ribeye steaks when two extra friends climb the stairs. You can always stretch a heavy Dutch oven of dried heirloom white beans braised slowly with two bunches of black kale, six cloves of garlic, and a generous pour of green olive oil. You simply grill two more thick slices of country bread, rub them fiercely with raw garlic, and ladle the brothy beans slightly shallower into each bowl.',
      'People never remember whether their wine glass had a stem or whether their chair matched the others. They remember that when they knocked on the door on a cold Sunday night, someone slid over on the bench and handed them a warm bowl.'
    ]
  },
  {
    id: 'waiting-for-the-bitter-greens',
    slug: 'waiting-for-the-bitter-greens',
    issueNumber: 'Essay IV · Seasonal Ingredients',
    theme: 'Seasonal Ingredients',
    title: 'Waiting for the First Frost: In Praise of Bitter Winter Greens',
    subtitle: 'Sweetness is easy in July. Come November, the market basket belongs to tardivo radicchio, black kale, and ingredients that ask for fire and olive oil.',
    author: 'Helena Vermeer',
    authorLocation: 'Ghent & Piedmont',
    readingTime: '5 min read',
    datePublished: 'Issue No. 14 · Late Autumn',
    heroImage: '/images/sunday-table/market-seasonal-produce.jpg',
    heroImageAlt: 'Woven willow market basket overflowing with burgundy tardivo radicchio, chanterelles, pomegranates, and cavolo nero kale',
    heroCaption: 'Saturday morning haul after the first November frost: tardivo radicchio, chanterelles, leeks, and cavolo nero.',
    secondaryImage: '/images/sunday-table/seasonal-soup-bowl.jpg',
    secondaryCaption: 'Autumn honeynut squash and borlotti beans finished with frizzled garden sage.',
    pullQuote: 'Until a frost hassweetened the kale and curled the radicchio into flames, the autumn table hasn’t truly found its voice.',
    handwrittenMargin: '“Bitterness + fat + acid + salt = the whole secret of autumn cooking.”',
    relatedRecipeSlug: 'charred-radicchio-farro-hazelnut-salad',
    relatedRecipeTitle: 'Warm Charred Tardivo Radicchio, Pearled Farro & Toasted Hazelnuts',
    paragraphs: [
      'Every July, people speak about seasonal cooking as though it requires no effort at all—and in July, they are right. A sun-warmed tomato sliced onto a plate with flaky salt needs no cookery, only a sharp knife and restraint. The real test of a kitchen comes in November, when the crates of soft summer fruit disappear and the farm stands fill with muddy leeks, dense winter squash, and dark, assertive greens.',
      'In northern Italy, growers harvest *Radicchio Tardivo di Treviso* only after the fields have been touched by two autumn frosts. The roots are lifted and placed in running spring water in darkened sheds, where new ivory-ribbed shoots curl upward like burgundy flames. Eaten raw, it has a bracing, mineral bitterness that wakes up the palate.',
      'But when you quarter those heads lengthwise, brush them with new-season olive oil, and lay them cut-side down on a hot cast-iron griddle, an alchemy takes place. The sugars in the white ribs caramelize, the edges char smoky and crisp, and the bitterness rounds into something as complex as dark chocolate or espresso.',
      'Combined with warm farro, crushed toasted hazelnuts, and a splash of aged balsamic, it turns the darkest month of the year into the season you secretly look forward to.'
    ]
  },
  {
    id: 'the-loaf-that-travels-in-linen',
    slug: 'the-loaf-that-travels-in-linen',
    issueNumber: 'Essay V · Meal Memories',
    theme: 'Meal Memories',
    title: 'The Loaf That Travels in a Linen Towel',
    subtitle: 'On sourdough starters carried across state lines, the sound of a cooling crust at 9 A.M., and why we bake bread when a bakery is three blocks away.',
    author: 'Thomas Alverez',
    authorLocation: 'San Francisco & Vermont',
    readingTime: '6 min read',
    datePublished: 'Issue No. 14 · Late Autumn',
    heroImage: '/images/sunday-table/freshly-baked-bread.jpg',
    heroImageAlt: 'Country sourdough boule cracked open on a wooden board showing blistered crust and open crumb beside cultured butter',
    heroCaption: 'Baked at 8:15 Sunday morning; cooled on the rack until the crust stops singing.',
    secondaryImage: '/images/sunday-table/hands-preparing-dough.jpg',
    secondaryCaption: 'Dimpling olive oil and rosemary needles into overnight hearth dough.',
    pullQuote: 'When you bring a warm loaf wrapped in a kitchen towel to a friend’s house, you are handing them twenty-four hours of your attention.',
    handwrittenMargin: '“Feed the starter before Saturday lunch; shape before bed; bake with the Sunday coffee.”',
    relatedRecipeSlug: 'country-hearth-sourdough-boule',
    relatedRecipeTitle: 'Saturday-Night Country Levain with Blistered Crust',
    paragraphs: [
      'Strictly speaking, baking your own country bread makes very little economic sense when a neighborhood bakery is three blocks down the street. Yet every Saturday afternoon, thousands of us pull a glass jar from the back of the refrigerator, weigh out stone-ground wheat and warm water on a scarred digital scale, and begin the slow clock of fermentation.',
      'We do it because bread is the only food that breathes with you over an entire weekend. Between the first coil fold at three o’clock and the final shaping at seven, you cannot go far from home, and that gentle tether is a gift. It forces you to stay put, to notice how warm the kitchen is, to feel the dough change from slack and shaggy to pillowy and alive under your fingertips.',
      'When you lift the heavy cast-iron lid on Sunday morning and see the scored ear opened into mahogany blisters, the reward isn’t just breakfast. It is the second loaf—wrapped in a clean linen tea towel while still faintly warm—that you carry under your arm to a friend’s table that night, knowing the towel will come back next week washed, folded, and ready for the next bake.'
    ]
  }
];

export const INITIAL_COMMUNITY_MEMORIES: CommunityMemory[] = [
  {
    id: 'cm-1',
    contributorName: 'Miriam K.',
    city: 'Montreal',
    dishTitle: 'Grandmother’s Late-October Cabbage & Chestnut Braise',
    storyExcerpt: 'Every first Sunday after the leaves fell on Rue Saint-Denis, my grandmother braised Savoy cabbage with peeled roasted chestnuts and apple cider in a chipped blue enamel pot. Even now, the smell of browned butter and cider vinegar takes me straight back to her radiator-warmed kitchen.',
    handwrittenTip: 'Score an X on the flat side of the chestnuts and boil for 5 minutes before roasting so the inner skins peel cleanly.',
    seasonTag: 'Late Autumn',
    dateAdded: 'November 2026'
  },
  {
    id: 'cm-2',
    contributorName: 'Davide & Hannah R.',
    city: 'Portland, OR',
    dishTitle: 'The “One More Chair” Sunday Polenta Board',
    storyExcerpt: 'Instead of plating individual bowls, we pour coarse stone-ground polenta directly onto a scrubbed maple pastry board in the middle of the table and ladle mushroom ragù down the center. Everyone eats from their corner toward the middle with wooden spoons.',
    handwrittenTip: 'Whisk the polenta for a full 45 minutes and stir in cold salted butter and sage off the heat right before pouring.',
    seasonTag: 'Winter Ritual',
    dateAdded: 'October 2026'
  },
  {
    id: 'cm-3',
    contributorName: 'Sonia Lind',
    city: 'Uppsala',
    dishTitle: 'Cardamom Buns After the Sunday Woods Walk',
    storyExcerpt: 'In my family, nobody sits down to Sunday dinner without afternoon fika first. We grind whole green cardamom pods in a cast-iron mortar—never pre-ground—and twist the butter-knotted dough while the kettle comes to a boil.',
    handwrittenTip: 'Brush the buns with a syrup of boiled water, sugar, and a spent vanilla pod the second they leave the oven.',
    seasonTag: 'Year-Round',
    dateAdded: 'October 2026'
  }
];

