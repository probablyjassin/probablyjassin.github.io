<template>
	<div>
		<NuxtLayout>
			<main>
				<ContentDoc>
					<template #not-found>
						<div class="text-center py-16">
							<h1 class="text-4xl font-bold mb-4">Page Not Found (404)</h1>
							<p class="text-lg mb-4">Sorry, the page you are looking for does not exist.</p>
							<NuxtLink to="/" class="text-primary underline">Go back to the homepage</NuxtLink>
						</div>
					</template>
				</ContentDoc>
			</main>
		</NuxtLayout>
	</div>
</template>
