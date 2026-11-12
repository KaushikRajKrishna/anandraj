export interface NavLink {
  label: string;
  href: string;
  description: string;
}

export interface NavItem extends NavLink {
  /** Sub-pages shown in a hover/focus dropdown */
  children?: NavLink[];
}

// Main menu. "My Publications" groups two pages in a dropdown.
export const navigation: NavItem[] = [
  { label: 'Home', href: '/', description: 'Introduction, research questions and current work' },
  { label: 'About', href: '/about', description: 'Biography, work experience and education' },
  // { label: 'Research', href: '/research', description: 'Research interests, projects and research experience' },
  {
    label: 'My Publications',
    href: '/publications',
    description: 'Academic publications, blogs and other writings',
    children: [
      { label: 'Academic Publications', href: '/publications', description: 'Journal articles, book reviews, book chapters, books and research reports' },
      { label: 'Blogs / Gray Writings', href: '/writings', description: 'Public scholarship, essays and other academic writings' },
    ],
  },
  {
    label: 'Academic Engagements',
    href: '/activities',
    description: 'Conferences and talks, workshops and training, awards and grants, community building and mentorship, responsibilities and leadership',
    children: [
      { label: 'Conferences and Talks', href: '/activities/conferences-and-talks', description: 'Conference presentations, Talks' },
      { label: 'Workshops and Training', href: '/activities/workshops-and-training', description: 'Workshops, academic programmes and certificate courses' },
      { label: 'Awards and Grants', href: '/activities/awards-and-grants', description: 'Fellowships, awards and academic distinctions' },
      { label: 'Community Building and Mentorship', href: '/activities/community-building-and-mentorship', description: 'Community engagement and academic mentoring' },
      { label: 'Responsibilities and Leadership', href: '/activities/responsibilities-and-leadership', description: 'Institutional roles and leadership at IIT Hyderabad' },
    ],
  },
  {
    label: 'Beyond Academia',
    href: '/beyond-academia',
    description: 'Sketching, photography and documentary work',
    children: [
      { label: 'Sketching', href: '/beyond-academia/sketching', description: 'Drawings, sketches and illustrated work' },
      { label: 'Photography', href: '/beyond-academia/photography', description: 'Photographs and photo-led visual stories' },
      { label: 'Documentary', href: '/beyond-academia/documentary', description: 'Photographs, films and links to longer pieces' },
    ],
  },
  { label: 'Contact', href: '/contact', description: 'Email, institutional affiliation and academic correspondence' },
];

/** Every page as a flat list (children replace their parent group). */
export const allPages: NavLink[] = navigation.flatMap((item) => item.children ?? [item]);
