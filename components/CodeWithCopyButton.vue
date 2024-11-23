<template>
	<div class="code-block-wrapper group">
		<slot></slot>
		<button class="copy-button" @click="copyCode" :title="copied ? 'Copied!' : 'Copy code'">
			<Icon :name="copied ? 'line-md:check' : 'line-md:content-copy'" class="w-4 h-4" />
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
