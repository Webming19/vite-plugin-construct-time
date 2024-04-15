import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import { constructTimePlugin } from './lib';

export default defineConfig(({ mode }) => {
  if (mode === 'production') {
    return {
      build: {
        target: 'chrome79',
        outDir: 'dist',
        sourcemap: false,
        copyPublicDir: false,
        minify: false,
        lib: {
          entry: fileURLToPath(new URL('./lib/index.ts', import.meta.url)),
          name: 'vite-plugin-construct-time',
          fileName: 'index',
          formats: ['es', 'cjs'],
        },
      },
      plugins: [
        dts({
          include: ['./lib'],
        }),
      ],
    }
  } else {
    return {
      plugins: [constructTimePlugin(['development', 'test'])],
    }
  }
});
