const item = (name, price, extra = {}) => ({
  name,
  price: String(price),
  ...extra,
})

export const menuSections = [
  {
    id: 'offers',
    title: 'Offers',
    navLabel: 'Offers',
    tagline: 'Limited Time',
    items: [
      item('Sky High Sampler', 340, {
        description:
          'Four iced favorites to share — fresh orange juice, creamy iced coffee, chocolate frappe, and a chilled berry refresher. Perfect for sunny days.',
        tags: ['limited'],
        image: '/offers/sky-high-sampler.png',
        imageStyle: 'rounded',
      }),
    ],
  },
  {
    id: 'breakfast',
    title: 'Breakfast',
    tagline: 'Morning Favorites',
    cardVariant: 'extras',
    items: [
      item('Halloumi Sandwich', 150),
      item('Scramble Bagel', 120),
      item('Croissant', 75),
      item('Turkey Cheese Croissant', 180),
      item('Cheese Croissant', 160),
      item('Spanish Omelette', 90),
      item('American Breakfast', 160),
      item('Cheese Egg Benedict', 190),
      item('Turkey Cheese Omelette', 160),
      item('Roast Beef Sandwich', 160),
      item('Tuna Sandwich', 160),
    ],
  },
  {
    id: 'breakfast-extras',
    title: 'Breakfast Extras',
    navLabel: 'B. Extras',
    tagline: 'Add-Ons',
    cardVariant: 'extras',
    items: [
      item('Extra Hotdog', 69),
      item('Extra Turkey', 25),
      item('Extra Cheese', 25),
      item('Extra Bread', 25),
    ],
  },
  {
    id: 'manosha',
    title: "Man'osha",
    tagline: 'Fresh Baked',
    cardVariant: 'extras',
    items: [
      item("Man'osha Vegetable", 125),
      item("Man'osha Halloumi Pesto", 135),
      item("Man'osha Za'atar", 100),
      item("Man'osha Roast Beef", 135),
      item("Man'osha Turkey", 135),
    ],
  },
  {
    id: 'manosha-extras',
    title: "Man'osha Extras",
    navLabel: 'M. Extras',
    tagline: 'Add-Ons',
    cardVariant: 'extras',
    items: [
      item('Extra Vegetables', 30),
      item('Extra Mozzarella', 35),
      item('Extra Cheddar', 40),
      item('Extra Halloumi', 40),
      item('Extra Turkey', 40),
      item('Extra Roast Beef', 40),
    ],
  },
  {
    id: 'signature',
    title: 'Signature',
    tagline: 'House Favorites',
    cardVariant: 'food',
    items: [
      item('Sticky Date', 260, {
        description:
          'Date cake with vanilla ice cream covered with Belgian chocolate served with our special caramel sauce.',
        tags: ['signature'],
      }),
      item('Ovo Pecan Roll', 210, {
        description:
          'Chewy cinnamon dough rolls stuffed with pecan served with white chocolate and caramel sauce.',
      }),
      item('Honey Cake', 240, {
        description:
          'Layers of biscuits, cream cheese and honey mixture served with strawberry and special honey sauce.',
      }),
      item('French Peanut Butter Brownies', 240, {
        description:
          'Brownies French style loaded with caramelized almond served with peanut butter and milk chocolate topped with vanilla ice cream.',
      }),
      item('Speculoos Surprise', 220, {
        description: 'Chocolate fondant with melting speculoos served with vanilla ice cream.',
      }),
      item('Mini Volcano', 240, {
        description:
          'Chocolate cake stuffed with chocolate sauce rich in roasted nuts (pecan, almonds, hazelnut, walnuts, pistachio).',
      }),
      item('Break Me', 290, {
        description:
          'A piece of French brownie with vanilla ice cream and fruits covered with milk chocolate served with our special caramel sauce.',
        tags: ['signature'],
      }),
      item('Matilda Cake', 320, {
        description:
          'Moist chocolate cake layers topped and filled with a glossy chocolate fudge frosting. Served with chocolate sauce.',
        tags: ['signature'],
      }),
      item('Saffron French Toast', 180, {
        description: 'Brioche toast flavoured with saffron milk and caramel.',
      }),
      item('Caramel French Toast', 190, {
        description: 'Brioche toast flavoured with caramel milk and caramel sauce.',
      }),
      item('Nutella French Toast', 210, {
        description: 'French toast flavored with Nutella.',
      }),
      item('Tiramisu Cake', 180, {
        description:
          'For coffee lovers, several layers of tiramisu lady finger mixed, served with a special coffee sauce.',
      }),
      item('San Sebastian Chocolate', 280, {
        description:
          'Traditional Turkish cheesecake, light, creamy and smooth, perfectly caramelized. Served with chocolate sauce.',
      }),
      item('San Sebastian Lotus', 300, {
        description:
          'Traditional Turkish cheesecake, light, creamy and smooth, perfectly caramelized. Served with lotus sauce.',
      }),
      item('San Sebastian Strawberry', 280, {
        description:
          'Traditional Turkish cheesecake, light, creamy and smooth, perfectly caramelized. Served with strawberry sauce.',
      }),
      item('San Sebastian Pistachio', 310, {
        description:
          'Traditional Turkish pistachio cheesecake, light, creamy and smooth, perfectly caramelized. Served with pistachio sauce.',
      }),
    ],
  },
  {
    id: 'baby-dynamite',
    title: 'Baby Dynamite',
    tagline: 'Explosive Flavor',
    cardVariant: 'food',
    items: [
      item('Baby Dynamite', 270, {
        description:
          '2 layers of chocolate cake stuffed and topped with vanilla ice cream covered with lotus and sprinkled Lotus crumbs. Served with hot caramel sauce.',
        tags: ['signature'],
      }),
      item('Saffron Baby Dynamite', 270, {
        description:
          '2 layers of saffron cake stuffed and covered with vanilla ice cream covered with saffron sauce. Served with hot saffron sauce.',
      }),
      item('Pistachio Baby Dynamite', 270, {
        description:
          '2 layers of pistachio cake stuffed and covered with vanilla ice cream covered with pistachio sauce and sprinkled pistachio crumbs. Served with hot pistachio sauce.',
      }),
      item('Chocolate Baby Dynamite', 270, {
        description:
          '2 layers of chocolate cake stuffed and covered with vanilla ice cream covered with chocolate sauce. Served with chocolate sauce.',
      }),
      item('Mango Baby Dynamite', 240, {
        description:
          '2 layers of mango cake stuffed and covered with mango ice cream covered with mango sauce. Served with mango sauce.',
      }),
    ],
  },
  {
    id: 'carry-me',
    title: 'Carry Me',
    tagline: 'Saucy Indulgence',
    cardVariant: 'food',
    items: [
      item('Carry Me Caramel', 240, {
        description:
          'A piece of soft vanilla cake with a layer of vanilla ice cream and caramel sauce.',
      }),
      item('Carry Me Pistachio', 240, {
        description:
          'A piece of soft pistachio cake with a layer of vanilla ice cream, pistachio sauce and grounded pistachio.',
      }),
      item('Carry Me Brownies', 240, {
        description:
          'Soft chocolate cake with a layer of vanilla ice cream, brownies drenched in chocolate sauce and sprinkled with corn flakes.',
      }),
    ],
  },
  {
    id: 'milk-cakes',
    title: 'Milk Cakes',
    tagline: 'Soaked & Creamy',
    cardVariant: 'food',
    items: [
      item('Lotus Milk Cake', 210, {
        description:
          'Milk cake covered with whipping cream, lotus spread served with milk syrup.',
        tags: ['signature'],
      }),
      item('Trilece Milk Cake', 210, {
        description:
          'Covered with whipping cream and white chocolate served with milk syrup.',
      }),
      item('Saffron Milk Cake', 285, {
        description:
          'Rich saffron cake soaked in saffron milk with whipping cream.',
      }),
      item('Pistachio Milk Cake', 285, {
        description:
          'Pistachio fudge soaked with pistachio sauce topped with whipping cream and pistachio nuts.',
      }),
      item('Vanilla Milk Cake', 210, {
        description:
          'Vanilla cake soaked in vanilla milk and served with whipping cream and fresh fruit.',
      }),
    ],
  },
  {
    id: 'truffle-trends-cookies',
    title: 'Truffle & Trends Cookies',
    navLabel: 'Cookies',
    tagline: 'Warm & Stuffed',
    cardVariant: 'food',
    items: [
      item('Pistachio Cookies', 260, {
        description: 'Cookies stuffed with pistachio and topped with ice cream.',
      }),
      item('Nutella Cookies', 260, {
        description: 'Cookies stuffed with Nutella and topped with ice cream.',
      }),
      item('Lotus Cookies', 260, {
        description: 'Cookies stuffed with Lotus and topped with ice cream.',
      }),
    ],
  },
  {
    id: 'crepe',
    title: 'Crepe',
    tagline: 'Belgian Chocolate',
    cardVariant: 'food',
    items: [
      item('Chocolate Crepe', 220, {
        description:
          'Homemade crepe stuffed and covered with milk chocolate sprinkled with lotus crumbs.',
      }),
      item('Oreo Crepe', 260, {
        description:
          'Homemade crepe stuffed with milk chocolate and Oreo topped with milk chocolate, white chocolate and Oreo.',
      }),
      item('Kinder Crepe', 260, {
        description:
          'Homemade crepe stuffed with milk chocolate and Kinder topped with milk chocolate, white chocolate and Kinder.',
      }),
      item('Almond Nutella Crepe', 260, {
        description:
          'Homemade crepe stuffed and topped with Nutella sprinkled with crunchy almond.',
      }),
    ],
  },
  {
    id: 'waffle',
    title: 'Waffle',
    tagline: 'Crispy & Sweet',
    cardVariant: 'food',
    items: [
      item('Nutella Waffle', 210),
      item('Red Velvet Waffle', 210),
      item('Choco Waffle', 210),
      item('Crispy and Chewy Waffle', 210),
    ],
  },
  {
    id: 'pancake',
    title: 'Pancake',
    tagline: 'Fluffy Stacks',
    cardVariant: 'food',
    items: [
      item('Chocolate Pancake', 240, {
        description:
          "Layers of chocolate pancake stuffed with milk chocolate served with vanilla ice cream.",
      }),
      item('Lotus Pancake', 280, {
        description:
          'Layers of lotus pancake filled with lotus served with vanilla ice cream.',
      }),
      item('Pistachio Pancake', 310, {
        description:
          'Layers of pistachio pancake filled with pistachio spread served with vanilla ice cream.',
      }),
      item('Red Velvet Pancake', 220, {
        description:
          'Layers of red velvet pancake stuffed with white chocolate served with vanilla and fruits.',
      }),
      item('Vanilla Pancake', 160, {
        description:
          'Vanilla pancakes served with your choice of maple syrup, milk chocolate, or white chocolate.',
      }),
    ],
  },
  {
    id: 'coffee',
    title: 'Coffee',
    tagline: 'Hot & Bold',
    cardVariant: 'drink',
    items: [
      item('Espresso Single', 50),
      item('Espresso Double', 80),
      item('Espresso Affogato', 80),
      item('Cortado', 80),
      item('Cappuccino', 85),
      item('Americano', 70),
      item('Turkish Coffee', 45),
      item('Double Turkish Coffee', 70),
      item('White Mocha', 110),
      item('Single Macchiato', 60),
      item('Double Macchiato', 85),
      item('Flat White', 85),
      item('Latte', 85),
      item('Spanish Latte', 100),
      item('Pistachio Latte', 140),
      item('Arabic Coffee', 170),
      item('Mocha', 95),
      item('Dark Mocha', 110),
    ],
  },
  {
    id: 'ice-coffee',
    title: 'Ice Coffee',
    navLabel: 'Iced',
    tagline: 'Chilled Brews',
    cardVariant: 'drink',
    items: [
      item('Ice Americano', 70),
      item('Ice Latte', 85),
      item('Ice Cappuccino', 85),
      item('Ice Mocha (White/Dark)', 120),
      item('Ice Shaken Mocha', 110),
      item('Ice Pistachio', 140),
      item('Ice Spanish Latte', 100),
      item('Ice Caramel Macchiato', 120),
      item('Frappe', 150),
      item('Nutella Frappe', 125),
      item('Mocha Frappe', 150),
      item('Lotus Frappe', 150),
    ],
  },
  {
    id: 'speciality-coffee',
    title: 'Speciality Coffee',
    navLabel: 'Specialty',
    tagline: 'Craft Brews',
    cardVariant: 'drink',
    items: [
      item('V60', 70),
      item('Ice Drip', 85),
      item('Ice Drip Berries', 100),
      item('Cold Brew', 110),
      item('French Press', 80),
    ],
  },
  {
    id: 'hot-drinks',
    title: 'Hot Drinks',
    tagline: 'Warm Sips',
    cardVariant: 'drink',
    items: [
      item('Tea', 40),
      item('Green Tea', 40),
      item('Flavour Tea', 45),
      item('Karak Tea', 80),
      item('Ginger Power', 70),
      item('Sahlep', 80),
      item('Hot Cider', 75),
      item('Hot Chocolate', 95),
      item('Mocha Snickers', 150),
      item('Mocha Kinder', 150),
      item('Hummus El Sham', 50),
      item('Balila', 75),
    ],
  },
  {
    id: 'cold-drinks',
    title: 'Cold Drinks',
    tagline: 'Cool & Fresh',
    cardVariant: 'drink',
    items: [
      item('Mojito Classic', 85),
      item('Mojito Mix', 120),
      item('Lemon with Mint Fresh Juice', 70),
      item('Orange Fresh Juice', 70),
      item('Strawberry Fresh Juice', 70),
      item('Mango Fresh Juice', 70),
      item('Guava Fresh Juice', 70),
      item('Avocado with Honey', 130),
      item('Red Bull', 80),
      item('Red Bull Mix', 150),
      item('Hummer Head', 120),
      item('Ice Tea', 60),
      item('Ice Tea Flavour', 85),
      item('Ice Chocolate', 140),
      item('Ice Chocolate Nutella', 140),
      item('We Mango', 110),
      item('Water', 20),
      item('Sparkling Water', 45),
    ],
  },
  {
    id: 'milkshake',
    title: 'Milkshake',
    tagline: 'Thick & Creamy',
    cardVariant: 'drink',
    items: [
      item('Pistachio Milkshake', 130),
      item('Oreo Milkshake', 120),
      item('Chocolate Milkshake', 120),
      item('Strawberry Milkshake', 120),
      item('Nutella Milkshake', 120),
      item('Vanilla Milkshake', 110),
      item('Snickers Milkshake', 130),
      item('Mango Milkshake', 120),
      item('Lotus Milkshake', 120),
      item('Mix Berry Milkshake', 120),
    ],
  },
  {
    id: 'additions',
    title: 'Additions',
    navLabel: 'Extras',
    tagline: 'Customize',
    cardVariant: 'extras',
    items: [
      item('Extra Topping', 75),
      item('Extra Flavour', 25),
      item('Extra Ice Cream', 25),
      item('Extra Milk', 15),
      item('Extra Marshmallow', 20),
      item('Extra Nuts', 25),
    ],
  },
]
