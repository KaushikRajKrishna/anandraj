// Bibliography — titles, authors, years, venues, DOIs, ISBNs and statuses as given in the CV.

export interface Publication {
  id: string;
  authors: string;
  year: string;
  title: string;
  /** Prefix such as "Book Review:" shown before the title */
  kind?: string;
  /** Reviewed book's authors, e.g. "By Gregory F Randolph" */
  reviewOf?: string;
  /** Journal, edited volume, publisher or outlet */
  venue?: string;
  /** "In" for chapters */
  venuePrefix?: string;
  detail?: string;
  status?: string;
  doi?: string;
  url?: string;
  isbn?: string;
  /** Titles of essays/articles are set in quotes; books and reviewed books in italics */
  titleStyle: 'italic' | 'quoted';
}

export interface PublicationSection {
  id: string;
  /** Which page lists this section */
  group: 'academic' | 'writings';
  letter: string;
  title: string;
  items: Publication[];
}

export const publicationSections: PublicationSection[] = [
  {
    id: 'journal-articles',
    group: 'academic',
    letter: 'A',
    title: 'Journal Articles',
    items: [],
  },
  {
    id: 'book-reviews',
    group: 'academic',
    letter: 'B',
    title: 'Book Reviews',
    items: [
      {
        id: 'ijurr-2026',
        authors: 'Raj, Anand',
        year: '2026',
        kind: 'Book Review:',
        title: 'Urbanization from Within: A Theory of Urban Transition from 21st-Century India',
        reviewOf: 'By Gregory F Randolph',
        venue: 'International Journal of Urban and Regional Research',
        status: 'Accepted',
        titleStyle: 'italic',
      },
      {
        id: 'ntwe-2026',
        authors: 'Raj, Anand',
        year: '2026',
        kind: 'Book Review:',
        title: 'Feeding the Machine: The Hidden Human Labour Powering AI',
        reviewOf: 'By James Muldoon, Mark Graham, and Callum Cant',
        venue: 'New Technology, Work and Employment',
        doi: '10.1111/ntwe.70022',
        titleStyle: 'italic',
      },
      {
        id: 'ilr-2025',
        authors: 'Raj, Anand',
        year: '2025',
        kind: 'Book Review:',
        title: 'The Gig Economy in India: Start-Ups, Infrastructure and Resistance',
        reviewOf: 'By Pradip Ninan Thomas',
        venue: 'ILR Review',
        detail: '0(0)',
        doi: '10.1177/00197939251390392',
        titleStyle: 'italic',
      },
    ],
  },
  {
    id: 'book-chapters',
    group: 'academic',
    letter: 'C',
    title: 'Book Chapters',
    items: [
      {
        id: 'labour-leaders-2025',
        authors: 'Upadhyaya, Sanjay, Makwana, Rutvik, and Raj, Anand',
        year: '2025',
        title: 'The Role of Labour Leaders in the Indian Freedom Movement',
        detail: 'Aakar Books, New Delhi',
        isbn: '8197890587',
        url: 'https://aakarbooks.com/product/role-of-labour-leaders-in-the-indian-freedom-movement/?srsltid=AYCX9vIUROCYE9Dy88pyFICfG7Ap6nTpsdqfIMQVUzPAY_q63-aHHISj',
        titleStyle: 'italic',
      },
    ],
  },
  {
    id: 'research-reports',
    group: 'academic',
    letter: 'D',
    title: 'Research Reports',
    items: [
      {
        id: 'pulse-2026',
        authors: 'Raj, Anand',
        year: '2026',
        title: 'Towards A Beautiful PhD Journey',
        venue: 'Pulse',
        detail: 'Vol. 6 (pp. 53–54), Sunshine Newsletter, IITH',
        titleStyle: 'quoted',
      },
      {
        id: 'vvgnli-2024',
        authors: 'Upadhyaya, Sanjay and Raj, Anand',
        year: '2024',
        title: 'Labour Movement and Anti-Colonial Freedom Movement',
        detail: 'V.V. Giri National Labour Institute: Noida',
        isbn: '978-93-82902-99-7',
        titleStyle: 'italic',
      },
    ],
  },
  {
    id: 'public-scholarship',
    group: 'writings',
    letter: 'A',
    title: 'Public Scholarship and Essays',
    items: [
      {
        id: 'migrant-gig-2026',
        authors: 'Raj, Anand and Salauddin, Shaik',
        year: '2026',
        title: 'Migrant Gig Workers, Electoral Politics, and Unequal Development in India',
        status: 'Forthcoming',
        titleStyle: 'quoted',
      },
      {
        id: 'rti-2025',
        authors: 'Raj, Anand',
        year: '2025',
        title: 'Invisible Citizens: How Bihar’s Special Intensive Revision Marginalises Migrants',
        venue: 'Round Table India',
        url: 'https://www.roundtableindia.co.in/invisible-citizens-how-bihars-special-intensive-revision-marginalises-migrants/',
        titleStyle: 'quoted',
      },
      {
        id: 'fii-2025',
        authors: 'Raj, Anand',
        year: '2025',
        title: 'The Disenfranchisement of Migrants: Representation and Democracy in the Bihar Electoral Roll',
        venue: 'Feminism in India',
        detail: 'New Delhi',
        url: 'https://feminisminindia.com/guest-author/anand-raj/',
        titleStyle: 'quoted',
      },
    ],
  },
];

export const allPublications = publicationSections.flatMap((s) => s.items);

/** Academic Publications page (/publications) */
export const academicSections = publicationSections.filter((s) => s.group === 'academic');
/** Blogs / Gray Writings page (/writings) */
export const writingSections = publicationSections.filter((s) => s.group === 'writings');
