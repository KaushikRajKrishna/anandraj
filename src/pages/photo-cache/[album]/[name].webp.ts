// Small, fast WebP copies of the photos in public/photography and public/sketches, made at build time
// (and on request while running `npm run dev`). Card and full-size copies carry the watermark
// from src/lib/watermark.ts. The original files are never changed.
import type { APIRoute, GetStaticPaths } from 'astro';
import sharp from 'sharp';
import { getAllImageSets, SIZES, type SizeName } from '../../../lib/photography';
import { addWatermark } from '../../../lib/watermark';

export const getStaticPaths = (async () => {
  const albums = await getAllImageSets();
  return albums.flatMap((album) =>
    album.photos.flatMap((photo) =>
      (Object.keys(SIZES) as SizeName[]).map((size) => ({
        params: { album: album.slug, name: `${photo.slug}-${size}` },
        props: { file: photo.path, size, mark: photo.mark },
      }))
    )
  );
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
  const { file, size, mark } = props as { file: string; size: SizeName; mark?: string };
  const width = SIZES[size];
  const image = sharp(file).rotate(); // apply camera orientation
  const resized =
    size === 'large'
      ? image.resize({ width, height: width, fit: 'inside', withoutEnlargement: true })
      : image.resize({ width, withoutEnlargement: true });
  let buffer: Buffer;
  if (size === 'tiny') {
    // Thumbnails in the album rows are too small to carry a readable watermark
    buffer = await resized.webp({ quality: 60 }).toBuffer();
  } else {
    const { data, info } = await resized.png().toBuffer({ resolveWithObject: true });
    const marked = await addWatermark(data, info.width, info.height, mark);
    buffer = await sharp(marked).webp({ quality: 80 }).toBuffer();
  }
  return new Response(new Uint8Array(buffer), {
    headers: { 'Content-Type': 'image/webp', 'Cache-Control': 'public, max-age=31536000' },
  });
};
