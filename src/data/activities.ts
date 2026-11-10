// Conferences, workshops, responsibilities, awards, certificates, skills and languages — from the CV.

export interface DatedItem {
  id: string;
  date: string;
  title: string;
  /** Host institution / venue / issuing body */
  meta?: string;
  description?: string;
  note?: string;
}

export const conferences: DatedItem[] = [
  {
    id: 'ilc-2026',
    date: 'March 2026',
    title: '“Platform-based Gig Work and SDGs: Contrasting Global Policy and Worker Perspectives”',
    meta: '3rd India Labour Conference, Indian Institute of Management Kozhikode',
  },
  {
    id: 'dsa-2025',
    date: 'June 2025',
    title: '“Neoliberal Convergence: Political Discourse of Gig Work in India”',
    meta: 'Annual Development Studies Association',
  },
  {
    id: 'isle-65',
    date: 'Jan 2025',
    title:
      '“The History of Structural Adjustments and Modernised Way of Dependency in the Manufacturing Sector: A Case of ‘Make in India’ Initiative”',
    meta: '65th Indian Society of Labour Economics (ISLE), Bengaluru',
    note: 'Co-author: Ankit Singh, University of Cambridge',
  },
  {
    id: 'warwick-2024',
    date: 'April 2024',
    title:
      '“Understanding Disequilibrium of Rental Housing and Students’ Everyday Learning Experiences: A study of University of Delhi”',
    meta: '11th Annual Education Studies Postgraduate Research Conference, University of Warwick, United Kingdom (UK)',
    note: 'Co-author: Simranjeet Kaur, Jamia Milia Islamia University',
  },
  {
    id: 'isle-64',
    date: 'March 2024',
    title: '“Understanding Resistance of Migrant Workers in Platform Economy: A Study of Bike based Workers in Bengaluru”',
    meta: '64th Indian Society of Labour Economics (ISLE), Hyderabad',
  },
  {
    id: 'igu-2021',
    date: 'June 2021',
    title: '“Impact of COVID-19 on Students Learning Process: A Case Study of University of Delhi”',
    meta: 'International Conference organised by the International Geographical Union (IGU)',
  },
];

export const workshops: DatedItem[] = [
  {
    id: 'uoft-2026',
    date: 'Aug 4–6, 2026',
    title: 'Urban Mixed Methods across the Disciplines',
    meta: 'School of Cities, University of Toronto',
    description:
      'Selected for the Summer Workshop through a competitive global application process, to present fieldwork findings from India, refine doctoral research design, and explore urban mixed-methods methodologies.',
  },
  {
    id: 'iihs-phd-2026',
    date: 'Jan 12–14, 2026',
    title: 'Annual PhD Workshop 2026',
    meta: 'IIHS University',
    description:
      'Engaged with interdisciplinary methodologies centred on urban transformations in the Global South. Through one-on-one mentorship and collaborative peer workshops, refined my dissertation framework.',
  },
  {
    id: 'manuu-2025',
    date: 'Sept 8–12, 2025',
    title: 'Workshop on Measuring Exclusion, Discrimination and Inequality',
    meta: 'Maulana Azad National Urdu University (MANUU)',
    description:
      'Hands-on training in research methodologies for measuring social exclusion, discrimination, and inequality; policy-oriented dialogues regarding marginalised groups; and skills in translating sociological data into inclusive policy frameworks.',
  },
  {
    id: 'iiit-2025',
    date: 'July 21–25, 2025',
    title: 'Monsoon School on Digitalisation and Contested Modernities',
    meta: 'IIIT Hyderabad',
    description:
      'An intensive programme on tech–society intersections: digital infrastructures, data governance, and algorithmic biases, with interdisciplinary seminars applying critical socio-technical frameworks to my primary research.',
  },
  {
    id: 'aajeevika-2025',
    date: 'March 3–7, 2025',
    title: 'Migration, Informality, and Development',
    meta: 'Aajeevika Bureau',
    description:
      'Deepened my understanding of South Asian informal labour, circular migration, caste dynamics, and urban exclusion, which I now apply to my field research and advocacy work.',
  },
  {
    id: 'vvgnli-2024',
    date: 'June 24–28, 2024',
    title: 'Research Methods on Labour History',
    meta: 'V.V. Giri National Labour Institute',
    description:
      'Advanced capabilities in archival research and historiography, used to analyse evolving labour markets, worker movements, and historical shifts in employment policies.',
  },
];

export const responsibilities: DatedItem[] = [
  { id: 'wellbeing', date: '2025–2026', title: 'PhD Well-being Head', meta: 'Indian Institute of Technology (IIT) Hyderabad' },
  { id: 'seminar', date: '2024–2025', title: 'PhD Seminar Series Co-ordinator', meta: 'Department of Liberal Arts, IIT Hyderabad' },
  { id: 'hostel', date: '2024–2025', title: 'Hostel Representative', meta: 'IIT Hyderabad' },
  {
    id: 'mentor',
    date: '2023–2024',
    title: 'Academic Mentor',
    meta: 'Eklavya India Foundation and Speaking from Margin',
    description: 'Mentoring for the upliftment of marginalised students for higher education.',
  },
];

export const awards: DatedItem[] = [
  {
    id: 'moe',
    date: 'July 2024 – June 2029',
    title: 'Ministry of Education (MoE) Fellowship',
    meta: 'For pursuing PhD at IIT Hyderabad',
  },
  {
    id: 'net',
    date: 'June 2023',
    title: 'National Eligibility Test (NET) for Assistant Professor',
    meta: 'University Grants Commission, India',
  },
  {
    id: 'rank1',
    date: 'July 2021',
    title: 'Certificate of Merit, Rank 1 in M.A. Political Science',
    meta: 'P.G.D.A.V. College, University of Delhi',
  },
];

export const certificates: DatedItem[] = [
  {
    id: 'giz',
    date: 'May 2024',
    title: '“Data, Algorithms and Gig Work”',
    meta: 'GIZ with the German Ministry for Economic Cooperation and Development, Germany, at Atingi',
  },
  {
    id: 'uva',
    date: 'Jan 2024',
    title: '“Qualitative Research Methodology”',
    meta: 'University of Amsterdam, Coursera',
  },
  {
    id: 'umich',
    date: 'Jan 2024',
    title: '“Writing and Editing: Structure and Organization”',
    meta: 'University of Michigan, Coursera',
  },
  {
    id: 'citi',
    date: 'Sept 2023',
    title:
      '“Social & Behavioral Research, Responsible Conduct of Research, Information Privacy & Security, and Conflicts of Interest”',
    meta: 'CITI Program on Research Ethics',
  },
];

export const researchTools = [
  { name: 'Tableau', use: 'Data analysis and visualisation' },
  { name: 'NVivo', use: 'Qualitative data analysis' },
  { name: 'R', use: 'Statistical computing' },
  { name: 'Kobo Toolbox', use: 'Field survey and data collection' },
  { name: 'QGIS', use: 'Geographic information systems' },
];

export const languages = [
  { name: 'English', level: 'Professional' },
  { name: 'Hindi', level: 'Native' },
  { name: 'Bhojpuri', level: 'Mother tongue' },
];
