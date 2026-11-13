// Small, fast WebP copies of the photos in public/photography and public/sketches, made at build time
// (and on request while running `npm run dev`). The original files are never changed.
import type { APIRoute, GetStaticPaths } from 'astro';
import sharp from 'sharp';
import { getAllImageSets, SIZES, type SizeName } from '../../../lib/photography';

export const getStaticPaths = (async () => {
  const albums = await getAllImageSets();
  return albums.flatMap((album) =>
    album.photos.flatMap((photo) =>
      (Object.keys(SIZES) as SizeName[]).map((size) => ({
        params: { album: album.slug, name: `${photo.slug}-${size}` },
        props: { file: photo.path, size },
      }))
    )
  );
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
  const { file, size } = props as { file: string; size: SizeName };
  const width = SIZES[size];
  const image = sharp(file).rotate(); // apply camera orientation
  const resized =
    size === 'large'
      ? image.resize({ width, height: width, fit: 'inside', withoutEnlargement: true })
      : image.resize({ width, withoutEnlargement: true });
  const buffer = await resized.webp({ quality: size === 'tiny' ? 60 : 80 }).toBuffer();
  return new Response(new Uint8Array(buffer), {
    headers: { 'Content-Type': 'image/webp', 'Cache-Control': 'public, max-age=31536000' },
  });
};
