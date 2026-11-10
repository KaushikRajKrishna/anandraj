// Research overview, interest areas and projects.
// Descriptions summarise themes evidenced in the CV; no dissertation title or findings are asserted.

export const researchOverview = [
  'My research examines how work, migration and the city are reorganised under contemporary political-economic change in India. I am particularly interested in the experiences of migrant workers in the gig and platform economy, the ways labour is governed and represented, and how informality shapes access to housing, welfare and citizenship.',
  'I approach these questions through interdisciplinary methods that combine fieldwork, archival research, survey work and policy analysis, drawing on training in history, political science and urban studies. My engagement with the Telangana Gig and Platform Workers Union connects this research to ongoing debates on workers’ rights and labour legislation.',
];

export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  /** Related work from the CV */
  related: string[];
}

export const researchAreas: ResearchArea[] = [
  {
    id: 'labour',
    title: 'Labour Studies',
    description:
      'The history and politics of labour in India, from the role of the labour movement in the anti-colonial freedom struggle to contemporary forms of worker organising and labour regulation.',
    related: [
      'Research Associate, V.V. Giri National Labour Institute (2023)',
      'The Role of Labour Leaders in the Indian Freedom Movement (Aakar Books, 2025)',
      'Workshop on Research Methods on Labour History (2024)',
    ],
  },
  {
    id: 'migration',
    title: 'Migration and Mobility',
    description:
      'Internal and circular migration in South Asia, with attention to migrants from Bihar, their position in urban labour markets, and questions of representation and electoral inclusion.',
    related: [
      'Teaching Assistant, NPTEL course “Migration, Mobility, and Development” (2026)',
      'Essays on migrants and the Bihar electoral roll (2025)',
      'Migration, Informality, and Development, Aajeevika Bureau (2025)',
    ],
  },
  {
    id: 'gig',
    title: 'Gig and Platform Economy',
    description:
      'Location-based platform work, worker resistance and collective bargaining, and the gap between global policy frameworks and workers’ own perspectives on platform-based gig work.',
    related: [
      'Volunteer Researcher, Telangana Gig and Platform Workers Union (2024–present)',
      'Book reviews in ILR Review (2025) and New Technology, Work and Employment (2026)',
      'Chapter in Gig Work in Growing India, Taylor & Francis (accepted)',
    ],
  },
  {
    id: 'urban',
    title: 'Urban Studies',
    description:
      'Urban transformation in the Global South, the socio-economic impacts of urban infrastructure, and the relationship between labour informality and housing.',
    related: [
      'Urban Fellows Programme, IIHS (2023–2024)',
      'Urban Mixed Methods across the Disciplines, University of Toronto (2026)',
      'Book review in International Journal of Urban and Regional Research (accepted)',
    ],
  },
  {
    id: 'political-economy',
    title: 'Political Economy',
    description:
      'The political discourse of gig work, structural adjustment and industrial policy, and the political economy of employment in India.',
    related: [
      '“Neoliberal Convergence: Political Discourse of Gig Work in India” (DSA, 2025)',
      'Paper on structural adjustments and the ‘Make in India’ initiative (ISLE, 2025)',
      'State of Working India Report (2024), Azim Premji University',
    ],
  },
  {
    id: 'inequality',
    title: 'Development and Social Inequality',
    description:
      'Social exclusion, caste and discrimination, and their bearing on access to education, employment and citizenship for marginalised groups.',
    related: [
      'Workshop on Measuring Exclusion, Discrimination and Inequality, MANUU (2025)',
      'Academic Mentor, Eklavya India Foundation and Speaking from Margin (2023–2024)',
      '“Migrant Gig Workers, Electoral Politics, and Unequal Development in India” (forthcoming)',
    ],
  },
];

export const tgpwuEngagement = {
  organisation: 'Telangana Gig and Platform Workers Union (TGPWU)',
  role: 'Volunteer Researcher',
  period: 'September 2024 – Present',
  paragraphs: [
    'TGPWU is a trade union for location-based gig workers in Hyderabad, India. I work with the union as a volunteer researcher as part of my advocacy.',
    'My work involves conducting comparative research on countries with a successful history of trade union movements that have secured better legislation for workers, research that could help enhance TGPWU’s bargaining power with the government.',
  ],
};

export interface Project {
  id: string;
  period: string;
  title: string;
  institution: string;
  role: string;
  description: string;
}

export const projects: Project[] = [
  {
    id: 'swi-2024',
    period: 'April 2024 – May 2024',
    title: 'State of Working India Report (2024)',
    institution: 'Centre for Sustainable Employment, Azim Premji University',
    role: 'Research Intern, with Dr Rosa Abraham',
    description: 'Data analysis, review of youth employment policies, and preparation of graphs with descriptions.',
  },
  {
    id: 'bengaluru-metro',
    period: 'Aug 2023 – Dec 2023',
    title: 'Unveiling Urban Transformations: Assessing the Socio-economic Impacts of Bengaluru Metro Construction Project',
    institution: 'Indian Institute for Human Settlements (IIHS)',
    role: 'Group project, Urban Fellows Programme',
    description: 'Collaborative research combining coursework and fieldwork on the socio-economic impacts of metro construction in Bengaluru.',
  },
  {
    id: 'labour-movement',
    period: 'April 2023 – Oct 2023',
    title: 'Labour Movement and Anti-Colonial Freedom Struggle',
    institution: 'V.V. Giri National Labour Institute, Govt. of India',
    role: 'Research Associate',
    description:
      'Archival research under the supervision of Dr. Sanjay Upadhyaya, Prof. Prabhu Mohapatra and Dr Dheeraj Kumar Nite. Related publication: Labour Movement and Anti-Colonial Freedom Movement (V.V. Giri National Labour Institute, 2024).',
  },
  {
    id: 'bihar-migration',
    period: 'Jan 2021 – July 2021',
    title: 'Un (Employment), Policies and Labour Migration from Bihar',
    institution: 'University of Delhi',
    role: 'Term paper',
    description: 'A study of unemployment, state policy and labour migration from Bihar.',
  },
  {
    id: 'lal-bagh',
    period: 'Dec 2019 – Feb 2020',
    title: 'Survey of Services and Satisfaction, Lal Bagh',
    institution: 'Privileges Committee, Delhi Legislative Assembly',
    role: 'Intern',
    description:
      'Survey of the services and satisfaction of people residing in the Delhi slum of Lal Bagh, examining the relation between labour informality and housing.',
  },
];
