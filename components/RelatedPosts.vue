<template>
    <Suspense>
        <template #default>
            <section v-if="posts?.length" class="mt-8">
                <h2 class="text-2xl font-bold mb-4">Did you also read these? 👀</h2>
                <ul>
                    <li v-for="post in shuffled(posts.filter((p) => p._path !== $route.path).slice(0, 3))"
                        :key="post._path">
                        <NuxtLink :to="post._path" class="text-primary underline">{{ post.title }}</NuxtLink>
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
interface BlogPost {
    _path: string;
    title: string;
    description?: string;
    image?: string;
    date?: string;
    _file: string;
    _dir: string;
}

const { data: posts, status, error, refresh, clear } = await useLazyAsyncData("blog-posts", async () =>
    await queryContent<BlogPost>("blog")
        .where({
            _partial: false,
            _draft: false,
            _path: { $ne: "/blog" }, // Exclude index page
        })
        .sort({ _path: 1 })
        .find()
);

const shuffled = <T>(items: T[]): T[] =>
    items
        .map((value: T) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
</script>