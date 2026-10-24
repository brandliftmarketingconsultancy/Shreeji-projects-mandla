/* ------------------------------------------------------------------ */
/*  Technical Resources page content                                  */
/*  Resource titles/descriptions are realistic for a manufacturer's   */
/*  resource library. Download hrefs are placeholders — TODO markers  */
/*  show where real PDF files need to be uploaded and linked.         */
/* ------------------------------------------------------------------ */

export const resourcesHero = {
  image: '/images/factory.jpg',
  imageAlt: 'Aerial view of the Shreeji Projects factory in Mandla',
  eyebrow: 'RESOURCE LIBRARY',
  title: 'Technical Resources: Brochures, Size Charts and Spec Sheets',
  subtitle:
    'Brochures, size charts, technical specifications and installation guides for every Shreeji product, all in one place.',
}

export const resourceCategories = [
  { id: 'all', label: 'All Resources' },
  { id: 'brochures', label: 'Brochures' },
  { id: 'size-charts', label: 'Size Charts' },
  { id: 'specs', label: 'Specs' },
  { id: 'installation-guides', label: 'Installation Guides' },
]


export const resources = [
  {
    id: 1,
    title: 'Shreeji Product Catalogue',
    description:
      'Full overview of the Shreeji Projects product range, applications and benefits.',
    category: 'brochures',
    fileType: 'PDF',
    fileSize: '4.2 MB',
    fileName: 'shreeji-product-catalogue.pdf',
    href: '/documents/shreeji-product-catalogue.pdf',
  },
  {
    id: 2,
    title: 'AAC Blocks Brochure',
    description:
      'Product overview, key benefits and size range of Shreeji AAC blocks.',
    category: 'brochures',
    fileType: 'PDF',
    fileSize: '2.1 MB',
    fileName: 'shreeji-aac-blocks-brochure.pdf',
    href: '/documents/shreeji-aac-blocks-brochure.pdf',
  },
  {
    id: 3,
    title: 'AAC Block Size Chart',
    description:
      'Standard thickness, length and height options for AAC blocks, from 75 mm to 300 mm.',
    category: 'size-charts',
    fileType: 'PDF',
    fileSize: '0.8 MB',
    fileName: 'shreeji-aac-block-size-chart.pdf',
    href: '/documents/shreeji-aac-block-size-chart.pdf',
  },
  {
    id: 4,
    title: 'Cover Block Size Chart',
    description:
      'Clear-cover thicknesses by structural element and exposure condition.',
    category: 'size-charts',
    fileType: 'PDF',
    fileSize: '0.6 MB',
    fileName: 'shreeji-cover-block-size-chart.pdf',
    href: '/documents/shreeji-cover-block-size-chart.pdf',
  },
  {
    id: 5,
    title: 'Fencing Pole Size Chart',
    description:
      'Standard pole lengths and base sizes for chain-link fencing.',
    category: 'size-charts',
    fileType: 'PDF',
    fileSize: '0.5 MB',
    fileName: 'shreeji-fencing-pole-size-chart.pdf',
    href: '/documents/shreeji-fencing-pole-size-chart.pdf',
  },
  {
    id: 6,
    title: 'AAC Blocks Technical Specification Sheet',
    description:
      'Density, compressive strength, thermal conductivity and fire rating of AAC blocks.',
    category: 'specs',
    fileType: 'PDF',
    fileSize: '1.2 MB',
    fileName: 'shreeji-aac-blocks-specification-sheet.pdf',
    href: '/documents/shreeji-aac-blocks-specification-sheet.pdf',
  },
  {
    id: 7,
    title: 'Fly Ash Bricks Technical Specification Sheet',
    description:
      'Compressive strength, water absorption and size data for fly ash bricks.',
    category: 'specs',
    fileType: 'PDF',
    fileSize: '1.0 MB',
    fileName: 'shreeji-fly-ash-bricks-specification-sheet.pdf',
    href: '/documents/shreeji-fly-ash-bricks-specification-sheet.pdf',
  },
  {
    id: 8,
    title: 'Cover Blocks Technical Specification Sheet',
    description:
      'Strength, water absorption and standard tolerances for cover blocks, with IS 456:2000 references.',
    category: 'specs',
    fileType: 'PDF',
    fileSize: '0.7 MB',
    fileName: 'shreeji-cover-blocks-specification-sheet.pdf',
    href: '/documents/shreeji-cover-blocks-specification-sheet.pdf',
  },
  {
    id: 9,
    title: 'AAC Block Installation Guide',
    description:
      'Step-by-step guidance on laying, cutting and finishing AAC block walls.',
    category: 'installation-guides',
    fileType: 'PDF',
    fileSize: '3.5 MB',
    fileName: 'shreeji-aac-block-installation-guide.pdf',
    href: '/documents/shreeji-aac-block-installation-guide.pdf',
  },
  {
    id: 10,
    title: 'Paver Block Laying Guide',
    description:
      'Base preparation, laying pattern and jointing instructions for paver blocks.',
    category: 'installation-guides',
    fileType: 'PDF',
    fileSize: '2.8 MB',
    fileName: 'shreeji-paver-block-laying-guide.pdf',
    href: '/documents/shreeji-paver-block-laying-guide.pdf',
  },
  {
    id: 11,
    title: 'Fencing Pole Installation Guide',
    description:
      'Foundation depth, spacing and mesh-fixing guidance for fencing poles.',
    category: 'installation-guides',
    fileType: 'PDF',
    fileSize: '1.9 MB',
    fileName: 'shreeji-fencing-pole-installation-guide.pdf',
    href: '/documents/shreeji-fencing-pole-installation-guide.pdf',
  },
]


export const resourcesCta = {
  title: "Can't Find What You're Looking For?",
  subtitle: 'Get in touch and our team will send you the exact document you need.',
  cta: 'Contact Us',
  ctaHref: '/contact',
}