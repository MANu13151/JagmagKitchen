export const SPACES_DATA = [
  {
    num: "01",
    id: "hall",
    title: "The Chandelier Dining Hall",
    subtitle: "Warm Copper Cove Lighting & Macramé Pendants",
    image: "/assets/chandelier-dining-hall.jpg",
    alt: "Glowing macramé chandeliers and cove-lit dining hall at Jagmag Kitchen",
    tag: "Signature Dining & Banquets",
    capacity: "Up to 110 Guests",
    description: "An architectural marvel featuring arched amber backlit alcoves, cascading handcrafted macramé chandeliers, and plush banquet seating. Designed for grand family gatherings, milestone anniversaries, and celebratory dinners."
  },
  {
    num: "02",
    id: "atrium",
    title: "The Tropical Atrium Courtyard",
    subtitle: "Indoor Banana Palms & Woven Basket Lanterns",
    image: "/assets/tropical-atrium-courtyard.jpg",
    alt: "Lush tropical atrium courtyard with palms and basket lanterns at Jagmag Kitchen",
    tag: "Open-Air Garden Vibe",
    capacity: "Up to 75 Guests",
    description: "Step into an oasis of botanical serenity. Multi-tiered terraced brick planters, mature broadleaf palms, and overhead woven rattan lanterns creating an ethereal twilight ambiance for evening cocktails and intimate parties."
  },
  {
    num: "03",
    id: "kitchen",
    title: "Curated Global & Indian Kitchen",
    subtitle: "Artisanal Maki, Dimsums & Royal Awadhi Delicacies",
    image: "/assets/avocado-sushi-maki.jpg",
    alt: "Artisanal Avocado and Cream Cheese Maki Roll with engraved Jagmag wooden cutlery box",
    tag: "Fine Culinary Craft",
    capacity: "A La Carte & Live Counters",
    description: "Our culinary philosophy celebrates juxtaposition: freshly rolled avocado & cream cheese maki served alongside slow-simmered 24-hour Dal Jagmag Makhani, wood-fired artisanal flatbreads, and handcrafted dimsums."
  }
];

export const BANQUET_PACKAGES = {
  classic: {
    id: "classic",
    name: "Classic Multicuisine Feast",
    pricePerGuest: 999,
    tag: "Ideal for Birthdays & Corporate Dinners",
    courses: "4 Courses • 14 Curated Items",
    highlights: [
      "2 Pan-Asian / Continental Starters",
      "2 Tandoori & North Indian Starters",
      "3 Signature Main Courses (including Dal Jagmag)",
      "Assorted Tandoori Breads & Pulao",
      "2 Artisanal Desserts + Ice Cream",
      "Welcome Mocktail on Arrival",
      "Dedicated Private Banquet Zone",
      "Complimentary Valet Parking"
    ]
  },
  royal: {
    id: "royal",
    name: "Royal Curated & Live Counters",
    pricePerGuest: 1499,
    tag: "Most Popular for Engagements & Milestones",
    courses: "6 Courses • 24 Curated Items",
    highlights: [
      "Live Artisanal Sushi & Dimsum Counter",
      "Live Chaat & Street Tapas Station",
      "4 Global Starters + 4 Tandoori Delicacies",
      "Royal Awadhi & Mughlai Mains Course",
      "Wood-Fired Truffle Flatbreads",
      "3 Premium Desserts & Live Jalebi / Rabri",
      "Unlimited Craft Mocktails & Coolers",
      "Custom Table Floral Decor & Ambient DJ Audio",
      "Dedicated Banquet Butler Service"
    ]
  }
};

export const MENU_CATEGORIES = [
  { id: "sushi", name: "Artisanal Sushi & Pan-Asian", badge: "Crafted Fresh" },
  { id: "indian", name: "North Indian Signatures", badge: "Royal Heritage" },
  { id: "continental", name: "Wood-Fired & Continental", badge: "Bespoke" },
  { id: "coolers", name: "Mocktails & Craft Coolers", badge: "Botanical" }
];

