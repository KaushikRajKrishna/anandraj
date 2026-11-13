// Build-time readers for the media folders in public/:
//   public/photography/<album folder>/  → photo albums
//   public/sketches/                    → sketches
//   public/documentary/                 → videos
// Image sizes are read once so cards can reserve their space (no layout jumps).
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { albumNotes } from '../data/photography';
import { sketchCaptions, hiddenSketches } from '../data/sketches';
import { filmNotes } from '../data/documentary';

const PUBLIC = path.join(process.cwd(), 'public');
export const PHOTO_ROOT = path.join(PUBLIC, 'photography');
const SKETCH_ROOT = path.join(PUBLIC, 'sketches');
const FILM_ROOT = path.join(PUBLIC, 'documentary');
const IMAGE = /\.(jpe?g|png|webp|avif)$/i;
const VIDEO = /\.(mp4|webm|mov|m4v)$/i;
const MONTHS = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

/** Widths of the web copies made by src/pages/photo-cache/[album]/[name].webp.ts */
export const SIZES = { tiny: 160, card: 720, large: 1800 } as const;
export type SizeName = keyof typeof SIZES;

export interface Photo {
  file: string;
  /** Absolute path on disk (build only) */
  path: string;
  slug: string;
  width: number;
  height: number;
  caption?: string;
}

export interface Album {
  name: string;
  slug: string;
  place: string;
  when: string;
  blurb?: string;
  photos: Photo[];
  sortKey: number;
}

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-');

/** URL of a web copy of a photo */
export const photoUrl = (album: Album, photo: Photo, size: SizeName) =>
  `/photo-cache/${album.slug}/${photo.slug}-${size}.webp`;

/** "Quebec City August 2026" → place "Quebec City", when "August 2026" */
function parseName(name: string) {
  const m = name.match(/^(.*?)\s+(?:([A-Za-z]+)\s+)?(\d{4})$/);
  if (!m) return { place: name, when: '', sortKey: 0 };
  const [, place, maybeMonth, year] = m;
  const monthIndex = maybeMonth ? MONTHS.indexOf(maybeMonth.toLowerCase()) : -1;
  if (maybeMonth && monthIndex === -1) {
    // Last word before the year is part of the place, not a month
    return { place: `${place} ${maybeMonth}`, when: year, sortKey: Number(year) * 100 };
  }
  return {
    place,
    when: maybeMonth ? `${maybeMonth[0].toUpperCase()}${maybeMonth.slice(1).toLowerCase()} ${year}` : year,
    sortKey: Number(year) * 100 + (monthIndex + 1),
  };
}

const byName = (a: string, b: string) => a.localeCompare(b, 'en', { numeric: true });

/** Image files in a folder, with their display size (camera rotation applied). */
async function readPhotos(dir: string, captions: Record<string, string> = {}, hidden: string[] = []): Promise<Photo[]> {
  if (!fs.existsSync(dir)) return [];
  const skip = new Set(hidden);
  const files: string[] = (fs.readdirSync(dir) as string[]).filter((f: string) => IMAGE.test(f) && !skip.has(f)).sort(byName);
  return Promise.all(
    files.map(async (file): Promise<Photo> => {
      const full = path.join(dir, file);
      const meta = await sharp(full).metadata();
      const rotated = (meta.orientation ?? 1) >= 5; // EXIF says the picture is turned on its side
      return {
        file,
        path: full,
        slug: slugify(file.replace(IMAGE, '')),
        width: (rotated ? meta.height : meta.width) ?? 4,
        height: (rotated ? meta.width : meta.height) ?? 3,
        caption: captions[file],
      };
    })
  );
}

async function load(): Promise<Album[]> {
  if (!fs.existsSync(PHOTO_ROOT)) return [];
  const folders: string[] = (fs.readdirSync(PHOTO_ROOT, { withFileTypes: true }) as { name: string; isDirectory(): boolean }[])
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  const albums = await Promise.all(
    folders.map(async (name): Promise<Album> => {
      const notes = albumNotes[name] ?? {};
      const photos = await readPhotos(path.join(PHOTO_ROOT, name), notes.captions, notes.hide);

      const { place, when, sortKey } = parseName(name);
      return { name, slug: slugify(name), place, when, blurb: notes.blurb, photos, sortKey };
    })
  );

  return (albums as Album[])
    .filter((a: Album) => a.photos.length > 0)
    .sort((a: Album, b: Album) => b.sortKey - a.sortKey || a.name.localeCompare(b.name));
}

let cache: Promise<Album[]> | undefined;

/** All albums, newest first. Re-read on every call in dev so new folders show up on refresh. */
export function getAlbums(): Promise<Album[]> {
  if (import.meta.env.DEV) return load();
  cache ??= load();
  return cache;
}

/** Sketches from public/sketches, as one set of cards (uses the same web copies as photos). */
export async function getSketches(): Promise<Album> {
  const photos = await readPhotos(SKETCH_ROOT, sketchCaptions, hiddenSketches);
  return { name: 'Sketches', slug: 'sketches', place: 'Sketches', when: '', photos, sortKey: 0 };
}

/** Every image set that needs web copies (photo albums and sketches). */
export async function getAllImageSets(): Promise<Album[]> {
  const [albums, sketches] = await Promise.all([getAlbums(), getSketches()]);
  return sketches.photos.length ? [...albums, sketches] : albums;
}

export interface Film {
  file: string;
  src: string;
  title: string;
  caption?: string;
  date?: string;
}

/** Videos from public/documentary, in the order listed in src/data/documentary.ts, then by file name. */
export function getFilms(): Film[] {
  if (!fs.existsSync(FILM_ROOT)) return [];
  const listed = Object.keys(filmNotes);
  const rank = (f: string) => (listed.includes(f) ? listed.indexOf(f) : listed.length);
  return (fs.readdirSync(FILM_ROOT) as string[])
    .filter((f: string) => VIDEO.test(f) && !filmNotes[f]?.hide)
    .sort((a: string, b: string) => rank(a) - rank(b) || byName(a, b))
    .map((file: string) => {
      const notes = filmNotes[file] ?? {};
      return {
        file,
        src: `/documentary/${encodeURIComponent(file)}`,
        title: notes.title ?? file.replace(VIDEO, ''),
        caption: notes.caption,
        date: notes.date,
      };
    });
}
