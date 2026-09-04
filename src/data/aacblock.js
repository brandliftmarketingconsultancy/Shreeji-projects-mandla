/* ------------------------------------------------------------------ */
/*  AAC Blocks product page content                                   */
/*  Sourced from real reference screenshots. TODO markers = content   */
/*  not visible in the source screenshot, needs to be supplied.       */
/* ------------------------------------------------------------------ */

export const aacHero = {
  image:
    '/images/factory_final_4x.jpg',
  imageAlt: 'Conecc AAC Block',
  eyebrow: 'Our Product',
  title: 'CONECC AAC Blocks',
  subtitle:
    "Mandla's largest manufacturer of Autoclaved Aerated Concrete Blocks — lightweight, fire-resistant, and built for faster, stronger construction.",
  primaryCta: 'Get Quote',
  primaryCtaHref: '/contact',
}

export const whyConecc = {
  title: 'Why CONECC AAC Blocks?',
  paragraphs: [
    'Conecc is the largest manufacturer of AAC Blocks in Mandla, India. Autoclaved Aerated Concrete Blocks (AAC Blocks) are perfect for foundations, inner leaves of cavity walls, dwelling partitioning walls, plus internal walls, external walls, and firewalls in both load-bearing and non-load-bearing buildings. Fly-Ash building blocks are proven as being highly efficient for both house construction, commercial and industrial buildings as well.',
    "In addition to it's versatility and energy efficiency properties, Lightweight blocks are characterized by their ease of working and construction. It can easily be sawn even with a hand saw to meet the required AAC block size. This results in higher construction speed which may deliver cost savings. Notable savings can also be made in faster weatherproofing, lower scaffolding costs, and less on-site waste. In addition, when using the thin-bed joint application, you use up to 5 times less mortar. AAC block's weight is 60% lighter compared to traditional bricks and depending on the project design, savings of up to 30% in structural costs can be achieved, due to the reduction of dead load.",
  ],
  cards: [
    {
      title: 'High Quality',
      description:
        'With our precision manufacturing, stringent quality control, and the use of top-notch raw materials, ensuring our aac blocks have consistent durability and performance in diverse construction applications.',
      image: '/images/Shreeji_Weight_Comparison.jpg', // TODO: replace with real 14kg vs 42kg scale comparison photo
      imageAlt: 'Conecc AAC block weighed against a red brick stack',
    },
    {
      title: 'Different Sizes',
      description:
        'Conecc AAC Blocks are available in multiple sizes, typically ranging from 75mm, 100mm, 125mm, 150mm, 200mm, 230mm, 250mm, and 300mm thickness, with standard lengths of 600mm and heights of 200mm.',
      image: '/images/Shreeji_Mason_Placing_Block.jpg',
      imageAlt: 'Conecc AAC blocks in different sizes with a hard hat',
    },
    {
      title: 'Ribbed Face',
      description:
        'CONECC AAC Blocks comes with a unique ribbed finish on the face. It helps in better bonding of plaster with the blocks. Due to the ribbed face only, you can directly apply wall putty or Plaster of Paris without plastering.',
      image: '/images/Shreeji_Product_Detail_Row.jpg',
      imageAlt: 'Conecc ribbed face AAC block under a magnifying glass',
    },
  ],
}

export const aacFeatures = {
  title: 'Features',
  items: [
    {
      icon: 'feather',
      title: 'Lightweight',
      description:
        'Boasts an exceptional lightweight nature, weighing only 1/3rd of red bricks. It reduces the overall structural load, resulting in cost savings of up to 15%.',
    },
    {
      icon: 'gauge',
      title: 'Superior Strength',
      description:
        'Offers a remarkable strength of 4N/mm2, surpassing the strength of red clay bricks.',
    },
    {
      icon: 'thermometer',
      title: 'Thermal Insulation',
      description:
        "Boast industry's highest thermal rating of 0.16 W/(m·K), AAC blocks ensure 30% lower HVAC expenses, reducing heat transfer and improving indoor temperatures.",
    },
    {
      icon: 'activity',
      title: 'Earthquake Resistant',
      description:
        'Lightweight AAC Blocks exhibit remarkable earthquake resistance, preferred in seismic zones, and proven to withstand Category 5 wind loads.',
    },
    {
      icon: 'flame',
      title: 'Fire Resistant',
      description:
        'Its unique cellular structure provides unbeatable resistance against flames, with a best-in-class fire rating of more than 4 hours.',
    },
    {
      icon: 'volume-2',
      title: 'Sound Resistant',
      description:
        'Closed air pockets in AAC blocks yield an STC rating of 44, offering superior sound insulation for virtually soundproof interiors.',
    },
  ],
}

