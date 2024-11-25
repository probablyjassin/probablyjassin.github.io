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

interface BlogPost {
	_path: string;
	title: string;
	description?: string;
	image?: string;
	date?: string;
	_file: string;
	_dir: string;
}

const { data: posts, status, error, refresh, clear } = await useAsyncData("blog-posts", async () =>
	await queryContent<BlogPost>("blog")
		.where({
			_partial: false,
			_draft: false,
			_path: { $ne: "/blog" }, // Exclude index page
		})
		.sort({ _path: 1 })
		.find()
);

const postsState = useState<BlogPost[]>("posts", () => posts.value || []);
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
