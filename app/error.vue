<script setup lang="ts">
	import type { NuxtError } from "#app";

	const props = defineProps({
		error: Object as () => NuxtError,
	});

	const handleError = () => clearError({ redirect: "/" });
</script>

<template>
	<div class="min-h-screen flex items-center justify-center">
		<div>
			<div v-if="error?.statusCode == 404">
				<NotFound />
			</div>
			<div v-else>
				<h1 class="text-9xl">{{ error?.statusCode }}</h1>
				<UButton class="text-2xl bg-accent-400 hover:bg-secondary-700" @click="handleError">Go back home</UButton>
			</div>
		</div>
	</div>
</template>
