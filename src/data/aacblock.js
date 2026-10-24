/* ------------------------------------------------------------------ */
/*  AAC Blocks product page content                                   */
/*  Sourced from real reference screenshots. TODO markers = content   */
/*  not visible in the source screenshot, needs to be supplied.       */
/* ------------------------------------------------------------------ */

export const aacHero = {
  image:
    '/images/factory_final_4x.jpg',
  imageAlt: 'Shreeji AAC Block',
  eyebrow: 'Our Product',
  title: 'Shreeji AAC Blocks in Mandla',
  subtitle:
    "Lightweight, fire-resistant and ISI-certified autoclaved aerated concrete (AAC) blocks, made at our factory in Mandla, Madhya Pradesh for faster, stronger construction.",
  primaryCta: 'Get Quote',
  primaryCtaHref: '/contact',
}

export const whyConecc = {
  title: 'Why Choose Shreeji AAC Blocks?',
  paragraphs: [
    'Shreeji Projects manufactures autoclaved aerated concrete (AAC) blocks at its factory in Mandla, Madhya Pradesh. AAC blocks suit foundations, the inner leaf of cavity walls, partition walls, internal and external walls and firewalls, in both load-bearing and non-load-bearing buildings. They are widely used in houses, commercial buildings and industrial buildings.',

    "AAC blocks are easy to work with. A hand saw is enough to cut them to the size you need, which speeds up construction and reduces wastage on site. With thin-bed jointing mortar you use up to 5 times less mortar than with conventional brickwork. Shreeji AAC blocks are up to 60% lighter than traditional bricks, and this lower dead load can reduce structural costs, depending on the project design.",
  ],
  cards: [
    {
      title: 'High Quality',
      description:
        'Precision manufacturing, strict quality control and quality raw materials give Shreeji AAC blocks consistent strength and durability across different kinds of construction.',
      image: '/images/Shreeji_Weight_Comparison.jpg', // TODO: replace with real 14kg vs 42kg scale comparison photo
      imageAlt: 'Shreeji AAC block weighed against a red brick stack',
    },
    {
      title: 'Different Sizes',
      description:
        'Available in thicknesses of 75 mm, 100 mm, 125 mm, 150 mm, 200 mm, 230 mm, 250 mm and 300 mm, with a standard length of 600 mm and a height of 200 mm.',
      image: '/images/Shreeji_Mason_Placing_Block.jpg',
      imageAlt: 'Shreeji AAC blocks in different sizes with a hard hat',
    },
    {
      title: 'Ribbed Face',
      description:
        'Shreeji AAC blocks have a ribbed face that grips plaster and mortar for better bonding. Because of this, wall putty or plaster of Paris can be applied directly, without conventional plastering.',
      image: '/images/Shreeji_Product_Detail_Row.jpg',
      imageAlt: 'Shreeji ribbed face AAC block under a magnifying glass',
    },
  ],
}

export const aacFeatures = {
  title: 'Features of Shreeji AAC Blocks',
  items: [
    {
      icon: 'feather',
      title: 'Lightweight',
      description:
        'Up to 60% lighter than red bricks. Lower weight reduces the dead load on the structure, which can bring down structural costs.',
    },
    {
      icon: 'gauge',
      title: 'Reliable Strength',
      description:
        'A compressive strength of 4 N/mm², suitable for load-bearing and non-load-bearing walls in low-rise buildings.',
    },
    {
      icon: 'thermometer',
      title: 'Thermal Insulation',
      description:
        "Thermal conductivity of about 0.16 W/m·K, far lower than red clay brick. Less heat passes through the wall, so rooms stay cooler and cooling and heating costs fall.",
    },
    {
      icon: 'activity',
      title: 'Earthquake Resistant',
      description:
        'Lower weight reduces the seismic load on a building, which is why AAC blocks are widely used in earthquake-prone zones.',
    },
    {
      icon: 'flame',
      title: 'Fire Resistant',
      description:
        'The cellular structure is non-combustible and gives a fire rating of 4 hours for a 150 mm wall.',
    },
    {
      icon: 'volume-2',
      title: 'Sound Resistant',
      description:
        'Closed air pockets reduce sound transmission. A 100 mm wall has an STC rating of 44, which helps keep interiors quiet.',
    },
  ],
}



