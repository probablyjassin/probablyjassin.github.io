<template>
	<div>
		<NuxtLayout>
			<main class="max-w-4xl mb-4 mx-auto px-4">
				<h1 class="text-4xl font-bold mb-8">Things I wrote about</h1>

				<div v-if="!posts?.length" class="animate-pulse grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					<div v-for="i in 6" :key="i" class="mb-8 bg-slate-800 rounded-3xl h-[35em]">
						<div class="px-6 w-full rounded-lg border border-[var(--primary-200)]"></div>
					</div>
				</div>

				<div v-else-if="posts?.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					<NuxtLink :to="post._path" v-for="post in posts" :key="post._path"
						class="px-6 w-full rounded-lg border border-[var(--primary-200)] hover:border-[var(--primary-400)] transition-colors no-underline">
						<article class="flex flex-col h-full">
							<div>
								<h2 class="text-2xl font-semibold mb-2 text-[var(--text-900)]">
									{{ post.title }}
								</h2>
								<div class="text-sm text-[var(--text-600)]">
									{{ post.date }}
								</div>
								<div v-if="post.description" class="text-[var(--text-700)] mb-4">
									{{ post.description }}
								</div>
							</div>
							<div class="mt-auto w-48 h-48">
								<NuxtImg v-if="post.image" class="w-48 h-48" :src="post.image" :alt="post.title" />
							</div>
						</article>
					</NuxtLink>
				</div>

				<div v-else class="text-center py-12 text-[var(--text-700)]">No blog posts found.</div>
			</main>
		</NuxtLayout>
	</div>
</template>

<script setup lang="ts">
useHead({
	title: "Blog - probablyjassin",
	meta: [
		{ name: "description", content: "Read articles about web development, programming, and technology written by Jässin Aouani." },
		{ name: "og:title", content: "Blog - probablyjassin" },
		{ name: "og:description", content: "Read articles about web development, programming, and technology written by Jässin Aouani." },
		{ name: "og:type", content: "website" },
		{ name: "twitter:card", content: "summary" },
		{ name: "twitter:title", content: "Blog - probablyjassin" },
		{ name: "twitter:description", content: "Read articles about web development, programming, and technology written by Jässin Aouani." },
	],
});

interface BlogPost {
	_path: string;
	title: string;
	description?: string;
	image?: string;
	date?: string;
	_file: string;
	_dir: string;
}

const { data: posts, status, error, refresh, clear } = await useAsyncData("blog-posts", () =>
	queryContent<BlogPost>("blog")
		.where({
			_partial: false,
			_draft: false,
			_path: { $ne: "/blog" }, // Exclude index page
		})
		.sort({ _path: 1 })
		.find()
);
</script>
