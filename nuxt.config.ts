// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ssr: true,
  modules: ["@nuxt/content", "nuxt-studio", "@nuxt/ui", "@nuxt/image"],
  css: ["~/assets/css/main.css"],
  experimental: {
    viewTransition: true,
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
  content: {
    preview: {
      api: "https://jaess.in",
    },
    build: {
      markdown: {
        highlight: {
          theme: "github-dark",
          langs: [
            "vue",
            "typescript",
            "javascript",
            "bash",
            "python",
            "json",
            "yml",
            "diff",
          ],
        },
      },
    },
  },
  studio: {
    repository: {
      provider: "github",
      owner: "probablyjassin",
      repo: "probablyjassin.github.io",
      branch: "main",
      //rootDir: '' // optional: location of your content app
    },
  },
});
