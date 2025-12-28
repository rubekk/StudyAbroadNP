import { defineConfig } from "astro/config";
import path from "path";
import icon from "astro-icon";
import svelte from "@astrojs/svelte";
import netlify from "@astrojs/netlify";

export default defineConfig({
  output: "server", 

  vite: {
    plugins: [],
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
  },

  integrations: [
    icon(),
    svelte(),
  ],

  adapter: netlify(), 
});
