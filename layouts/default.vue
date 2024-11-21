<template>
	<div>
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

		<main class="px-6">
			<slot></slot>
		</main>
	</div>
</template>

<script setup lang="ts">
	import {
		NavigationMenu,
		NavigationMenuContent,
		NavigationMenuItem,
		NavigationMenuLink,
		NavigationMenuList,
		NavigationMenuTrigger,
		navigationMenuTriggerStyle,
	} from "@/components/ui/navigation-menu";
</script>

<style scoped></style>
