/* ------------------------------------------------------------------ */
/*  Fencing Pole product page content                                 */
/*  General sizing/use-case info is accurate for RCC (precast         */
/*  concrete) fencing poles used with chain-link and barbed-wire      */
/*  fencing. TODO markers = needs Shreeji's real sizes and photos.     */
/* ------------------------------------------------------------------ */

export const fencingHero = {
  image:
    '/images/Fencing_Poles_Hero_Banner.jpg', // TODO: replace with real Fencing Pole banner photo
  imageAlt: 'Shreeji RCC fencing poles installed along a boundary',
  title: 'RCC Fencing Poles in Mandla, MP',
  subtitle: 'Strong, weather-resistant RCC fencing poles for every boundary, made at our factory in Mandla, Madhya Pradesh.',
  primaryCta: 'Get Quote!',
  primaryCtaHref: '/contact',
  secondaryCta: 'Calculate Pole Requirement',
  secondaryCtaHref: '/calculator', // TODO: point to real calculator route once built
}

/* barHeight is a pre-set px value that scales roughly with lengthFt,
   used to render the proportional height-bar chart in FencingSizes. */
export const fencingSizes = {
  title: 'Available Sizes of RCC Fencing Poles',
  subtitle:
    'Precast RCC poles in standard lengths to match your fencing height.',

  items: [
    {
      label: '5 ft',
      diameter: '50 mm base',
      barHeight: 110,
      bestSuitedFor: 'Plots, gardens and low boundary fencing',
    },
    {
      label: '6 ft',
      diameter: '65 mm base',
      barHeight: 130,
      bestSuitedFor: 'Plots, farmland and compound walls',
    },
    {
      label: '7 ft',
      diameter: '75 mm base',
      barHeight: 155,
      bestSuitedFor: 'Farm enclosures and compounds',
    },
    {
      label: '8 ft',
      diameter: '90 mm base',
      barHeight: 180,
      bestSuitedFor: 'Security perimeters and industrial yards',
    },
    {
      label: '10 ft',
      diameter: '100 mm base',
      barHeight: 220,
      bestSuitedFor: 'Tall security fencing and industrial sites',
    },
  ],
}

export const fencingApplicationsList = {
  title: 'Applications of RCC Fencing Poles',
  items: [
    {
      icon: 'square-dashed',
      title: 'Boundary Marking',
      description:
        'Clearly marks property lines for residential plots, farmland and open sites with a durable, weather-proof post.',
    },
    {
      icon: 'shield',
      title: 'Security Perimeter',
      description:
        'Anchors chain-link or barbed-wire fencing around compounds, warehouses and restricted-access sites.',
    },
    {
      icon: 'sprout',
      title: 'Livestock Enclosure',
      description:
        'Withstands outdoor exposure and animal contact, which makes it a good fit for paddocks, cattle yards and farm enclosures.',
    },
    {
      icon: 'factory',
      title: 'Industrial Yard Fencing',
      description:
        'A stable, long-lasting perimeter post for industrial yards, construction sites and storage facilities.',
    },
  ],
}

export const fencingUseCases = {
  title: 'Agricultural and Industrial Use of RCC Fencing Poles',
  paragraphs: [
    'Shreeji RCC fencing poles are precast for consistent strength and accurate dimensions, then cured to resist cracking, rot and termite damage. Wooden posts cannot match this over years of outdoor exposure.',
  ],
  cards: [
    {
      title: 'Agricultural Use',
      description:
        'Used across farmland to fence crop fields, orchards and grazing land. The poles keep out stray livestock and mark field boundaries that hold up through monsoons and heat alike.',
      image:
        '/images/Fencing_Poles_Agriculture.jpg', // TODO: real photo
      imageAlt: 'RCC fencing poles used around agricultural farmland',
    },
    {
      title: 'Industrial Use',
      description:
        'Used around factories, warehouses and construction sites to carry security fencing. The poles bear the tension of chain-link mesh without warping or leaning over time.',
      image:
        '/images/Fencing_Poles_Industrial.jpg', // TODO: real photo
      imageAlt: 'RCC fencing poles around an industrial facility perimeter',
    },
  ],
}

export const fencingFaq = {
  title: 'Frequently Asked Questions About Shreeji Fencing Poles',
  tabs: [
    {
      label: 'Product Info',
      questions: [
        {
          question: 'What are Fencing Poles made of?',
          answer:
            'Shreeji fencing poles are precast using reinforced cement concrete (RCC), cured for high strength and long-term durability against weather and pests.',
        },
        {
          question: 'What sizes are available?', // TODO: confirm real range
          answer:
            'We make five sizes: 5 ft with a 50 mm base, 6 ft with a 65 mm base, 7 ft with a 75 mm base, 8 ft with a 90 mm base and 10 ft with a 100 mm base.',
        },
        {
          question: 'Why choose RCC fencing poles over wooden posts?',
          answer:
            'RCC poles resist cracking, rot and termites, which wooden posts cannot. They also hold their shape under the tension of wire and mesh, so the fence does not lean over time.',
        },
        
      ],
    },
    {
      label: 'Performance & Benefits',
      questions: [
        { question: 'Are fencing poles damaged by termites or rain?', 
          answer: 'No. Concrete is not eaten by termites and does not rot. The poles are cured for strength, so they stand up to monsoon rain and summer heat.' },
        { question: 'Are they suitable for agricultural use?', answer: 'Yes. RCC fencing poles are widely used to fence crop fields, orchards and grazing land. They keep out stray livestock and mark field boundaries that last through monsoons and heat.' },
      ],
    },
    {
      label: 'Applications',
      questions: [
        { question: 'Can fencing poles be used with chain-link mesh?', 
          answer: 'Yes. The poles carry chain-link mesh and barbed wire and bear the tension without warping or leaning. Shreeji Projects also supplies chain link fence and wire mesh.' },
        { question: 'Where can RCC fencing poles be used?', 
          answer: 'They are used for boundary marking on plots and farmland, security perimeters around compounds and warehouses, livestock enclosures and industrial yard fencing.' },
        { question: 'Which pole size should I choose?', 
          answer: 'Pick the length to match the height of fence you need. Taller poles come with a wider base. Tell us your use and our team will suggest a size.' },
      ],
    },
    {
      label: 'Cost & Supply',
      questions: [
        { question: 'Where can I buy RCC fencing poles in Mandla?', 
          answer: 'You can buy Shreeji fencing poles directly from our factory at Gram Mugadara, Bamhni Banjar, Mandla, or place an order through our office on Jabalpur Road, Mandla. Call +91 7067062323 for current prices and delivery details.' },
        { question: 'Do you supply fencing poles in bulk and outside Mandla?', 
          answer: 'Yes. We supply farms, contractors and dealers across Madhya Pradesh and Chhattisgarh. Share your location and quantity and we will confirm the delivery time and price.' },
        { question: 'How can I get the price of fencing poles?', 
          answer: 'The price depends on the pole length and the quantity. Click Get a Free Quote or call +91 7067062323 and our team will share a quote.' },
      ],
    },
  ],
}

export const fencingCta = {
  title: 'Ready To Fence Your Site With Shreeji?',
  subtitle: 'Get a free quote from our team for your boundary or perimeter project.',
  cta: 'Get a Free Quote',
  ctaHref: '/contact',
}