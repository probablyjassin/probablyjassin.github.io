// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	compatibilityDate: "2024-11-21",

	modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "shadcn-nuxt", "@nuxt/icon", "@nuxthq/studio", "@nuxt/image", "@nuxtjs/sitemap", "@nuxtjs/robots"],
	css: ["~/assets/css/main.css"],

	app: {
		pageTransition: { name: "page", mode: "out-in" },
	},

	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},

	content: {
		documentDriven: true,
		highlight: {
			theme: "github-dark",
			preload: ["vue", "typescript", "javascript", "bash", "python", "json", "yml"],
		},
	},

	shadcn: {
		/**
		 * Prefix for all the imported component
		 */
		prefix: "",
		/**
		 * Directory that the component lives in.
		 * @default "./components/ui"
		 */
		componentDir: "./components/ui",
	},

	robots: {
		blockAiBots: true,
		blockNonSeoBots: true,
		disallow: ["/blog/me", "/blog/me/*"],
	},

	site: {
		url: "https://***REMOVED***",
		name: "probablyjassin - Coding and Blogging",
	},
});
