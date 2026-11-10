export interface NavLink {
  label: string;
  href: string;
  description: string;
}

export interface NavItem extends NavLink {
  /** Sub-pages shown in a hover/focus dropdown */
  children?: NavLink[];
}

// Main menu. "My Writings" groups two pages in a dropdown.
export const navigation: NavItem[] = [
  { label: 'Home', href: '/', description: 'Introduction, research questions and current work' },
  { label: 'About', href: '/about', description: 'Biography, education and academic journey' },
  { label: 'Research', href: '/research', description: 'Research interests, projects and research experience' },
  {
    label: 'My Writings',
    href: '/publications',
    description: 'Academic publications, blogs and other writings',
    children: [
      { label: 'Academic Publications', href: '/publications', description: 'Journal articles, book reviews, book chapters, books and research reports' },
      { label: 'Blogs / Writings', href: '/writings', description: 'Public scholarship, essays and other academic writings' },
    ],
  },
  {
    label: 'Academic Engagements',
    href: '/activities',
    description: 'Conferences, workshops, awards, courses, responsibilities and lectures',
    children: [
      { label: 'Conferences and Workshops', href: '/activities/conferences-and-workshops', description: 'Conference paper presentations, workshops and academic programmes' },
      { label: 'Awards and Grants', href: '/activities/awards-and-grants', description: 'Fellowships, awards and academic distinctions' },
      { label: 'Certificates and Courses', href: '/activities/certificates-and-courses', description: 'Certificate courses in research methods, writing, ethics and digital labour' },
      { label: 'Responsibilities and Leadership', href: '/activities/responsibilities-and-leadership', description: 'Institutional roles at IIT Hyderabad and academic mentoring' },
      { label: 'Talks / Lectures', href: '/activities/talks-and-lectures', description: 'Teaching, live classes and lectures' },
    ],
  },
  { label: 'Contact', href: '/contact', description: 'Email, institutional affiliation and academic correspondence' },
];

/** Every page as a flat list (children replace their parent group). */
export const allPages: NavLink[] = navigation.flatMap((item) => item.children ?? [item]);
