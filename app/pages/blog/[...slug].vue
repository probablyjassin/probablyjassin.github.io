<template>
	<div>
		<article>
			<Suspense>
				<template #default>
					<main>
						<div class="min-h-[1.65rem] mb-[-30px]">
							<LazyPostMeta v-if="isMounted" />
						</div>

						<ContentRenderer v-if="page" :value="page" />
						<div class="text-center py-16" v-else>
							<h1 class="text-4xl font-bold mb-4">Page Not Found (404)</h1>
							<p class="text-lg mb-4">Sorry, the page you are looking for does not exist.</p>
							<NuxtLink to="/blog" class="text-primary underline">View all blog articles</NuxtLink><br />
							<NuxtLink to="/" class="text-primary underline">Go back to the homepage</NuxtLink>
						</div>
						<hr />
						<RelatedPosts v-if="isMounted" />
					</main>
				</template>
				<template #fallback>
					<div class="animate-pulse">
						<div class="h-4 bg-[var(--text-200)] rounded w-3/4 mb-4"></div>
						<div class="h-4 bg-[var(--text-200)] rounded w-1/2 mb-4"></div>
						<div class="h-4 bg-[var(--text-200)] rounded w-2/3"></div>
					</div>
				</template>
			</Suspense>
		</article>
	</div>
</template>

<script setup lang="ts">
	const route = useRoute();

	const { data: page } = await useAsyncData("blog", () => queryCollection("blog").path(route.path).first());

	definePageMeta({
		layout: "blog",
	});

	useSeoMeta({
		title: page.value?.title,
		description: page.value?.description,
	});
	const isMounted = ref(false);

	// Only show after main content loads
	onMounted(() => {
		isMounted.value = true;
	});

	useHead({
		meta: [
			{ name: "description", content: page.value?.description },
			{ name: "keywords", content: page.value?.meta.tags as string },
		],
	});
</script>
