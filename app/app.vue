<template>
	<UApp>
		<nav id="navbar" class="h-[40px] mb-[24px]">
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
		<main class="min-h-screen px-6">
			<NuxtLayout>
				<NuxtPage />
			</NuxtLayout>
		</main>
		<footer class="mt-auto p-6" style="background-color: var(--primary-100)">
			<div class="container mx-auto flex justify-between items-center">
				<div class="flex items-center space-x-4">
					<NuxtPicture src="images/blog-thumbnails/probablyjassin.webp" alt="Footer logo" class="h-10 w-10 rounded-full" />
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
	@import "./assets/css/navbar.css";
</style>

<style lang="css">
	@layer base {
		a {
			text-decoration: underline;
			color: var(--primary-500);
		}
		a:hover {
			color: var(--secondary-500);
		}
	}
</style>
