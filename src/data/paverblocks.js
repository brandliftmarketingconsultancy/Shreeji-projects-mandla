/* ------------------------------------------------------------------ */
/*  Paver Blocks product page content                                 */
/*  General info is accurate industry-standard content for interlock- */
/*  ing concrete pavers. TODO markers = needs Shreeji's real design    */
/*  names, color options, and product photography before publishing.  */
/* ------------------------------------------------------------------ */

export const paverHero = {
  image:
    '/images/Paver_Blocks_Hero_Banner.jpg', // TODO: replace with real Paver Blocks banner photo
  imageAlt: 'Shreeji interlocking paver blocks laid on a driveway',
  title: 'Interlocking Paver Blocks in Mandla, MP',
  subtitle: 'Durable, decorative interlocking pavers for driveways, roads, walkways and commercial spaces, made at our factory in Mandla, Madhya Pradesh.',
  primaryCta: 'Get Quote!',
  primaryCtaHref: '/contact',
  secondaryCta: 'Calculate Paver Requirement',
  secondaryCtaHref: '/calculator', // TODO: point to real calculator route once built
}

export const paverApplications = {
  title: 'Interlocking Paver Blocks Built for Every Space',
  paragraphs: [
    'Shreeji paver blocks are precision-moulded interlocking concrete units designed to carry heavy vehicle and pedestrian traffic while giving any surface a decorative finish. The interlocking design spreads load evenly and resists cracking. It also makes repairs easy, because a damaged paver can be lifted and replaced without disturbing the surrounding surface.',
    'Paver blocks are available in a range of shapes, thicknesses and colours. They work equally well in high-traffic commercial spaces and in detailed residential landscaping, giving you durability and design flexibility in one product.',
  ],
  cards: [
    {
      title: 'Commercial Applications',
      description:
        'Ideal for parking lots, footpaths, plazas, malls and industrial yards where high durability and load-bearing capacity are essential.',
      image:
        '/images/Paver_Blocks_Commercial.jpg', // TODO: real photo
      imageAlt: 'Paver blocks used in a commercial parking lot',
    },
    {
      title: 'Residential Applications',
      description:
        'Perfect for driveways, garden pathways, patios and poolside decking, combining durability with a wide choice of decorative finishes.',
      image:
        '/images/Paver_Blocks_Residential.jpg', // TODO: real photo
      imageAlt: 'Paver blocks used in a residential driveway',
    },
  ],
}

/* Color swatches are rendered from these hex values — update to match
   Shreeji's actual available colors before publishing. */
export const paverColors = [
  { name: 'Grey', hex: '#9CA3AF' },
  { name: 'Red', hex: '#B91C1C' },
  { name: 'Yellow', hex: '#D97706' },
  { name: 'Charcoal', hex: '#374151' },
  { name: 'Terracotta', hex: '#C2601D' },
]

export const paverGallery = {
  title: 'Paver Block Designs and Colours',
  subtitle:
    'Choose from multiple interlocking patterns and finishes to match your space.',

  designs: [
    {
      name: 'I-Shape Interlock',
      description:
        'An I-shaped interlocking block that locks tightly in place. Suited to driveways, roads and parking areas.',
      image: '/images/I-Shaped_Interlock_Pavers.jpg',
      imageAlt: 'I-shape interlocking paver block design',
      colorNames: ['Grey', 'Red', 'Charcoal'],
    },
    {
      name: 'Zigzag Interlock',
      description:
        'Zigzag edges lock the blocks together for a firm, stable surface. Suited to pathways, driveways and yards.',
      image: '/images/Zigzag_Interlock_Pavers.jpg',
      imageAlt: 'Zigzag interlocking paver block design',
      colorNames: ['Grey', 'Yellow', 'Terracotta'],
    },
    {
      name: 'Hexagon Paver',
      description:
        'Six-sided blocks that make a decorative honeycomb pattern. Popular for gardens, patios and plazas.',
      image: '/images/Hexagon_Pavers.jpg',
      imageAlt: 'Hexagon paver block design',
      colorNames: ['Red', 'Charcoal', 'Terracotta'],
    },
    {
      name: 'Rectangular Paver',
      description:
        'A simple rectangular paver that can be laid in herringbone, basket weave or running bond patterns.',
      image: '/images/Rectangular_Pavers.jpg',
      imageAlt: 'Rectangular paver block design',
      colorNames: ['Grey', 'Red', 'Yellow', 'Charcoal'],
    },
  ],
}