export const aacBlockSizes = {
  title: 'AAC Block Sizes in Mandla',
  description:
    'Shreeji AAC blocks come in a standard length of 600 mm and a height of 200 mm. Choose the thickness that suits your wall. Call us if you need help selecting the right size.',
  headers: [
    'Thickness (mm)',
    'Thickness (inch, approx.)',
    'Size (L × H × W)',
  ],
  rows: [
    { thickness: '75 mm', inches: '3 inch', size: '600 × 200 × 75 mm' },
    { thickness: '100 mm', inches: '4 inch', size: '600 × 200 × 100 mm' },
    { thickness: '125 mm', inches: '5 inch', size: '600 × 200 × 125 mm' },
    { thickness: '150 mm', inches: '6 inch', size: '600 × 200 × 150 mm' },
    { thickness: '200 mm', inches: '8 inch', size: '600 × 200 × 200 mm' },
    { thickness: '230 mm', inches: '9 inch', size: '600 × 200 × 230 mm' },
    { thickness: '250 mm', inches: '10 inch', size: '600 × 200 × 250 mm' },
    { thickness: '300 mm', inches: '12 inch', size: '600 × 200 × 300 mm' },
  ],
}


export const techSpecs = {
  title: 'Technical Specification of Shreeji AAC Blocks',
  headers: ['Parameters', 'Specifications'],
  rows: [
  { parameter: 'Density', value: '550 to 650 kg/m³ (oven dry)' },
  { parameter: 'Compressive Strength', value: '4 N/mm²' },
  { parameter: 'Modulus of Elasticity', value: '2040 N/mm²' },
  { parameter: 'Coefficient of Thermal Expansion', value: '8.1 x 10⁻⁶ K⁻¹' },
  { parameter: 'Water Absorption', value: '8% (at equilibrium)' },
  { parameter: 'Thermal Conductivity', value: '0.16 W/m·K' },
  { parameter: 'Drying Shrinkage', value: '0.04%' },
  { parameter: 'Fire Resistance', value: '4 hours (150 mm wall)' },
  { parameter: 'STC Rating', value: '44 (100 mm wall)' },

  ],
}

export const comparison = {
  title: 'AAC Block vs Concrete Block vs Red Brick',
  description: 'See how Shreeji AAC blocks compare with concrete blocks and red clay bricks on strength, weight, insulation, fire rating and cost-related factors.',
  columns: ['Parameters', 'Shreeji AAC Blocks', 'Concrete Block', 'Red Clay Brick'],
  rows: [
    { parameter: 'Fire Rating (150 mm)', aac: '4–7 Hours', concrete: '3 Hours', brick: '2 Hours' },
    { parameter: 'Eligible for Green Points (IGBC)', aac: 'Yes', concrete: 'Depends on product', brick: 'No' },
    { parameter: 'Sound Reduction Index (100 mm)', aac: '≈44 dB', concrete: '≈41 dB', brick: '≈40 dB' },
    { parameter: 'Thermal Conductivity', aac: '0.11 - 0.16 W/m·K', concrete: '≈2 W/m·K', brick: '0.80 - 1.0 W/m·K' },
    { parameter: 'Dry Density', aac: '550–650 kg/m³', concrete: '2400–2500 kg/m³', brick: '1600–1900 kg/m³' },
    { parameter: 'Water Absorption', aac: 'Low', concrete: 'Average', brick: 'High' },
    { parameter: 'Installation Difficulty (MEP)', aac: 'Low', concrete: 'High', brick: 'Medium' },
    { parameter: 'Earthquake Resistance', aac: 'Excellent (lightweight)', concrete: 'Moderate', brick: 'Low' },
    { parameter: 'Size (L x H x W)', aac: '600 × 200 × 75 to 300 mm', concrete: '≈350 × 200 × 200 mm', brick: '230 × 75 × 150 mm' },
    { parameter: 'Pest & Termite Resistance', aac: 'High', concrete: 'Average', brick: 'Low' },
    { parameter: 'Energy Efficiency (Thermal Performance)', aac: 'High (insulating)', concrete: 'Low', brick: 'Low' },
    { parameter: 'Material Composition', aac: 'Fly ash, cement, lime, gypsum', concrete: 'Cement, sand, gravel', brick: 'Top soil' },
  ],
}

