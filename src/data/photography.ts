// Captions for the Photography page.
//
// HOW IT WORKS
// - Every folder inside  public/photography/  becomes one album on the page, automatically.
// - Name folders "<Place> <Month> <Year>" or "<Place> <Year>" (e.g. "Kolkata May 2026", "Bengaluru 2023").
//   Albums are sorted newest first from that name.
// - Drop photos (.jpg, .jpeg, .png, .webp) into a folder and they appear; the site makes smaller,
//   faster copies for the web by itself. Your originals are never changed.
// - Captions below are matched by the exact file name. A photo without a caption still shows.
// - `blurb` is the one-line introduction shown when the album is opened.
// - `hide` lists file names to leave out (for example a duplicate).
// - `location` is printed in the watermark on every photo as "City, Country", e.g. "Mumbai, India".
//   The month and year come from the folder name and are shown under each caption instead.
//   `locations` overrides it for single photos taken somewhere else on the same trip.

export const photographyIntro = 'Places I have walked through, one album for each journey.';

export interface AlbumNotes {
  blurb?: string;
  location?: string;
  locations?: Record<string, string>;
  captions?: Record<string, string>;
  hide?: string[];
}

export const albumNotes: Record<string, AlbumNotes> = {
  'Quebec City August 2026': {
    location: 'Quebec City, Canada',
    blurb: 'Stone streets, copper roofs and the St. Lawrence in late summer.',
    captions: {
      'WhatsApp Image 2026-11-13 at 17.05.34 (1).jpeg': 'Château Frontenac glowing above the St. Lawrence at night.',
      'WhatsApp Image 2026-11-13 at 17.05.34.jpeg': 'Green copper roofs and old street lamps under a bright summer sky.',
      'WhatsApp Image 2026-11-13 at 17.05.35 (1).jpeg': 'An old-town street at blue hour, the lamps just coming on.',
      'WhatsApp Image 2026-11-13 at 17.05.35.jpeg': 'Rooftops tumbling down to the St. Lawrence, seen from the heights.',
      'WhatsApp Image 2026-11-13 at 17.05.36 (1).jpeg': 'A black lantern, a stone wall, and ivy climbing an old house.',
      'WhatsApp Image 2026-11-13 at 17.05.36 (2).jpeg': 'A fountain of tilted steel, catching water and summer light.',
      'WhatsApp Image 2026-11-13 at 17.05.36.jpeg': 'Château Frontenac rising over the old town, seen from the city walls.',
    },
  },
  'Montreal, August 2026': {
    location: 'Montreal, Canada',
    blurb: 'Festival streets, painted walls and long summer evenings.',
    captions: {
      'WhatsApp Image 2026-11-13 at 21.40.41 (1).jpeg': 'A steel sculpture and a festival flag against a sky full of drifting clouds.',
      'WhatsApp Image 2026-11-13 at 21.40.41.jpeg': 'Late sun through an old tree, its long shadow stretched across the grass.',
      'WhatsApp Image 2026-11-13 at 21.40.42 (1).jpeg': 'Festival banners in red, and a red-roofed church tucked between the towers.',
      'WhatsApp Image 2026-11-13 at 21.40.42 (2).jpeg': 'A quiet downtown corner of stone facades and street lamps under a grey sky.',
      'WhatsApp Image 2026-11-13 at 21.40.42.jpeg': 'A towering mural keeps watch over the street lights at night.',
      'WhatsApp Image 2026-11-13 at 21.40.43 (1).jpeg': 'Sunbeams fanning out from a cloud as evening settles over the park.',
      'WhatsApp Image 2026-11-13 at 21.40.43.jpeg': 'Glass and old brick side by side on a long city street.',
      'WhatsApp Image 2026-11-13 at 21.40.430.jpeg': 'A mural of women gathered around a table, painted across a whole wall.',
    },
  },
  'Toronto August 2026': {
    location: 'Toronto, Canada',
    locations: {
      'WhatsApp Image 2026-11-13 at 14.40.31 (1).jpeg': 'Niagara Falls, Canada',
      'WhatsApp Image 2026-11-13 at 14.40.31 (2).jpeg': 'Niagara Falls, Canada',
    },
    blurb: 'Towers, lake light, and a night trip to Niagara Falls.',
    captions: {
      'WhatsApp Image 2026-11-13 at 14.40.27 (1).jpeg': 'Concrete, sunlight and a single street lamp on a quiet corner.',
      'WhatsApp Image 2026-11-13 at 14.40.27.jpeg': 'A street-side hot dog, the most honest welcome to the city.',
      'WhatsApp Image 2026-11-13 at 14.40.28 (1).jpeg': 'A wall of antlers and skulls, the wild gathered in one frame.',
      'WhatsApp Image 2026-11-13 at 14.40.28.jpeg': 'Red and gold leaves catching the light beside a street lamp.',
      'WhatsApp Image 2026-11-13 at 14.40.29 (1).jpeg': 'A share bike parked for the night under glowing downtown windows.',
      'WhatsApp Image 2026-11-13 at 14.40.29 (2).jpeg': 'The Toronto skyline shimmering across the lake at night.',
      'WhatsApp Image 2026-11-13 at 14.40.29.jpeg': 'The CN Tower standing tall over a sunny summer afternoon.',
      'WhatsApp Image 2026-11-13 at 14.40.30 (1).jpeg': 'Looking up between towers at night, flowers spilling from above.',
      'WhatsApp Image 2026-11-13 at 14.40.30 (2).jpeg': 'Evening light on the CN Tower at the end of a long avenue.',
      'WhatsApp Image 2026-11-13 at 14.40.30.jpeg': 'The CN Tower from below, a beam of red light reaching into the night.',
      'WhatsApp Image 2026-11-13 at 14.40.31 (1).jpeg': 'Niagara Falls lit blue in the dark, mist rising off the water.',
      'WhatsApp Image 2026-11-13 at 14.40.31 (2).jpeg': 'A rain-washed road by Niagara, the falls glowing pink in the distance.',
      'WhatsApp Image 2026-11-13 at 14.40.31.jpeg': 'Shards of gold and black under two quiet words: No Limits.',
    },
  },
  'Kolkata May 2026': {
    location: 'Kolkata, India',
    blurb: 'A quiet corner of the old city.',
    captions: {
      'WhatsApp Image 2026-11-13 at 17.05.46 (1).jpeg': 'Colonial-era tombs line a path strewn with fallen yellow blossoms.',
    },
  },
  'Nalanda December 2025': {
    location: 'Nalanda, India',
    blurb: 'Winter haze over the ruins of an ancient seat of learning.',
    captions: {
      'WhatsApp Image 2026-11-13 at 17.05.37 (1).jpeg': 'The great brick ruins of Nalanda, softened by the winter haze.',
      'WhatsApp Image 2026-11-13 at 17.05.37.jpeg': 'Brick steps climbing the ruins, worn smooth by the centuries.',
      'WhatsApp Image 2026-11-13 at 17.05.38 (1).jpeg': 'A safari van winding along a quiet forest road.',
      'WhatsApp Image 2026-11-13 at 17.05.38.jpeg': 'Monastery walls and votive stupas, row upon row, where scholars once lived.',
      'WhatsApp Image 2026-11-13 at 17.05.39 (1).jpeg': 'A scarlet macaw, vivid against the wire of its aviary.',
      'WhatsApp Image 2026-11-13 at 17.05.39 (2).jpeg': 'Two budgies sharing a quiet moment on a branch.',
    },
    // Same budgie photo at a smaller size
    hide: ['WhatsApp Image 2026-11-13 at 17.05.39.jpeg'],
  },
  'Hampi October 2025': {
    location: 'Hampi, India',
    blurb: 'Boulders, temples and ruins under grey October skies.',
    captions: {
      'WhatsApp Image 2026-11-13 at 17.05.40 (1).jpeg': 'Rows of red and green cloth offerings, and a vendor resting in their shade.',
      'WhatsApp Image 2026-11-13 at 17.05.40.jpeg': 'Boulders piled to the horizon, the landscape Hampi is carved from.',
      'WhatsApp Image 2026-11-13 at 17.05.41 (1).jpeg': 'The stone chariot, held up against its portrait on the fifty-rupee note.',
      'WhatsApp Image 2026-11-13 at 17.05.41 (2).jpeg': 'A lone pavilion and a stray dog, keeping watch under a grey sky.',
      'WhatsApp Image 2026-11-13 at 17.05.41.jpeg': 'Looking out from carved pillars across an empty stone courtyard.',
      'WhatsApp Image 2026-11-13 at 17.05.42.jpeg': 'A weathered watchtower, still standing guard over the ruins.',
    },
  },
  'Hyderabad July 2025': {
    location: 'Hyderabad, India',
    blurb: 'Small lives in a monsoon garden.',
    captions: {
      'WhatsApp Image 2026-11-13 at 17.05.45.jpeg': 'A striped beetle at work on a hibiscus bud, bright against the green.',
    },
  },
  'Mumbai November 2023': {
    location: 'Mumbai, India',
    blurb: 'City lights by night, and the creatures that hide by day.',
    captions: {
      'WhatsApp Image 2026-11-13 at 17.05.44 (1).jpeg': 'A gecko tucked between stones, patterned perfectly for hiding.',
      'WhatsApp Image 2026-11-13 at 17.05.44.jpeg': 'The city at night: a red bus, streaking lights and towers that never sleep.',
    },
  },
  'Bengaluru 2023': {
    location: 'Bengaluru, India',
    blurb: 'Lakes, old trees and a market full of flowers.',
    captions: {
      'WhatsApp Image 2026-11-13 at 17.05.42 (1).jpeg': 'A still lake under a heavy sky, palms leaning in to listen.',
      'WhatsApp Image 2026-11-13 at 17.05.42.jpeg': 'Above the clouds, on the way to a new city.',
      'WhatsApp Image 2026-11-13 at 17.05.43 (1).jpeg': 'Glass and sky meet at a sharp angle, a bare branch reaching in.',
      'WhatsApp Image 2026-11-13 at 17.05.43.jpeg': 'A morning flower market, marigolds heaped like sunsets in every basket.',
      'WhatsApp Image 2026-11-13 at 17.05.44.jpeg': 'An old giant of a tree, its knotted arms holding up the afternoon.',
      'WhatsApp Image 2026-11-13 at 17.05.45.jpeg': 'A bee at work among pink zinnias, the garden humming in colour.',
    },
  },
};
