const item = (name, price, extra = {}) => ({
  name,
  price: String(price),
  ...extra,
})

export const menuSections = [
  {
    id: 'salads',
    title: 'Salads',
    tagline: 'Fresh Bowls',
    cardVariant: 'food',
    items: [
      item('Mexican Chicken Bowl', 320, {
        image: encodeURI('/mexican.png'),
        description:
          'Grilled chicken, avocado, sweet corn, red beans, romaine lettuce, tortilla crunch & balsamic vinaigrette.',
      }),
      item('Beetroot & Quinoa Salad', 220, {
        image: encodeURI('/beetroot.png'),
        description:
          'Quinoa, roasted beetroot, feta cheese, blood orange, baby spinach, caramelized walnuts & lemon dressing.',
      }),
      item('Honey Chicken Salad', 240, {
        image: encodeURI('/honey chicken.png'),
        description:
          'Grilled chicken, avocado, sweet corn, cherry tomatoes, sesame honey mustard dressing.',
      }),
      item('Creamy Tuna Oat Pasta Salad', 230, {
        image: encodeURI('/creamy tuna.png'),
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
        image: encodeURI('/matcha.png'),
        description:
          'Stone-ground ceremonial matcha whisked smooth, served iced or hot over your choice of milk.',
      }),
      item('Strawberry Matcha', 210, {
        image: encodeURI('/strawberry matcha.png'),
        description:
          'Fresh strawberry compote layered with creamy matcha and milk for a bright, balanced sip.',
      }),
      item('White Chocolate Matcha', 200, {
        image: encodeURI('/white chocolate matcha.png'),
        description:
          'Rich white chocolate folded into velvety matcha — indulgent, smooth, and lightly sweet.',
      }),
      item('Spanish Matcha', 190, {
        description:
          'Sweetened condensed milk with matcha over ice — a bold, caramel-leaning classic.',
      }),
      item('Salted Vanilla Matcha', 195, {
        description:
          'Madagascar vanilla and a touch of sea salt to lift the earthy depth of matcha.',
      }),
      item('The Brew Matcha', 210, {
        tags: ['signature'],
        description:
          'Our house signature: premium matcha, balanced sweetness, and a finish that lingers.',
      }),
      item('Mango Coconut Matcha', 210, {
        description:
          'Ripe mango and coconut cream blended with matcha for a tropical, sun-soaked profile.',
      }),
      item('Blueberry Matcha', 210, {
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
      item('Espresso', 75),
      item('Espresso Macchiato', 95),
      item('Cortado', 95),
      item('Turkish Coffee', 55),
      item('Americano', 110),
      item('Cappuccino', 110),
      item('Flat White', 105),
      item('Filter Coffee', 160),
      item('Mocha', 150),
      item('Affogato', 130),
      item('White Mocha', 150),
      item('Dirty Espresso', 140),
      item('The Retro', 210, { tags: ['signature'] }),
      item('Spanish Latte', 150),
      item('Salted Vanilla Latte', 150),
      item('Salted Caramel Latte', 150),
    ],
  },
  {
    id: 'non-coffee',
    title: 'Non-Coffee',
    tagline: 'Warm',
    cardVariant: 'extras',
    items: [item('Hot Chocolate', 160), item('Tea', 60)],
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
      item('Classic Mojito', 140),
      item('Passion Fruit Mojito', 170),
      item('Pink Lemonade Mojito', 150),
      item('Mix Berries Mojito', 170),
      item('Mango Swiss Smoothie', 100),
      item('Mix Berries Vanilla Smoothie', 180),
      item('Pink Hibiscus Lemonade', 170),
      item('Sunset Hibiscus', 170, { tags: ['signature'] }),
      item('Mango Passion Mint', 180),
      item('Watermelon Smoothie', 155),
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
        description: 'Grilled chicken, jalapeños, roasted peppers, lettuce & sriracha mayo.',
      }),
      item('Mediterranean Roast Beef', 230, {
        description: 'Roast beef, sundried tomatoes, olives, mushrooms & jalapeños on sourdough.',
      }),
      item('Turkey & Cheddar', 190, {
        description: 'Smoked turkey, cheddar cheese, tomatoes, watercress & mayo.',
      }),
      item('Smoked Salmon Bagel', 240, {
        description: 'Smoked salmon, cream cheese, dill, watercress & sundried tomatoes.',
      }),
    ],
  },
]
