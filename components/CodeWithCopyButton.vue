<template>
	<div class="code-block-wrapper group">
		<slot></slot>
		<button class="copy-button" @click="copyCode">
			<Icon :name="copied ? 'line-md:confirm' : 'line-md:document-code'" class="w-8 h-8 text-[var(--accent-50)]" />
		</button>
	</div>
</template>

<script setup>
	import { ref } from "vue";

	const copied = ref(false);

	const copyCode = async () => {
		const code = document.querySelector("pre code")?.textContent;
		if (code) {
			await navigator.clipboard.writeText(code);
			copied.value = true;
			setTimeout(() => {
				copied.value = false;
			}, 2000);
		}
	};
</script>

<style scoped>
	.code-block-wrapper {
		@apply relative;
	}

	.copy-button {
		@apply absolute right-2 w-12 h-12 top-2 p-2 rounded-2xl 
			bg-[var(--accent-400)] text-[var(--text-700)]
			hover:bg-[var(--accent-600)] hover:text-[var(--text-900)]
			transition-colors duration-200 opacity-0 group-hover:opacity-100;
	}
</style>
