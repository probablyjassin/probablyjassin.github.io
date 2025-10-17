<template>
	<NuxtLayout>
		<ContentRenderer v-if="home" :value="home" class="main-content" />
		<div v-else>Home not found</div>
	</NuxtLayout>
</template>

<script setup lang="ts">
	const { data: home } = await useAsyncData(() => queryCollection("content").path("/").first());

	useSeoMeta({
		title: home.value?.title,
		description: home.value?.description,
	});
</script>
