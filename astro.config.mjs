import { defineConfig } from 'astro/config';

// Static multi-page build: each page is emitted as /<page>/index.html
export default defineConfig({
  site: 'https://anandrajresearch.com',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
