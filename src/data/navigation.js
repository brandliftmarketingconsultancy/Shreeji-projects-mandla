export const navLinks = [
  { label: 'Home', href: '/' },
  
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
  phone: '+91 7067062323',
  phoneDisplay: '+91 7067062323',
  email: 'shreejiprojectsmandla@gmail.com',
  address: 'Beside Axis Bank, Jabalpur Road, Mandla(M.P)- 481661',
  factoryAddress: 'Gram Mugadara, Bamhni Banjar, Dist.Mandla (M.P)- 481661'
}

export const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61591980950246', icon: 'facebook' },
  { label: 'Instagram', href: 'https://www.instagram.com/shreejiprojectsmandla/', icon: 'instagram' },
]