<template>
	<main class="max-w-4xl mb-4 mx-auto px-4">
		<h1 class="text-4xl font-bold mb-8">Things I wrote about</h1>
		<div v-if="!articles?.length" class="animate-pulse grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			<div v-for="i in 6" :key="i" class="mb-8 bg-slate-800 rounded-3xl h-[35em]">
				<div class="px-6 w-full rounded-lg border border-[var(--primary-200)]"></div>
			</div>
		</div>

		<div v-else-if="articles?.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			<NuxtLink
				:to="post.path || ''"
				v-for="post in articles"
				:key="post.path"
				class="px-6 w-full rounded-lg border border-[var(--primary-200)] hover:border-[var(--primary-400)] transition-colors no-underline">
				<article class="flex flex-col h-full">
					<div>
						{{ post }}
						<h2 class="text-2xl font-semibold mb-2 text-[var(--text-900)]">
							{{ post.title }}
						</h2>
						<div class="text-sm text-[var(--text-600)]">
							{{ post.meta.date }}
						</div>
						<div v-if="post.description" class="text-[var(--text-700)] mb-4">
							{{ post.description }}
						</div>
					</div>
					<div class="mt-auto w-48 h-48">
						<NuxtImg v-if="post.meta.image" class="w-48 h-48" :src="String(post.meta.image)" :alt="post.title" />
					</div>
				</article>
			</NuxtLink>
		</div>

		<div v-else class="text-center py-12 text-[var(--text-700)]">No blog posts found.</div>
	</main>
</template>

<script setup lang="ts">
	definePageMeta({
		layout: "blog",
	});

	const { data: articles } = await useAsyncData("blogposts", () =>
		queryCollection("blog")
			.where("id", "NOT LIKE", "%.draft.md")
			.where("title", "NOT LIKE", "Placeholder")
			.select("id", "meta", "path", "title", "description")
			.all()
	);

	useSeoMeta({
		title: "Blog - probablyjassin",
		description: "Things I've written about...",
	});
</script>
