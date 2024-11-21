<template>
	<div>
		<nav>
			<ClientOnly v-if="isMounted">
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NuxtLink to="/">
								<NavigationMenuLink :class="navigationMenuTriggerStyle()" class="no-underline">
									<Icon name="line-md:home" style="color: black" class="w-5 h-5" />
									Home
								</NavigationMenuLink>
							</NuxtLink>
						</NavigationMenuItem>

						<NavigationMenuItem>
							<NuxtLink to="/projects">
								<NavigationMenuLink :class="navigationMenuTriggerStyle()" class="no-underline">
									<Icon name="line-md:document-code" style="color: black" class="w-5 h-5" />
									Projects
								</NavigationMenuLink>
							</NuxtLink>
						</NavigationMenuItem>

						<NavigationMenuItem>
							<NuxtLink to="/blog">
								<NavigationMenuLink :class="navigationMenuTriggerStyle()" class="no-underline">
									<Icon name="line-md:text-box" style="color: black" class="w-5 h-5" />
									Blog
								</NavigationMenuLink>
							</NuxtLink>
						</NavigationMenuItem>

						<NavigationMenuItem>
							<NuxtLink to="https://github.com/probablyjassin">
								<NavigationMenuLink :class="navigationMenuTriggerStyle()">
									<Icon name="line-md:github-loop" style="color: black" class="w-5 h-5" />
									Github
								</NavigationMenuLink>
							</NuxtLink>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</ClientOnly>
			<div v-else class="placeholder"></div>
		</nav>
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href="/"> Home </BreadcrumbLink>
				</BreadcrumbItem>
				<template v-for="(location, index) in route.fullPath.split('/').filter(Boolean)" :key="index">
					<BreadcrumbSeparator class="mt-1" />
					<BreadcrumbItem>
						<BreadcrumbLink :href="`/${route.fullPath.split('/').slice(1).join('/')}`">
							{{ location.charAt(0).toUpperCase() + location.slice(1) }}
						</BreadcrumbLink>
					</BreadcrumbItem>
				</template>
			</BreadcrumbList>
		</Breadcrumb>

		<main class="px-6">
			<slot></slot>
		</main>
	</div>
</template>

<script setup lang="ts">
	import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
	import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

	const route = useRoute();

	const isMounted = ref(false);
	onMounted(() => {
		isMounted.value = true;
	});
</script>

<style scoped>
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
