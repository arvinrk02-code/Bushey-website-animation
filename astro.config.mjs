// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import baseRewrite from './base-rewrite.mjs';

// The site deploys to GitHub Pages under /Bushey-website, so the build and
// preview servers run under that base and base-rewrite.mjs prefixes the
// root-relative URLs in the output. The dev server, however, serves public
// assets straight from the root, so applying the base there just makes every
// `/images/...` reference 404. Keep dev at the root and only apply the base
// for build/preview — dev then matches production without touching any source.
const isDev = process.argv.includes('dev');

// https://astro.build/config
export default defineConfig({
  site: 'https://dordinator.github.io',
  base: isDev ? '/' : '/Bushey-website',
  integrations: [baseRewrite()],
  vite: {
    plugins: [tailwindcss()]
  }
});