export const MENU_ITEMS = {
  sushi: [
    {
      name: "Avocado & Cream Cheese Maki",
      price: "₹445",
      desc: "Ripe Hass avocado, Philadelphia cream cheese, toasted white sesame, pickled ginger & Japanese shoyu.",
      tag: "House Signature",
      veg: true,
      image: "/assets/avocado-sushi-maki.jpg"
    },
    {
      name: "Crispy Lotus Stem in Honey Chilli",
      price: "₹365",
      desc: "Wok-crisped lotus root crisps tossed in organic Kashmiri honey, crushed red chillies, and scallions.",
      tag: "Crunchy",
      veg: true
    },
    {
      name: "Truffle Edamame Dimsum",
      price: "₹395",
      desc: "Delicate translucent potato-starch parcels stuffed with crushed edamame beans and aromatic white truffle oil.",
      tag: "Chef Special",
      veg: true
    },
    {
      name: "Asparagus Tempura & Spicy Mayo Roll",
      price: "₹425",
      desc: "Light and crispy asparagus tempura spears wrapped in vinegared sushi rice with sriracha glaze.",
      tag: "Popular",
      veg: true
    }
  ],
  indian: [
    {
      name: "Dal Jagmag Makhani",
      price: "₹395",
      desc: "Black urad lentils simmered over charcoal embers for 24 hours with house churned white butter and vine-ripened tomatoes.",
      tag: "Iconic",
      veg: true
    },
    {
      name: "Paneer Lababdar Royal",
      price: "₹425",
      desc: "Silken cottage cheese batons tossed in a rich cashew nut, onion and tomato gravy finished with grated paneer and kasuri methi.",
      tag: "Royal",
      veg: true
    },
    {
      name: "Subz Dum Handi",
      price: "₹385",
      desc: "Garden fresh seasonal vegetables and baby potatoes slow-cooked in a sealed clay pot with saffron-infused Awadhi aromatics.",
      tag: "Traditional",
      veg: true
    },
    {
      name: "Garlic & Truffle Naan Basket",
      price: "₹225",
      desc: "Clay tandoor blistered leavened bread brushed with slow-confit garlic butter and a fine drizzle of white truffle oil.",
      tag: "Must Order",
      veg: true
    },
    {
      name: "Mughlai Malai Kofta",
      price: "₹415",
      desc: "Melt-in-mouth cottage cheese and mawa dumplings simmered in a velvety cardamom and white cashew gravy.",
      tag: "Heritage",
      veg: true
    }
  ],
  continental: [
    {
      name: "Burrata & Pesto Flatbread",
      price: "₹475",
      desc: "Wood-fired blistered sourdough base, artisanal basil walnut pesto, roasted cherry tomatoes, and creamy fresh burrata.",
      tag: "Wood-Fired",
      veg: true
    },
    {
      name: "Wild Mushroom Risotto",
      price: "₹445",
      desc: "Arborio rice slow-stirred with porcini and button mushroom broth, aged parmesan shavings, and aromatic herb oil.",
      tag: "Italian",
      veg: true
    },
    {
      name: "Handcrafted Ravioli al Pomodoro",
      price: "₹465",
      desc: "Hand-rolled pasta pouches stuffed with ricotta & baby spinach, tossed in San Marzano tomato coulis with fresh basil.",
      tag: "Artisanal",
      veg: true
    }
  ],
  coolers: [
    {
      name: "Copper Spiced Guava",
      price: "₹245",
      desc: "Pink guava nectar shaken with black salt, chaat spice blend, fresh lime, and served with a smoked paprika chilli rim.",
      tag: "Spiced Refreshment",
      veg: true
    },
    {
      name: "Matcha Elderflower Fizz",
      price: "₹265",
      desc: "Ceremonial green matcha foam, French elderflower liqueur essence, sparkling tonic, and lemon balm sprig.",
      tag: "Botanical",
      veg: true
    },
    {
      name: "Smoked Kokum Spritzer",
      price: "₹235",
      desc: "Sun-dried wild kokum extract, roasted cumin, sparkling mineral water, and charred rosemary sprig.",
      tag: "Digestif",
      veg: true
    }
  ]
};
