/* ------------------------------------------------------------------ */
/*  Manufacturing page content                                        */
/*  processSteps text is transcribed verbatim from real reference     */
/*  screenshots. Everything else (photos, capacity, QC steps) is      */
/*  placeholder — TODO markers show what needs Conecc's real data.    */
/* ------------------------------------------------------------------ */

export const manufacturingHero = {
  image:
    '/images/factory.jpg', // TODO: replace with real plant banner photo
  imageAlt: 'Conecc AAC block manufacturing plant floor',
  eyebrow: 'Behind The Blocks',
  title: 'Our Manufacturing',
  subtitle:
    'From raw material to finished block — see the plants, machinery, and process behind every Conecc product.',
}

export const plantGallery = {
  title: 'Our Manufacturing Plants',
  subtitle: 'A look inside where Conecc products are made.', // TODO: confirm real plant count/locations
  images: [
    {
      caption: 'Automated Batching Plant',
      image:
        '/images/factory-1.jpg', // TODO: real photo
      imageAlt: 'Conecc automated batching plant',
    },
    {
      caption: 'AAC Production Line',
      image:
        '/images/factory-3.jpg',
      imageAlt: 'Conecc AAC block production line',
    },
    {
      caption: 'Autoclave Chamber',
      image:
        '/images/factory-2.jpg', // TODO: real photo
      imageAlt: 'Conecc autoclave chamber',
    },
    {
      caption: 'Finished Goods Yard',
      image:
        '/images/factory.jpg',
      imageAlt: 'Conecc finished goods storage yard',
    },
  ],
}

export const machinery = {
  title: 'Machinery',
  items: [
    {
      icon: 'factory',
      title: 'Automated Batching Plant',
      description:
        'Precisely doses, weighs, and mixes every raw material to ensure a consistent, homogeneous mixture batch after batch.',
    },
    {
      icon: 'flame',
      title: 'Autoclave Chamber',
      description:
        'High-pressure steam chambers that cure blocks at approx. 180\u2013190\u00b0C, developing strength and durability.',
    },
    {
      icon: 'scissors',
      title: 'Wire Cutting System',
      description:
        'Cuts set blocks into precise dimensions using tensioned wires for consistent, accurate sizing.',
    },
    {
      icon: 'package',
      title: 'Mould & Handling System',
      description:
        'Automated mould transport and demoulding equipment that moves blocks safely between production stages.',
    },
  ],
}

/* Transcribed verbatim from the reference screenshots — this is
   Conecc's real published manufacturing-process copy. */
export const processSteps = [
  {
    title: 'Raw Material Preparation',
    description:
      'The first step in the manufacturing process of AAC blocks is the preparation of the raw materials. The materials used in the process are cement, lime, fly ash, gypsum, water, and a small amount of aluminium powder. The raw materials are mixed in the right proportions using a mixing machine.',
  },
  {
    title: 'Mixing',
    description:
      'Our fully automated batching plant enables accurate dosing, weighing and mixing of all the raw materials. The next step is mixing the prepared raw materials. The mixture is placed in a large vessel and mixed thoroughly until it forms a homogeneous mixture.',
  },
  {
    title: 'Aeration',
    description:
      'Once the mixture is prepared, it is poured into moulds and allowed to be set for a few hours. During this time, the aluminium powder reacts with the other materials in the mixture, producing hydrogen gas. This process is called aeration and results in tiny air pockets throughout the material, making it lightweight and porous.',
  },
  {
    title: 'Curing',
    description:
      'After the blocks are poured into moulds, they are left to cure for a few hours. Once the blocks have hardened, they are removed from the moulds and cut with wires into blocks with precision accuracy. Then the blocks are placed into an Autoclave.',
  },
  {
    title: 'Autoclaving',
    description:
      'The blocks are then subjected to steam and heat in an autoclave. The autoclave is a high-pressure chamber that exposes the blocks to high temperatures (approx 180-190 \u00b0C) and steam, which helps to further harden and strengthen them. The autoclaving process takes several hours and is critical in ensuring that the blocks are durable and resistant to damage.',
  },
  {
    title: 'Sorting And Packaging',
    description:
      'Once the blocks are removed from the autoclave, they are ready for use in construction. Each block is sorted for any damages and breaks and then packed perfectly for delivery. They can be easily cut, drilled, and shaped using standard tools, making them versatile and easy to work with.',
  },
]

export const capacityStats = [
  { value: '1,000+', label: 'Blocks Produced Daily', icon: 'boxes' }, // TODO: confirm real daily capacity
  { value: '3', label: 'Manufacturing Plants', icon: 'factory' }, // TODO: confirm real count
  { value: '24/7', label: 'Production Cycle', icon: 'clock' }, // TODO: confirm shift pattern
  { value: '100+', label: 'Skilled Workforce', icon: 'users' }, // TODO: confirm real headcount
]

export const qualityControl = {
  title: 'Quality Control',
  items: [
    {
      icon: 'flask-conical',
      title: 'Raw Material Testing',
      description:
        'Every incoming batch of fly ash, cement, and lime is tested for consistency before it enters production.',
    },
    {
      icon: 'search-check',
      title: 'In-Process Quality Checks',
      description:
        'Mixture density, aeration time, and mould dimensions are monitored at every stage of production.',
    },
    {
      icon: 'gauge',
      title: 'Compressive Strength Testing',
      description:
        'Sample blocks from every batch are lab-tested for compressive strength before being cleared for dispatch.',
    },
    {
      icon: 'clipboard-check',
      title: 'Final Inspection & Sorting',
      description:
        'Each finished block is visually inspected for cracks or damage and sorted before packaging.',
    },
  ],
}

export const manufacturingCta = {
  title: 'Want To See Our Plant In Person?',
  subtitle: 'Get in touch to schedule a visit or request a product sample.',
  cta: 'Contact Us',
  ctaHref: '/contact',
}