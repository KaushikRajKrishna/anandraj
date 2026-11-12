export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organisation: string;
  description: string;
}

export interface WorkItem {
  period: string;
  role: string;
  organisation: string;
  /** Kind of position, plus supervisor or context */
  detail: string;
  description: string;
}

// Work experience on the About page, most recent first.
export const workExperience: WorkItem[] = [
  {
    period: 'Jan 2026 – Apr 2026',
    role: 'Teaching Assistant',
    organisation: 'NPTEL course “Migration, Mobility, and Development”, IIT Hyderabad',
    detail: 'Teaching assistantship · Course offered by Dr. Amrita Datta',
    description:
      'Supported an open online course delivered free to learners across India through the National Programme on Technology Enhanced Learning: reviewed recorded lectures, took live classes, drafted assessments and question sets, answered student queries and curated supplementary readings.',
  },
  {
    period: 'Apr 2024 – May 2024',
    role: 'Research Intern',
    organisation: 'Centre for Sustainable Employment, Azim Premji University',
    detail: 'Internship · Supervised by Dr. Rosa Abraham',
    description:
      'Contributed to the State of Working India Report 2024: analysed employment data, reviewed youth employment policies, and prepared graphs with accompanying descriptions.',
  },
  {
    period: 'Aug 2023 – May 2024',
    role: 'Urban Fellow',
    organisation: 'Indian Institute for Human Settlements (IIHS)',
    detail: 'Urban Fellows Programme · Bengaluru',
    description:
      'Undertook interdisciplinary research and training in urban studies, focusing on the intersections of work, political economy, migration, and urban governance. Contributed to a research project on Bengaluru Metro construction and its socio-economic impacts. The programme combined coursework, fieldwork, and collaborative research, strengthening my analytical, methodological, and policy engagement skills relevant to urban and social research.',
  },
  {
    period: 'Apr 2023 – Oct 2023',
    role: 'Research Associate',
    organisation: 'V.V. Giri National Labour Institute, Govt. of India',
    detail: 'Research project · Supervised by Dr. Sanjay Upadhyaya, Prof. Prabhu Mohapatra and Dr. Dheeraj Kumar Nite',
    description:
      'Worked on the project “Labour Movement and Anti-Colonial Freedom Struggle”: carried out archival research and reviewed the literature on the history of the Indian labour movement.',
  },
  {
    period: 'Dec 2019 – Feb 2020',
    role: 'Intern, Privileges Committee',
    organisation: 'Delhi Legislative Assembly, Govt. of Delhi',
    detail: 'Internship · Under then MLA Akhilesh Pati Tripathi',
    description:
      'Worked on a survey of public services and residents’ satisfaction in the Lal Bagh slum settlement in Delhi, examining the link between informal work and the viability and adequacy of housing.',
  },
];

export const teaching: ExperienceItem[] = [

];

export const researchExperience: ExperienceItem[] = [
  {
    id: 'tgpwu',
    period: 'Sept 2024 – Present',
    role: 'Volunteer Researcher',
    organisation: 'Telangana Gig and Platform Workers Union (TGPWU)',
    description:
      'TGPWU is a trade union for location-based gig workers in Hyderabad, India. As a volunteer researcher, as part of my advocacy, I conduct comparative research on countries with a successful history of trade union movements that have secured better legislation, which could help enhance TGPWU’s bargaining power with the government.',
  },
  {
    id: 'apu',
    period: 'April 2024 – May 2024',
    role: 'Research Intern',
    organisation: 'Azim Premji University (APU)',
    description:
      'Research intern for the yearly published “State of Working India Report (2024)” at the Centre for Sustainable Employment, APU, with Dr Rosa Abraham. Analysed data, reviewed youth employment policies, and prepared graphs with descriptions.',
  },
  {
    id: 'iihs',
    period: 'Aug 2023 – May 2024',
    role: 'Urban Fellow',
    organisation: 'Indian Institute for Human Settlements (IIHS)',
    description:
      'Undertook interdisciplinary research and training in urban studies, focusing on the intersections of work, political economy, migration, and urban governance. Contributed to a research project on the Bengaluru metro construction and its socio-economic impacts. The programme combined coursework, fieldwork, and collaborative research, strengthening analytical, methodological, and policy engagement skills relevant to urban and social research.',
  },
  {
    id: 'vvgnli',
    period: 'April 2023 – Oct 2023',
    role: 'Research Associate',
    organisation: 'V.V. Giri National Labour Institute, Govt. of India',
    description:
      'Worked on the project “Labour Movement and Anti-Colonial Freedom Struggle” under the supervision of Dr. Sanjay Upadhyaya, Prof. Prabhu Mohapatra and Dr Dheeraj Kumar Nite. Developed archival research skills and engaged with the literature on the Indian labour movement.',
  },
  {
    id: 'dla',
    period: 'Dec 2019 – Feb 2020',
    role: 'Intern',
    organisation: 'Delhi Legislative Assembly, Govt. of Delhi',
    description:
      'Interned under the Privileges Committee of the Delhi Legislative Assembly on a survey project under then MLA Akhilesh Pati Tripathi. Surveyed the services and satisfaction of people residing in the Delhi slum of Lal Bagh, and came to understand the relation between labour informality and housing (viability and adequacy).',
  },
];
