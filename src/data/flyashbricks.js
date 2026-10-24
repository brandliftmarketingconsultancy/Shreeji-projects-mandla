/* ------------------------------------------------------------------ */
/*  Fly Ash Bricks product page content                               */
/*  General specs/benefits are accurate industry-standard info for    */
/*  fly ash bricks. TODO markers = needs Conecc's real tested figures */
/*  and product photography before publishing.                       */
/* ------------------------------------------------------------------ */

export const flyAshHero = {
  image:
    '/images/Fly_Ash_Brick_Install_with_Logo.jpg', // TODO: replace with real Fly Ash Bricks banner photo
  imageAlt: 'Conecc Fly Ash Bricks stacked on a construction site',
  title: 'Fly Ash Bricks Manufacturer in Mandla, MP ',
  subtitle: 'Eco-friendly, high-strength bricks made from thermal power plant waste, manufactured at our factory in Mandla, Madhya Pradesh.',
  primaryCta: 'Get Quote!',
  primaryCtaHref: '/contact',
  secondaryCta: 'Calculate Brick Requirement',
  secondaryCtaHref: '/calculator', // TODO: point to real calculator route once built
}

export const flyAshWhyConecc = {
  title: 'Why Conecc Fly Ash Bricks?',
  paragraphs: [
    'Fly ash bricks are made from fly ash (a by-product of thermal power plants), cement, sand and gypsum, compacted under high pressure. Because the main raw material is industrial waste, they are an eco-friendly alternative to traditional red clay bricks, which depend on topsoil excavation.',
    'Compared with red clay bricks, fly ash bricks have a more uniform shape and size. This reduces mortar use during construction, gives smoother wall finishes and cuts breakage during transport and handling. Their higher compressive strength also allows thinner joints and a thinner plaster layer.'
  ],
  cards: [
    {
      title: 'High Strength',
      description:
        'Higher compressive strength than conventional red clay bricks, which improves the durability and load-bearing performance of walls.',
      image:
        '/images/Fly_Ash_Brick_High_Strength.jpg', // TODO: real product photo
      imageAlt: 'Fly ash brick strength testing',
    },
    {
      title: 'Uniform Size',
      description:
        'Precision-moulded for consistent dimensions, which means less mortar and cleaner, straighter walls.',
      image:
        '/images/Fly_Ash_Brick_Uniform.jpg', // TODO: real product photo
      imageAlt: 'Uniform fly ash bricks stacked',
    },
    {
      title: 'Eco-Friendly',
      description:
        'Made with fly ash, an industrial by-product, so there is less need for the topsoil mining used to make conventional bricks.',
      image:
        '/images/Fly_Ash_Brick_Eco_Friendly.jpg', // TODO: real product photo
      imageAlt: 'Fly ash bricks eco-friendly manufacturing',
    },
  ],
}

export const flyAshBenefits = {
  title: 'Benefits of Fly Ash Bricks',
  items: [
    {
      icon: 'gauge',
      title: 'High Compressive Strength',
      description:
        'Typically 7.5 to 10 N/mm², higher than red clay bricks, which improves the load-bearing performance of walls.',
    },
    {
      icon: 'droplets',
      title: 'Low Water Absorption',
      description:
        'A denser composition means water absorption of 12% or less, which reduces dampness and efflorescence on walls.',
    },
    {
      icon: 'layers',
      title: 'Reduced Mortar Consumption',
      description:
        'Uniform size and smooth surfaces mean less mortar is needed per wall, which lowers material costs.',
    },
    {
      icon: 'sparkles',
      title: 'Smooth Finish',
      description:
        'Even surfaces reduce the amount of plaster needed and give a cleaner finished look.',
    },
    {
      icon: 'leaf',
      title: 'Eco-Friendly Material',
      description:
        'Made from fly ash, a thermal power plant by-product, which helps keep industrial waste out of landfills.',
    },
    {
      icon: 'wallet',
      title: 'Cost Effective',
      description:
        'Lower breakage, less mortar and less plaster combine to reduce the overall cost of construction.',
    },
  ],
}

export const flyAshTechSpecs = {
  title: 'Technical Specification of Shreeji Fly Ash Bricks',
  headers: ['Parameters', 'Specifications'],
  rows: [
    { parameter: 'Compressive Strength', value: '7.5–10 N/mm² (typical)' }, // TODO: confirm Conecc's tested value
    { parameter: 'Density', value: '1600–1850 kg/m³' }, // TODO: confirm
    { parameter: 'Water Absorption', value: '12% or less' }, // TODO: confirm
    { parameter: 'Size (L x W x H)', value: '230 x 110 x 75 mm (standard)' }, // TODO: confirm Conecc's sizes
    { parameter: 'Weight', value: 'About 3 kg per brick' }, // TODO: confirm
    { parameter: 'Thermal Conductivity', value: '0.6–0.8 W/m·K' }, // TODO: confirm
  ],
}

