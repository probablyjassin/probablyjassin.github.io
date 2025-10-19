<template>
	<UApp>
		<Navbar />
		<main class="min-h-screen px-6">
			<NuxtLoadingIndicator color="pink" error-color="red" />
			<NuxtLayout>
				<NuxtPage />
			</NuxtLayout>
		</main>
		<footer class="mt-auto p-6 bg-[var(--primary-100)]" style="background-color: var(--primary-100)">
			<div class="container mx-auto flex justify-between items-center">
				<div class="flex items-center space-x-4">
					<NuxtPicture src="images/blog-thumbnails/probablyjassin.webp" alt="Footer logo" class="h-10 w-10 rounded-full" />
					<p class="text-[var(--text-900)]">© {{ new Date().getFullYear() }} <span class="whitespace-nowrap">Jässin</span></p>
				</div>
				<div class="flex space-x-6">
					<a title="github" href="https://github.com/probablyjassin" class="text-[var(--text-900)] hover:text-[var(--secondary-400)] transition-colors">
						<Icon name="line-md:github" class="w-6 h-6" />
					</a>
					<a title="email" href="mailto:***REMOVED***" class="text-[var(--text-900)] hover:text-[var(--secondary-400)] transition-colors">
						<Icon name="line-md:email" class="w-6 h-6" />
					</a>
				</div>
			</div>
		</footer>
	</UApp>
</template>

<style>
	/* Page Transitions */
	.page-enter-active,
	.page-leave-active {
		transition: all 0.4s;
	}
	.page-enter-from,
	.page-leave-to {
		opacity: 0;
		filter: blur(1rem);
	}

	/* Layout Transitions */
	.layout-enter-active,
	.layout-leave-active {
		transition: all 0.5s ease;
	}
	.layout-enter-from,
	.layout-leave-to {
		opacity: 0;
		filter: blur(10px);
	}
</style>
