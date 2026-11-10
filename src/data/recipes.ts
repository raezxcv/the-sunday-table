export type RecipeCategory =
  | 'Breakfast'
  | 'Main Dishes'
  | 'Comfort Food'
  | 'Baking'
  | 'Desserts'
  | 'Seasonal Dishes';

export interface IngredientItem {
  id: string;
  group?: string;
  amount: number | null;
  unit: string;
  item: string;
  prepNote?: string;
}

export interface InstructionStep {
  step: number;
  title: string;
  body: string;
  durationLabel?: string;
  cooksTip?: string;
}

export interface Recipe {
  id: string;
  slug: string;
  indexNumber: string;
  title: string;
  subtitle: string;
  category: RecipeCategory;
  season: string;
  image: string;
  secondaryImage?: string;
  imageAlt: string;
  imageCaption: string;
  prepTime: string;
  cookTime: string;
  totalTime: string;
  baseServings: number;
  servingsLabel: string;
  dietaryNotes: string[];
  dietaryDetail: string;
  originStory: string[];
  handwrittenNote: {
    text: string;
    attribution: string;
  };
  cookware: string[];
  ingredients: IngredientItem[];
  instructions: InstructionStep[];
  servingSuggestion: string;
  tablePairing: string;
  featured?: boolean;
}

export const RECIPE_CATEGORIES: RecipeCategory[] = [
  'Breakfast',
  'Main Dishes',
  'Comfort Food',
  'Baking',
  'Desserts',
  'Seasonal Dishes',
];

