<template>
	<div>
		<NuxtPage />
	</div>
</template>

<script setup lang="ts">
	useHead({
		htmlAttrs: {
			lang: "en",
		},
		link: [
			{
				rel: "apple-touch-icon",
				sizes: "128x128",
				href: "/favicon.ico",
			},
			{
				rel: "icon",
				type: "image/x-icon",
				sizes: "128x128",
				href: "/favicon.ico",
			},
		],
	});
</script>

<style>
	.page-enter-active,
	.page-leave-active {
		transition: all 0.4s;
	}
	.page-enter-from,
	.page-leave-to {
		opacity: 0;
		filter: blur(1rem);
	}
</style>
