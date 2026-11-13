// Sketching page: every image in  public/sketches/  is shown automatically, as a card.
// Add a caption here by exact file name (optional). Sketches without one still appear.

export const sketchCaptions: Record<string, string> = {
  'WhatsApp Image 2026-11-13 at 17.05.46.jpeg':
    'Sinatra, drawn in thirty minutes while “My Way” played, on a study break on 10 July 2025.',
};

/** First line of the watermark on each sketch ("City, Country"). Sketches not listed show only the site name. */
export const sketchMarks: Record<string, string> = {
  'WhatsApp Image 2026-11-13 at 17.05.46.jpeg': 'Hyderabad, India',
};

/** File names to leave out */
export const hiddenSketches: string[] = [];
