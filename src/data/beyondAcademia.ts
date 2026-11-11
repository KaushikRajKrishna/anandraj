// "Beyond Academia": Sketching, Photography and Documentary.
//
// HOW TO ADD OR CHANGE ITEMS
// 1. Put the image (or video file) in  public/beyondAcademia/
// 2. Add an entry to the `items` list of the right section below.
// 3. Write your own `caption`. `alt` describes the picture for screen readers.
//
// Three kinds of item are supported (any section can use any of them):
//
//   Photo:  { type: 'image', src: img('my-photo.jpg'), caption: '…', alt: '…' }
//
//   Video:  { type: 'video', src: 'https://www.youtube.com/watch?v=XXXXXXXXXXX', caption: '…' }
//           YouTube and Vimeo links are embedded. A file also works:
//           { type: 'video', src: img('my-film.mp4'), caption: '…' }
//
//   Link:   { type: 'link', href: 'https://…', caption: '…', title: '…', image: img('cover.jpg') }
//           `image` is optional; without it the card shows the title only.
//
// Optional on every item: `date` (e.g. 'November 2026') and `source` (e.g. a publication name).

export type GalleryItem =
  | { type: 'image'; src: string; caption: string; alt: string; date?: string; source?: string }
  | { type: 'video'; src: string; caption: string; poster?: string; date?: string; source?: string }
  | { type: 'link'; href: string; caption: string; title: string; image?: string; date?: string; source?: string };

export interface GallerySection {
  slug: string;
  label: string;
  letter: string;
  description: string;
  items: GalleryItem[];
}

/** Path to a file in public/beyondAcademia (spaces in file names are handled). */
const img = (file: string) => `/beyondAcademia/${encodeURIComponent(file)}`;

export const beyondIntro =
  'Work outside the classroom and the research paper: drawing, photography and documentary.';

export const gallerySections: GallerySection[] = [
  {
    slug: 'sketching',
    label: 'Sketching',
    letter: 'A',
    description: 'Drawings, sketches and illustrated work.',
    items: [
      {
        type: 'image',
        src: img('Screenshot 2026-11-05 175506.png'),
        caption: 'India and China: a collage',
        alt: 'Black-and-white collage of three political leaders seated on chairs above a red band, with a chessboard and a ship in the background.',
      },
      {
        type: 'image',
        src: img('Screenshot 2026-11-05 180058.png'),
        caption: 'India–China: diplomacy and the Arunachal question',
        alt: 'Portrait of a man with glasses on a blue background beside a paragraph on India–China relations and the Arunachal Pradesh dispute.',
      },
      {
        type: 'image',
        src: img('Screenshot 2026-11-06 140025.png'),
        caption: 'The De-dollarisation Story',
        alt: 'Collage of world leaders in triangular frames with the title "The De-dollarisation Story".',
        source: 'Knots.',
      },
      {
        type: 'image',
        src: img('Screenshot 2026-11-06 140545.png'),
        caption: 'India–China boundary talks',
        alt: 'Two leaders in conversation, drawn in sepia on a red background, under a paragraph on the 23rd and 24th rounds of boundary talks.',
      },
      {
        type: 'image',
        src: img('Screenshot 2026-11-07 213943.png'),
        caption: 'Doubts on USA?',
        alt: 'Illustration of a red mallet above three cartoon leaders popping out of holes, under the title "Doubts on USA?".',
      },
    ],
  },
  {
    slug: 'photography',
    label: 'Photography',
    letter: 'B',
    description: 'Photographs and photo-led visual stories.',
    items: [
      {
        type: 'image',
        src: img('Screenshot 2026-11-05 175215.png'),
        caption: 'The Galwan Valley clash',
        alt: 'Dark image of soldiers on a ridge at night, with text describing the Galwan Valley border clash.',
      },
      {
        type: 'image',
        src: img('Screenshot 2026-11-06 140005.png'),
        caption: 'When the Sea Has No Law',
        alt: 'Close-up of an eye with the title "When the Sea Has No Law: sanctions, dark fleets and the seafarers who pay" and a QR code.',
        source: 'Knots.',
      },
      {
        type: 'image',
        src: img('Screenshot 2026-11-06 140107.png'),
        caption: "France's Democracy Burning",
        alt: 'A man in a dark suit, hand on chin, in front of burning buildings, with the title "France\'s Democracy Burning".',
        source: 'GeoStrata',
      },
      {
        type: 'image',
        src: img('Screenshot 2026-11-06 140522.png'),
        caption: 'So, what has China been up to?',
        alt: 'Text on China\'s activity around Arunachal Pradesh above a photograph of soldiers on a mountain slope and an army officer.',
      },
      {
        type: 'image',
        src: img('Screenshot 2026-11-07 210826.png'),
        caption: 'Tunnel boring machines',
        alt: 'The cutting head of a tunnel boring machine, with a paragraph on export controls for tunnelling machinery.',
      },
    ],
  },
  {
    slug: 'documentary',
    label: 'Documentary',
    letter: 'C',
    description: 'Documentary work: photographs, films and links to longer pieces.',
    items: [
      {
        type: 'image',
        src: img('Screenshot 2026-11-07 210048.png'),
        caption: "France's Democracy Burning",
        alt: 'A man in a dark suit, hand on chin, in front of burning buildings, with the title "France\'s Democracy Burning".',
        source: 'GeoStrata',
      },
      {
        type: 'image',
        src: img('Screenshot 2026-11-07 211532.png'),
        caption: 'Tunnel boring machines: the blueprint',
        alt: 'Blueprint of a tunnel boring machine pinned to a board, with text on the machines used in metro, railway and highway tunnels.',
      },
      {
        type: 'image',
        src: img('Screenshot 2026-11-07 212558.png'),
        caption: 'Weather modification and hybrid warfare',
        alt: 'An aircraft releasing trails over a map at night, with text on weather modification as a tool of conflict.',
      },
      {
        type: 'image',
        src: img('Screenshot 2026-11-09 222554.png'),
        caption: "ISRO's NavIC",
        alt: 'The Earth with a satellite in orbit under the title "ISRO\'s NavIC".',
        source: 'Knots.',
      },
      {
        type: 'image',
        src: img('Screenshot 2026-11-09 223000.png'),
        caption: 'NavIC in everyday use',
        alt: 'A train, an aircraft and a power pylon around a paragraph on how NavIC is used across sectors in India.',
      },
    ],
  },
];
