// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxt/ui", "@nuxt/image"],
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
      api: "https://api.nuxt.studio",
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
});
