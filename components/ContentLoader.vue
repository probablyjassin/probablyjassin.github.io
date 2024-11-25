<template>
    <ContentDoc>
        <template #not-found>
            <div class="text-center py-16">
                <h1 class="text-4xl font-bold mb-4">Blog Post Not Found (404)</h1>
                <p class="text-lg mb-4">Sorry, the post you are looking for does not exist.</p>
                <NuxtLink to="/blog" class="text-primary underline">Check out all existing blog posts</NuxtLink>
            </div>
        </template>
    </ContentDoc>
</template>