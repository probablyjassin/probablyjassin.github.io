<template>
	<div>
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NuxtLink to="/docs">
						<NavigationMenuLink :class="navigationMenuTriggerStyle()"> Documentation </NavigationMenuLink>
					</NuxtLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Item One</NavigationMenuTrigger>
					<NavigationMenuContent>
						<NavigationMenuLink>Link</NavigationMenuLink>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>

		<main class="px-[2em]">
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
