// Core identity and contact details — sourced from Anand Raj's CV.
export const profile = {
  name: 'Anand Raj',
  designation: 'PhD Scholar',
  department: 'Department of Liberal Arts',
  institution: 'Indian Institute of Technology Hyderabad',
  institutionShort: 'IIT Hyderabad',
  email: 'la24resch11006@iith.ac.in',
  phone: '+91 9205231252',
  phoneHref: 'tel:+919205231252',
  location: 'Hyderabad, India',
  linkedin: 'https://www.linkedin.com/in/anand-raj-238131290',
  linkedinLabel: 'View LinkedIn profile',
  cv: '/files/Anand-Raj-CV.pdf',
  photo: '/images/anand-raj.jpeg' as string,
  fellowship: 'Ministry of Education (MoE) Fellow',
  keywords: ['Labour Studies', 'Migration', 'Gig & Platform Economy', 'Urban Studies', 'Political Economy'],
};

// Academic and professional profiles (Home page bar).
export const academicProfiles = [
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?hl=en&user=Q_Pl2bMAAAAJ' },
  // TODO: replace with the full ORCID iD URL, e.g. https://orcid.org/0000-0000-0000-0000
  { label: 'ORCID', href: 'https://orcid.org/' },
  { label: 'Web of Science', href: 'https://www.webofscience.com/wos/author/record/RJC-5596-2026' },
];

// Extended biography used on the About page.
export const biography = [
  'I am a PhD Scholar in the Department of Liberal Arts at the Indian Institute of Technology (IIT) Hyderabad, where I began my doctoral studies in July 2024 with a Ministry of Education (MoE) Fellowship. My work engages with labour studies, migration and mobility, the gig and platform economy, urban studies, political economy, and questions of development and social inequality.',
  'My academic training began at the University of Delhi, where I completed a Bachelor of Arts in History and Political Science (2016–2019) and a Master of Arts in Political Science (2019–2021), securing Rank 1 in M.A. Political Science at P.G.D.A.V. College. During my postgraduate studies, I wrote a term paper on “Un (Employment), Policies and Labour Migration from Bihar”, an early engagement with the questions of work and migration that continue to shape my research.',
  'An internship with the Privileges Committee of the Delhi Legislative Assembly (2019–2020) took me to the Lal Bagh slum in Delhi, where I surveyed residents’ access to services and their satisfaction with them, and came to understand the relationship between labour informality and housing. I later worked as a Research Associate at the V.V. Giri National Labour Institute (2023) on the project “Labour Movement and Anti-Colonial Freedom Struggle”, developing archival research skills and a grounding in the literature on the Indian labour movement.',
  'As an Urban Fellow at the Indian Institute for Human Settlements (2023–2024), I undertook interdisciplinary research and training in urban studies, focusing on the intersections of work, political economy, migration and urban governance, and contributed to a research project on the socio-economic impacts of Bengaluru metro construction. I then joined the Centre for Sustainable Employment at Azim Premji University as a research intern for the State of Working India Report (2024).',
  'Since September 2024, I have worked as a volunteer researcher with the Telangana Gig and Platform Workers Union (TGPWU) in Hyderabad. In 2026, I served as a Teaching Assistant for the NPTEL course “Migration, Mobility, and Development” offered by Dr. Amrita Datta at IIT Hyderabad. I qualified the UGC National Eligibility Test for Assistant Professor in June 2023.',
];

// Professional profile summary rows (About page).
export const professionalProfile = [
  { label: 'Current position', value: 'PhD Scholar, Department of Liberal Arts, IIT Hyderabad (July 2024 – ongoing)' },
  { label: 'Fellowship', value: 'Ministry of Education (MoE) Fellowship, July 2024 – June 2029' },
  { label: 'Qualification', value: 'UGC National Eligibility Test for Assistant Professor (June 2023)' },
  { label: 'Field engagement', value: 'Volunteer Researcher, Telangana Gig and Platform Workers Union (Sept 2024 – present)' },
  { label: 'Teaching', value: 'Teaching Assistant, NPTEL course “Migration, Mobility, and Development” (2026)' },
  { label: 'Location', value: 'Hyderabad, India' },
];
