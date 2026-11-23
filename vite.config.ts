import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  resolve: {
    alias: { '@': resolve(__dirname, 'src') },
  },
  plugins: [
    react(),
    dts({
      include: ['src'],
      outDir: 'dist',
      // Bundles every declaration into a single dist/index.d.ts. Per-file .d.ts
      // emit uses extensionless relative imports, which TypeScript rejects
      // under moduleResolution node16/nodenext unless the consumer happens to
      // set skipLibCheck. A published package cannot assume that.
      rollupTypes: true,
      insertTypesEntry: true,
    }),
  ],
  build: {
    // Lib mode base64-inlines assets regardless of assetsInlineLimit, so the
    // two shipped faces ride inside style.css. That's the wanted behaviour
    // here: one self-contained stylesheet resolves the brand type in any
    // renderer, with no relative-path or second-fetch failure mode.
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Restack',
      formats: ['es'],
      fileName: () => 'index.es.js',
    },
    cssCodeSplit: false,
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        assetFileNames: (info) => {
          if (info.name?.endsWith('.css')) return 'style.css';
          if (info.name?.endsWith('.woff2')) return 'fonts/[name][extname]';
          return 'assets/[name][extname]';
        },
        globals: { react: 'React', 'react-dom': 'ReactDOM' },
      },
    },
    sourcemap: false,
    emptyOutDir: true,
  },
});
