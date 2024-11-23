// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	compatibilityDate: "2024-11-21",

	modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "shadcn-nuxt", "@nuxt/icon", "@nuxthq/studio", "@nuxt/image"],
	css: ["~/assets/css/main.css"],

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
