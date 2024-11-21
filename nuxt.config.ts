// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	compatibilityDate: "2024-11-21",

	modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "shadcn-nuxt"],
	css: ["~/assets/css/main.css"],

	routeRules: {
		"/": { prerender: true },
	},

	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
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
});
