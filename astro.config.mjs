import { defineConfig } from "astro/config";

// https://astro.build/config
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [preact()],
  trailingSlash: "never",
  build: {
    format: "file",
  },
  prefetch: {
    defaultStrategy: "hover",
  },
});
