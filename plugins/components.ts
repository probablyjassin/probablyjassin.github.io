export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.component(
		"CodeWithCopyButton",
		defineAsyncComponent(() => import("@/components/CodeWithCopyButton.vue"))
	);
});
