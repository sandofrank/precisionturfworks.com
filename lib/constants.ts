export const COMPANY = {
  name: 'Precision Turf Works',
  legalName: 'Precision Turf Works, Inc.',
  dba: 'Artificial Turf Works',
  tagline: 'Precision in Every Blade',
  phone: '949.439.0177',
  phoneHref: 'tel:9494390177',
  email: 'info@precisionturfworks.com',
  address: {
    street: '202 East Airport Drive',
    suite: 'Suite 155',
    city: 'San Bernardino',
    state: 'CA',
    zip: '92408',
  },
  license: 'C61/D12-1145025',
  fullAddress: '202 East Airport Drive, Suite 155, San Bernardino, CA 92408',
  social: {
    facebook: 'https://www.facebook.com/Precisionturfworks',
    instagram: 'https://www.instagram.com/precision_turf_works/',
  },
  footerTagline: 'Precision Turf Works is a family-owned artificial turf company in Highland, CA providing professional installation for residential lawns, commercial landscapes, putting greens, playgrounds, and pet areas. Serving the Inland Empire with a focus on quality, integrity, and service.',
};

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Residential', href: '/services/residential' },
      { label: 'Commercial', href: '/services/commercial' },
      { label: 'Putting Greens', href: '/services/putting-greens' },
      { label: 'Maintenance & Repair', href: '/services/maintenance' },
    ],
  },
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/about' },
  {
    label: 'Our Work',
    href: '/gallery',
    children: [
      { label: 'Gallery', href: '/gallery' },
      { label: 'Before & Afters', href: '/portfolio' },
    ],
  },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];
