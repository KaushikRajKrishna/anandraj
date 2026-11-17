// Photos, captions and dates for the Photography page.
//
// HOW IT WORKS
// - Every folder inside  public/photography/  becomes one album on the page, automatically.
// - Name folders "<Place> <Month> <Year>" or "<Place> <Year>" (e.g. "Kolkata May 2026", "Bengaluru 2023").
//   Albums are sorted newest first from that name.
// - Drop photos (.jpg, .jpeg, .png, .webp) into a folder and they appear; the site makes smaller,
//   faster copies for the web by itself. Your originals are never changed.
//
// EACH ALBUM
// - `location`  "City, Country", printed in the watermark and used as the album title, e.g. "Mumbai, India".
// - `blurb`     the one-line introduction shown when the album is opened.
// - `hide`      file names to leave out (for example a duplicate).
// - `photos`    one entry per photo, matched by the exact file name:
//
//     'WhatsApp Image ... .jpeg': {
//       caption: 'One line about the photo.',
//       date: 'March 2023',              <- shown under the caption; write any text, e.g. 'March 2023' or '2023'
//       location: 'Niagara Falls, Canada', <- optional: only if this photo was taken somewhere else
//     },
//
//   If `date` is left out, the month and year from the folder name are shown instead.
//   A photo with no entry here still appears, with the folder's date and no caption.

export const photographyIntro = 'Places I have walked through, one album for each journey.';

export interface PhotoNotes {
  caption?: string;
  /** Shown under the caption, e.g. 'March 2023'. Falls back to the folder's month and year. */
  date?: string;
  /** Only when this photo was taken somewhere other than the album's location */
  location?: string;
}

export interface AlbumNotes {
  location?: string;
  blurb?: string;
  photos?: Record<string, PhotoNotes>;
  hide?: string[];
}

