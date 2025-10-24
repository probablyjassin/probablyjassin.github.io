<template>
	<div class="text-center flex flex-col items-center justify-center self-center">
		<h1 class="text-9xl">404</h1>
		<h1 class="text-4xl">That page does not exist!</h1>
		<NuxtLink to="https://twitter.com/sawaratsuki1004">
			<NuxtImg src="/images/NotFound.webp" width="600" />
		</NuxtLink>
		<a href="https://twitter.com/sawaratsuki1004" class="mr-auto pl-[5%] text-sm mt-[-10%] mb-[10%]">Illustration by @sawaratsuki1004</a>
		<div class="flex gap-6">
			<UButton class="text-2xl bg-primary-600 hover:bg-secondary-700 cursor-pointer">
				<NuxtLink class="bg-transparent text-black no-underline" to="/">Go to home</NuxtLink>
			</UButton>
			<UButton class="text-2xl bg-primary-600 hover:bg-secondary-700 cursor-pointer">
				<NuxtLink class="bg-transparent text-black no-underline" to="/">Check out all blog articles</NuxtLink>
			</UButton>
		</div>
	</div>
</template>
