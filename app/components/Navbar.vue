<template>
	<nav id="navbar" class="h-[40px] mb-[24px] px-6 pl-0">
		<ul class="flex justify-start text-center">
			<template v-for="link in links" :key="link.name">
				<li>
					<NuxtLink :to="link.to" class="flex items-center group no-underline text-[var(--text-900)]">
						<Icon :name="`line-md:${link.linemdicon}`" class="w-8 h-5 text-[var(--text-900)] group-hover:text-[var(--secondary-600)]" />
						<span class="group-hover:text-[var(--secondary-600)]">{{ link.name }}</span>
					</NuxtLink>
				</li>
			</template>
		</ul>
	</nav>
</template>

<script setup>
	const links = [
		{ name: "Home", to: "/", linemdicon: "home" },
		{ name: "Projects", to: "/projects", linemdicon: "document-code" },
		{ name: "Blog", to: "/blog", linemdicon: "text-box" },
		{ name: "Github", to: "https://github.com/probablyjassin", linemdicon: "github-loop", href: true },
	];
</script>

<style scoped>
	@layer components {
		#navbar {
			background-color: var(--primary-300);
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
	}
</style>
