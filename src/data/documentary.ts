// Documentary page: every video in  public/documentary/  (.mp4, .webm, .mov) is shown automatically.
// Add a title and caption here by exact file name (optional).
// Videos are listed in the order below; any video not listed here follows after, by file name.
//
// YouTube / Vimeo links and article links go in src/data/beyondAcademia.ts (Documentary section)
// and appear below the videos.

export interface FilmNotes {
  title?: string;
  caption?: string;
  date?: string;
  hide?: boolean;
}

export const filmNotes: Record<string, FilmNotes> = {
  'WhatsApp Video 2026-11-13 at 17.05.34 (1).mp4': {
    title: 'Speaking to camera',
    caption: 'A three-minute piece to camera, recorded outdoors on a city street.',
  },
  'WhatsApp Video 2026-11-13 at 19.52.15.mp4': {
    title: 'Two budgies',
    caption: 'Two budgies sharing a quiet, tender moment on a branch.',
  },
};
