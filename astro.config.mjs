// @ts-check
import { defineConfig } from 'astro/config';
import path from "path";
import icon from 'astro-icon';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [],
    resolve: {
      alias: {
        '@': path.resolve('./src')
      }
    }
  },

  integrations: [icon(), svelte()],
});