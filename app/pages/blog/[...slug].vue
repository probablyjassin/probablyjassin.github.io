<template>
	<div>
		<article>
			<Suspense>
				<template #default>
					<main v-if="page">
						<div class="min-h-[1.65rem] mb-[-30px]">
							<LazyPostMeta v-if="isMounted" />
						</div>

						<ContentRenderer v-if="page" :value="page" />
						<hr />
						<RelatedPosts v-if="isMounted" />
					</main>
					<div v-else class="min-h-screen flex items-center justify-center">
						<div class="w-1/3">
							<NotFound />
						</div>
					</div>
				</template>
				<template #fallback>
					<div class="animate-pulse">
						<span class="flex items-center gap-1">
							<div class="h-2 bg-[var(--text-200)] rounded w-16 mb-4"></div>
							<div class="h-1 bg-[var(--text-200)] rounded w-1 mb-4"></div>
							<div class="h-2 bg-[var(--text-200)] rounded w-16 mb-4"></div>
						</span>
						<div class="h-10 bg-[var(--text-200)] rounded w-1/3 mb-4"></div>
						<div class="h-2 bg-[var(--text-200)] rounded w-1/2 mb-4" v-for="i in 2"></div>
						<div class="h-10 bg-[var(--text-200)] rounded w-1/3 mb-4"></div>
						<div class="h-4 bg-[var(--text-200)] rounded w-2/3 mb-2" v-for="i in 10"></div>
					</div>
				</template>
			</Suspense>
		</article>
	</div>
</template>

<script setup lang="ts">
	const route = useRoute();

	const { data: page } = await useAsyncData(route.path, () => queryCollection("blog").path(route.path).first());

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
