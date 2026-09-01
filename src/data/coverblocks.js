/* ------------------------------------------------------------------ */
/*  Cover Blocks product page content                                 */
/*  General info reflects standard RCC cover-block practice per IS    */
/*  456:2000. TODO markers = needs Conecc's real tested figures and   */
/*  product photography before publishing.                            */
/* ------------------------------------------------------------------ */

export const coverHero = {
  image:
    '/images/Shreeji_Hero_Banner.jpg', // TODO: replace with real Cover Blocks banner photo
  imageAlt: 'Conecc precast cover blocks placed on reinforcement bars',
  title: 'Cover Blocks',
  subtitle: 'Precast Spacers For Accurate, Durable RCC Reinforcement Cover.',
  primaryCta: 'Get Quote!',
  primaryCtaHref: '/contact',
  secondaryCta: 'Calculate Requirement',
  secondaryCtaHref: '/calculator', // TODO: point to real calculator route once built
}

export const coverTypes = {
  title: 'Types Of Cover Blocks',
  paragraphs: [
    'Cover Blocks (also called spacer blocks) maintain the specified clear cover between reinforcement steel and formwork during concreting, ensuring the rebar stays correctly positioned and protected from corrosion, per IS 456:2000 guidelines.',
  ],
  cards: [
    {
      title: 'Circular / Wheel Type',
      description:
        'The most widely used design, with a central tie-wire hole. Ideal for slabs and walls where the block sits flat against the shuttering.',
      image:
        '/images/Shreeji_Product_Detail_Row.jpg', // TODO: real photo
      imageAlt: 'Circular wheel-type cover block',
    },
    {
      title: 'Cube / Block Type',
      description:
        'A simple cube-shaped spacer used where a higher load-bearing cover block is needed, such as footings and mat foundations.',
      image:
        '/images/Shreeji_Product_Detail_Row.jpg', // TODO: real photo
      imageAlt: 'Cube-type cover block',
    },
    {
      title: 'Plate / Strip Type',
      description:
        'Flat rectangular plates used along beam sides and columns, providing consistent cover across a vertical shuttering face.',
      image:
        '/images/Shreeji_Product_Detail_Row.jpg', // TODO: real photo
      imageAlt: 'Plate-type cover block',
    },
  ],
}

export const coverSizes = {
  title: 'Sizes',
  subtitle: 'Standard clear-cover thicknesses matched to structural element and exposure condition.', // TODO: confirm Conecc's real size range
  items: [
    { thickness: '20mm', use: 'Slabs (mild exposure)' },
    { thickness: '25mm', use: 'Slabs & Walls (moderate exposure)' },
    { thickness: '40mm', use: 'Beams' },
    { thickness: '50mm', use: 'Columns' },
    { thickness: '75mm', use: 'Footings & Raft Foundations' },
  ], // TODO: confirm Conecc's actual size range and exposure classification
}

export const coverTechSpecs = {
  title: 'Technical Specification',
  headers: ['Parameters', 'Specifications'],
  rows: [
    { parameter: 'Compressive Strength', value: '\u2265 M25 Grade (\u226525 N/mm\u00b2)' }, // TODO: confirm Conecc's tested value
    { parameter: 'Standard Compliance', value: 'IS 456:2000, IS 2502' },
    { parameter: 'Water Absorption', value: '\u2264 6%' }, // TODO: confirm
    { parameter: 'Curing Period', value: '28 Days (standard water curing)' },
    { parameter: 'Density', value: '~2400 kg/m\u00b3' }, // TODO: confirm
    { parameter: 'Dimensional Tolerance', value: '\u00b1 2mm on nominal size' }, // TODO: confirm
  ],
}

export const coverFaq = {
  title: 'Frequently Asked Questions – Conecc Cover Blocks',
  tabs: [
    {
      label: 'Product Info',
      questions: [
        {
          question: 'What are Cover Blocks used for?',
          answer:
            'Cover Blocks maintain the specified clear cover between reinforcement steel and formwork during concreting, ensuring rebar stays correctly positioned and protected from corrosion as per IS 456:2000.',
        },
        {
          question: 'What types of Cover Blocks does Conecc manufacture?',
          answer:
            'Conecc manufactures Circular/Wheel Type, Cube/Block Type, and Plate/Strip Type cover blocks to suit slabs, walls, beams, columns, and footings.',
        },
        {
          question: 'What sizes are available?', // TODO: confirm real range
          answer:
            'Standard thicknesses range from 20mm to 75mm depending on the structural element and exposure condition — see our sizing guide above.',
        },
        {
          question: 'What standard governs cover block sizing?',
          answer:
            'Clear cover requirements are governed by IS 456:2000, which specifies minimum cover based on the exposure condition and type of structural member.',
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

export const coverCta = {
  title: 'Ready To Order Conecc Cover Blocks?',
  subtitle: 'Get a free quote from our team for your RCC project requirements.',
  cta: 'Get a Free Quote',
  ctaHref: '/contact',
}