export const RECIPES: Recipe[] = [
  {
    id: 'herb-roasted-chicken-shallots-figs',
    slug: 'herb-roasted-chicken-shallots-figs',
    indexNumber: 'No. 01',
    title: 'Cast-Iron Roast Chicken with Caramelized Shallots & Late Figs',
    subtitle: 'Air-dried overnight with crushed fennel seed, roasted over sweet shallots and dark mission figs that collapse into the pan juices.',
    category: 'Main Dishes',
    season: 'Late Harvest',
    image: '/images/sunday-table/family-roasted-meal.jpg',
    secondaryImage: '/images/sunday-table/sunday-dinner-table.jpg',
    imageAlt: 'Whole herb-roasted chicken in a seasoned cast-iron skillet surrounded by caramelized shallots, burst figs, and rosemary sprigs',
    imageCaption: 'Served straight from the 12-inch cast-iron skillet so the pan juices stay bubbling at the center of the table.',
    prepTime: '25 mins (plus overnight salting)',
    cookTime: '1 hr 10 mins',
    totalTime: '1 hr 35 mins',
    baseServings: 4,
    servingsLabel: 'servings (1 whole bird)',
    dietaryNotes: ['Gluten-Free', 'Nut-Free'],
    dietaryDetail: 'Naturally gluten-free and nut-free. For a dairy-free pan sauce, swirl 1 tablespoon of cold extra-virgin olive oil into the roasting juices at the end instead of unsalted butter.',
    originStory: [
      'A Sunday roast chicken needs no elaborate trussing or fussy basting schedule if you give it two quiet gifts the night before: generous kosher salt under the skin and uncovered rest on the middle shelf of the refrigerator. By Sunday afternoon, the skin is dry as parchment and blisters into crisp mahogany shards within the first forty minutes in a hot cast-iron skillet.',
      'In October and November, when the last dark figs are soft enough to split at the stem, we tuck them around the bird alongside peeled whole shallots for the final twenty-five minutes. The shallots drink up the herb-scented schmaltz while the figs slump into a jammy, savory-sweet condiment that begs to be mopped up with torn country bread.'
    ],
    handwrittenNote: {
      text: 'Leave a few torn chunks of stale sourdough underneath the bird to catch the drippings—everyone fights over the pan bread first.',
      attribution: 'Margin note from Clara’s kitchen ledger, 2019'
    },
    cookware: [
      '12-inch seasoned cast-iron skillet',
      'Instant-read thermometer',
      'Mortar and pestle (or spice grinder)',
      'Wooden carving board with juice groove'
    ],
    ingredients: [
      { id: 'rc-1', group: 'The Bird & Dry Brine', amount: 1.8, unit: 'kg', item: 'whole pasture-raised chicken, patted thoroughly dry', prepNote: 'giblets removed' },
      { id: 'rc-2', group: 'The Bird & Dry Brine', amount: 1.5, unit: 'tbsp', item: 'diamond crystal kosher salt' },
      { id: 'rc-3', group: 'The Bird & Dry Brine', amount: 1.5, unit: 'tsp', item: 'fennel seeds, lightly toasted and coarsely crushed' },
      { id: 'rc-4', group: 'The Bird & Dry Brine', amount: 1, unit: 'tsp', item: 'freshly cracked black pepper' },
      { id: 'rc-5', group: 'The Skillet Bed', amount: 10, unit: 'whole', item: 'medium shallots, peeled and halved lengthwise', prepNote: 'root end left intact so they hold shape' },
      { id: 'rc-6', group: 'The Skillet Bed', amount: 8, unit: 'whole', item: 'ripe Black Mission or Brown Turkey figs, halved lengthwise' },
      { id: 'rc-7', group: 'The Skillet Bed', amount: 4, unit: 'sprigs', item: 'fresh rosemary, plus 6 sprigs thyme' },
      { id: 'rc-8', group: 'The Skillet Bed', amount: 1, unit: 'head', item: 'garlic, halved crosswise through the papery skins' },
      { id: 'rc-9', group: 'The Skillet Bed', amount: 2, unit: 'tbsp', item: 'extra-virgin olive oil' },
      { id: 'rc-10', group: 'To Finish', amount: 80, unit: 'ml', item: 'dry white wine or dry vermouth' },
      { id: 'rc-11', group: 'To Finish', amount: 20, unit: 'g', item: 'cold unsalted butter, cubed' },
      { id: 'rc-12', group: 'To Finish', amount: 0.5, unit: 'whole', item: 'lemon, for squeezing over the carved bird' }
    ],
    instructions: [
      {
        step: 1,
        title: 'Dry-brine the chicken the night before',
        body: 'Combine the kosher salt, crushed fennel seeds, and black pepper in a small bowl. Gently loosen the skin over the chicken breast and thighs using your fingers. Rub a third of the seasoning under the skin directly onto the meat, a third inside the cavity, and the remainder evenly over the exterior skin. Place uncovered on a wire rack set in a rimmed tray in the refrigerator for 12 to 24 hours.',
        durationLabel: '12–24 hrs passive',
        cooksTip: 'If you forget the night before, even 90 minutes uncovered at cool room temperature will noticeably crisp the skin.'
      },
      {
        step: 2,
        title: 'Temper the bird and preheat the skillet',
        body: 'Remove the chicken from the refrigerator 45 minutes before roasting so it loses its chill. Position an oven rack in the lower-middle third and preheat to 220°C (425°F).',
        durationLabel: '45 mins'
      },
      {
        step: 3,
        title: 'Build the aromatic bed and begin roasting',
        body: 'Toss the halved shallots, halved garlic head, rosemary, and thyme with 1 tablespoon of olive oil in your 12-inch cast-iron skillet, arranging the shallots cut-side down. Rub the chicken skin with the remaining 1 tablespoon olive oil, nestle it breast-side up atop the shallots, and roast for 40 minutes until the skin is golden-tan and rendering fat.',
        durationLabel: '40 mins'
      },
      {
        step: 4,
        title: 'Tuck in the figs and baste with pan juices',
        body: 'Remove the skillet carefully. Spoon some of the rendered pan fat over the breast, turn the shallots so they caramelize evenly, and tuck the halved figs cut-side up around the perimeter of the skillet. Return to the oven for 20 to 25 minutes until an instant-read thermometer inserted into the thickest part of the thigh registers 74°C (165°F) and the breast reaches 68°C (155°F).',
        durationLabel: '25 mins'
      },
      {
        step: 5,
        title: 'Rest the bird and swirl the pan jus',
        body: 'Transfer the chicken, shallots, and figs to a warm platter or carving board and rest for 15 minutes. Pour off excess fat from the skillet, leaving about 2 tablespoons of dark drippings. Set over medium heat, add the white wine, and scrape up the caramelized fond with a wooden spoon for 2 minutes. Remove from heat, swirl in the cold butter and a squeeze of lemon juice, and spoon over the carved bird.',
        durationLabel: '15 mins rest'
      }
    ],
    servingSuggestion: 'Carve at the table and arrange the quarters back over the shallots and burst figs. Spoon the glossy pan jus over the breast meat and pass flaky sea salt alongside.',
    tablePairing: 'Bitter chicory salad dressed sharply with sherry vinegar, crusty country levain, and a lightly chilled Pinot Noir or Gamay.',
    featured: true
  },
  {
    id: 'handmade-pappardelle-porcini-ragu',
    slug: 'handmade-pappardelle-porcini-ragu',
    indexNumber: 'No. 02',
    title: 'Hand-Cut Egg Pappardelle with Slow Tomato & Porcini Ragù',
    subtitle: 'Wide ribbons of golden yolk-rich pasta tossed with an earthy, three-hour Sunday sauce of dried woodland porcini, crushed San Marzano tomatoes, and rosemary.',
    category: 'Comfort Food',
    season: 'Autumn & Winter',
    image: '/images/sunday-table/homemade-pasta-plate.jpg',
    secondaryImage: '/images/sunday-table/hands-preparing-dough.jpg',
    imageAlt: 'Handmade pappardelle pasta with slow-simmered tomato and porcini ragu on a speckled stoneware plate',
    imageCaption: 'Wide 2-centimeter ribbons rolled thin enough to read newsprint through before cutting by hand.',
    prepTime: '50 mins',
    cookTime: '1 hr 45 mins',
    totalTime: '2 hrs 35 mins',
    baseServings: 4,
    servingsLabel: 'generous bowls',
    dietaryNotes: ['Vegetarian', 'Nut-Free'],
    dietaryDetail: 'Entirely meatless yet deeply savory thanks to dried porcini soaking liquor and a Parmigiano-Reggiano rind simmered in the pot. Use vegetarian hard cheese if avoiding animal rennet.',
    originStory: [
      'There is a particular silence that falls over a kitchen when someone is rolling pasta dough by hand. It requires clearing the entire wooden table, pushing back the fruit bowl and the mail, and working flour and dark-yolked farm eggs until the dough feels like warm earlobe.',
      'This ragù relies on dried porcini rather than meat for its deep, woodsy bass note. When you strain the mushroom soaking liquid through linen or a paper filter and simmer it slowly with sweet carrots, celery, tomato paste caramelized to brick-red, and a saved Parmesan rind, the sauce clings to rough-cut pappardelle like velvet.'
    ],
    handwrittenNote: {
      text: 'Never throw away the last hard heel of Parmigiano—drop it into the ragù after the wine evaporates. By the end it turns soft as caramel.',
      attribution: 'Nonna Elena’s notebook, Modena / Boston'
    },
    cookware: [
      'Heavy enameled Dutch oven',
      'Long wooden rolling pin (mattarello) or pasta roller',
      'Sharp chef’s knife or brass pastry wheel',
      'Large stockpot for salting pasta water'
    ],
    ingredients: [
      { id: 'pp-1', group: 'For the Egg Dough', amount: 300, unit: 'g', item: 'Tipo 00 flour, plus extra for dusting', prepNote: 'or 250g all-purpose + 50g fine semolina' },
      { id: 'pp-2', group: 'For the Egg Dough', amount: 3, unit: 'whole', item: 'large pasture-raised eggs, plus 2 extra egg yolks', prepNote: 'at room temperature' },
      { id: 'pp-3', group: 'For the Egg Dough', amount: 1, unit: 'tsp', item: 'extra-virgin olive oil' },
      { id: 'pp-4', group: 'For the Porcini & Tomato Ragù', amount: 45, unit: 'g', item: 'dried porcini mushrooms' },
      { id: 'pp-5', group: 'For the Porcini & Tomato Ragù', amount: 250, unit: 'g', item: 'fresh cremini or chanterelle mushrooms, finely chopped' },
      { id: 'pp-6', group: 'For the Porcini & Tomato Ragù', amount: 3, unit: 'tbsp', item: 'extra-virgin olive oil' },
      { id: 'pp-7', group: 'For the Porcini & Tomato Ragù', amount: 1, unit: 'whole', item: 'small yellow onion, 1 carrot, and 1 celery stalk', prepNote: 'minced into a fine soffritto' },
      { id: 'pp-8', group: 'For the Porcini & Tomato Ragù', amount: 3, unit: 'cloves', item: 'garlic, thinly sliced' },
      { id: 'pp-9', group: 'For the Porcini & Tomato Ragù', amount: 2, unit: 'tbsp', item: 'double-concentrated tomato paste' },
      { id: 'pp-10', group: 'For the Porcini & Tomato Ragù', amount: 120, unit: 'ml', item: 'dry red wine (Chianti or Barbera)' },
      { id: 'pp-11', group: 'For the Porcini & Tomato Ragù', amount: 800, unit: 'g', item: 'whole peeled San Marzano tomatoes, crushed by hand' },
      { id: 'pp-12', group: 'For the Porcini & Tomato Ragù', amount: 1, unit: 'piece', item: 'aged Parmigiano-Reggiano rind (about 5 cm), plus 60g freshly grated to serve' }
    ],
    instructions: [
      {
        step: 1,
        title: 'Steep the dried porcini and mix the pasta dough',
        body: 'Steep the dried porcini in 350 ml of warm water for 25 minutes. Meanwhile, mound the flour on a wooden board and make a wide well in the center. Crack the eggs, extra yolks, and olive oil into the well. Beat gently with a fork, gradually drawing flour from the inner wall until a shaggy dough forms. Knead vigorously with the heel of your hand for 10 minutes until smooth and elastic. Wrap tightly and rest at room temperature for 45 minutes.',
        durationLabel: '45 mins rest'
      },
      {
        step: 2,
        title: 'Sauté the soffritto and caramelize the mushrooms',
        body: 'Lift the softened porcini from their liquid, squeeze gently, and chop coarsely. Strain the dark soaking liquid through a paper-lined sieve to trap any forest grit. Warm the olive oil in a Dutch oven over medium-low heat. Cook the minced onion, carrot, and celery with a pinch of salt for 12 minutes until sweet and translucent. Add the fresh chopped mushrooms, rehydrated porcini, and garlic; raise heat to medium and cook until browned.',
        durationLabel: '20 mins'
      },
      {
        step: 3,
        title: 'Simmer the ragù low and slow',
        body: 'Stir in the tomato paste and cook for 3 minutes until darkened. Pour in the red wine and simmer until nearly evaporated. Add the strained porcini broth, hand-crushed tomatoes, and the Parmigiano rind. Partially cover and simmer on the lowest burner setting for 75 to 90 minutes, stirring occasionally, until thick and glossy.',
        durationLabel: '80 mins'
      },
      {
        step: 4,
        title: 'Roll and cut the pappardelle ribbons',
        body: 'Divide the rested dough into 3 pieces. Roll each piece out on a lightly floured board (or to setting 6 on a pasta roller) into thin sheets about 1 mm thick. Let the sheets dry on a clean linen towel for 10 minutes until leathery but not brittle, dust with semolina, roll into a loose cylinder, and slice into 2-cm-wide ribbons.',
        durationLabel: '20 mins'
      },
      {
        step: 5,
        title: 'Marry pasta and sauce in the pan',
        body: 'Boil the fresh pappardelle in generously salted water for just 2 to 3 minutes until tender with a slight bite. Using tongs, transfer the dripping pasta directly into the simmering ragù along with 60 ml of starchy pasta water. Toss briskly off the heat with half the grated Parmigiano and a thread of raw olive oil until every ribbon is coated.',
        durationLabel: '3 mins'
      }
    ],
    servingSuggestion: 'Twirl into warmed stoneware bowls and shower with the remaining Parmigiano and freshly cracked black pepper.',
    tablePairing: 'Serve with a simple bowl of fennel bulb dressed with lemon and olive oil.'
  },
  {
    id: 'country-hearth-sourdough-boule',
    slug: 'country-hearth-sourdough-boule',
    indexNumber: 'No. 03',
    title: 'Saturday-Night Country Levain with Blistered Crust',
    subtitle: 'A high-hydration stone-ground wheat and bread flour boule mixed Saturday afternoon, retarded in the cold overnight, and baked in cast iron Sunday morning.',
    category: 'Baking',
    season: 'Year-Round Larder',
    image: '/images/sunday-table/freshly-baked-bread.jpg',
    secondaryImage: '/images/sunday-table/hands-preparing-dough.jpg',
    imageAlt: 'Country sourdough boule cracked open with blistered mahogany crust and open crumb beside a bread knife and butter',
    imageCaption: 'Baked covered for 20 minutes to trap steam, then uncovered for 25 minutes until the crust sings as it cools.',
    prepTime: '45 mins active (plus fermentation)',
    cookTime: '45 mins',
    totalTime: '16 hrs (mostly unattended)',
    baseServings: 8,
    servingsLabel: 'thick slices (1 large 900g loaf)',
    dietaryNotes: ['Vegan', 'Naturally Leavened', 'Dairy-Free', 'Nut-Free'],
    dietaryDetail: 'Contains only flour, water, wild sourdough culture, and sea salt. Long cold fermentation naturally breaks down phytic acid and gluten structures for easier digestibility.',
    originStory: [
      'Every good Sunday table begins on Saturday afternoon when you feed the starter jar sitting by the kettle. Bread baking at home fails only when we try to bend the dough to our clock instead of letting it follow the temperature of the kitchen.',
      'This formula uses twenty percent stone-ground whole wheat and ten percent dark rye for a nutty, golden crumb that stays moist for four days wrapped in beeswax cloth. Baking inside a preheated cast-iron Dutch oven mimics a steam-injected hearth oven, giving you thin, shattering blisters across the ear.'
    ],
    handwrittenNote: {
      text: 'Wait a full hour before slicing! If you cut while it is still steaming hot, the crumb gums up—listen to it crackle on the rack first.',
      attribution: 'Taped inside the pantry door'
    },
    cookware: [
      'Digital kitchen scale',
      '5-quart cast-iron Dutch oven with lid',
      '9-inch round banneton (or linen-lined bowl)',
      'Bread lame or single-edge razor blade'
    ],
    ingredients: [
      { id: 'sb-1', group: 'Flour Blend', amount: 350, unit: 'g', item: 'unbleached high-protein bread flour' },
      { id: 'sb-2', group: 'Flour Blend', amount: 100, unit: 'g', item: 'stone-ground whole wheat flour' },
      { id: 'sb-3', group: 'Flour Blend', amount: 50, unit: 'g', item: 'organic dark rye flour' },
      { id: 'sb-4', group: 'Hydration & Leaven', amount: 375, unit: 'g', item: 'filtered water at 27°C (80°F)', prepNote: 'reserve 25g to dissolve the salt' },
      { id: 'sb-5', group: 'Hydration & Leaven', amount: 100, unit: 'g', item: 'active, bubbly sourdough starter (100% hydration)', prepNote: 'fed 4–6 hours prior so it floats in water' },
      { id: 'sb-6', group: 'Hydration & Leaven', amount: 11, unit: 'g', item: 'fine sea salt' }
    ],
    instructions: [
      {
        step: 1,
        title: 'Autolyse the flours and water',
        body: 'In a wide ceramic or glass mixing bowl, whisk together the bread flour, whole wheat flour, and dark rye flour. Pour in 350g of the warm water and mix by hand until no dry flour remains. Cover with a damp towel and let rest for 45 minutes so the bran softens and gluten begins forming automatically.',
        durationLabel: '45 mins'
      },
      {
        step: 2,
        title: 'Pinch in the levain and sea salt',
        body: 'Pour the bubbly sourdough starter over the rested dough. Wet your hand and dimple it in, then add the 11g sea salt dissolved in the remaining 25g water. Squeeze and fold the dough in the bowl for 3 to 4 minutes until the water is fully absorbed and the dough pulls together.',
        durationLabel: '5 mins'
      },
      {
        step: 3,
        title: 'Bulk fermentation with four gentle coil folds',
        body: 'Let the dough ferment at warm room temperature (23–25°C) for 4 to 4.5 hours total. During the first 2 hours, perform 4 sets of stretch-and-folds or coil folds spaced 30 minutes apart: wet your hands, lift the dough from the center until it releases, and tuck it under itself, rotating the bowl 90 degrees four times. Leave undisturbed for the remaining 2 hours until puffy and domed with visible air bubbles along the sides.',
        durationLabel: '4.5 hrs'
      },
      {
        step: 4,
        title: 'Pre-shape, final shape, and cold overnight retard',
        body: 'Turn the dough onto an unfloured counter and shape into a loose round using a bench scraper. Rest uncovered for 25 minutes. Flip the dough over, fold the bottom third up, the sides in, and roll tightly from the top down to create surface tension. Place seam-side up in a rice-floured banneton, cover, and refrigerate overnight for 12 to 16 hours.',
        durationLabel: '12–16 hrs cold'
      },
      {
        step: 5,
        title: 'Score and bake in steaming cast iron',
        body: 'Place your empty Dutch oven with its lid in the oven and preheat to 250°C (485°F) for 45 minutes. Turn the cold dough onto parchment paper, score a single confident arc at a 30-degree angle with a razor blade, and lower into the hot pot. Cover and bake at 230°C (450°F) for 20 minutes. Remove the lid and bake for 22 to 25 minutes more until deep mahogany. Cool on a wire rack for at least 1 hour before slicing.',
        durationLabel: '45 mins bake'
      }
    ],
    servingSuggestion: 'Crack open or slice thick with a serrated bread knife. Serve with salted cultured butter, flaky sea salt, or use to mop up roast chicken and soup bowls.',
    tablePairing: 'Essential companion to every soup, roast, and morning egg at the table.'
  },
  {
    id: 'honeynut-squash-borlotti-sage-soup',
    slug: 'honeynut-squash-borlotti-sage-soup',
    indexNumber: 'No. 04',
    title: 'Roasted Honeynut Squash & Borlotti Bean Soup with Crispy Sage',
    subtitle: 'Caramelized autumn squash blended with half the pot of rosemary-simmered borlotti beans for velvety body, topped with whole beans and frizzled sage olive oil.',
    category: 'Seasonal Dishes',
    season: 'Autumn Harvest',
    image: '/images/sunday-table/seasonal-soup-bowl.jpg',
    secondaryImage: '/images/sunday-table/olive-oil-and-herbs.jpg',
    imageAlt: 'Velvety roasted honeynut squash and borlotti bean soup topped with crispy sage leaves and olive oil swirl',
    imageCaption: 'Half the borlotti beans are puréed with the roasted squash for natural creaminess without heavy cream.',
    prepTime: '20 mins',
    cookTime: '50 mins',
    totalTime: '1 hr 10 mins',
    baseServings: 6,
    servingsLabel: 'deep soup bowls',
    dietaryNotes: ['Vegan', 'Gluten-Free', 'Dairy-Free', 'Nut-Free'],
    dietaryDetail: 'Naturally 100% plant-based, dairy-free, and gluten-free. Blending half the cooked beans creates a rich, creamy texture without dairy.',
    originStory: [
      'Pureed squash soups can easily turn cloying and one-note if treated like baby food. The secret taught in Tuscan farmhouse kitchens is two-fold: roast the squash halves cut-side down until their edges blacken slightly, and pair them with creamy cranberry or borlotti beans simmered with garlic and rosemary.',
      'By blending half of the beans directly into the roasted squash and vegetable broth while leaving the other half whole, every spoonful has both silkiness and bite. Right before serving, we sizzle whole garden sage leaves and pumpkin seeds in peppery extra-virgin olive oil and spoon that fragrant oil across each bowl.'
    ],
    handwrittenNote: {
      text: 'A tiny splash of aged red wine vinegar or sherry vinegar at the very end wakes up the sweetness of the squash.',
      attribution: 'October Soup Notes'
    },
    cookware: [
      'Heavy baking sheet',
      '4-quart soup pot or Dutch oven',
      'Immersion blender (or countertop blender)',
      'Small skillet for sizzling sage'
    ],
    ingredients: [
      { id: 'hs-1', group: 'For the Soup Base', amount: 1.2, unit: 'kg', item: 'honeynut or small butternut squash, halved lengthwise and seeded' },
      { id: 'hs-2', group: 'For the Soup Base', amount: 4, unit: 'tbsp', item: 'extra-virgin olive oil, divided' },
      { id: 'hs-3', group: 'For the Soup Base', amount: 2, unit: 'whole', item: 'leeks (white and light green parts), halved and thinly sliced' },
      { id: 'hs-4', group: 'For the Soup Base', amount: 4, unit: 'cloves', item: 'garlic, smashed and peeled' },
      { id: 'hs-5', group: 'For the Soup Base', amount: 1, unit: 'tsp', item: 'smoked paprika (pimentón de la Vera) and 1/4 tsp nutmeg' },
      { id: 'hs-6', group: 'For the Soup Base', amount: 500, unit: 'g', item: 'cooked borlotti or cannellini beans, drained and rinsed', prepNote: 'divided in half' },
      { id: 'hs-7', group: 'For the Soup Base', amount: 1.1, unit: 'L', item: 'rich vegetable or mushroom stock' },
      { id: 'hs-8', group: 'For the Soup Base', amount: 1, unit: 'tbsp', item: 'aged sherry vinegar' },
      { id: 'hs-9', group: 'For the Frizzled Sage Oil', amount: 3, unit: 'tbsp', item: 'extra-virgin olive oil' },
      { id: 'hs-10', group: 'For the Frizzled Sage Oil', amount: 18, unit: 'leaves', item: 'fresh garden sage, wiped dry' },
      { id: 'hs-11', group: 'For the Frizzled Sage Oil', amount: 40, unit: 'g', item: 'raw pumpkin seeds (pepitas)' }
    ],
    instructions: [
      {
        step: 1,
        title: 'Roast the squash until deeply caramelized',
        body: 'Preheat the oven to 210°C (410°F). Rub the cut faces of the honeynut squash with 2 tablespoons olive oil, salt, and pepper. Place cut-side down on a parchment-lined baking sheet and roast for 35 to 40 minutes until completely tender when pierced with a paring knife and caramelized around the rims.',
        durationLabel: '40 mins'
      },
      {
        step: 2,
        title: 'Sweat the leeks and garlic',
        body: 'While the squash roasts, warm 2 tablespoons olive oil in a soup pot over medium-low heat. Add the sliced leeks, smashed garlic, and a generous pinch of salt. Cook gently for 12 minutes until soft and sweet without browning. Stir in the smoked paprika and freshly grated nutmeg.',
        durationLabel: '12 mins'
      },
      {
        step: 3,
        title: 'Blend the squash with half the beans',
        body: 'Scoop the warm roasted squash flesh into the pot. Add half of the borlotti beans (250g) and the vegetable stock. Bring to a gentle simmer for 10 minutes, then purée until velvety smooth using an immersion blender.',
        durationLabel: '10 mins'
      },
      {
        step: 4,
        title: 'Fold in the whole beans and vinegar',
        body: 'Stir the remaining 250g whole borlotti beans into the puréed soup along with the sherry vinegar. Simmer for 5 minutes so the whole beans warm through and absorb the broth. Adjust salt and black pepper.',
        durationLabel: '5 mins'
      },
      {
        step: 5,
        title: 'Frizzle the sage leaves and pepitas',
        body: 'In a small skillet, heat 3 tablespoons olive oil over medium heat. Drop in the dry sage leaves and pumpkin seeds; they will crackle immediately. Fry for 45 to 60 seconds until the sage turns crisp and dark green and the seeds pop. Ladle the soup into warmed bowls and spoon the sage, seeds, and infused oil over top.',
        durationLabel: '2 mins'
      }
    ],
    servingSuggestion: 'Ladle into deep ceramic bowls and swirl a spoonful of the sage-infused olive oil across the surface right at the table.',
    tablePairing: 'Thick slices of grilled sourdough rubbed with raw garlic.'
  },
  {
    id: 'brown-butter-ricotta-plum-skillet-pancake',
    slug: 'brown-butter-ricotta-plum-skillet-pancake',
    indexNumber: 'No. 05',
    title: 'Brown-Butter Ricotta Dutch Baby with Roasted Plums & Thyme Honey',
    subtitle: 'A high-sided, souffléed skillet pancake puffed in nutty brown butter and crowned with jammy roasted Italian plums, lemon-zested ricotta, and warm honey.',
    category: 'Breakfast',
    season: 'Late Summer & Autumn',
    image: '/images/sunday-table/simple-breakfast-scene.jpg',
    secondaryImage: '/images/sunday-table/fresh-ingredients-table.jpg',
    imageAlt: 'Golden brown-butter Dutch baby skillet pancake topped with roasted purple plums, ricotta, and honey alongside morning coffee',
    imageCaption: 'Bring the skillet straight to the table the second it comes out of the oven while the edges are still towering.',
    prepTime: '15 mins',
    cookTime: '22 mins',
    totalTime: '37 mins',
    baseServings: 4,
    servingsLabel: 'wedges (1 ten-inch skillet)',
    dietaryNotes: ['Vegetarian', 'Nut-Free'],
    dietaryDetail: 'Vegetarian and nut-free. In winter, substitute blood oranges or caramelized Bosc pears for the plums.',
    originStory: [
      'Sunday mornings rarely call for standing at the stove flipping individual pancakes while everyone else drinks coffee at the table. A Dutch baby lets the oven do the work in a single heavy skillet, puffing up its golden collar like a Yorkshire pudding crossed with a French crêpe.',
      'Blending a spoonful of whole-milk ricotta directly into the resting batter keeps the center custardy while the edges crisp in nutty browned butter. We roast halved plums on a small tray on the lower oven rack at the same time so their ruby juices are ready to spoon over the pancake the moment it lands on the trivet.'
    ],
    handwrittenNote: {
      text: 'Room-temperature eggs and milk are non-negotiable here—cold batter won’t climb the sides of the skillet!',
      attribution: 'Sunday Morning Card'
    },
    cookware: [
      '10-inch cast-iron skillet',
      'Small roasting tray for plums',
      'Blender or whisk'
    ],
    ingredients: [
      { id: 'bp-1', group: 'For the Skillet Batter', amount: 3, unit: 'whole', item: 'large pasture-raised eggs, at warm room temperature' },
      { id: 'bp-2', group: 'For the Skillet Batter', amount: 160, unit: 'ml', item: 'whole milk, warmed to room temperature' },
      { id: 'bp-3', group: 'For the Skillet Batter', amount: 60, unit: 'g', item: 'whole-milk ricotta (for the batter), plus 120g for serving' },
      { id: 'bp-4', group: 'For the Skillet Batter', amount: 85, unit: 'g', item: 'unbleached all-purpose flour' },
      { id: 'bp-5', group: 'For the Skillet Batter', amount: 1, unit: 'tbsp', item: 'granulated sugar and 1 tsp pure vanilla extract' },
      { id: 'bp-6', group: 'For the Skillet Batter', amount: 0.5, unit: 'tsp', item: 'fine sea salt and grated zest of 1/2 lemon' },
      { id: 'bp-7', group: 'For the Skillet Batter', amount: 40, unit: 'g', item: 'unsalted butter (for browning in the skillet)' },
      { id: 'bp-8', group: 'For the Roasted Plums & Honey', amount: 6, unit: 'whole', item: 'Italian prune plums or black plums, halved and pitted' },
      { id: 'bp-9', group: 'For the Roasted Plums & Honey', amount: 3, unit: 'tbsp', item: 'wildflower honey, plus 4 sprigs fresh lemon thyme' }
    ],
    instructions: [
      {
        step: 1,
        title: 'Blend the batter and let the flour hydrate',
        body: 'In a blender or deep bowl with a whisk, combine the warm eggs, warm milk, 60g ricotta, flour, sugar, vanilla, lemon zest, and salt. Blend for 20 seconds until completely smooth and frothy. Let the batter rest on the counter for 15 minutes while the oven heats.',
        durationLabel: '15 mins'
      },
      {
        step: 2,
        title: 'Heat the skillet and prepare the plums',
        body: 'Place your empty 10-inch cast-iron skillet on the middle rack and preheat the oven to 220°C (425°F). Arrange the halved plums cut-side up on a small parchment-lined tray, drizzle with 1 tablespoon honey and thyme sprigs, and slide onto the lower rack.',
        durationLabel: '10 mins'
      },
      {
        step: 3,
        title: 'Swirl the brown butter and pour the batter',
        body: 'Carefully pull out the hot skillet, drop in the 40g butter, and swirl as it foams and turns hazelnut-brown in about 30 seconds. Immediately pour the rested batter into the center of the skillet and return to the oven.',
        durationLabel: '1 min'
      },
      {
        step: 4,
        title: 'Bake without peeking until puffed and bronzed',
        body: 'Bake for 18 to 20 minutes without opening the oven door until the pancake has climbed high up the sides of the pan with deep golden-brown ridges and the plums on the lower rack are collapsed and bubbling.',
        durationLabel: '20 mins'
      },
      {
        step: 5,
        title: 'Crown with ricotta, warm plums, and honey',
        body: 'Bring the skillet straight to the table. Spoon dollops of cool ricotta into the warm center, pile the roasted plums and their juices on top, and drizzle with the remaining warm wildflower honey.',
        durationLabel: '2 mins'
      }
    ],
    servingSuggestion: 'Slice into 4 generous wedges right in the skillet while the edges are still crisp.',
    tablePairing: 'A pot of freshly ground dark-roast filter coffee and cold-pressed orange juice.'
  },
  {
    id: 'burnt-honey-fig-frangipane-tart',
    slug: 'burnt-honey-fig-frangipane-tart',
    indexNumber: 'No. 06',
    title: 'Burnt-Honey Fig & Roasted Almond Frangipane Tart',
    subtitle: 'A press-in rye and butter pastry shell filled with toasted almond cream, nestled with jammy fresh figs, and glazed with darkened caramel-like wildflower honey.',
    category: 'Desserts',
    season: 'Autumn',
    image: '/images/sunday-table/dessert-being-served.jpg',
    secondaryImage: '/images/sunday-table/handwritten-recipe-card.jpg',
    imageAlt: 'A slice of burnt-honey fig and almond frangipane tart being served onto a ceramic plate with creme fraiche',
    imageCaption: 'Boiling honey for three minutes until it smokes slightly cuts the sweetness with a bittersweet caramel edge.',
    prepTime: '35 mins',
    cookTime: '45 mins',
    totalTime: '1 hr 20 mins',
    baseServings: 8,
    servingsLabel: 'slices (1 nine-inch tart)',
    dietaryNotes: ['Vegetarian'],
    dietaryDetail: 'Contains almonds, eggs, dairy, and wheat/rye. Can be made with a 1-to-1 gluten-free flour blend in the press-in crust.',
    originStory: [
      'A Sunday dinner dessert should never look like it came from a glass-doored patisserie case; it should look like someone baked it at two in the afternoon so the whole house would smell of toasted almonds and browned butter when guests walked in.',
      'This tart uses a forgiving press-in shortbread crust enriched with a little dark rye flour for earthiness. Before glazing the baked figs, we boil wildflower honey in a small saucepan until it darkens two shades and smells faintly of campfire caramel—a restaurant trick that transforms sweet honey into something complex and grown-up.'
    ],
    handwrittenNote: {
      text: 'Press the figs halfway down into the almond cream so it puffs up around their shoulders as it bakes.',
      attribution: 'From the Autumn Tart Card'
    },
    cookware: [
      '9-inch fluted tart pan with removable bottom',
      'Small heavy saucepan',
      'Mixing bowl & wooden spoon'
    ],
    ingredients: [
      { id: 'ft-1', group: 'For the Rye Shortbread Crust', amount: 150, unit: 'g', item: 'unbleached all-purpose flour' },
      { id: 'ft-2', group: 'For the Rye Shortbread Crust', amount: 45, unit: 'g', item: 'dark rye flour (or whole wheat flour)' },
      { id: 'ft-3', group: 'For the Rye Shortbread Crust', amount: 40, unit: 'g', item: 'powdered sugar and 1/2 tsp fine sea salt' },
      { id: 'ft-4', group: 'For the Rye Shortbread Crust', amount: 115, unit: 'g', item: 'melted unsalted butter, cooled slightly' },
      { id: 'ft-5', group: 'For the Almond Frangipane', amount: 140, unit: 'g', item: 'finely ground almond flour, lightly toasted' },
      { id: 'ft-6', group: 'For the Almond Frangipane', amount: 100, unit: 'g', item: 'softened unsalted butter' },
      { id: 'ft-7', group: 'For the Almond Frangipane', amount: 90, unit: 'g', item: 'raw cane sugar' },
      { id: 'ft-8', group: 'For the Almond Frangipane', amount: 2, unit: 'whole', item: 'large eggs, plus 1/2 tsp almond extract' },
      { id: 'ft-9', group: 'For the Figs & Burnt Honey', amount: 10, unit: 'whole', item: 'ripe fresh figs, stems trimmed and halved lengthwise' },
      { id: 'ft-10', group: 'For the Figs & Burnt Honey', amount: 75, unit: 'g', item: 'dark wildflower or chestnut honey' },
      { id: 'ft-11', group: 'For the Figs & Burnt Honey', amount: 1, unit: 'tbsp', item: 'fresh lemon juice and flaky sea salt' },
      { id: 'ft-12', group: 'To Serve', amount: 150, unit: 'g', item: 'cultured crème fraîche' }
    ],
    instructions: [
      {
        step: 1,
        title: 'Press and par-bake the rye shortbread shell',
        body: 'Preheat oven to 180°C (350°F). Whisk together the all-purpose flour, rye flour, powdered sugar, and salt. Stir in the melted butter until moist crumbs form. Press evenly into the bottom and up the fluted sides of a 9-inch tart pan. Prick the base with a fork, freeze for 10 minutes, then bake for 15 minutes until pale golden.',
        durationLabel: '25 mins'
      },
      {
        step: 2,
        title: 'Beat the toasted almond frangipane',
        body: 'Beat the softened butter and cane sugar together until fluffy. Beat in the eggs one at a time along with the almond extract, then fold in the toasted almond flour and a pinch of salt until smooth.',
        durationLabel: '8 mins'
      },
      {
        step: 3,
        title: 'Assemble and bake with fresh figs',
        body: 'Spread the almond frangipane evenly into the warm par-baked crust. Arrange the halved figs cut-side up in concentric circles, pressing them gently halfway into the batter. Bake at 180°C (350°F) for 35 to 40 minutes until the frangipane is puffed, golden-brown, and set in the center.',
        durationLabel: '38 mins'
      },
      {
        step: 4,
        title: 'Caramelize the burnt-honey glaze',
        body: 'In a small saucepan over medium heat, bring the honey to a rolling boil. Let it bubble for 2.5 to 3 minutes until it darkens to deep amber and smells nutty and toasted. Remove from heat and carefully whisk in the lemon juice. Brush over the warm tart and finish with a few flakes of sea salt.',
        durationLabel: '5 mins'
      }
    ],
    servingSuggestion: 'Serve slightly warm or at room temperature with a generous quenelle of cold, tangy crème fraîche.',
    tablePairing: 'Small glasses of Vin Santo, Tawny Port, or espresso.'
  },
  {
    id: 'rosemary-sea-salt-hearth-focaccia',
    slug: 'rosemary-sea-salt-hearth-focaccia',
    indexNumber: 'No. 07',
    title: 'Overnight Olive-Oil Focaccia with Rosemary & Sea Salt',
    subtitle: 'An 82% hydration dimpled pan loaf bathed in grassy extra-virgin olive oil—crisp and fried on the bottom, pillowy and open inside.',
    category: 'Baking',
    season: 'Year-Round Larder',
    image: '/images/sunday-table/hands-preparing-dough.jpg',
    secondaryImage: '/images/sunday-table/olive-oil-and-herbs.jpg',
    imageAlt: 'Flour-dusted baker hands dimpling olive-oil focaccia dough with fresh rosemary needles and flaky sea salt',
    imageCaption: 'Dimpling the cold-proofed dough through a pool of brine and olive oil creates the signature salty pockets.',
    prepTime: '20 mins active (plus overnight chill)',
    cookTime: '26 mins',
    totalTime: '14 hrs',
    baseServings: 10,
    servingsLabel: 'squares (1 nine-by-thirteen pan)',
    dietaryNotes: ['Vegan', 'Dairy-Free', 'Nut-Free'],
    dietaryDetail: '100% plant-based. Uses a tiny pinch of instant yeast alongside a long overnight cold fermentation so anyone can bake it even without a sourdough starter.',
    originStory: [
      'When friends ask what they can bring to Sunday dinner, the answer is almost always nothing—because this focaccia is already proofing on the top shelf of the fridge, ready to slide into the oven thirty minutes before people arrive.',
      'Inspired by Ligurian *focaccia genovese*, we pour a mixture of warm water and dissolved sea salt (called *salamoia*) alongside grassy olive oil right over the dimpled dough before baking. The water evaporates in the hot oven, keeping the top crust tender while the bottom fries golden in the oiled pan.'
    ],
    handwrittenNote: {
      text: 'Toss the rosemary needles in a spoonful of olive oil before pressing them into the dough so they don’t scorch in the oven.',
      attribution: 'Genoa Baker’s Trick'
    },
    cookware: [
      '9×13-inch heavy metal baking pan',
      'Mixing bowl',
      'Wire cooling rack'
    ],
    ingredients: [
      { id: 'rf-1', group: 'For the Dough', amount: 500, unit: 'g', item: 'unbleached bread flour' },
      { id: 'rf-2', group: 'For the Dough', amount: 410, unit: 'g', item: 'lukewarm water (28°C)' },
      { id: 'rf-3', group: 'For the Dough', amount: 4, unit: 'g', item: 'instant yeast (about 1.25 tsp)' },
      { id: 'rf-4', group: 'For the Dough', amount: 10, unit: 'g', item: 'fine sea salt and 1 tsp honey or malt syrup' },
      { id: 'rf-5', group: 'For the Dough', amount: 30, unit: 'ml', item: 'extra-virgin olive oil (mixed into dough)' },
      { id: 'rf-6', group: 'For the Pan & Brine (Salamoia)', amount: 60, unit: 'ml', item: 'extra-virgin olive oil, divided between pan and top' },
      { id: 'rf-7', group: 'For the Pan & Brine (Salamoia)', amount: 45, unit: 'ml', item: 'warm water whisked with 1 tsp flaky sea salt' },
      { id: 'rf-8', group: 'For the Pan & Brine (Salamoia)', amount: 4, unit: 'sprigs', item: 'fresh rosemary, needles stripped and oiled' }
    ],
    instructions: [
      {
        step: 1,
        title: 'Mix the wet dough and perform three folds',
        body: 'Whisk the lukewarm water, yeast, honey, and 30 ml olive oil in a large bowl. Add the bread flour and 10g salt, mixing with a wet hand or spatula until no dry spots remain. Cover and perform 3 sets of stretch-and-folds at 30-minute intervals over 90 minutes.',
        durationLabel: '1.5 hrs'
      },
      {
        step: 2,
        title: 'Cold-ferment overnight in the oiled pan',
        body: 'Coat a 9×13-inch metal baking pan with 30 ml olive oil. Transfer the dough into the pan, turn once to coat in oil, cover tightly, and refrigerate overnight for 12 to 24 hours.',
        durationLabel: '12–24 hrs cold'
      },
      {
        step: 3,
        title: 'Final proof until bubbly and jiggly',
        body: 'Remove the pan from the fridge 2.5 hours before baking. Gently stretch the dough toward the corners of the pan and let it sit in a warm spot until doubled, airy, and trembling like gelatin when nudged.',
        durationLabel: '2.5 hrs'
      },
      {
        step: 4,
        title: 'Dimple with brine, rosemary, and olive oil',
        body: 'Preheat oven to 230°C (450°F). Drizzle the remaining 30 ml olive oil and the salted water brine over the dough. Oil your fingertips and press straight down to the bottom of the pan all over to create deep dimples. Scatter with the oiled rosemary needles and extra flaky sea salt.',
        durationLabel: '5 mins'
      },
      {
        step: 5,
        title: 'Bake on the bottom rack for a crisp crust',
        body: 'Bake on the lowest oven rack for 24 to 26 minutes until deeply golden on top and crisp underneath. Transfer immediately to a wire rack so the bottom stays crunchy.',
        durationLabel: '25 mins'
      }
    ],
    servingSuggestion: 'Tear or cut into warm squares and serve alongside a dish of peppery new-harvest olive oil.',
    tablePairing: 'Anchovies, marinated olives, and chilled vermouth before the main course.'
  },
  {
    id: 'charred-radicchio-farro-hazelnut-salad',
    slug: 'charred-radicchio-farro-hazelnut-salad',
    indexNumber: 'No. 08',
    title: 'Warm Charred Tardivo Radicchio, Pearled Farro & Toasted Hazelnuts',
    subtitle: 'Bitter burgundy chicory leaves wilted on a hot griddle, tossed with nutty farro, pomegranate jewels, roasted Piedmont hazelnuts, and aged balsamic.',
    category: 'Seasonal Dishes',
    season: 'Late Autumn & Winter',
    image: '/images/sunday-table/market-seasonal-produce.jpg',
    secondaryImage: '/images/sunday-table/fresh-ingredients-table.jpg',
    imageAlt: 'Woven market basket overflowing with burgundy tardivo radicchio, chanterelles, pomegranates, and seasonal greens',
    imageCaption: 'Searing radicchio wedges for two minutes tames their bitterness into a smoky, bittersweet caramel note.',
    prepTime: '20 mins',
    cookTime: '30 mins',
    totalTime: '50 mins',
    baseServings: 4,
    servingsLabel: 'platter servings',
    dietaryNotes: ['Vegan Option', 'Vegetarian', 'Make-Ahead Friendly'],
    dietaryDetail: 'Naturally vegetarian; omit the shaved aged pecorino for a completely vegan platter. Holds up beautifully at room temperature for hours.',
    originStory: [
      'When summer tomatoes fade, the Italian market stalls turn burgundy and deep forest green with winter chicories—Treviso, Tardivo, and speckled Castelfranco. Raw radicchio has an assertive bite, but the moment its ribs hit a smoking-hot cast-iron skillet with olive oil, the bitterness softens into something rich and smoky.',
      'We layer those warm, charred wedges over chewy pearled farro tossed while still steaming with shallot-balsamic vinaigrette, toasted hazelnuts crushed under the flat of a knife, and ruby pomegranate seeds.'
    ],
    handwrittenNote: {
      text: 'Dress the farro while the grains are still hot from the pot—they drink up twice as much vinaigrette that way.',
      attribution: 'Saturday Market Ledger'
    },
    cookware: [
      'Medium saucepan',
      'Cast-iron grill pan or heavy skillet',
      'Wide ceramic serving platter'
    ],
    ingredients: [
      { id: 'rfh-1', group: 'For the Farro & Greens', amount: 220, unit: 'g', item: 'pearled or semi-pearled farro, rinsed' },
      { id: 'rfh-2', group: 'For the Farro & Greens', amount: 2, unit: 'heads', item: 'Treviso or Tardivo radicchio, cut lengthwise into quarters through the core' },
      { id: 'rfh-3', group: 'For the Farro & Greens', amount: 75, unit: 'g', item: 'blanched hazelnuts, toasted and roughly crushed' },
      { id: 'rfh-4', group: 'For the Farro & Greens', amount: 80, unit: 'g', item: 'fresh pomegranate arils' },
      { id: 'rfh-5', group: 'For the Farro & Greens', amount: 50, unit: 'g', item: 'aged Pecorino Toscano, shaved with a vegetable peeler (optional)' },
      { id: 'rfh-6', group: 'For the Warm Shallot Vinaigrette', amount: 60, unit: 'ml', item: 'extra-virgin olive oil, plus 2 tbsp for searing' },
      { id: 'rfh-7', group: 'For the Warm Shallot Vinaigrette', amount: 2, unit: 'tbsp', item: 'aged balsamic vinegar of Modena' },
      { id: 'rfh-8', group: 'For the Warm Shallot Vinaigrette', amount: 1, unit: 'whole', item: 'small shallot, finely minced, plus 1 tsp Dijon mustard' }
    ],
    instructions: [
      {
        step: 1,
        title: 'Simmer the farro with a bay leaf',
        body: 'Cook the farro in a pot of generously salted boiling water with a bay leaf for 22 to 25 minutes until tender but still pleasantly chewy. Drain well.',
        durationLabel: '25 mins'
      },
      {
        step: 2,
        title: 'Whisk the vinaigrette and dress the warm grain',
        body: 'Whisk together the minced shallot, balsamic vinegar, Dijon mustard, 60 ml olive oil, salt, and black pepper. Toss half of the vinaigrette directly into the hot drained farro and spread across a wide serving platter.',
        durationLabel: '5 mins'
      },
      {
        step: 3,
        title: 'Char the radicchio wedges over high heat',
        body: 'Brush the quartered radicchio wedges with 2 tablespoons olive oil and season with salt. Sear in a hot cast-iron skillet for 2 minutes per cut side until the outer leaves blister and char while the core stays crisp-tender.',
        durationLabel: '5 mins'
      },
      {
        step: 4,
        title: 'Arrange with hazelnuts, pomegranate, and pecorino',
        body: 'Pile the warm charred radicchio over the farro. Spoon the remaining vinaigrette over top and scatter with toasted hazelnuts, pomegranate seeds, and shaved pecorino.',
        durationLabel: '3 mins'
      }
    ],
    servingSuggestion: 'Serve warm or at room temperature on a wide earthenware platter.',
    tablePairing: 'Pairs wonderfully alongside roast pork, duck, or rich mushroom pasta.'
  },
  {
    id: 'braised-cannellini-cavolo-nero-garlic-toast',
    slug: 'braised-cannellini-cavolo-nero-garlic-toast',
    indexNumber: 'No. 09',
    title: 'Braised Heirloom White Beans & Cavolo Nero over Garlic-Rubbed Toast',
    subtitle: 'Slow-cooked Marcella-style white beans and Tuscan black kale swimming in a brothy rosemary-fennel pot liquor, ladled over thick charred country bread.',
    category: 'Comfort Food',
    season: 'Autumn & Winter',
    image: '/images/sunday-table/shared-meal-friends.jpg',
    secondaryImage: '/images/sunday-table/olive-oil-and-herbs.jpg',
    imageAlt: 'Friends gathered around a warm evening table sharing bowls of braised white beans with greens and grilled bread',
    imageCaption: 'The pot liquor—half bean starch, half golden olive oil—is the soul of the dish.',
    prepTime: '15 mins (plus bean soaking)',
    cookTime: '1 hr 30 mins',
    totalTime: '1 hr 45 mins',
    baseServings: 4,
    servingsLabel: 'wide shallow bowls',
    dietaryNotes: ['Vegan', 'Dairy-Free', 'Nut-Free'],
    dietaryDetail: 'Completely plant-based when served with olive oil; optional grated Parmigiano can be passed at the table for those who want it.',
    originStory: [
      'When friends come over on a rainy Sunday evening and nobody wants a heavy three-course affair, a big clay or cast-iron pot of dried heirloom white beans braised with black kale and rosemary is the most comforting thing you can set on the table.',
      'Unlike canned beans, dried Marcella or Corona beans cooked slowly with a whole head of garlic, sage, and olive oil produce their own velvety, savory broth. You rub thick slices of toasted sourdough with a raw garlic clove, lay them in the bottom of each bowl, and ladle the greens and beans right over top.'
    ],
    handwrittenNote: {
      text: 'Smash a spoonful of beans against the side of the pot during the last ten minutes to thicken the broth naturally.',
      attribution: 'Rainy Sunday Supper Card'
    },
    cookware: [
      'Heavy Dutch oven or bean pot',
      'Cast-iron grill pan for toasting bread'
    ],
    ingredients: [
      { id: 'cb-1', group: 'For the Bean Pot', amount: 400, unit: 'g', item: 'dried cannellini, Marcella, or Corona white beans, soaked overnight' },
      { id: 'cb-2', group: 'For the Bean Pot', amount: 80, unit: 'ml', item: 'extra-virgin olive oil, plus extra for drizzling at the table' },
      { id: 'cb-3', group: 'For the Bean Pot', amount: 1, unit: 'whole', item: 'medium yellow onion, finely diced' },
      { id: 'cb-4', group: 'For the Bean Pot', amount: 6, unit: 'cloves', item: 'garlic, thinly sliced, plus 1 raw clove for rubbing toast' },
      { id: 'cb-5', group: 'For the Bean Pot', amount: 1, unit: 'tsp', item: 'crushed red pepper flakes and 1 tsp fennel seeds' },
      { id: 'cb-6', group: 'For the Bean Pot', amount: 2, unit: 'bunches', item: 'cavolo nero (Tuscan black kale), stems stripped and leaves torn' },
      { id: 'cb-7', group: 'For the Bean Pot', amount: 1, unit: 'whole', item: 'lemon, zested and juiced' },
      { id: 'cb-8', group: 'For Serving', amount: 4, unit: 'slices', item: 'thick country sourdough bread, grilled or toasted' }
    ],
    instructions: [
      {
        step: 1,
        title: 'Simmer the soaked beans until creamy',
        body: 'Drain the soaked beans and place in a heavy pot with fresh water to cover by 5 cm, 2 tablespoons olive oil, a bay leaf, and 1 tablespoon salt. Bring to a boil, then simmer gently for 50 to 65 minutes until tender and creamy inside. Reserve the rich bean cooking broth.',
        durationLabel: '60 mins'
      },
      {
        step: 2,
        title: 'Build the garlic, fennel, and kale base',
        body: 'In a wide Dutch oven, warm the remaining olive oil over medium-low heat. Cook the diced onion, sliced garlic, fennel seeds, and chili flakes for 10 minutes until fragrant and golden. Add the torn cavolo nero leaves in batches, tossing until wilted.',
        durationLabel: '12 mins'
      },
      {
        step: 3,
        title: 'Braise beans and greens together',
        body: 'Add the cooked beans along with 600 ml of their starchy cooking broth. Simmer uncovered for 20 minutes, mashing a few beans against the pot wall so the broth turns creamy and emulsified. Stir in the lemon zest and juice.',
        durationLabel: '20 mins'
      },
      {
        step: 4,
        title: 'Serve over garlic-rubbed grilled bread',
        body: 'Rub the hot toasted sourdough slices vigorously with the cut side of the raw garlic clove. Place a slice in each warm bowl, ladle the brothy beans and kale over top, and finish with a generous ribbon of green olive oil.',
        durationLabel: '3 mins'
      }
    ],
    servingSuggestion: 'Serve in wide pasta bowls with a spoon and fork, passing a cruet of your best peppery olive oil.',
    tablePairing: 'Simple carafe of young Sangiovese or Montepulciano.'
  },
  {
    id: 'heirloom-tomato-fennel-saffron-fish-stew',
    slug: 'heirloom-tomato-fennel-saffron-fish-stew',
    indexNumber: 'No. 10',
    title: 'Late-Harvest Tomato, Fennel & Saffron Braised Halibut',
    subtitle: 'Sweet shaved fennel bulb, golden saffron threads, and late heirloom tomatoes simmered with white wine and garlic around flaky wild halibut fillets.',
    category: 'Main Dishes',
    season: 'Early Autumn',
    image: '/images/sunday-table/fresh-ingredients-table.jpg',
    secondaryImage: '/images/sunday-table/sunday-dinner-table.jpg',
    imageAlt: 'Heirloom tomatoes, garlic braids, fennel bulbs, and flaky sea salt arranged on a sunlit wooden kitchen table',
    imageCaption: 'Shaved fennel bulb cooked slowly in olive oil melts into an aromatic, anise-scented bed for the fish.',
    prepTime: '20 mins',
    cookTime: '30 mins',
    totalTime: '50 mins',
    baseServings: 4,
    servingsLabel: 'servings',
    dietaryNotes: ['Gluten-Free', 'Dairy-Free', 'Nut-Free', 'Pescatarian'],
    dietaryDetail: 'Naturally gluten-free, dairy-free, and nut-free. Works equally well with Pacific cod, hake, or firm monkfish.',
    originStory: [
      'When the last knobby heirloom tomatoes on the windowsill are too soft to slice for salad, they belong in a shallow braising pan with shaved fennel, saffron steeped in warm white wine, and a few fillets of firm white fish.',
      'The entire dish comes together in thirty minutes in a single wide skillet, leaving you with an amber-red saffron broth that tastes of the Mediterranean coast without requiring hours of fish-stock reduction.'
    ],
    handwrittenNote: {
      text: 'Save the feathery green fennel fronds to scatter on top right before carrying the pan to the table.',
      attribution: 'Coastal Notebook'
    },
    cookware: [
      'Wide 12-inch lidded braiser or deep skillet',
      'Sharp chef’s knife or mandoline'
    ],
    ingredients: [
      { id: 'fs-1', group: 'For the Saffron & Fennel Broth', amount: 1, unit: 'large', item: 'fennel bulb, cored and thinly shaved, fronds reserved' },
      { id: 'fs-2', group: 'For the Saffron & Fennel Broth', amount: 600, unit: 'g', item: 'ripe heirloom tomatoes, coarsely chopped with all their juices' },
      { id: 'fs-3', group: 'For the Saffron & Fennel Broth', amount: 4, unit: 'cloves', item: 'garlic, thinly sliced' },
      { id: 'fs-4', group: 'For the Saffron & Fennel Broth', amount: 0.5, unit: 'tsp', item: 'Spanish saffron threads, steeped in 120 ml warm dry white wine' },
      { id: 'fs-5', group: 'For the Saffron & Fennel Broth', amount: 60, unit: 'ml', item: 'extra-virgin olive oil' },
      { id: 'fs-6', group: 'For the Fish', amount: 700, unit: 'g', item: 'skinless wild halibut or cod fillets, cut into 4 portions' },
      { id: 'fs-7', group: 'For the Fish', amount: 60, unit: 'g', item: 'Taggiasca or Kalamata olives, pitted' }
    ],
    instructions: [
      {
        step: 1,
        title: 'Melt the shaved fennel and garlic in olive oil',
        body: 'Warm the olive oil in a wide braiser over medium heat. Add the shaved fennel and a pinch of salt, cooking for 10 minutes until translucent and tender. Add the sliced garlic and cook 2 minutes more.',
        durationLabel: '12 mins'
      },
      {
        step: 2,
        title: 'Simmer the saffron wine and heirloom tomatoes',
        body: 'Pour in the saffron-infused white wine and let it bubble for 2 minutes. Add the chopped heirloom tomatoes with their juices and the olives. Simmer uncovered for 12 minutes until the tomatoes break down into a jammy, fragrant sauce.',
        durationLabel: '14 mins'
      },
      {
        step: 3,
        title: 'Poach the fish gently under a lid',
        body: 'Season the halibut fillets with sea salt and black pepper and nestle them halfway into the simmering tomato-fennel broth. Spoon a little sauce over top, cover with a lid, and simmer on low heat for 6 to 8 minutes until the fish flakes easily.',
        durationLabel: '7 mins'
      }
    ],
    servingSuggestion: 'Scatter generously with the reserved feathery fennel fronds and serve with crusty bread or steamed new potatoes.',
    tablePairing: 'Crisp Vermentino, Assyrtiko, or dry rosé.'
  },
  {
    id: 'herbed-farm-eggs-crushed-potatoes-chive-oil',
    slug: 'herbed-farm-eggs-crushed-potatoes-chive-oil',
    indexNumber: 'No. 11',
    title: 'Soft-Coddled Farm Eggs with Crispy Crushed Potatoes & Herb Oil',
    subtitle: 'New potatoes boiled and smashed crisp in olive oil, topped with jammy seven-minute eggs, garlicky yogurt, and bright parsley-tarragon oil.',
    category: 'Breakfast',
    season: 'Year-Round Larder',
    image: '/images/sunday-table/home-kitchen-prep.jpg',
    secondaryImage: '/images/sunday-table/olive-oil-and-herbs.jpg',
    imageAlt: 'A home cook in a linen apron finely chopping fresh herbs and shallots at a wooden butcher block',
    imageCaption: 'Finely hand-chopped parsley, chives, and tarragon stirred into olive oil turn routine eggs into a feast.',
    prepTime: '15 mins',
    cookTime: '25 mins',
    totalTime: '40 mins',
    baseServings: 4,
    servingsLabel: 'plates',
    dietaryNotes: ['Vegetarian', 'Gluten-Free', 'Nut-Free'],
    dietaryDetail: 'Naturally gluten-free and vegetarian. For dairy-free, swap the Greek yogurt base for mashed avocado or tahini-lemon drizzle.',
    originStory: [
      'A savory Sunday breakfast is often just an excuse to use the biggest bunch of tender herbs from the Saturday market. Instead of blending the herbs into a pesto, chopping flat-leaf parsley, tarragon, chives, and tiny capers by hand on a wooden butcher block keeps their texture bright and distinct.',
      'We smash boiled baby potatoes with the flat bottom of a wine bottle, sear them in olive oil until their craggy edges turn golden-crisp, and pile them over cool garlicky yogurt with jammy 7-minute eggs.'
    ],
    handwrittenNote: {
      text: 'Boil a few extra potatoes on Sunday morning—they make the best frittata on Monday.',
      attribution: 'Kitchen Counter Card'
    },
    cookware: [
      'Medium saucepan',
      'Wide cast-iron skillet',
      'Heavy chef’s knife & wooden board'
    ],
    ingredients: [
      { id: 'fe-1', group: 'For the Crushed Potatoes & Eggs', amount: 600, unit: 'g', item: 'waxy baby Yukon Gold potatoes, scrubbed' },
      { id: 'fe-2', group: 'For the Crushed Potatoes & Eggs', amount: 6, unit: 'whole', item: 'large brown farm eggs' },
      { id: 'fe-3', group: 'For the Crushed Potatoes & Eggs', amount: 250, unit: 'g', item: 'whole-milk Greek yogurt, mixed with 1 grated garlic clove and salt' },
      { id: 'fe-4', group: 'For the Chopped Herb Salsa Verde', amount: 1, unit: 'bunch', item: 'flat-leaf parsley and 1/2 bunch fresh chives, finely chopped' },
      { id: 'fe-5', group: 'For the Chopped Herb Salsa Verde', amount: 2, unit: 'tbsp', item: 'fresh tarragon leaves and 1 tbsp drained capers, minced' },
      { id: 'fe-6', group: 'For the Chopped Herb Salsa Verde', amount: 75, unit: 'ml', item: 'extra-virgin olive oil and zest of 1 lemon' }
    ],
    instructions: [
      {
        step: 1,
        title: 'Boil and smash the baby potatoes',
        body: 'Simmer the baby potatoes in salted water for 15 minutes until fork-tender. Drain, let steam dry for 3 minutes, and gently flatten each potato on a board using the bottom of a glass or mug so the skins crack.',
        durationLabel: '18 mins'
      },
      {
        step: 2,
        title: 'Crisp the potatoes and chop the herb oil',
        body: 'Fry the smashed potatoes in 3 tablespoons olive oil in a wide cast-iron skillet over medium-high heat for 5 minutes per side until deeply golden and crisp. Meanwhile, finely chop the parsley, chives, tarragon, and capers on your board and stir with olive oil and lemon zest.',
        durationLabel: '10 mins'
      },
      {
        step: 3,
        title: 'Boil seven-minute jammy eggs and plate',
        body: 'Lower the eggs into gently boiling water for exactly 6 minutes 45 seconds, then shock in cold water and peel. Swoop the garlicky yogurt across 4 plates, top with the hot crispy potatoes, halved jammy eggs, and spoonfuls of the green herb oil.',
        durationLabel: '8 mins'
      }
    ],
    servingSuggestion: 'Serve immediately while the potatoes are hot and the yogurt underneath is cool.',
    tablePairing: 'Thick toast and hot black tea or espresso.'
  },
  {
    id: 'red-wine-poached-pears-bay-leaf-mascarpone',
    slug: 'red-wine-poached-pears-bay-leaf-mascarpone',
    indexNumber: 'No. 12',
    title: 'Spiced Red-Wine Poached Bosc Pears with Bay-Leaf Mascarpone',
    subtitle: 'Firm Bosc pears simmered gently in Sangiovese, orange peel, black peppercorn, and fresh bay leaf until stained deep ruby and syrupy.',
    category: 'Desserts',
    season: 'Late Autumn & Winter',
    image: '/images/sunday-table/rustic-kitchen-interior.jpg',
    secondaryImage: '/images/sunday-table/dessert-being-served.jpg',
    imageAlt: 'Sunlit rustic home kitchen interior with a wooden farm table holding a bowl of autumn pears and stoneware',
    imageCaption: 'Poaching pears the morning before dinner lets the ruby wine syrup penetrate all the way to the core.',
    prepTime: '15 mins',
    cookTime: '45 mins',
    totalTime: '1 hr',
    baseServings: 6,
    servingsLabel: 'whole poached pears',
    dietaryNotes: ['Vegetarian', 'Gluten-Free', 'Nut-Free', 'Make-Ahead Friendly'],
    dietaryDetail: 'Naturally gluten-free and nut-free. Can be made 2 days ahead and chilled in the poaching syrup.',
    originStory: [
      'After a long, abundant Sunday roast or a rich bowl of ragù, nobody really needs a heavy chocolate cake. A bowl of firm Bosc pears standing upright in a pot of spiced red wine, orange peel, and fresh bay leaves scents the entire house while simmering quietly on the back burner.',
      'Once the pears are tender to the point of a knife, we boil the poaching liquid down until it coats the back of a spoon like ruby lacquer, and serve each pear alongside a cloud of mascarpone whipped with a splash of cream.'
    ],
    handwrittenNote: {
      text: 'Cut a thin slice off the bottom of each pear before poaching so they stand up proudly in the bowl.',
      attribution: 'Winter Hosting Notes'
    },
    cookware: [
      'Deep, narrow 4-quart saucepan',
      'Vegetable peeler',
      'Parchment paper (for a cartouche lid)'
    ],
    ingredients: [
      { id: 'wp-1', group: 'For the Poaching Pot', amount: 6, unit: 'whole', item: 'firm-ripe Bosc pears, peeled with stems left intact' },
      { id: 'wp-2', group: 'For the Poaching Pot', amount: 750, unit: 'ml', item: 'dry, fruity red wine (1 bottle Sangiovese, Merlot, or Côtes du Rhône)' },
      { id: 'wp-3', group: 'For the Poaching Pot', amount: 150, unit: 'g', item: 'raw cane sugar and 2 tbsp honey' },
      { id: 'wp-4', group: 'For the Poaching Pot', amount: 1, unit: 'whole', item: 'orange, zest peeled in wide strips plus juice' },
      { id: 'wp-5', group: 'For the Poaching Pot', amount: 3, unit: 'whole', item: 'fresh bay leaves, 1 cinnamon stick, and 8 black peppercorns' },
      { id: 'wp-6', group: 'For the Cream', amount: 225, unit: 'g', item: 'mascarpone cheese, whisked with 3 tbsp heavy cream and 1 tsp vanilla' }
    ],
    instructions: [
      {
        step: 1,
        title: 'Infuse the spiced red wine poaching bath',
        body: 'In a saucepan just wide enough to hold the pears snugly, combine the red wine, sugar, honey, orange strips, orange juice, bay leaves, cinnamon stick, and peppercorns. Bring to a simmer, stirring until the sugar dissolves.',
        durationLabel: '5 mins'
      },
      {
        step: 2,
        title: 'Poach the pears under a parchment cartouche',
        body: 'Place the peeled pears into the simmering liquid and top with a circle of parchment paper directly on the surface so the upper halves stay submerged. Simmer gently on low heat for 28 to 35 minutes, turning occasionally, until tender when pierced.',
        durationLabel: '32 mins'
      },
      {
        step: 3,
        title: 'Reduce the poaching wine to a glossy syrup',
        body: 'Transfer the pears to a serving bowl with a slotted spoon. Boil the remaining wine liquid over medium-high heat for 12 to 15 minutes until reduced by two-thirds and syrupy. Pour over the pears, cool, and serve with whipped mascarpone.',
        durationLabel: '15 mins'
      }
    ],
    servingSuggestion: 'Stand each ruby pear upright in a shallow ceramic bowl, spoon the warm or chilled wine syrup over top, and add a generous spoonful of mascarpone.',
    tablePairing: 'Crisp almond biscotti or dark chocolate squares.'
  }
];

