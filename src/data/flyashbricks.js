/* ------------------------------------------------------------------ */
/*  Fly Ash Bricks product page content                               */
/*  General specs/benefits are accurate industry-standard info for    */
/*  fly ash bricks. TODO markers = needs Conecc's real tested figures */
/*  and product photography before publishing.                       */
/* ------------------------------------------------------------------ */

export const flyAshHero = {
  image:
    'https://coneccconcrete.com/wp-content/uploads/2025/08/Different-Sizes-CONECC-AAC-Blocks.webp', // TODO: replace with real Fly Ash Bricks banner photo
  imageAlt: 'Conecc Fly Ash Bricks stacked on a construction site',
  title: 'Fly Ash Bricks',
  subtitle: 'Eco-Friendly, High Strength Bricks Made From Thermal Power Plant Waste.',
  primaryCta: 'Get Quote!',
  primaryCtaHref: '/contact',
  secondaryCta: 'Calculate Brick Requirement',
  secondaryCtaHref: '/calculator', // TODO: point to real calculator route once built
}

export const flyAshWhyConecc = {
  title: 'Why Conecc Fly Ash Bricks?',
  paragraphs: [
    'Fly Ash Bricks are manufactured using fly ash (a by-product of thermal power plants), cement, sand, and gypsum, compacted under high pressure. Using industrial waste as a primary raw material makes them a genuinely eco-friendly alternative to traditional red clay bricks, which rely on topsoil excavation.',
    'Compared to red clay bricks, Fly Ash Bricks offer a more uniform shape and size, which reduces mortar consumption during construction, results in smoother wall finishes, and cuts down on breakage during transport and handling. Their higher compressive strength also allows for thinner joints and less plaster thickness.',
  ],
  cards: [
    {
      title: 'High Strength',
      description:
        'Higher compressive strength than conventional red clay bricks, reducing structural load and improving durability.',
      image:
        'https://coneccconcrete.com/wp-content/uploads/2025/08/Different-Sizes-CONECC-AAC-Blocks.webp', // TODO: real product photo
      imageAlt: 'Fly ash brick strength testing',
    },
    {
      title: 'Uniform Size',
      description:
        'Precision-molded for consistent dimensions, resulting in less mortar usage and cleaner, straighter walls.',
      image:
        'https://coneccconcrete.com/wp-content/uploads/2025/08/Different-Sizes-CONECC-AAC-Blocks.webp', // TODO: real product photo
      imageAlt: 'Uniform fly ash bricks stacked',
    },
    {
      title: 'Eco-Friendly',
      description:
        'Made using fly ash, an industrial by-product, reducing dependency on topsoil mining used for conventional bricks.',
      image:
        'https://coneccconcrete.com/wp-content/uploads/2025/08/Different-Sizes-CONECC-AAC-Blocks.webp', // TODO: real product photo
      imageAlt: 'Fly ash bricks eco-friendly manufacturing',
    },
  ],
}

export const flyAshBenefits = {
  title: 'Benefits',
  items: [
    {
      icon: 'gauge',
      title: 'High Compressive Strength',
      description:
        'Typically offers higher compressive strength than red clay bricks, improving load-bearing performance.',
    },
    {
      icon: 'droplets',
      title: 'Low Water Absorption',
      description:
        'Denser composition means lower water absorption, reducing dampness and efflorescence issues on walls.',
    },
    {
      icon: 'layers',
      title: 'Reduced Mortar Consumption',
      description:
        'Uniform size and smooth surface mean less mortar is needed per wall, lowering material costs.',
    },
    {
      icon: 'sparkles',
      title: 'Smooth Finish',
      description:
        'Even surfaces reduce the amount of plaster required and give a cleaner finished look.',
    },
    {
      icon: 'leaf',
      title: 'Eco-Friendly Material',
      description:
        'Made from fly ash, a thermal power plant by-product, helping divert industrial waste from landfills.',
    },
    {
      icon: 'wallet',
      title: 'Cost Effective',
      description:
        'Lower breakage, less mortar, and less plaster combine to reduce overall construction cost.',
    },
  ],
}

