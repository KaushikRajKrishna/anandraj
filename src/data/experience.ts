export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organisation: string;
  description: string;
}

export const teaching: ExperienceItem[] = [
  {
    id: 'nptel',
    period: 'Jan 2026 – April 2026',
    role: 'Teaching Assistant',
    organisation: 'National Programme on Technology Enhanced Learning (NPTEL)',
    description:
      'Teaching Assistant for the NPTEL course “Migration, Mobility, and Development” offered by Dr. Amrita Datta at IIT Hyderabad. NPTEL provides free online web and video courses to make higher education accessible across India. Responsibilities included reviewing recorded lectures, taking live classes, drafting assessments and questions, clarifying student queries, and curating supplementary reading materials for enrolled learners.',
  },
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
