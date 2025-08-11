import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // Env var defined in Github actions, only needed and defined in CI.
  ...(process.env.CI_DOCS_PREFIX && { base: process.env.CI_DOCS_PREFIX }),
  title: "Site1",
  description: "Site1",
  themeConfig: {
  }
})
