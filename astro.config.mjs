import { defineConfig } from 'astro/config';

// Static multi-page build: each page is emitted as /<page>/index.html
export default defineConfig({
  site: 'https://anandraj.example.com', // update to the final domain before deploying
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