export interface SeasonalIngredient {
  id: string;
  name: string;
  latinName: string;
  peakMonths: string;
  image: string;
  originRegion: string;
  tastingNotes: string;
  selectionTip: string;
  kitchenRitual: string;
  linkedRecipeSlug: string;
  linkedRecipeTitle: string;
}

export const SEASONAL_LARDER: SeasonalIngredient[] = [
  {
    id: 'tardivo-radicchio',
    name: 'Radicchio Tardivo di Treviso',
    latinName: 'Cichorium intybus',
    peakMonths: 'November – February',
    image: '/images/sunday-table/market-seasonal-produce.jpg',
    originRegion: 'Veneto & Northern Farmsteads',
    tastingNotes: 'Crisp white ribs and curled burgundy tips with an assertive, bittersweet mineral snap that turns velvety and sweet when kissed by cast-iron heat.',
    selectionTip: 'Look for tight, heavy heads with ivory-white ribs free of browning and curling, flame-like purple-red tips.',
    kitchenRitual: 'Quarter lengthwise through the root so the leaves stay anchored, brush with early-harvest olive oil, and sear cut-side down until the edges char.',
    linkedRecipeSlug: 'charred-radicchio-farro-hazelnut-salad',
    linkedRecipeTitle: 'Warm Charred Tardivo Radicchio, Pearled Farro & Toasted Hazelnuts'
  },
  {
    id: 'new-harvest-olive-oil',
    name: 'Olio Nuovo (Unfiltered First-Press Olive Oil)',
    latinName: 'Olea europaea',
    peakMonths: 'Late October – January',
    image: '/images/sunday-table/olive-oil-and-herbs.jpg',
    originRegion: 'Groves of Tuscany, Liguria & California',
    tastingNotes: 'Cloudy emerald-gold viscosity with an immediate aroma of crushed tomato leaf, green almond, and a peppery throat-catch at the finish.',
    selectionTip: 'Buy in dark glass or tins stamped with the current autumn harvest date; use generously within three months while the chlorophyll is vibrant.',
    kitchenRitual: 'Never waste Olio Nuovo in a frying pan—pour it raw in a thick ribbon over hot bean soup, grilled bread, or fresh pasta off the heat.',
    linkedRecipeSlug: 'braised-cannellini-cavolo-nero-garlic-toast',
    linkedRecipeTitle: 'Braised Heirloom White Beans & Cavolo Nero over Garlic-Rubbed Toast'
  },
  {
    id: 'black-mission-figs',
    name: 'Late-Crop Black Mission & Brown Turkey Figs',
    latinName: 'Ficus carica',
    peakMonths: 'September – November',
    image: '/images/sunday-table/dessert-being-served.jpg',
    originRegion: 'Mediterranean & Warm Orchard Valleys',
    tastingNotes: 'Thin purple-black skin giving way to strawberry-red seedy flesh that tastes of wildflower honey and jam when roasted.',
    selectionTip: 'Choose figs that droop slightly on the stem, feel heavy like little water balloons, and show a tiny drop of nectar at the eye.',
    kitchenRitual: 'Roast alongside savory shallots and chicken drippings, or press cut-side up into toasted almond frangipane.',
    linkedRecipeSlug: 'herb-roasted-chicken-shallots-figs',
    linkedRecipeTitle: 'Cast-Iron Roast Chicken with Caramelized Shallots & Late Figs'
  },
  {
    id: 'stone-ground-red-fife',
    name: 'Stone-Ground Heritage Wheat & Dark Rye',
    latinName: 'Triticum aestivum & Secale cereale',
    peakMonths: 'Milled Fresh Year-Round',
    image: '/images/sunday-table/freshly-baked-bread.jpg',
    originRegion: 'Regional Gristmills',
    tastingNotes: 'Warm aroma of toasted hay, hazelnut, and sweet wheat germ that retains the natural oils stripped from roller-milled commercial flour.',
    selectionTip: 'Smell the bag—freshly stone-milled whole grain flour should smell sweet and nutty like oatmeal, never dusty or bitter.',
    kitchenRitual: 'Blend 20% to 30% fresh whole grain into high-hydration sourdough boules or rustic press-in tart crusts.',
    linkedRecipeSlug: 'country-hearth-sourdough-boule',
    linkedRecipeTitle: 'Saturday-Night Country Levain with Blistered Crust'
  }
];
