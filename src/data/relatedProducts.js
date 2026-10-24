// Every product that can appear as a "related" card. Written once, reused everywhere.
export const relatedCatalog = {
  'aac-blocks': {
    icon: 'Boxes',      
    title: 'AAC Blocks',
    description: 'Lightweight, strong and energy-efficient blocks for residential, commercial and government buildings.',
    href: '/products/aac-blocks',
  },
  'jointing-mortar': {
    icon: 'Layers',
    title: 'Jointing Mortar',
    description: 'Thin-bed mortar for fixing AAC blocks with strong joints.',
    href: '/products/jointing-mortar',
  },
  'ready-mix-plaster': {
    icon: 'PaintRoller',
    title: 'Ready Mix Plaster',
    description: 'Factory-mixed plaster for a smooth finish on AAC walls.',
    href: '/products/ready-mix-plaster',
  },
  'fly-ash-bricks': {
    icon: 'Box', 
    title: 'Fly Ash Bricks',
    description: 'A strong, eco-friendly brick for walls, boundary walls and more.',
    href: '/products/fly-ash-bricks',
  },
  'cover-blocks': {
    icon: 'LayoutGrid',
    title: 'Cover Blocks',
    description: 'Concrete cover blocks that keep reinforcement at the right distance.',
    href: '/products/cover-blocks',
  },
  'paver-blocks': {
    icon: 'LayoutGrid',
    title: 'Paver Blocks',
    description: 'Interlocking concrete paver blocks for driveways, roads and walkways.',
    href: '/products/paver-blocks',
  },
  'fencing-poles': {
    icon: 'Ruler',
    title: 'Fencing Poles',
    description: 'RCC fencing poles for farms, plots and compound boundaries.',
    href: '/products/fencing-poles',
  },
  'chain-link-fence': {
  icon: 'Ruler',
  title: 'Chain Link Fence',
  description: 'Durable fencing for farms, plots and factories.',
  href: '/products/chain-link-fence',
},
'precast-walls': {
  icon: 'LayoutGrid',
  title: 'Precast Walls',
  description: 'Readymade boundary and compound walls.',
  href: '/products/precast-walls',
},
'wire-mesh': {
  icon: 'Layers',
  title: 'Wire Mesh',
  description: 'Wire mesh for fencing and construction work.',
  href: '/products/wire-mesh',
},
}

// Which cards each page shows (the page's own product is never listed).
// Which cards each page shows (the page's own product is never listed).
export const relatedByPage = {
  'aac-blocks': {
    title: 'Products That Go with AAC Blocks',
    items: ['jointing-mortar', 'ready-mix-plaster', 'fly-ash-bricks', 'cover-blocks'],
  },

  'fly-ash-bricks': {
    title: 'Other Building Materials from Shreeji Projects',
    items: [
      { key: 'aac-blocks', description: 'Lightweight, fire-resistant blocks for faster construction.' },
      { key: 'ready-mix-plaster', description: 'Factory-mixed plaster for a smooth wall finish.' },
      { key: 'paver-blocks', description: 'Interlocking paver blocks for driveways, roads and walkways.' },
    ],
  },

  'paver-blocks': {
    title: 'Other Products for Your Site',
    items: [
      { key: 'fencing-poles', description: 'RCC fencing poles for plots, farms and compound boundaries.' },
      'chain-link-fence',
      'precast-walls',
      { key: 'jointing-mortar', description: 'Mortar for fixing blocks and finishing joints.' },
    ],
  },

  'fencing-poles': {
    title: 'Complete Your Fencing with Shreeji',
    items: [
      { key: 'chain-link-fence', description: 'Durable chain link fencing for farms, plots, factories and construction sites.' },
      'wire-mesh',
      'precast-walls',
    ],
  },
    'cover-blocks': {
    title: 'More Building Materials from Shreeji',
    items: [
      { key: 'aac-blocks', description: 'Lightweight, fire-resistant blocks for faster construction.' },
      { key: 'wire-mesh', description: 'Wire mesh for plastering, fencing and construction work.' },
      { key: 'ready-mix-plaster', description: 'Factory-mixed plaster for a smooth wall finish.' },
    ],
  },
}