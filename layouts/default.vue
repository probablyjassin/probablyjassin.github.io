<template>
	<div>
		<nav>
			<ul class="flex">
				<li><a href="/">Home</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="/contact">Contact</a></li>
			</ul>
		</nav>
		<main class="">
			<slot></slot>
		</main>
	</div>
</template>

<script>
	export default {
		name: "default",
	};
</script>

<style scoped></style>
