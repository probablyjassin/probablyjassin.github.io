<script setup lang="ts">
	import type { NuxtError } from "#app";

	const props = defineProps({
		error: Object as () => NuxtError,
	});

	const handleError = () => clearError({ redirect: "/" });
</script>

<template>
	<div class="min-h-screen flex items-center justify-center">
		<div class="text-center">
			<div v-if="error?.statusCode == 404" class="min-h-screen flex flex-col items-center justify-center">
				<h1 class="text-9xl">404</h1>
				<h1 class="text-4xl">That page does not exist!</h1>
				<a href="https://twitter.com/sawaratsuki1004">
					<NuxtImg src="/images/NotFound.webp" width="600" />
				</a>
				<a href="https://twitter.com/sawaratsuki1004" class="block mr-auto pl-9 text-sm mt-[-10%] mb-14">Illustration by @sawaratsuki1004</a>
				<UButton class="text-2xl bg-primary-600 hover:bg-secondary-700 cursor-pointer">
					<NuxtLink class="bg-transparent text-black no-underline" to="/">Go back home</NuxtLink>
				</UButton>
			</div>
			<div v-else>
				<h1 class="text-9xl">{{ error?.statusCode }}</h1>
				<UButton class="text-2xl bg-accent-400 hover:bg-secondary-700" @click="handleError">Go back home</UButton>
			</div>
		</div>
	</div>
</template>
