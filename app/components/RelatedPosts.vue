<template>
	<Suspense>
		<template #default>
			<section v-if="posts?.length" class="mt-8">
				<h2 class="text-2xl font-bold mb-4">Did you also read these? 👀</h2>
				<ul>
					<li v-for="post in shuffled(posts.filter((p) => p.id !== $route.path).slice(0, 3))" :key="post.id"
						class="list-disc list-inside">
						<NuxtLink :to="post.path" class="underline">{{ post.title }}</NuxtLink>
					</li>
				</ul>
			</section>
		</template>
		<template #fallback>
			<div class="animate-pulse">
				<div class="h-4 bg-[var(--text-200)] rounded w-3/4 mb-4"></div>
				<div class="h-4 bg-[var(--text-200)] rounded w-1/2 mb-4"></div>
			</div>
		</template>
	</Suspense>
</template>

<script setup lang="ts">
const route = useRoute();

const { data: posts } = await useAsyncData("relatedposts", () =>
	queryCollection("blog")
		.where("id", "NOT LIKE", "%.draft.md")
		.where("title", "NOT LIKE", "%unlisted%")
		.where("path", "NOT LIKE", route.path)
		.select("id", "meta", "path", "title", "description")
		.all()
);

const shuffled = <T,>(items: T[]): T[] =>
	items
		.map((value: T) => ({ value, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ value }) => value);
</script>
