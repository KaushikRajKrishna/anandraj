export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  place?: string;
  detail?: string;
}

export const education: EducationItem[] = [
  {
    period: 'July 2024 – Ongoing',
    degree: 'PhD Scholar, Department of Liberal Arts',
    institution: 'Indian Institute of Technology (IIT) Hyderabad',
    place: 'Hyderabad',
    detail: 'Ministry of Education (MoE) Fellowship, July 2024 – June 2029',
  },
  {
    period: 'Aug 2023 – May 2024',
    degree: 'Urban Fellows Programme (UFP)',
    institution: 'Indian Institute for Human Settlements (IIHS)',
    place: 'Bengaluru',
  },
  {
    period: 'Aug 2019 – June 2021',
    degree: 'Master of Arts in Political Science',
    institution: 'University of Delhi',
    place: 'New Delhi',
    detail: 'First Division · Rank 1 in PGDAV College',
  },
  {
    period: 'Aug 2016 – June 2019',
    degree: 'Bachelor of Arts in History and Political Science',
    institution: 'University of Delhi',
    place: 'New Delhi',
    detail: 'First Division',
  },
];
