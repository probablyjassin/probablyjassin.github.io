<template>
	<UApp>
		<nav id="navbar" class="h-[40px] mb-[24px]">
			<ul class="flex justify-start text-center">
				<template v-for="link in links" :key="link.name">
					<li>
						<NuxtLink :to="link.to" class="flex items-center group no-underline text-[var(--text-900)]">
							<Icon :name="`line-md:${link.linemdicon}`" class="w-5 h-5 text-[var(--text-900)] group-hover:text-[var(--secondary-400)] mr-5" />
							<span class="group-hover:text-[var(--secondary-400)]">{{ link.name }}</span>
						</NuxtLink>
					</li>
				</template>
			</ul>
		</nav>
		<div>
			<p class="text-[var(--secondary-300)]">test</p>
			<NuxtPage />
		</div>
		<footer class="mt-auto p-6 bg-[var(--primary-100)]">
			<div class="container mx-auto flex justify-between items-center">
				<div class="flex items-center space-x-4">
					<p>pic</p>
					<!-- <NuxtPicture src="/blog-previews/probablyjassin.webp" alt="Footer logo" class="h-10 w-10 rounded-full" /> -->
					<p class="text-[var(--text-900)]">© 2025 <span class="whitespace-nowrap">Jässin</span></p>
				</div>
				<div class="flex space-x-6">
					<a title="github" href="https://github.com/probablyjassin" class="text-[var(--text-900)] hover:text-[var(--secondary-400)] transition-colors">
						<Icon name="line-md:github" class="w-6 h-6" />
					</a>
					<a title="email" href="mailto:jassin@aouani.de" class="text-[var(--text-900)] hover:text-[var(--secondary-400)] transition-colors">
						<Icon name="line-md:email" class="w-6 h-6" />
					</a>
				</div>
			</div>
		</footer>
	</UApp>
</template>

<script setup lang="ts">
	const links = [
		{ name: "Home", to: "/", linemdicon: "home" },
		{ name: "Projects", to: "/projects", linemdicon: "document-code" },
		{ name: "Blog", to: "/blog", linemdicon: "text-box" },
		{ name: "Github", to: "https://github.com/probablyjassin", linemdicon: "github-loop", href: true },
	];
</script>

<style scoped lang="postcss">
	.main-content {
		padding-left: 1.5em;
	}

	#navbar {
		background-color: var(--primary-300);
	}

	ul {
		list-style-type: none;
	}

	nav ul {
		padding-top: 0.3rem;
	}

	nav ul li:first-child {
		padding-right: 1rem;
	}

	nav ul li:not(:first-child) {
		padding-left: 1rem;
		padding-right: 1rem;
	}

	.placeholder {
		height: 40px;
		margin-bottom: 24px;
		background-color: #f0f0f0;
		animation: fadeInOut 0.5s infinite;
	}

	@keyframes fadeInOut {
		0%,
		100% {
			opacity: 0.5;
		}

		50% {
			opacity: 1;
		}
	}

	#navbar {
		background-color: var(--primary-300);
	}

	ul {
		list-style-type: none;
	}

	nav ul {
		padding-top: 0.3rem;
	}

	#navbar ul li {
		color: var(--text-900);
	}

	nav ul li:first-child {
		padding-right: 1rem;
	}

	nav ul li:not(:first-child) {
		padding-left: 1rem;
		padding-right: 1rem;
	}

	.placeholder {
		height: 40px;
		margin-bottom: 24px;
		background-color: #f0f0f0;
		animation: fadeInOut 0.5s infinite;
	}

	@keyframes fadeInOut {
		0%,
		100% {
			opacity: 0.5;
		}

		50% {
			opacity: 1;
		}
	}
</style>