export const flyAshComparison = {
  title: 'Fly Ash Brick Vs Red Clay Brick Vs Concrete Block',
   intro:'See how Shreeji fly ash bricks compare with red clay bricks and concrete blocks on strength, water absorption, accuracy, breakage and mortar use.',
  columns: ['Parameters', 'Fly Ash Brick', 'Red Clay Brick', 'Concrete Block'],
  rows: [
    { parameter: 'Compressive Strength', a: '7.5–10 N/mm²', b: '3.5–5 N/mm²', c: '3–4 N/mm²' },
    { parameter: 'Water Absorption', a: 'Low (12% or less)', b: 'High (15 to 20%)', c: 'Average' },
    { parameter: 'Dimensional Accuracy', a: 'High', b: 'Low', c: 'High' },
    { parameter: 'Breakage During Transport', a: 'Low', b: 'High', c: 'Low' },
    { parameter: 'Eco-Friendliness', a: 'High (uses industrial waste)', b: 'Low (uses topsoil)', c: 'Average' },
    { parameter: 'Mortar Consumption', a: 'Low', b: 'High', c: 'Average' },
    { parameter: 'Weight', a: 'Medium', b: 'Medium', c: 'Heavy' },
  ],
}

export const flyAshFaq = {
  title: 'Frequently Asked Questions About Shreeji Fly Ash Bricks',
  tabs: [
    {
      label: 'Product Info',
      questions: [
        {
          question: 'What are fly ash bricks made of?',
          answer:
            'Fly ash bricks are made by compacting fly ash (a by-product of thermal power plants), cement, sand and gypsum under high pressure to form a dense, uniform brick.',
        },
        {
          question: 'What sizes are available?',
          answer:
            'The standard size is 230 x 110 x 75 mm (about 9 x 4.5 x 3 inch), and each brick weighs about 3 kg. Ask our team if you need a different size.',
        },
        {
          question: 'What is the difference between fly ash bricks and AAC blocks?', // TODO: confirm Shreeji's actual size range
          answer:
            'Fly ash bricks are denser and have a higher compressive strength of 7.5 to 10 N/mm². AAC blocks are much lighter, larger and better at insulating heat and sound. Both are made partly from fly ash and both are eco-friendly alternatives to red clay bricks. See our AAC Blocks page for details.',
        },
       
      ],
    },
    {
      label: 'Performance & Benefits',
      questions: [
        { question: 'How do fly ash bricks compare to red clay bricks?',
          answer: 'Fly ash bricks have a higher compressive strength, a more uniform size, lower water absorption and less breakage than red clay bricks. They also need less mortar and less plaster.' },
        { question: 'Are fly ash bricks eco-friendly?',
          answer: 'Yes. They use fly ash, a thermal power plant by-product, as the main raw material. This keeps industrial waste out of landfills and reduces the topsoil mining used to make red clay bricks.' },
        { question: 'Do fly ash bricks absorb less water than red clay bricks?',
          answer: 'Yes. Fly ash bricks absorb 12% water or less, compared with 15 to 20% for red clay bricks. This reduces dampness and efflorescence on walls.' },
      ],
    },
    {
      label: 'Applications',
      questions: [
        { question: 'Where can fly ash bricks be used?', 
          answer: 'Fly ash bricks can be used for internal and external walls of houses, commercial buildings and industrial buildings, and for boundary and compound walls.' },
        { question: 'Do fly ash bricks need plastering?', 
          answer: 'Yes, they are plastered like other brick walls. Their uniform shape and smooth surface mean a thinner plaster layer is enough, which saves material and labour.' },
      ],
    },
    {
      label: 'Cost & Supply',
      questions: [
        { question: 'Where can I buy fly ash bricks in Mandla?',
          answer: 'You can buy Shreeji fly ash bricks directly from our factory at Gram Mugadara, Bamhni Banjar, Mandla, or place an order through our office on Jabalpur Road, Mandla. Call +91 7067062323 for current prices and delivery details.' },
        { question: 'Do you supply fly ash bricks in bulk and outside Mandla?', 
          answer: 'Yes. We supply builders, contractors and dealers across Madhya Pradesh and Chhattisgarh. Share your location and quantity and we will confirm the delivery time and price.' },
        { question: 'How can I get the price of fly ash bricks?', 
          answer: 'The price depends on the quantity and the delivery location. Click Get a Free Quote or call +91 7067062323 and our team will share a quote.' },
      ],
    },
  ],
}

export const flyAshCta = {
  title: 'Ready To Build With Shreeji Fly Ash Bricks?',
  subtitle: 'Get a free quote from our team and find out how much you can save.',
  cta: 'Get a Free Quote',
  ctaHref: '/contact',
}