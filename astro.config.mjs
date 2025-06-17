import { defineConfig } from "astro/config";

// https://astro.build/config
import preact from "@astrojs/preact";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [
    preact(),
    icon({
      iconDir: "src/assets/icons",
    }),
  ],
  trailingSlash: "never",
  build: {
    format: "file",
  },
  prefetch: {
    defaultStrategy: "hover",
  },
  vite: { plugins: [tailwindcss()] },
});
