// Content unique to the Home page. Everything here is grounded in the CV;
// questions are framed as lines of inquiry, not findings.

export const statement =
  'I study how work, employment and migration are produced and reproduced in cities';

export interface Question {
  q: string;
}

export const questions: Question[] = [
  {
    q: 'How do digital platforms and data infrastructures reshape the relations between the state, capital and workers?',
  },
  {
    q: 'How do small and mid-sized cities work, and how do they shape work, employment and migration?',
  },
  {
    q: 'How are development policies made, and who is included or excluded when they reach people?',
  },
  {
    q: 'How does the history of labour’s struggles shape the politics of the present?',
  },
];

export interface Place {
  id: string;
  name: string;
  lat: number;
  lon: number;
  /** Label placement on the map */
  labelSide: 'left' | 'right';
  labelDy?: number;
}

export const places: Place[] = [
  {
    id: 'motihari',
    name: 'Motihari',
    lat: 26.65,
    lon: 84.92,
    labelSide: 'right',
    labelDy: -15,
  },
  {
    id: 'new-delhi',
    name: 'New Delhi',
    lat: 28.61,
    lon: 77.21,
    labelSide: 'left',
    labelDy: -7,
  },
  {
    id: 'noida',
    name: 'Noida',
    lat: 28.54,
    lon: 77.39,
    labelSide: 'right',
    labelDy: 15,
  },
  {
    id: 'bengaluru',
    name: 'Bengaluru',
    lat: 12.97,
    lon: 77.59,
    labelSide: 'right',
  },
  {
    id: 'hyderabad',
    name: 'Hyderabad',
    lat: 17.39,
    lon: 78.49,
    labelSide: 'right',
  },
  {
    id: 'toronto',
    name: 'Toronto',
    lat: 43.65,
    lon: -79.38,
    labelSide: 'right',
  },
];

export const now = {
  asOf: 'November 2026',
  items: [
    { label: 'Doctoral research', text: 'Third year of the PhD in the Department of Liberal Arts, IIT Hyderabad, after presenting fieldwork from India at the University of Toronto’s urban mixed-methods workshop in August 2026.' },
    // { label: 'With workers', text: 'Ongoing comparative research for the Telangana Gig and Platform Workers Union on how trade union movements elsewhere secured better legislation.' },
    { label: 'Upcoming', text: 'Visiting Fellow at the ILR School, Cornell University (September to December 2027), hosted by Prof. Virginia Doellgast.' },
    { label: 'In progress', text: '“Migrant Gig Workers, Electoral Politics, and Unequal Development in India”, with Shaik Salauddin(Founder and President of TGPWU).' },
  ],
};
