// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  base: '/filius-fall.github.io/',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});