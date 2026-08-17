/* ------------------------------------------------------------------ */
/*  Paver Blocks product page content                                 */
/*  General info is accurate industry-standard content for interlock- */
/*  ing concrete pavers. TODO markers = needs Conecc's real design    */
/*  names, color options, and product photography before publishing.  */
/* ------------------------------------------------------------------ */

export const paverHero = {
  image:
    'https://coneccconcrete.com/wp-content/uploads/2025/08/Different-Sizes-CONECC-AAC-Blocks.webp', // TODO: replace with real Paver Blocks banner photo
  imageAlt: 'Conecc interlocking paver blocks laid on a driveway',
  title: 'Paver Blocks',
  subtitle: 'Durable, Decorative Interlocking Pavers For Every Space.',
  primaryCta: 'Get Quote!',
  primaryCtaHref: '/contact',
  secondaryCta: 'Calculate Paver Requirement',
  secondaryCtaHref: '/calculator', // TODO: point to real calculator route once built
}

export const paverApplications = {
  title: 'Built For Every Space',
  paragraphs: [
    'Conecc Paver Blocks are precision-molded interlocking concrete units designed to withstand heavy vehicular and pedestrian traffic while adding a decorative finish to any surface. Their interlocking design distributes load evenly, resists cracking, and allows for easy repair — a damaged paver can be lifted and replaced without disturbing the surrounding surface.',
    'Available in a range of shapes, thicknesses, and colors, Paver Blocks work equally well for high-traffic commercial spaces and detailed residential landscaping, giving you both durability and design flexibility in one product.',
  ],
  cards: [
    {
      title: 'Commercial Applications',
      description:
        'Ideal for parking lots, footpaths, plazas, malls, and industrial yards where high durability and load-bearing capacity are essential.',
      image:
        'https://coneccconcrete.com/wp-content/uploads/2025/08/Different-Sizes-CONECC-AAC-Blocks.webp', // TODO: real photo
      imageAlt: 'Paver blocks used in a commercial parking lot',
    },
    {
      title: 'Residential Applications',
      description:
        'Perfect for driveways, garden pathways, patios, and poolside decking — combining durability with a wide choice of decorative finishes.',
      image:
        'https://coneccconcrete.com/wp-content/uploads/2025/08/Different-Sizes-CONECC-AAC-Blocks.webp', // TODO: real photo
      imageAlt: 'Paver blocks used in a residential driveway',
    },
  ],
}

/* Color swatches are rendered from these hex values — update to match
   Conecc's actual available colors before publishing. */
export const paverColors = [
  { name: 'Grey', hex: '#9CA3AF' },
  { name: 'Red', hex: '#B91C1C' },
  { name: 'Yellow', hex: '#D97706' },
  { name: 'Charcoal', hex: '#374151' },
  { name: 'Terracotta', hex: '#C2601D' },
]

export const paverGallery = {
  title: 'Designs & Colors',
  subtitle:
    'Choose from multiple interlocking patterns and finishes to match your space.', // TODO: confirm Conecc's real design range
  designs: [
    {
      name: 'I-Shape Interlock', // TODO: confirm real design name
      image:
        'https://coneccconcrete.com/wp-content/uploads/2025/08/Different-Sizes-CONECC-AAC-Blocks.webp', // TODO: real photo
      imageAlt: 'I-shape interlocking paver block design',
      colorNames: ['Grey', 'Red', 'Charcoal'],
    },
    {
      name: 'Zigzag Interlock', // TODO: confirm real design name
      image:
        'https://coneccconcrete.com/wp-content/uploads/2025/08/Different-Sizes-CONECC-AAC-Blocks.webp', // TODO: real photo
      imageAlt: 'Zigzag interlocking paver block design',
      colorNames: ['Grey', 'Yellow', 'Terracotta'],
    },
    {
      name: 'Hexagon Paver', // TODO: confirm real design name
      image:
        'https://coneccconcrete.com/wp-content/uploads/2025/08/Different-Sizes-CONECC-AAC-Blocks.webp', // TODO: real photo
      imageAlt: 'Hexagon paver block design',
      colorNames: ['Red', 'Charcoal', 'Terracotta'],
    },
    {
      name: 'Rectangular Paver', // TODO: confirm real design name
      image:
        'https://coneccconcrete.com/wp-content/uploads/2025/08/Different-Sizes-CONECC-AAC-Blocks.webp', // TODO: real photo
      imageAlt: 'Rectangular paver block design',
      colorNames: ['Grey', 'Red', 'Yellow', 'Charcoal'],
    },
  ],
}

export const paverFaq = {
  title: 'Frequently Asked Questions – Conecc Paver Blocks',
  tabs: [
    {
      label: 'Product Info',
      questions: [
        {
          question: 'What are Paver Blocks made of?',
          answer:
            'Paver Blocks are precision-molded, high-density concrete units made from cement, aggregates, and sand, compacted and cured to achieve high compressive strength.',
        },
        {
          question: 'What designs and colors are available?', // TODO: confirm real range
          answer:
            'Conecc Paver Blocks are available in multiple interlocking patterns and color options — get in touch with our team for the current catalogue and swatches.',
        },
        {
          question: 'Can Paver Blocks be used for both commercial and residential projects?',
          answer:
            'Yes. Their interlocking design and high load-bearing capacity make them suitable for both heavy-traffic commercial spaces and residential driveways, patios, and pathways.',
        },
        {
          question: 'Can a damaged paver be replaced individually?',
          answer:
            'Yes — one of the key advantages of an interlocking paver system is that individual units can be lifted and replaced without disturbing the surrounding surface.',
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

export const paverCta = {
  title: 'Ready To Pave With Conecc?',
  subtitle: 'Get a free quote from our team and explore our design catalogue.',
  cta: 'Get a Free Quote',
  ctaHref: '/contact',
}