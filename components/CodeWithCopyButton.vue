<template>
	<div class="code-block-wrapper group max-w-[100%]">
		<slot></slot>
		<button class="copy-button" @click="copyCode">
			<Icon :name="copied ? 'line-md:confirm' : 'line-md:document-code'" class="w-6 h-6 text-[var(--accent-50)]" />
		</button>
	</div>
</template>

<script setup>
	import { ref } from "vue";

	const copied = ref(false);

	const copyCode = async () => {
		const code = document.querySelector("pre code")?.textContent;
		if (code) {
			try {
				if (navigator.clipboard && navigator.clipboard.writeText) {
					await navigator.clipboard.writeText(code);
				} else {
					// Fallback for older browsers
					const textArea = document.createElement("textarea");
					textArea.value = code;
					textArea.style.position = "fixed";
					textArea.style.opacity = "0";
					document.body.appendChild(textArea);
					textArea.select();
					document.execCommand("copy");
					document.body.removeChild(textArea);
				}
			} catch (err) {
				console.error("Failed to copy:", err);
			}
			copied.value = true;
			setTimeout(() => {
				copied.value = false;
			}, 2000);
		}
	};
</script>

<style scoped>
	.code-block-wrapper {
		@apply relative inline-block;
	}

	.copy-button {
		@apply absolute right-2 w-10 h-10 top-2 p-2 rounded-2xl
			bg-[var(--accent-500)] text-[var(--text-700)]
			hover:bg-[var(--accent-300)] hover:text-[var(--text-900)]
			transition-colors duration-200 opacity-0 group-hover:opacity-100;
	}
</style>
