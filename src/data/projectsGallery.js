/* ------------------------------------------------------------------ */
/*  Projects & Gallery page content                                   */
/*  A few project images reuse real Conecc photo URLs already in use  */
/*  elsewhere on the site (hero, ribbed face, plant). The rest,       */
/*  especially Fly Ash & Paver entries, are placeholders — TODO       */
/*  markers show what needs Conecc's real project photos + details.  */
/* ------------------------------------------------------------------ */

export const galleryHero = {
  image:
    'https://coneccconcrete.com/wp-content/uploads/2026/03/Cover-Img-Website.webp',
  imageAlt: 'Conecc AAC blocks used on a construction site',
  eyebrow: 'Our Work',
  title: 'Projects & Gallery',
  subtitle:
    'A look at real sites built with Conecc AAC Blocks, Fly Ash Bricks, and Paver installations across residential and commercial projects.',
}

export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'aac', label: 'AAC' },
  { id: 'residential', label: 'Residential' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'flyash-paver', label: 'Fly Ash & Paver' },
]

export const projects = [
  {
    id: 1,
    title: 'AAC Block Wall Construction',
    category: 'aac',
    location: 'Hospet, Karnataka', // TODO: confirm real project location
    image:
      'https://coneccconcrete.com/wp-content/uploads/2026/03/AAC-Blocks-Conecc-Lightweight.webp',
    imageAlt: 'AAC block wall under construction',
  },
  {
    id: 2,
    title: 'Ribbed Face AAC Installation',
    category: 'aac',
    location: 'Bengaluru, Karnataka', // TODO: confirm real project location
    image:
      'https://coneccconcrete.com/wp-content/uploads/2026/03/Ribbed-Face-CONECC-AAC.webp',
    imageAlt: 'Ribbed face AAC blocks installed on a wall',
  },
  {
    id: 3,
    title: 'Residential Villa Build',
    category: 'residential',
    location: 'Hubballi, Karnataka', // TODO: confirm real project location
    image:
      'https://coneccconcrete.com/wp-content/uploads/2026/03/Farmer-CONECC-Budget-Friendly-AAC.webp',
    imageAlt: 'Residential building built with Conecc AAC blocks',
  },
  {
    id: 4,
    title: 'Independent House Project',
    category: 'residential',
    location: 'Vijayanagara, Karnataka', // TODO: confirm real project location
    image:
      'https://coneccconcrete.com/wp-content/uploads/PLACEHOLDER-residential-2.webp', // TODO: real photo
    imageAlt: 'Independent house built with Conecc AAC blocks',
  },
  {
    id: 5,
    title: 'Corporate Office Complex',
    category: 'commercial',
    location: 'Hospet, Karnataka', // TODO: confirm real project location
    image: 'https://coneccconcrete.com/wp-content/uploads/2025/03/after-min.jpg',
    imageAlt: 'Commercial building constructed with Conecc AAC blocks',
  },
  {
    id: 6,
    title: 'Commercial Complex Fit-Out',
    category: 'commercial',
    location: 'Goa', // TODO: confirm real project location
    image:
      'https://coneccconcrete.com/wp-content/uploads/PLACEHOLDER-commercial-2.webp', // TODO: real photo
    imageAlt: 'Commercial complex built with Conecc AAC blocks',
  },
  {
    id: 7,
    title: 'Fly Ash Brick Boundary Wall',
    category: 'flyash-paver',
    location: 'Amaravathi, Karnataka', // TODO: confirm real project location
    image:
      'https://coneccconcrete.com/wp-content/uploads/PLACEHOLDER-flyash-project.webp', // TODO: real photo
    imageAlt: 'Boundary wall built with fly ash bricks',
  },
  {
    id: 8,
    title: 'Paver Block Driveway',
    category: 'flyash-paver',
    location: 'Mangaluru, Karnataka', // TODO: confirm real project location
    image:
      'https://coneccconcrete.com/wp-content/uploads/PLACEHOLDER-paver-project.webp', // TODO: real photo
    imageAlt: 'Driveway paved with Conecc paver blocks',
  },
]

export const galleryStats = [
  { value: '250+', label: 'Projects Completed' }, // TODO: confirm real figure
  { value: '11+', label: 'States Served' }, // matches deliveryStates in content.js
  { value: '50+', label: 'Commercial Sites' }, // TODO: confirm real figure
  { value: '1000+', label: 'Homes Built' }, // TODO: confirm real figure
]

export const galleryCta = {
  title: 'Have A Project In Mind?',
  subtitle: "Talk to our team and see how Conecc's products can fit your build.",
  cta: 'Get a Free Quote',
  ctaHref: '/contact',
}