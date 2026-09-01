/* ------------------------------------------------------------------ */
/*  Fencing Pole product page content                                 */
/*  General sizing/use-case info is accurate for RCC (precast         */
/*  concrete) fencing poles used with chain-link and barbed-wire      */
/*  fencing. TODO markers = needs Conecc's real sizes and photos.     */
/* ------------------------------------------------------------------ */

export const fencingHero = {
  image:
    '/images/Shreeji_Hero_Banner.jpg', // TODO: replace with real Fencing Pole banner photo
  imageAlt: 'Conecc RCC fencing poles installed along a boundary',
  title: 'Fencing Pole',
  subtitle: 'Strong, Weather-Resistant RCC Poles For Every Boundary.',
  primaryCta: 'Get Quote!',
  primaryCtaHref: '/contact',
  secondaryCta: 'Calculate Pole Requirement',
  secondaryCtaHref: '/calculator', // TODO: point to real calculator route once built
}

/* barHeight is a pre-set px value that scales roughly with lengthFt,
   used to render the proportional height-bar chart in FencingSizes. */
export const fencingSizes = {
  title: 'Available Sizes',
  subtitle: 'Precast RCC poles in standard lengths to match your fencing height.', // TODO: confirm real size range
  items: [
    { label: '5 ft', diameter: '50mm base', barHeight: 110 },
    { label: '6 ft', diameter: '65mm base', barHeight: 130 },
    { label: '7 ft', diameter: '75mm base', barHeight: 155 },
    { label: '8 ft', diameter: '90mm base', barHeight: 180 },
    { label: '10 ft', diameter: '100mm base', barHeight: 220 },
  ], // TODO: confirm Conecc's actual sizes/diameters
}

export const fencingApplicationsList = {
  title: 'Applications',
  items: [
    {
      icon: 'square-dashed',
      title: 'Boundary Marking',
      description:
        'Clearly demarcates property lines for residential plots, farmland, and open sites with a durable, weather-proof post.',
    },
    {
      icon: 'shield',
      title: 'Security Perimeter',
      description:
        'Anchors chain-link or barbed-wire fencing around compounds, warehouses, and restricted-access sites.',
    },
    {
      icon: 'sprout',
      title: 'Livestock Enclosure',
      description:
        'Withstands outdoor exposure and animal contact, ideal for paddocks, cattle yards, and farm enclosures.',
    },
    {
      icon: 'factory',
      title: 'Industrial Yard Fencing',
      description:
        'Provides a stable, long-lasting perimeter post for industrial yards, construction sites, and storage facilities.',
    },
  ],
}

export const fencingUseCases = {
  title: 'Agricultural & Industrial Use Cases',
  paragraphs: [
    'Conecc RCC Fencing Poles are precast for consistent strength and dimensional accuracy, then cured to resist cracking, rot, and termite damage — advantages that wooden posts can\u2019t match over years of outdoor exposure.',
  ],
  cards: [
    {
      title: 'Agricultural Use',
      description:
        'Used across farmland to fence crop fields, orchards, and grazing land, protecting against stray livestock and marking field boundaries that hold up through monsoons and heat alike.',
      image:
        'https://5.imimg.com/data5/SELLER/Default/2024/1/379417825/LM/QS/YZ/47552239/white-cement-fence-pole-1000x1000.jpg', // TODO: real photo
      imageAlt: 'RCC fencing poles used around agricultural farmland',
    },
    {
      title: 'Industrial Use',
      description:
        'Deployed around factories, warehouses, and construction sites to support security fencing — chosen for its ability to bear tension from chain-link mesh without warping or leaning over time.',
      image:
        'https://5.imimg.com/data5/SELLER/Default/2024/1/379417825/LM/QS/YZ/47552239/white-cement-fence-pole-1000x1000.jpg', // TODO: real photo
      imageAlt: 'RCC fencing poles around an industrial facility perimeter',
    },
  ],
}

export const fencingFaq = {
  title: 'Frequently Asked Questions – Conecc Fencing Pole',
  tabs: [
    {
      label: 'Product Info',
      questions: [
        {
          question: 'What are Fencing Poles made of?',
          answer:
            'Conecc Fencing Poles are precast using reinforced cement concrete (RCC), cured for high strength and long-term durability against weather and pests.',
        },
        {
          question: 'What sizes are available?', // TODO: confirm real range
          answer:
            'Poles are available in standard lengths from 5 ft to 10 ft, with base thickness increasing for taller poles to maintain stability — see our sizing chart above.',
        },
        {
          question: 'Are they suitable for agricultural use?',
          answer:
            'Yes. Their resistance to rot, termites, and weather exposure makes them well suited for farmland boundaries and livestock enclosures.',
        },
        {
          question: 'Can Fencing Poles be used with chain-link mesh?',
          answer:
            'Yes — they\u2019re commonly used as support posts for chain-link and barbed-wire fencing systems in both agricultural and industrial settings.',
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

export const fencingCta = {
  title: 'Ready To Fence Your Site With Conecc?',
  subtitle: 'Get a free quote from our team for your boundary or perimeter project.',
  cta: 'Get a Free Quote',
  ctaHref: '/contact',
}