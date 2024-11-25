<template>
	<div>
		<NuxtLayout>
			<main>
				<Suspense>
					<template #default>
						<main>
							<p class="mb-[-30px] text-[var(--background-400)]">{{ page?.date }}</p>
							<ContentLoader />
							<hr />
							<RelatedPosts v-if="showRelated" />
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
const showRelated = ref(false)

// Only show after main content loads
onMounted(() => {
	showRelated.value = true
})

const route = useRoute()

const { data: page } = await useAsyncData(`content-${route.path}`, () => {
	return queryContent()
		.where({ _path: route.path })
		.only(['description', 'tags', 'date'])
		.findOne()
})

useHead({
	meta: [
		{ name: 'description', content: page.value?.description },
		{ name: 'keywords', content: page.value?.tags }
	]
})
</script>
