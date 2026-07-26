const item = (name, price, extra = {}) => ({
  name,
  price: String(price),
  ...extra,
})

const img = (path) => ({ image: encodeURI(path) })

const ICE_LATTE = '/coffee iced/ice latte_ spanish_ the retro_ S.V_ W.M_ S.C.png'
const HOT_CAP = '/hot coffee/flat white_ cappuccino .png'

export const menuSections = [
  {
    id: 'offers',
    title: 'Offers',
    navLabel: 'Offers',
    tagline: 'Limited Time',
    items: [
      item('Matcha Duo Deal', 350, {
        description: 'Any two matcha drinks — save 70 LE.',
        tags: ['limited'],
      }),
      item('Morning Brew Combo', 180, {
        description: 'Any hot coffee + cookie. Available before 11 AM.',
        tags: ['limited'],
      }),
    ],
  },
  {
    id: 'salads',
    title: 'Salads',
    tagline: 'Fresh Bowls',
    cardVariant: 'food',
    items: [
      item('Mexican Chicken Bowl', 320, {
        ...img('/salads/mexican.png'),
        description:
          'Grilled chicken, avocado, sweet corn, red beans, romaine lettuce, tortilla crunch & balsamic vinaigrette.',
      }),
      item('Beetroot & Quinoa Salad', 220, {
        ...img('/salads/beetroot.png'),
        description:
          'Quinoa, roasted beetroot, feta cheese, blood orange, baby spinach, caramelized walnuts & lemon dressing.',
      }),
      item('Honey Chicken Salad', 240, {
        ...img('/salads/honey chicken.png'),
        description:
          'Grilled chicken, avocado, sweet corn, cherry tomatoes, sesame honey mustard dressing.',
      }),
      item('Creamy Tuna Oat Pasta Salad', 230, {
        ...img('/salads/creamy tuna.png'),
        description:
          'Tuna, oat pasta, Greek yogurt dressing, roasted peppers, celery, carrots & fresh dill.',
      }),
    ],
  },
  {
    id: 'matcha',
    title: 'Matcha',
    tagline: 'Iced & Hot',
    cardVariant: 'drink',
    items: [
      item('Matcha', 170, {
        ...img('/matcha/matcha .png'),
        description:
          'Stone-ground ceremonial matcha whisked smooth, served iced or hot over your choice of milk.',
      }),
      item('Strawberry Matcha', 210, {
        ...img('/matcha/strawberry matcha.png'),
        description:
          'Fresh strawberry compote layered with creamy matcha and milk for a bright, balanced sip.',
      }),
      item('Spanish Matcha', 190, {
        ...img('/matcha/Spanish Matcha.png'),
        description:
          'Sweetened condensed milk with matcha over ice — a bold, caramel-leaning classic.',
      }),
      item('Mango Coconut Matcha', 210, {
        ...img('/matcha/mango coconut matcha.png'),
        description:
          'Ripe mango and coconut cream blended with matcha for a tropical, sun-soaked profile.',
      }),
      item('Blueberry Matcha', 210, {
        ...img('/matcha/blueberry matcha.png'),
        description:
          'Wild blueberry notes meet ceremonial matcha — fruity, vibrant, and refreshingly clean.',
      }),
    ],
  },
  {
    id: 'coffee',
    title: 'Coffee',
    tagline: 'Iced & Hot',
    cardVariant: 'drink',
    items: [
      item('Espresso', 75, { ...img('/hot coffee/espresso.png') }),
      item('Espresso Macchiato', 95, { ...img('/hot coffee/espresso machiatto.png') }),
      item('Cortado', 95, { ...img('/hot coffee/cortado.png') }),
      item('Turkish Coffee', 55, { ...img('/hot coffee/turkish coffee.png') }),
      item('Americano', 110, { ...img('/coffee iced/americano.png') }),
      item('Cappuccino', 110, { ...img(HOT_CAP) }),
      item('Flat White', 105, { ...img(HOT_CAP) }),
      item('Filter Coffee', 160, { ...img('/hot coffee/filter coffee.png') }),
      item('Mocha', 150, { ...img('/coffee iced/ice mocha.png') }),
      item('White Mocha', 150, { ...img(ICE_LATTE) }),
      item('Dirty Espresso', 140, { ...img('/hot coffee/dirty espresso .png') }),
      item('The Retro', 210, {
        tags: ['signature'],
        ...img(ICE_LATTE),
      }),
      item('Spanish Latte', 150, { ...img(ICE_LATTE) }),
      item('Salted Vanilla Latte', 150, { ...img(ICE_LATTE) }),
      item('Salted Caramel Latte', 150, { ...img(ICE_LATTE) }),
    ],
  },
  {
    id: 'non-coffee',
    title: 'Non-Coffee',
    tagline: 'Warm',
    cardVariant: 'drink',
    items: [
      item('Hot Chocolate', 160, { ...img('/non coffee hot/hot chocolate.png') }),
      item('Tea', 60, { ...img('/non coffee hot/tea.png') }),
    ],
  },
  {
    id: 'add-ons',
    title: 'Add-Ons',
    tagline: 'Extras',
    cardVariant: 'extras',
    items: [
      item('Alternative Milk', 40),
      item('Extra Shot', 30),
      item('Flavor Shot', 35),
    ],
  },
  {
    id: 'refreshers',
    title: 'Refreshers',
    tagline: 'Cool & Fresh',
    cardVariant: 'drink',
    items: [
      item('Classic Mojito', 140, { ...img('/refreshers/classic mojito.png') }),
      item('Pink Lemonade Mojito', 150, { ...img('/refreshers/pink lemonade.png') }),
      item('Mix Berries Mojito', 170, { ...img('/refreshers/mix berry mojito .png') }),
      item('Mango Swiss Smoothie', 100, { ...img('/refreshers/mango smoothie.png') }),
      item('Mix Berries Vanilla Smoothie', 180, { ...img('/refreshers/mix berry smoothie.png') }),
      item('Pink Hibiscus Lemonade', 170, { ...img('/refreshers/hibiscus mojito.png') }),
      item('Sunset Hibiscus', 170, {
        tags: ['signature'],
        ...img('/refreshers/hibiscus pineapple.png'),
      }),
      item('Mango Passion Mint', 180, { ...img('/refreshers/mango passion smoothie.png') }),
      item('Watermelon Smoothie', 155, { ...img('/refreshers/watermelon smoothie.png') }),
    ],
  },
  {
    id: 'sweet-treats',
    title: 'Sweet Treats',
    navLabel: 'Treats',
    tagline: 'Baked',
    cardVariant: 'extras',
    items: [item('Thin Cookies', 120), item('Energy Bites', 90)],
  },
  {
    id: 'bites',
    title: 'Bites',
    tagline: 'Sandwiches',
    cardVariant: 'food',
    items: [
      item('Sriracha Chicken', 190, {
        ...img('/Bites/Siracha chicken.png'),
        description: 'Grilled chicken, jalapeños, roasted peppers, lettuce & sriracha mayo.',
      }),
      item('Mediterranean Roast Beef', 230, {
        ...img('/Bites/Roast beef.png'),
        description: 'Roast beef, sundried tomatoes, olives, mushrooms & jalapeños on sourdough.',
      }),
      item('Turkey & Cheddar', 190, {
        ...img('/Bites/Turkey & cheddar.png'),
        description: 'Smoked turkey, cheddar cheese, tomatoes, watercress & mayo.',
      }),
      item('Smoked Salmon Bagel', 240, {
        ...img('/Bites/Salmon bagel.png'),
        description: 'Smoked salmon, cream cheese, dill, watercress & sundried tomatoes.',
      }),
    ],
  },
]
