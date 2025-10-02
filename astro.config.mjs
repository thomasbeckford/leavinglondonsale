// @ts-check
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://leavinglondonsale.com',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
})