export const albumNotes: Record<string, AlbumNotes> = {
  'Quebec City August 2026': {
    location: 'Quebec City, Canada',
    blurb: 'Stone streets, copper roofs and the St. Lawrence in late summer.',
    photos: {
      'WhatsApp Image 2026-11-13 at 17.05.34 (1).jpeg': {
        caption: 'Château Frontenac glowing above the St. Lawrence at night.',
        date: 'August 2026',
      },
      'WhatsApp Image 2026-11-13 at 17.05.34.jpeg': {
        caption: 'Green copper roofs and old street lamps under a bright summer sky.',
        date: 'August 2026',
      },
      'WhatsApp Image 2026-11-13 at 17.05.35 (1).jpeg': {
        caption: 'An old-town street at blue hour, the lamps just coming on.',
        date: 'August 2026',
      },
      'WhatsApp Image 2026-11-13 at 17.05.35.jpeg': {
        caption: 'Rooftops tumbling down to the St. Lawrence, seen from the heights.',
        date: 'August 2026',
      },
      'WhatsApp Image 2026-11-13 at 17.05.36 (1).jpeg': {
        caption: 'A black lantern, a stone wall, and ivy climbing an old house.',
        date: 'August 2026',
      },
      'WhatsApp Image 2026-11-13 at 17.05.36 (2).jpeg': {
        caption: 'A fountain of tilted steel, catching water and summer light.',
        date: 'August 2026',
      },
      'WhatsApp Image 2026-11-13 at 17.05.36.jpeg': {
        caption: 'Château Frontenac rising over the old town, seen from the city walls.',
        date: 'August 2026',
      },
    },
  },
  'Montreal, August 2026': {
    location: 'Montreal, Canada',
    blurb: 'Festival streets, painted walls and long summer evenings.',
    photos: {
      'WhatsApp Image 2026-11-13 at 21.40.41 (1).jpeg': {
        caption: 'A steel sculpture and a festival flag against a sky full of drifting clouds.',
        date: 'August 2026',
      },
      'WhatsApp Image 2026-11-13 at 21.40.41.jpeg': {
        caption: 'Late sun through an old tree, its long shadow stretched across the grass.',
        date: 'August 2026',
      },
      'WhatsApp Image 2026-11-13 at 21.40.42 (1).jpeg': {
        caption: 'Festival banners in red, and a red-roofed church tucked between the towers.',
        date: 'August 2026',
      },
      'WhatsApp Image 2026-11-13 at 21.40.42 (2).jpeg': {
        caption: 'A quiet downtown corner of stone facades and street lamps under a grey sky.',
        date: 'August 2026',
      },
      'WhatsApp Image 2026-11-13 at 21.40.42.jpeg': {
        caption: 'A towering mural keeps watch over the street lights at night.',
        date: 'August 2026',
      },
      'WhatsApp Image 2026-11-13 at 21.40.43 (1).jpeg': {
        caption: 'Sunbeams fanning out from a cloud as evening settles over the park.',
        date: 'August 2026',
      },
      'WhatsApp Image 2026-11-13 at 21.40.43.jpeg': {
        caption: 'Glass and old brick side by side on a long city street.',
        date: 'August 2026',
      },
      'WhatsApp Image 2026-11-13 at 21.40.430.jpeg': {
        caption: 'A mural of women gathered around a table, painted across a whole wall.',
        date: 'August 2026',
      },
    },
  },
  'Toronto August 2026': {
    location: 'Toronto, Canada',
    blurb: 'Towers, lake light, and a night trip to Niagara Falls.',
    photos: {
      'WhatsApp Image 2026-11-13 at 14.40.27 (1).jpeg': {
        caption: 'Concrete, sunlight and a single street lamp on a quiet corner.',
        date: 'August 2026',
      },
      'WhatsApp Image 2026-11-13 at 14.40.27.jpeg': {
        caption: 'A street-side hot dog, the most honest welcome to the city.',
        date: 'August 2026',
      },
      'WhatsApp Image 2026-11-13 at 14.40.28 (1).jpeg': {
        caption: 'A wall of antlers and skulls, the wild gathered in one frame.',
        date: 'August 2026',
      },
      'WhatsApp Image 2026-11-13 at 14.40.28.jpeg': {
        caption: 'Red and gold leaves catching the light beside a street lamp.',
        date: 'August 2026',
      },
      'WhatsApp Image 2026-11-13 at 14.40.29 (1).jpeg': {
        caption: 'A share bike parked for the night under glowing downtown windows.',
        date: 'August 2026',
      },
      'WhatsApp Image 2026-11-13 at 14.40.29 (2).jpeg': {
        caption: 'The Toronto skyline shimmering across the lake at night.',
        date: 'August 2026',
      },
      'WhatsApp Image 2026-11-13 at 14.40.29.jpeg': {
        caption: 'The CN Tower standing tall over a sunny summer afternoon.',
        date: 'August 2026',
      },
      'WhatsApp Image 2026-11-13 at 14.40.30 (1).jpeg': {
        caption: 'Looking up between towers at night, flowers spilling from above.',
        date: 'August 2026',
      },
      'WhatsApp Image 2026-11-13 at 14.40.30 (2).jpeg': {
        caption: 'Evening light on the CN Tower at the end of a long avenue.',
        date: 'August 2026',
      },
      'WhatsApp Image 2026-11-13 at 14.40.30.jpeg': {
        caption: 'The CN Tower from below, a beam of red light reaching into the night.',
        date: 'August 2026',
      },
      'WhatsApp Image 2026-11-13 at 14.40.31 (1).jpeg': {
        caption: 'Niagara Falls lit blue in the dark, mist rising off the water.',
        date: 'August 2026',
        location: 'Niagara Falls, Canada',
      },
      'WhatsApp Image 2026-11-13 at 14.40.31 (2).jpeg': {
        caption: 'A rain-washed road by Niagara, the falls glowing pink in the distance.',
        date: 'August 2026',
        location: 'Niagara Falls, Canada',
      },
      'WhatsApp Image 2026-11-13 at 14.40.31.jpeg': {
        caption: 'Shards of gold and black under two quiet words: No Limits.',
        date: 'August 2026',
      },
    },
  },
  'Kolkata May 2026': {
    location: 'Kolkata, India',
    blurb: 'A quiet corner of the old city.',
    photos: {
      'WhatsApp Image 2026-11-13 at 17.05.46 (1).jpeg': {
        caption: 'Colonial-era tombs line a path strewn with fallen yellow blossoms.',
        date: 'May 2026',
      },
    },
  },
  'Nalanda December 2025': {
    location: 'Nalanda, India',
    blurb: 'Winter haze over the ruins of an ancient seat of learning.',
    photos: {
      'WhatsApp Image 2026-11-13 at 17.05.37 (1).jpeg': {
        caption: 'The great brick ruins of Nalanda, softened by the winter haze.',
        date: 'December 2025',
      },
      'WhatsApp Image 2026-11-13 at 17.05.37.jpeg': {
        caption: 'Brick steps climbing the ruins, worn smooth by the centuries.',
        date: 'December 2025',
      },
      'WhatsApp Image 2026-11-13 at 17.05.38 (1).jpeg': {
        caption: 'A safari van winding along a quiet forest road.',
        date: 'December 2025',
      },
      'WhatsApp Image 2026-11-13 at 17.05.38.jpeg': {
        caption: 'Monastery walls and votive stupas, row upon row, where scholars once lived.',
        date: 'December 2025',
      },
      'WhatsApp Image 2026-11-13 at 17.05.39 (1).jpeg': {
        caption: 'A scarlet macaw, vivid against the wire of its aviary.',
        date: 'December 2025',
      },
      'WhatsApp Image 2026-11-13 at 17.05.39 (2).jpeg': {
        caption: 'Two budgies sharing a quiet moment on a branch.',
        date: 'December 2025',
      },
    },
    // Same budgie photo at a smaller size
    hide: ['WhatsApp Image 2026-11-13 at 17.05.39.jpeg'],
  },
  'Hampi October 2025': {
    location: 'Hampi, India',
    blurb: 'Boulders, temples and ruins under grey October skies.',
    photos: {
      'WhatsApp Image 2026-11-13 at 17.05.40 (1).jpeg': {
        caption: 'Rows of red and green cloth offerings, and a vendor resting in their shade.',
        date: 'October 2025',
      },
      'WhatsApp Image 2026-11-13 at 17.05.40.jpeg': {
        caption: 'Boulders piled to the horizon, the landscape Hampi is carved from.',
        date: 'October 2025',
      },
      'WhatsApp Image 2026-11-13 at 17.05.41 (1).jpeg': {
        caption: 'The stone chariot, held up against its portrait on the fifty-rupee note.',
        date: 'October 2025',
      },
      'WhatsApp Image 2026-11-13 at 17.05.41 (2).jpeg': {
        caption: 'A lone pavilion and a stray dog, keeping watch under a grey sky.',
        date: 'October 2025',
      },
      'WhatsApp Image 2026-11-13 at 17.05.41.jpeg': {
        caption: 'Looking out from carved pillars across an empty stone courtyard.',
        date: 'October 2025',
      },
      'WhatsApp Image 2026-11-13 at 17.05.42.jpeg': {
        caption: 'A weathered watchtower, still standing guard over the ruins.',
        date: 'October 2025',
      },
    },
  },
  'Hyderabad July 2025': {
    location: 'Hyderabad, India',
    blurb: 'Small lives in a monsoon garden.',
    photos: {
      'WhatsApp Image 2026-11-13 at 17.05.45.jpeg': {
        caption: 'A striped beetle at work on a hibiscus bud, bright against the green.',
        date: 'July 2025',
      },
    },
  },
  'Mumbai November 2023': {
    location: 'Mumbai, India',
    blurb: 'City lights by night, and the creatures that hide by day.',
    photos: {
      'WhatsApp Image 2026-11-13 at 17.05.44 (1).jpeg': {
        caption: 'A gecko tucked between stones, patterned perfectly for hiding.',
        date: 'November 2023',
      },
      'WhatsApp Image 2026-11-13 at 17.05.44.jpeg': {
        caption: 'The city at night: a red bus, streaking lights and towers that never sleep.',
        date: 'November 2023',
      },
    },
  },
  'Bengaluru 2023': {
    location: 'Bengaluru, India',
    blurb: 'Lakes, old trees and a market full of flowers.',
    photos: {
      'WhatsApp Image 2026-11-13 at 17.05.42 (1).jpeg': {
        caption: 'A still lake under a heavy sky, palms leaning in to listen.',
        date: 'August 2023',
      },
      'WhatsApp Image 2026-11-13 at 17.05.42.jpeg': {
        caption: 'Above the clouds, on the way to a new city.',
        date: 'September 2023',
      },
      'WhatsApp Image 2026-11-13 at 17.05.43 (1).jpeg': {
        caption: 'Glass and sky meet at a sharp angle, a bare branch reaching in.',
        date: 'October 2023',
      },
      'WhatsApp Image 2026-11-13 at 17.05.43.jpeg': {
        caption: 'A morning flower market, marigolds heaped like sunsets in every basket.',
        date: 'August 2023',
      },
      'WhatsApp Image 2026-11-13 at 17.05.44.jpeg': {
        caption: 'An old giant of a tree, its knotted arms holding up the afternoon.',
        date: 'September 2023',
      },
      'WhatsApp Image 2026-11-13 at 17.05.45.jpeg': {
        caption: 'A bee at work among pink zinnias, the garden humming in colour.',
        date: 'February 2024',
      },
    },
  },
};
