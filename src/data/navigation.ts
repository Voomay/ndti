export interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
  badge?: string;
}

export const MAIN_NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'IanArt Installations', href: '/ianart' },
  { label: 'Ian Art', href: 'https://ianart.co.za/', isExternal: true },
  { label: 'Contact Us', href: '/contact' }
];

export const FOOTER_QUICK_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Services', href: '/services' },
  { label: 'Portfolio Projects', href: '/portfolio' },
  { label: 'IanArt Installations', href: '/ianart' },
  { label: 'Contact Us', href: '/contact' }
];

export const FOOTER_SERVICES_LINKS: NavLink[] = [
  { label: 'Luxury Bedrooms', href: '/services#bedrooms' },
  { label: 'Designer Kitchens', href: '/services#kitchens' },
  { label: 'Bedrooms & Bathrooms', href: '/services#bathrooms' },
  { label: 'Living Spaces', href: '/services#studies' },
  { label: 'Wine Cellars & Bars', href: '/services#bars' },
  { label: 'Custom Joinery', href: '/services#commercial' }
];
