<template>
	<div class="code-block-wrapper group max-w-[100%]">
		<slot></slot>
		<button class="copy-button" @click="copyCode">
			<img :src="copied ? checkIcon : docIcon" alt="Copy" class="w-6 h-6" />
		</button>
	</div>
</template>

<script setup>
	import { ref } from "vue";
	import checkIcon from "~/assets/images/linemd-check.svg";
	import docIcon from "~/assets/images/linemd-doc.svg";

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
