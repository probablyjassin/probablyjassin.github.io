<template>
	<div>
		<nav>
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
		</nav>
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href="/"> Home </BreadcrumbLink>
				</BreadcrumbItem>
				<template v-for="(location, index) in route.fullPath.split('/').filter(Boolean)" :key="index">
					<BreadcrumbSeparator class="mt-1" />
					<BreadcrumbItem>
						<BreadcrumbLink
							:href="`/${route.fullPath
								.split('/')
								.slice(1, index + 1)
								.join('/')}`">
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
</script>

<style scoped></style>
