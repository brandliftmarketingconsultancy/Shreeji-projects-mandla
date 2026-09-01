/* ------------------------------------------------------------------ */
/*  Technical Resources page content                                  */
/*  Resource titles/descriptions are realistic for a manufacturer's   */
/*  resource library. Download hrefs are placeholders — TODO markers  */
/*  show where real PDF files need to be uploaded and linked.         */
/* ------------------------------------------------------------------ */

export const resourcesHero = {
  image:
    '/images/factory.jpg',
  imageAlt: 'Conecc AAC block manufacturing plant',
  eyebrow: 'Resource Library',
  title: 'Technical Resources',
  subtitle:
    'Brochures, size charts, technical specifications, and installation guides for every Conecc product — all in one place.',
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
    title: 'Conecc Product Catalogue',
    description: 'Full overview of the Conecc product range, applications, and benefits.',
    category: 'brochures',
    fileType: 'PDF',
    fileSize: '4.2 MB', // TODO: confirm real file size once uploaded
    href: '#', // TODO: link to real hosted PDF
  },
  {
    id: 2,
    title: 'AAC Blocks Brochure',
    description: 'Product overview, key benefits, and size range for Conecc AAC Blocks.',
    category: 'brochures',
    fileType: 'PDF',
    fileSize: '2.1 MB', // TODO: confirm
    href: '#', // TODO: link to real hosted PDF
  },
  {
    id: 3,
    title: 'AAC Block Size Chart',
    description: 'Standard thickness, length, and height options for AAC Blocks.',
    category: 'size-charts',
    fileType: 'PDF',
    fileSize: '0.8 MB', // TODO: confirm
    href: '#', // TODO: link to real hosted PDF
  },
  {
    id: 4,
    title: 'Cover Block Size Chart',
    description: 'Clear-cover thicknesses by structural element and exposure condition.',
    category: 'size-charts',
    fileType: 'PDF',
    fileSize: '0.6 MB', // TODO: confirm
    href: '#', // TODO: link to real hosted PDF
  },
  {
    id: 5,
    title: 'Fencing Pole Size Chart',
    description: 'Standard pole lengths and base diameters for chain-link fencing.',
    category: 'size-charts',
    fileType: 'PDF',
    fileSize: '0.5 MB', // TODO: confirm
    href: '#', // TODO: link to real hosted PDF
  },
  {
    id: 6,
    title: 'AAC Blocks Technical Specification Sheet',
    description: 'Density, compressive strength, thermal and fire ratings for AAC Blocks.',
    category: 'specs',
    fileType: 'PDF',
    fileSize: '1.2 MB', // TODO: confirm
    href: '#', // TODO: link to real hosted PDF
  },
  {
    id: 7,
    title: 'Fly Ash Bricks Technical Specification Sheet',
    description: 'Compressive strength, water absorption, and size data for Fly Ash Bricks.',
    category: 'specs',
    fileType: 'PDF',
    fileSize: '1.0 MB', // TODO: confirm
    href: '#', // TODO: link to real hosted PDF
  },
  {
    id: 8,
    title: 'Cover Blocks Technical Specification Sheet',
    description: 'IS 456:2000 compliance data and standard tolerances for Cover Blocks.',
    category: 'specs',
    fileType: 'PDF',
    fileSize: '0.7 MB', // TODO: confirm
    href: '#', // TODO: link to real hosted PDF
  },
  {
    id: 9,
    title: 'AAC Block Installation Guide',
    description: 'Step-by-step guidance on laying, cutting, and finishing AAC Block walls.',
    category: 'installation-guides',
    fileType: 'PDF',
    fileSize: '3.5 MB', // TODO: confirm
    href: '#', // TODO: link to real hosted PDF
  },
  {
    id: 10,
    title: 'Paver Block Laying Guide',
    description: 'Base preparation, laying pattern, and jointing instructions for pavers.',
    category: 'installation-guides',
    fileType: 'PDF',
    fileSize: '2.8 MB', // TODO: confirm
    href: '#', // TODO: link to real hosted PDF
  },
  {
    id: 11,
    title: 'Fencing Pole Installation Guide',
    description: 'Foundation depth, spacing, and mesh-fixing guidance for fencing poles.',
    category: 'installation-guides',
    fileType: 'PDF',
    fileSize: '1.9 MB', // TODO: confirm
    href: '#', // TODO: link to real hosted PDF
  },
]

export const resourcesCta = {
  title: "Can't Find What You're Looking For?",
  subtitle: 'Get in touch and our team will send you the exact document you need.',
  cta: 'Contact Us',
  ctaHref: '/contact',
}