export const aacFaq = {
  title: 'Frequently Asked Questions About Shreeji AAC Blocks',
  tabs: [
    {
      label: 'Product Info',
      questions: [
        {
          question: 'How are Shreeji AAC blocks manufactured?',
          answer:
            'Raw materials such as fly ash, cement, gypsum, lime and water are mixed with a small quantity of aluminium powder. The mix rises and aerates, is cut into blocks, and is then cured in an autoclave under high pressure and temperature, which gives the blocks their strength and stability.',
        },
        {
          question: 'What are AAC blocks?',
          answer:
            'AAC stands for autoclaved aerated concrete. AAC blocks are lightweight building blocks with a closed-cell structure that gives them good thermal insulation, fire resistance and sound insulation. They are used to build walls in homes, commercial buildings and industrial buildings.',
        },
        {
          question: 'What sizes are available in Shreeji AAC blocks?',
          answer:
            'Shreeji AAC blocks come in thicknesses of 75 mm, 100 mm (4 inch), 125 mm, 150 mm (6 inch), 200 mm (8 inch), 230 mm (9 inch), 250 mm and 300 mm. The standard length is 600 mm and the height is 200 mm.',
        },
        {
          question: 'What is the compressive strength of Shreeji AAC blocks?',
          answer: 'Shreeji AAC blocks have a compressive strength of 4 N/mm² and a dry density of 550 to 650 kg/m³.',
        },
      ],
    },
    {
      label: 'Performance & Benefits',
      questions: [
        {
          question: 'Are AAC blocks better than red bricks?', 
          answer: 'AAC blocks are lighter, larger and better insulated than red bricks. They also use less mortar, which reduces labour, freight and cooling costs and speeds up construction. Red clay bricks are denser and heavier.',
        },
        {
          question: 'Are AAC blocks fire resistant?',
          answer: 'Yes. AAC is non-combustible. A 150 mm Shreeji AAC block wall has a fire rating of 4 hours.',
        },
        {
          question: 'Do AAC blocks keep a building cooler?',
          answer: 'Yes. AAC has a thermal conductivity of about 0.16 W/m·K, compared with 0.8 to 1.0 W/m·K for red clay brick. Less heat passes through the wall, so indoor temperatures stay more comfortable in summer and winter.',
        },
      ],
    },
    {
      label: 'Applications',
      questions: [
        {
          question: 'Where can AAC blocks be used?', 
          answer: 'AAC blocks can be used for internal and external walls, partition walls, firewalls, the inner leaf of cavity walls and infill walls in framed buildings. They suit houses, apartments, offices, schools and industrial buildings.',
        },
        {
          question: 'Which mortar should I use with AAC blocks?',
          answer: 'Use jointing mortar made for AAC blocks and lay the blocks in thin-bed joints. This needs far less mortar than ordinary cement mortar. Shreeji Projects also supplies jointing mortar and ready mix plaster.',
        },
      ],
    },
    {
      label: 'Cost & Supply',
      questions: [
        {
          question: 'Where can I buy AAC blocks in Mandla?', 
          answer: 'You can buy Shreeji AAC blocks directly from our factory at Gram Mugadara, Bamhni Banjar, Mandla, or place an order through our office on Jabalpur Road, Mandla. Call +91 7067062323 for current prices and delivery details.',
        },
        {
          question: 'Do you deliver AAC blocks outside Mandla?',
          answer: 'Yes. We deliver across Madhya Pradesh and Chhattisgarh. Share your location and quantity and we will confirm the delivery time and price.',
        },
        {
          question: 'How can I get the price of AAC blocks?',
          answer: 'The price depends on the block size, the quantity and the delivery location. Click Get a Free Quote or call +91 7067062323 and our team will share a quote.',
        },
      ],
    },
  ],
}

export const aacCta = {
  title: 'Ready To Build With Shreeji AAC Blocks?',
  subtitle: 'Get a free quote from our team and find out how much you can save.',
  cta: 'Get a Free Quote',
  ctaHref: '/contact',
}