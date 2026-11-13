// Watermark printed into the bottom-left corner of the web copies of photos and sketches:
//
//   Mumbai, India              ← optional first line: white, easy to read
//   anandrajresearch.com       ← the watermark: light, semi-transparent
//
// Uses the Inter font files in src/assets/fonts (SIL Open Font License, see OFL.txt there),
// so it looks the same on every computer and build server.
import path from 'node:path';
import sharp from 'sharp';

export const WATERMARK_SITE = 'anandrajresearch.com';

const FONTS = path.join(process.cwd(), 'src', 'assets', 'fonts');
const MEDIUM = path.join(FONTS, 'Inter-Medium.ttf');
const SEMIBOLD = path.join(FONTS, 'Inter-SemiBold.ttf');

const escapeMarkup = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** How strong each line is: text opacity and shadow opacity */
const STYLE = {
  label: { text: '92%', shadow: '75%' },
  site: { text: '48%', shadow: '22%' },
} as const;

/** Changes whenever the watermark's look changes, so browsers fetch fresh copies of every photo. */
export const WATERMARK_KEY = JSON.stringify({ site: WATERMARK_SITE, style: STYLE, layout: 1 });

/** A line of text as a transparent PNG, in white (or black for the shadow). */
async function renderLine(text: string, fontfile: string, px: number, shadow: boolean, style: keyof typeof STYLE) {
  const colour = shadow
    ? `foreground="#000000" fgalpha="${STYLE[style].shadow}"`
    : `foreground="#ffffff" fgalpha="${STYLE[style].text}"`;
  const spacing = Math.round(px * 0.02 * 1024); // slight tracking, in Pango units
  const { data, info } = await sharp({
    text: {
      text: `<span ${colour} letter_spacing="${spacing}">${escapeMarkup(text)}</span>`,
      font: `Inter ${px}px`,
      fontfile,
      rgba: true,
    },
  })
    .png()
    .toBuffer({ resolveWithObject: true });
  if (!shadow) return { data, width: info.width, height: info.height };
  const blurred = await sharp(data)
    .extend({ top: 8, bottom: 8, left: 8, right: 8, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .blur(Math.max(1, px * 0.07))
    .png()
    .toBuffer({ resolveWithObject: true });
  return { data: blurred.data, width: blurred.info.width, height: blurred.info.height };
}

/**
 * Print the watermark onto an image that has already been resized.
 * Text size follows the image width, so cards and full-size views look alike.
 */
export async function addWatermark(image: Buffer, width: number, height: number, label?: string): Promise<Buffer> {
  const shortSide = Math.min(width, height);
  const big = Math.max(14, Math.round(shortSide * 0.055)); // anandrajresearch.com
  const small = Math.max(10, Math.round(big * 0.5)); // City, Country
  const margin = Math.round(shortSide * 0.04);

  const site = await renderLine(WATERMARK_SITE, MEDIUM, big, false, 'site');
  const siteShadow = await renderLine(WATERMARK_SITE, MEDIUM, big, true, 'site');
  const layers: sharp.OverlayOptions[] = [];

  // Keep the text inside the picture even on very narrow images
  const siteTop = Math.max(0, height - margin - site.height);
  const left = margin;
  layers.push({ input: siteShadow.data, left: Math.max(0, left - 8 + 1), top: Math.max(0, siteTop - 8 + 2) });
  layers.push({ input: site.data, left, top: siteTop });

  if (label) {
    const line = await renderLine(label, SEMIBOLD, small, false, 'label');
    const lineShadow = await renderLine(label, SEMIBOLD, small, true, 'label');
    const lineTop = Math.max(0, siteTop - line.height + Math.round(small * 0.15));
    layers.unshift({ input: lineShadow.data, left: Math.max(0, left - 8 + 1), top: Math.max(0, lineTop - 8 + 1) });
    layers.push({ input: line.data, left: left + Math.round(big * 0.04), top: lineTop });
  }

  // Overlays must fit inside the image; drop any that would not (only on tiny images)
  const fits = async (o: sharp.OverlayOptions) => {
    const m = await sharp(o.input as Buffer).metadata();
    return (o.left ?? 0) + (m.width ?? 0) <= width && (o.top ?? 0) + (m.height ?? 0) <= height;
  };
  const safe: sharp.OverlayOptions[] = [];
  for (const layer of layers) if (await fits(layer)) safe.push(layer);

  return sharp(image).composite(safe).toBuffer();
}