export const flyAshTechSpecs = {
  title: 'Technical Specification',
  headers: ['Parameters', 'Specifications'],
  rows: [
    { parameter: 'Compressive Strength', value: '7.5–10 N/mm² (typical)' }, // TODO: confirm Conecc's tested value
    { parameter: 'Density', value: '1600–1850 kg/m³' }, // TODO: confirm
    { parameter: 'Water Absorption', value: '≤ 12%' }, // TODO: confirm
    { parameter: 'Size (L x W x H)', value: '230 x 110 x 75 mm (standard)' }, // TODO: confirm Conecc's sizes
    { parameter: 'Weight', value: '~3 kg per brick (approx.)' }, // TODO: confirm
    { parameter: 'Thermal Conductivity', value: '0.6–0.8 W/m·K' }, // TODO: confirm
  ],
}

export const flyAshComparison = {
  title: 'Fly Ash Brick Vs Red Clay Brick Vs Concrete Block',
  columns: ['Parameters', 'Fly Ash Brick', 'Red Clay Brick', 'Concrete Block'],
  rows: [
    { parameter: 'Compressive Strength', a: '7.5–10 N/mm²', b: '3.5–5 N/mm²', c: '3–4 N/mm²' },
    { parameter: 'Water Absorption', a: 'Low (≤12%)', b: 'High (15–20%)', c: 'Average' },
    { parameter: 'Dimensional Accuracy', a: 'High', b: 'Low', c: 'High' },
    { parameter: 'Breakage During Transport', a: 'Low', b: 'High', c: 'Low' },
    { parameter: 'Eco-Friendliness', a: 'High (uses industrial waste)', b: 'Low (uses topsoil)', c: 'Average' },
    { parameter: 'Mortar Consumption', a: 'Low', b: 'High', c: 'Average' },
    { parameter: 'Weight', a: 'Medium', b: 'Medium', c: 'Heavy' },
  ],
}

export const flyAshFaq = {
  title: 'Frequently Asked Questions – Conecc Fly Ash Bricks',
  tabs: [
    {
      label: 'Product Info',
      questions: [
        {
          question: 'What are Fly Ash Bricks made of?',
          answer:
            'Fly Ash Bricks are made by compacting fly ash (a thermal power plant by-product), cement, sand, and gypsum under high pressure to form a dense, uniform brick.',
        },
        {
          question: 'How do Fly Ash Bricks compare to Red Clay Bricks?',
          answer:
            'Fly Ash Bricks generally offer higher compressive strength, more uniform dimensions, lower water absorption, and a smaller environmental footprint compared to traditional red clay bricks.',
        },
        {
          question: 'What sizes are available?', // TODO: confirm Conecc's actual size range
          answer:
            'Conecc Fly Ash Bricks are available in standard sizes — confirm exact dimensions with our sales team for your project requirements.',
        },
        {
          question: 'Are Fly Ash Bricks eco-friendly?',
          answer:
            'Yes. They are made using fly ash, an industrial by-product that would otherwise go to landfill, reducing the need for topsoil excavation required for traditional clay bricks.',
        },
      ],
    },
    {
      label: 'Performance & Benefits',
      questions: [
        { question: 'TODO: Add real question', answer: 'TODO: Add real answer.' },
        { question: 'TODO: Add real question', answer: 'TODO: Add real answer.' },
      ],
    },
    {
      label: 'Applications',
      questions: [
        { question: 'TODO: Add real question', answer: 'TODO: Add real answer.' },
        { question: 'TODO: Add real question', answer: 'TODO: Add real answer.' },
      ],
    },
    {
      label: 'Cost & Supply',
      questions: [
        { question: 'TODO: Add real question', answer: 'TODO: Add real answer.' },
        { question: 'TODO: Add real question', answer: 'TODO: Add real answer.' },
      ],
    },
  ],
}

export const flyAshCta = {
  title: 'Ready To Build With Conecc Fly Ash Bricks?',
  subtitle: 'Get a free quote from our team and find out how much you can save.',
  cta: 'Get a Free Quote',
  ctaHref: '/contact',
}