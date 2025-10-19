<template>
	<ClientOnly>
		<span>{{ age }}</span>
		<template #fallback>
			<span>..</span>
		</template>
	</ClientOnly>
</template>

<script setup>
	const birthDate = new Date("2006-04-01");
	const today = new Date();
	let age = today.getFullYear() - birthDate.getFullYear();
	const monthDiff = today.getMonth() - birthDate.getMonth();
	if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
		age--;
	}
</script>
