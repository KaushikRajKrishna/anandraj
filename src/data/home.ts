// Content unique to the Home page. Everything here is grounded in the CV;
// questions are framed as lines of inquiry, not findings.

export const statement =
  'I study how work, migration and the city are being remade in India, and how gig and platform workers navigate, contest and organise within these changes.';

export interface Question {
  q: string;
  connected: { label: string; href: string }[];
}

export const questions: Question[] = [
  {
    q: 'How do migrant workers in the platform economy resist and organise, and what can their unions learn from movements that won better labour legislation elsewhere?',
    connected: [
      { label: 'Paper on resistance among bike-based workers in Bengaluru (ISLE, 2024)', href: '/activities/conferences-and-workshops#conferences' },
      { label: 'Comparative research with TGPWU', href: '/research#tgpwu' },
    ],
  },
  {
    q: 'Why do global policy frameworks and workers themselves describe platform work so differently?',
    connected: [
      { label: 'Chapter on platform-based gig work and the SDGs (accepted)', href: '/publications#book-chapters' },
      { label: '“Neoliberal Convergence” (DSA, 2025)', href: '/activities/conferences-and-workshops#conferences' },
    ],
  },
  {
    q: 'What happens to citizenship and political representation when people migrate for work?',
    connected: [
      { label: 'Essays on migrants and the Bihar electoral roll (2025)', href: '/writings#public-scholarship' },
      { label: 'Migrant Gig Workers, Electoral Politics, and Unequal Development in India (forthcoming)', href: '/writings#public-scholarship' },
    ],
  },
  {
    q: 'What does the history of India’s labour movement offer workers who are organising today?',
    connected: [
      { label: 'The Role of Labour Leaders in the Indian Freedom Movement (2025)', href: '/publications#books-reports' },
      { label: 'Labour Movement and Anti-Colonial Freedom Movement (2024)', href: '/publications#books-reports' },
    ],
  },
];

export interface Place {
  id: string;
  name: string;
  region: string;
  lat: number;
  lon: number;
  work: string[];
  /** Label placement on the map */
  labelSide: 'left' | 'right';
}

export const places: Place[] = [
  {
    id: 'delhi',
    name: 'Delhi',
    region: 'National Capital Territory',
    lat: 28.61,
    lon: 77.21,
    labelSide: 'left',
    work: [
      'Survey of services and housing among residents of the Lal Bagh slum (Delhi Legislative Assembly, 2019–20)',
      'Study of rental housing and students’ learning at the University of Delhi (presented at Warwick, 2024)',
    ],
  },
  {
    id: 'bihar',
    name: 'Bihar',
    region: 'Eastern India',
    lat: 25.6,
    lon: 85.14,
    labelSide: 'right',
    work: [
      'Term paper on unemployment, policy and labour migration from Bihar (University of Delhi, 2021)',
      'Writing on the disenfranchisement of migrants in Bihar’s electoral roll (2025)',
    ],
  },
  {
    id: 'hyderabad',
    name: 'Hyderabad',
    region: 'Telangana',
    lat: 17.39,
    lon: 78.49,
    labelSide: 'right',
    work: [
      'Doctoral research, Department of Liberal Arts, IIT Hyderabad (2024–)',
      'Volunteer research with the Telangana Gig and Platform Workers Union (2024–)',
    ],
  },
  {
    id: 'bengaluru',
    name: 'Bengaluru',
    region: 'Karnataka',
    lat: 12.97,
    lon: 77.59,
    labelSide: 'right',
    work: [
      'Study of resistance among migrant bike-based platform workers (ISLE, 2024)',
      'Socio-economic impacts of Bengaluru Metro construction (IIHS, 2023)',
    ],
  },
];

export const now = {
  asOf: 'November 2026',
  items: [
    { label: 'Doctoral research', text: 'Third year of the PhD in the Department of Liberal Arts, IIT Hyderabad, after presenting fieldwork from India at the University of Toronto’s urban mixed-methods workshop in August 2026.' },
    { label: 'With workers', text: 'Ongoing comparative research for the Telangana Gig and Platform Workers Union on how trade union movements elsewhere secured better legislation.' },
    { label: 'In press', text: 'A co-authored chapter in Gig Work in Growing India (Taylor & Francis) and a book review in the International Journal of Urban and Regional Research.' },
    { label: 'In progress', text: '“Migrant Gig Workers, Electoral Politics, and Unequal Development in India”, with Shaik Salauddin.' },
  ],
};
