<template>
	<div>
		<article>
			<ContentRenderer v-if="article" :value="article" />
			<div class="text-center py-16" v-else>
				<h1 class="text-4xl font-bold mb-4">Page Not Found (404)</h1>
				<p class="text-lg mb-4">Sorry, the page you are looking for does not exist.</p>
				<NuxtLink to="/blog" class="text-primary underline">View all blog articles</NuxtLink><br />
				<NuxtLink to="/" class="text-primary underline">Go back to the homepage</NuxtLink>
			</div>
		</article>
	</div>
</template>

<script setup>
	const route = useRoute();

	const { data: article } = await useAsyncData(route.path, () => queryCollection("blog").path(route.path).first());

	definePageMeta({
		layout: "blog",
	});

	useSeoMeta({
		title: article.value?.title,
		description: article.value?.description,
	});
</script>
