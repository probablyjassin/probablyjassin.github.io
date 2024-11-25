<template>
	<div>
		<NuxtLayout>
			<main>
				<Suspense>
					<template #default>
						<main>
							<div class="mb-[-30px]">
								<!-- <LazyPostMeta v-if="isMounted" /> -->
							</div>
							<ContentLoader />
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
			</main>
		</NuxtLayout>
	</div>
</template>

<script setup lang="ts">
const isMounted = ref(false)

// Only show after main content loads
onMounted(() => {
	isMounted.value = true
})

/* const route = useRoute()

const { data: page } = await useAsyncData(`content-${route.path}`, () => {
	return queryContent()
		.where({ _path: route.path })
		.only(['description', 'tags'])
		.findOne()
})

useHead({
	meta: [
		{ name: 'description', content: page.value?.description },
		{ name: 'keywords', content: page.value?.tags }
	]
}) */
</script>
