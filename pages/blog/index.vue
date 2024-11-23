<template>
	<main class="max-w-4xl mx-auto px-4">
		<h1 class="text-4xl font-bold mb-8">Blog Posts</h1>

		<div v-if="pending" class="animate-pulse">
			<div v-for="i in 3" :key="i" class="mb-8">
				<div class="h-7 bg-gray-200 rounded w-3/4 mb-2"></div>
				<div class="h-4 bg-gray-200 rounded w-1/4"></div>
			</div>
		</div>

		<div v-else-if="posts?.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			<article
				v-for="post in posts"
				:key="post._path"
				class="p-6 w-full rounded-lg border border-[var(--primary-200)] hover:border-[var(--primary-400)] transition-colors">
				<NuxtLink :to="post._path" class="no-underline">
					<h2 class="text-2xl font-semibold mb-2 text-[var(--text-900)]">
						{{ post.title }}
					</h2>
					<div v-if="post.description" class="text-[var(--text-700)] mb-4">
						{{ post.description }}
					</div>
					<div class="text-sm text-[var(--text-600)]">
						{{ formatDate(post) }}
					</div>
				</NuxtLink>
			</article>
		</div>

		<div v-else class="text-center py-12 text-[var(--text-700)]">No blog posts found.</div>
	</main>
</template>

<script setup lang="ts">
	interface BlogPost {
		_path: string;
		title: string;
		description?: string;
		date?: string;
		_file: string;
		_dir: string;
	}

	// Filter and sort blog posts
	const { data: posts, pending } = await useAsyncData("blog-posts", () =>
		queryContent<BlogPost>("blog")
			.where({
				_partial: false,
				_draft: false,
				_path: { $ne: "/blog" }, // Exclude index page
			})
			.sort({ _path: 1 })
			.find()
	);

	// Format date with fallback
	const formatDate = (post: BlogPost): string => {
		const now = new Date().toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
		return post.date
			? new Date(post.date).toLocaleDateString("en-US", {
					year: "numeric",
					month: "long",
					day: "numeric",
			  })
			: "";
	};
</script>
