<template>
	<UApp>
		<Navbar />
		<NuxtLoadingIndicator color="pink" error-color="red" />
		<UMain class="px-6">
			<NuxtLayout>
				<NuxtPage />
			</NuxtLayout>
		</UMain>
		<UFooter class="bg-[var(--primary-100)]">
			<template #left>
				<NuxtPicture src="images/blog-thumbnails/probablyjassin.webp" alt="Footer logo" class="h-12 w-12 rounded-full" />
				<p class="text-[var(--text-900)]">© {{ new Date().getFullYear() }} <span class="whitespace-nowrap">Jässin</span></p>
			</template>

			<template #right>
				<a title="github" href="https://github.com/probablyjassin" class="text-[var(--text-900)] hover:text-[var(--secondary-400)] transition-colors">
					<Icon name="line-md:github" class="w-6 h-6" />
				</a>
				<a title="email" href="mailto:mail@jaess.in" class="text-(--text-900) hover:text-(--secondary-400) transition-colors">
					<Icon name="line-md:email" class="w-6 h-6" />
				</a>
			</template>
		</UFooter>
	</UApp>
</template>

<style>
	/* Page Transitions */
	.page-enter-active,
	.page-leave-active {
		transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
	}
	.page-enter-from,
	.page-leave-to {
		opacity: 0;
		transform: translateY(-20px) scale(0.95);
	}

	/* Layout Transitions */
	.layout-enter-active,
	.layout-leave-active {
		transition: all 0.4s;
	}

	.layout-enter-from {
		opacity: 0;
		transform: translateY(20px) scale(0.95);
	}

	.layout-leave-to {
		opacity: 0;
		filter: blur(1rem);
	}
</style>
