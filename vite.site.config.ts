import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/* The showcase site published to GitHub Pages.
 *
 * It imports the library from `src`, not from `dist`, so the page renders the
 * current components rather than whatever was last built — a specimen that can
 * drift from the thing it documents is worse than no specimen.
 *
 * `base` is the repository name because Pages serves a project site from
 * https://<org>.github.io/<repo>/.
 */
export default defineConfig({
  root: resolve(__dirname, 'site'),
  base: '/design-system/',
  resolve: {
    alias: { '@': resolve(__dirname, 'src') },
  },
  plugins: [react()],
  build: {
    outDir: resolve(__dirname, 'site-dist'),
    emptyOutDir: true,
    sourcemap: false,
  },
});
