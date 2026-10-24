/* ------------------------------------------------------------------ */
/*  Cover Blocks product page content                                 */
/*  General info reflects standard RCC cover-block practice per IS    */
/*  456:2000. TODO markers = needs Conecc's real tested figures and   */
/*  product photography before publishing.                            */
/* ------------------------------------------------------------------ */

export const coverHero = {
  image:
    '/images/Cover_Blocks_Hero_Banner.jpg', // TODO: replace with real Cover Blocks banner photo
  imageAlt: 'Shreeji precast cover blocks placed on reinforcement bars',
  title: 'RCC Cover Blocks in Mandla, MP',
  subtitle: 'Precast spacer blocks for accurate, durable RCC reinforcement cover, made at our factory in Mandla, Madhya Pradesh.',
  primaryCta: 'Get Quote!',
  primaryCtaHref: '/contact',
  secondaryCta: 'Calculate Requirement',
  secondaryCtaHref: '/calculator', // TODO: point to real calculator route once built
}

export const coverTypes = {
  title: 'Types Of Cover Blocks',
  paragraphs: [
    'Cover blocks, also called spacer blocks, keep the specified clear cover between reinforcement steel and formwork while concrete is poured. This holds the rebar in the right position and protects it from corrosion, in line with IS 456:2000 guidelines.',
  ],
  cards: [
    {
      title: 'Circular / Wheel Type',
      description:
        'The most widely used design, with a central tie-wire hole so the block can be tied to the rebar. Ideal for slabs and walls where the block sits flat against the shuttering.',
      image:
        '/images/Cover_Blocks_Circular_Wheel_Type.jpg', // TODO: real photo
      imageAlt: 'Circular wheel-type cover block',
    },
    {
      title: 'Cube / Block Type',
      description:
        'A simple cube-shaped spacer used where a cover block with higher load-bearing capacity is needed, such as footings and mat foundations.',
      image:
        '/images/Cover_Blocks_Cube_Block_Type.jpg', // TODO: real photo
      imageAlt: 'Cube-type cover block',
    },
    {
      title: 'Plate / Strip Type',
      description:
        'Flat rectangular plates used along the sides of beams and columns, giving consistent cover across a vertical shuttering face.',
      image:
        '/images/Cover_Blocks_Plate_Strip_Type.jpg', // TODO: real photo
      imageAlt: 'Plate-type cover block',
    },
  ],
}

export const coverSizes = {
  title: 'Cover Block Sizes',
  subtitle:
    'Standard clear-cover thicknesses matched to the structural element and exposure condition.',

  paragraph:
    'Choose the cover thickness shown on your structural drawing. If you are not sure which size to order, call our team and we will help you pick the right one.',

  items: [
    { thickness: '20mm', use: 'Slabs (mild exposure)' },
    { thickness: '25mm', use: 'Slabs & Walls (moderate exposure)' },
    { thickness: '40mm', use: 'Beams' },
    { thickness: '50mm', use: 'Columns' },
    { thickness: '75mm', use: 'Footings & Raft Foundations' },
  ],
}

export const coverTechSpecs = {
  title: 'Technical Specification of Shreeji Cover Blocks',
  headers: ['Parameters', 'Specifications'],
  rows: [
    { parameter: 'Compressive Strength', value: 'M25 grade or higher (25 N/mm² or more)' }, // TODO: confirm Conecc's tested value
    { parameter: 'Standard Compliance', value: 'IS 456:2000, IS 2502' },
    { parameter: 'Water Absorption', value: '6% or less' }, // TODO: confirm
    { parameter: 'Curing Period', value: '28 days (standard water curing)' },
    { parameter: 'Density', value: 'About 2400 kg/m³' }, // TODO: confirm
    { parameter: 'Dimensional Tolerance', value: '± 2 mm on nominal size' }, // TODO: confirm
  ],
}

export const coverFaq = {
  title: 'Frequently Asked Questions About Shreeji Cover Blocks',
  tabs: [
    {
      label: 'Product Info',
      questions: [
        {
          question: 'What are Cover Blocks used for?',
          answer:
            'Cover blocks keep the specified clear cover between reinforcement steel and formwork during concreting. This keeps the rebar correctly positioned and protected from corrosion, in line with IS 456:2000.',
        },
        {
          question: 'What types of Cover Blocks does Shreeji manufacture?',
          answer:
            'We manufacture three types: circular or wheel type blocks, cube or block type spacers, and plate or strip type spacers.',
        },
        {
          question: 'What sizes are available?', // TODO: confirm real range
          answer:
            'Cover blocks come in clear-cover thicknesses of 20 mm, 25 mm, 40 mm, 50 mm and 75 mm for slabs, walls, beams, columns, footings and raft foundations.',
        },
        {
          question: 'What standard governs cover block sizing?',
          answer:
            'IS 456:2000 sets the cover required for reinforcement based on the structural element and the exposure condition. Always follow the cover shown on your structural drawing.',
        },
      ],
    },
    {
      label: 'Performance & Benefits',
      questions: [
        { question: 'Why use precast cover blocks?', 
          answer: 'Precast cover blocks are made to a set size and strength, so the cover stays accurate across the whole slab, beam or column. This is more reliable than improvised spacers such as broken bricks or stones.' },
        { question: 'What happens if the concrete cover is too thin?', 
          answer: 'Moisture and air can reach the steel, which causes rust. The rust swells and cracks the concrete, which shortens the life of the structure.' },
      ],
    },
    {
      label: 'Applications',
      questions: [
        { question: 'Which cover block should I use for slabs, footings and columns?', 
          answer: 'Circular or wheel type blocks suit slabs and walls. Cube type blocks suit footings and mat foundations. Plate or strip type blocks suit the sides of beams and columns. Our team can help you choose.' },
        { question: 'Can cover blocks be tied to the rebar?', 
          answer: 'Yes. Circular or wheel type blocks have a central tie-wire hole, so they can be tied to the rebar and stay in place while concrete is poured.' },
      ],
    },
    {
      label: 'Cost & Supply',
      questions: [
        { question: 'Where can I buy cover blocks in Mandla?', 
          answer: 'You can buy Shreeji cover blocks directly from our factory at Gram Mugadara, Bamhni Banjar, Mandla, or place an order through our office on Jabalpur Road, Mandla. Call +91 7067062323 for current prices and delivery details.' },
        { question: 'Do you supply cover blocks in bulk and outside Mandla?', 
          answer: 'Yes. We supply builders, contractors and dealers across Madhya Pradesh and Chhattisgarh. Share your location and quantity and we will confirm the delivery time and price.' },
        { question: 'How can I get the price of cover blocks?', 
          answer: 'The price depends on the type, size and quantity. Click Get a Free Quote or call +91 7067062323 and our team will share a quote.' },
      ],
    },
  ],
}

export const coverCta = {
  title: 'Ready To Order Shreeji Cover Blocks?',
  subtitle: 'Get a free quote from our team for your RCC project requirements.',
  cta: 'Get a Free Quote',
  ctaHref: '/contact',
}