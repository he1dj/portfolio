import { defineConfig } from 'astro/config'

// https://astro.build/config
import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'

import mdx from '@astrojs/mdx'

import expressiveCode from 'astro-expressive-code'

// https://astro.build/config
export default defineConfig({
  integrations: [
    expressiveCode(),
    icon({
      iconDir: 'src/assets/icons',
    }),
    mdx(),
  ],
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  prefetch: {
    defaultStrategy: 'hover',
  },
  vite: { plugins: [tailwindcss()] },
})
