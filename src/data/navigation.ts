export interface NavItem {
  label: string;
  href: string;
  description: string;
}

// The six main pages of the site.
export const navigation: NavItem[] = [
  { label: 'Home', href: '/', description: 'Introduction, research questions and current work' },
  { label: 'About', href: '/about', description: 'Biography, education and academic journey' },
  { label: 'Research', href: '/research', description: 'Research interests, projects and research experience' },
  { label: 'Publications & Writings', href: '/publications', description: 'Journal publications, books, chapters and public writings' },
  { label: 'Academic Activities', href: '/activities', description: 'Teaching, conferences, workshops and institutional responsibilities' },
  { label: 'Contact', href: '/contact', description: 'Email, institutional affiliation and academic correspondence' },
];
