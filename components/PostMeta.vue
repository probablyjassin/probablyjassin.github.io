<template>
    <Suspense>
        <template #default>
            <p class="min-h-4 text-[var(--background-400)]">
                {{ page?.date }} · {{ wordCount }} words
            </p>
        </template>
        <template #fallback>
            <div class="animate-pulse">
                <div class="h-4 bg-[var(--text-200)] rounded w-32"></div>
            </div>
        </template>
    </Suspense>
</template>

<script setup lang="ts">
const route = useRoute()

const { data: page } = await useLazyAsyncData(`content-${route.path}`, () => {
    return queryContent()
        .where({ _path: route.path })
        .only(['body', 'date'])
        .findOne()
})

const wordCount = computed(() => {
    if (!page.value?.body) return 0
    const content = JSON.stringify(page.value.body)
    return content.split(/\s+/)
        .filter(word => /[a-zA-Z0-9]/.test(word))
        .length
})
</script>