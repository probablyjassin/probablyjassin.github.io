<template>
	<main>
		<ContentDoc />
	</main>
</template>

<script setup>
	useHead({
		title: "probablyjassin - Coding and Blogging",
		meta: [
			{
				name: "description",
				content: "I'm Jässin, I code things for fun. Explore my projects and articles about development.",
			},
			{ name: "keywords", content: "developer, programming, web development, blog, portfolio, projects, javascript, vue" },
			{ property: "og:title", content: "probablyjassin - Coding and Blogging" },
			{ property: "og:description", content: "I'm Jässin, I code things for fun. Explore my projects and articles about development." },
			{ property: "og:type", content: "website" },
			{ name: "twitter:card", content: "summary" },
		],
	});
</script>