export const techSpecs = {
  title: 'Technical Specification',
  headers: ['Parameters', 'Specifications'],
  rows: [
    { parameter: 'Density', value: '550–650 kg/m³ (Oven Dry)' },
    { parameter: 'Compressive Strength', value: '4 N/mm²' },
    { parameter: 'Modulus of Elasticity', value: '2040 N/mm²' },
    { parameter: 'Coefficient of Thermal Expansion', value: '8.1 x 10⁻⁶ K⁻¹' },
    { parameter: 'Water Absorption', value: '8% (at equilibrium)' },
    { parameter: 'Thermal Conductivity', value: '~0.16 W/m²K' },
    { parameter: 'Drying Shrinkage', value: '0.04%' },
    { parameter: 'Fire Resistance', value: '4 Hrs. (150mm wall)' },
    { parameter: 'STC Rating', value: '43db (100mm wall)' },
  ],
}

export const comparison = {
  title: 'AAC Block Vs Concrete Block Vs Red Brick',
  columns: ['Parameters', 'CONECC AAC Blocks', 'Concrete Block', 'Red Clay Brick'],
  rows: [
    { parameter: 'Fire Rating (150 mm)', aac: '4–7 Hours', concrete: '3 Hours', brick: '2 Hours' },
    { parameter: 'Eligible for Green Points (IGBC)', aac: 'Yes', concrete: 'Depends on product', brick: 'No' },
    { parameter: 'Sound Reduction Index (100 mm)', aac: '≈45 dB', concrete: '≈41 dB', brick: '≈40 dB' },
    { parameter: 'Thermal Conductivity', aac: '0.11 - 0.16 W/m·K', concrete: '≈2 W/m·K', brick: '0.80 - 1.0 W/m·K' },
    { parameter: 'Dry Density', aac: '550–650 kg/m³', concrete: '2400–2500 kg/m³', brick: '1600–1900 kg/m³' },
    { parameter: 'Water Absorption', aac: 'Low', concrete: 'Average', brick: 'High' },
    { parameter: 'Installation Difficulty (MEP)', aac: 'Low', concrete: 'High', brick: 'Medium' },
    { parameter: 'Earthquake Resistance', aac: 'Excellent (lightweight)', concrete: 'Moderate', brick: 'Low' },
    { parameter: 'Size (L x H x W)', aac: '600 × 200 × 75-300 mm', concrete: '≈350 × 200 × 200 mm', brick: '230 × 75 × 150 mm' },
    { parameter: 'Pest & Termite Resistance', aac: 'High', concrete: 'Average', brick: 'Low' },
    { parameter: 'Energy Efficiency (Thermal Performance)', aac: 'High (insulating)', concrete: 'Low', brick: 'Low' },
    { parameter: 'Material Composition', aac: 'Fly ash, cement, lime, gypsum', concrete: 'Cement, sand, gravel', brick: 'Top soil' },
  ],
}

export const aacFaq = {
  title: 'Frequently Asked Questions – Conecc AAC Blocks',
  tabs: [
    {
      label: 'Product Info',
      questions: [
        {
          question: 'How are Conecc AAC Blocks manufactured?',
          answer:
            'They are manufactured by mixing raw materials like fly ash, cement, gypsum, lime, water, and a small quantity of aluminium powder, allowing them to aerate and rise, and then curing them in autoclaves under high pressure and temperature for strength and stability.',
        },
        {
          question: 'What Are AAC Blocks?',
          answer:
            'AAC (Autoclaved Aerated Concrete) Blocks are lightweight, precast building blocks made from fly ash, cement, lime, gypsum and an aerating agent, cured under high-pressure steam to create a strong, insulating, cellular structure.',
        },
        {
          question: 'What sizes are available in Conecc AAC Blocks?',
          answer:
            'Conecc AAC Blocks are available in thicknesses ranging from 75mm to 300mm, with standard lengths of 600mm and heights of 200mm.',
        },
        {
          question: 'What is the compressive strength of Conecc AAC Blocks?',
          answer: 'Conecc AAC Blocks offer a compressive strength of 4 N/mm².',
        },
      ],
    },
    {
      label: 'Performance & Benefits',
      questions: [
        {
          question: 'TODO: Add real question', // TODO: content not visible in reference screenshot
          answer: 'TODO: Add real answer.',
        },
        {
          question: 'TODO: Add real question',
          answer: 'TODO: Add real answer.',
        },
      ],
    },
    {
      label: 'Applications',
      questions: [
        {
          question: 'TODO: Add real question', // TODO: content not visible in reference screenshot
          answer: 'TODO: Add real answer.',
        },
        {
          question: 'TODO: Add real question',
          answer: 'TODO: Add real answer.',
        },
      ],
    },
    {
      label: 'Cost & Supply',
      questions: [
        {
          question: 'TODO: Add real question', // TODO: content not visible in reference screenshot
          answer: 'TODO: Add real answer.',
        },
        {
          question: 'TODO: Add real question',
          answer: 'TODO: Add real answer.',
        },
      ],
    },
  ],
}

export const aacCta = {
  title: 'Ready To Build With CONECC AAC Blocks?',
  subtitle: 'Get a free quote from our team and find out how much you can save.',
  cta: 'Get a Free Quote',
  ctaHref: '/contact',
}