export const paverFaq = {
  title: 'Frequently Asked Questions About Shreeji Paver Blocks ',
  tabs: [
    {
      label: 'Product Info',
      questions: [
        {
          question: 'What are Paver Blocks made of?',
          answer:
            'Paver blocks are precision-moulded, high-density concrete units made from cement, aggregates and sand, compacted and cured to achieve high compressive strength.',
        },
        {
          question: 'What designs and colors are available?', // TODO: confirm real range
          answer:
            'We make four designs: I-shape interlock, zigzag interlock, hexagon paver and rectangular paver. Colours are grey, red, yellow, charcoal and terracotta. Not every design comes in every colour, so check the design cards or call us for the full range.',
        },
        {
          question: 'What are interlocking paver blocks?',
          answer:
            'Interlocking paver blocks are concrete blocks shaped to lock into each other when laid. The locked blocks work together as one surface and share the load from vehicles and foot traffic.',
        },
        
      ],
    },
    {
      label: 'Performance & Benefits',
      questions: [
        { question: 'Can a damaged paver be replaced individually?',
          answer: 'Yes. Because pavers are laid as separate units, a damaged block can be lifted and replaced without disturbing the surrounding surface. This also makes it easy to reach pipes and cables under the paving.' },
        { question: 'Are paver blocks strong enough for vehicles?', 
          answer: 'Yes. Shreeji paver blocks are designed for heavy vehicle and pedestrian traffic, and the interlocking design spreads the load across many blocks, which resists cracking. Tell us the type of traffic and we will suggest the right thickness.' },
        { question: 'Are paver blocks better than a poured concrete surface?', 
          answer: 'Pavers can be repaired one block at a time and come in many colours and patterns. A poured concrete slab can crack across its full length and has to be broken up to repair it.' },
      ],
    },
    {
      label: 'Applications',
      questions: [
        { question: 'Can paver blocks be used for both commercial and residential projects?', 
          answer: 'Yes. For commercial projects they suit parking lots, footpaths, plazas, malls and industrial yards. For homes they suit driveways, garden pathways, patios and poolside decking.' },
        { question: 'Which paver design should I choose for my space?', 
          answer: 'I-shape and zigzag interlock blocks are a common choice for driveways and roads. Rectangular pavers suit garden paths and patios, and hexagon pavers suit decorative spaces. Our team can suggest a design based on your space and budget.' },
      ],
    },
    {
      label: 'Cost & Supply',
      questions: [
        { question: 'Where can I buy paver blocks in Mandla?', 
          answer: 'You can buy Shreeji paver blocks directly from our factory at Gram Mugadara, Bamhni Banjar, Mandla, or place an order through our office on Jabalpur Road, Mandla. Call +91 7067062323 for current prices and delivery details.' },
        { question: 'Do you supply paver blocks in bulk and outside Mandla?', 
          answer: 'Yes. We supply builders, contractors and dealers across Madhya Pradesh and Chhattisgarh. Share your location and quantity and we will confirm the delivery time and price.' },
        { question: 'How can I get the price of paver blocks?', 
          answer: 'The price depends on the design, thickness, colour and quantity. Click Get a Free Quote or call +91 7067062323 and our team will share a quote and our design catalogue.' },
      ],
    },
  ],
}

export const paverCta = {
  title: 'Ready To Pave With Shreeji?',
  subtitle: 'Get a free quote from our team and explore our design catalogue.',
  cta: 'Get a Free Quote',
  ctaHref: '/contact',
}