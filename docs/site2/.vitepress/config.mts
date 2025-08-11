import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...(process.env.CI_DOCS_PREFIX && { base: process.env.CI_DOCS_PREFIX }),
  title: "Site2",
  description: "Site12",
  themeConfig: {
  }
})
