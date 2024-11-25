<template>
	<div>
		<NuxtLayout>
			<main>
				<ContentDoc>
					<template #not-found>
						<div class="text-center py-16">
							<h1 class="text-4xl font-bold mb-4">Document Not Found</h1>
							<p class="text-lg mb-4">Sorry, the document you are looking for does not exist.</p>
							<NuxtLink to="/" class="text-primary underline">Go back to the homepage</NuxtLink>
						</div>
					</template>
				</ContentDoc>
			</main>
			<hr />
			<section v-if="postsState?.length" class="mt-8">
				<h2 class="text-2xl font-bold mb-4">Did you also read these? 👀</h2>
				<ul>
					<li v-for="post in shuffled(postsState.filter((p) => p._path !== $route.path).slice(0, 3))"
						:key="post._path">
						<NuxtLink :to="post._path" class="text-primary underline">{{ post.title }}</NuxtLink>
					</li>
				</ul>
			</section>
		</NuxtLayout>
	</div>
</template>

<script setup lang="ts">
interface BlogPost {
	_path: string;
	title: string;
	description?: string;
	image?: string;
	date?: string;
	_file: string;
	_dir: string;
}

const postsState = useState<BlogPost[]>("posts", () => []);

const shuffled = <T>(items: T[]): T[] =>
	items
		.map((value: T) => ({ value, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ value }) => value);
</script>
