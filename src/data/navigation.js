export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'AAC Blocks', href: '/aac-blocks' },
  {
    label: 'Products',
    // href: '/products',
    children: [
      { label: 'AAC Blocks', href: '/products/aac-blocks' },
      { label: 'Fly Ash Bricks', href: '/products/fly-ash-bricks' },
      { label: 'Paver Blocks', href: '/products/paver-blocks' },
      { label: 'Fencing Pole', href: '/products/fencing-pole' },
      { label: 'Cover Blocks', href: '/products/cover-blocks' },
    ],
  },
  {
    label: 'Know More',
    href: '/about',
    children: [
      { label: 'About Us', href: '/about' },
      { label: 'Projects & Gallery', href: '/projects' },
      { label: 'Technical Resources', href: '/resources' },
      { label: 'Manufacturing Plants', href: '/manufacturing-plants' },
      // { label: 'Manufacturing Process', href: '/manufacturing-process' },
      // { label: 'Certifications', href: '/certifications' },
    ],
  },
  { label: 'Dealer Inquiry', href: '/dealer-inquiry' },
  { label: 'Contact', href: '/contact' },
  { label: 'Blogs', href: '/blogs' },
]

export const contact = {
  phone: '+91 9342xxxxxx',
  phoneDisplay: '+91 9342xxxxxx',
  email: 'support@conecc.info',
  address:
    'SHREEJI AAC BLOCKS Solutions Pvt Ltd - D No.360/1, 15th Ward, Near Old Ganesh Gas Godown, Bharathi Nagar, Amaravathi, Hospet - 583201, Dist - Vijayanagara, Karnataka',
}

export const socialLinks = [
  { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
  { label: 'Twitter', href: 'https://x.com', icon: 'twitter' },
  { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
  { label: 'YouTube', href: 'https://youtube.com', icon: 'youtube' },
]