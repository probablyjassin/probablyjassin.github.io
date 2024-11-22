<template>
	<div>
		<nav id="navbar" class="h-[40px] mb-[24px]">
			<ul class="flex justify-start text-center">
				<template v-for="link in links" :key="link.name">
					<li v-if="link.href" class="flex items-center group">
						<Icon :name="`line-md:${link.linemdicon}`"
							class="w-5 h-5 text-[var(--text-900)] group-hover:text-[var(--secondary-400)] mr-2" />
						<a :href="link.to" class="text-[var(--text-900)] group-hover:text-[var(--secondary-400)]">{{
							link.name
						}}</a>
					</li>
					<li v-else class="flex items-center group">
						<Icon :name="`line-md:${link.linemdicon}`"
							class="w-5 h-5 text-[var(--text-900)] group-hover:text-[var(--secondary-400)] mr-2" />
						<NuxtLink :to="link.to"
							class="no-underline text-[var(--text-900)] group-hover:text-[var(--secondary-400)]">
							{{ link.name
							}}</NuxtLink>
					</li>
				</template>
			</ul>
		</nav>

		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink class="cursor-pointer" @click="router.push('/')"> Home </BreadcrumbLink>
				</BreadcrumbItem>
				<template v-for="(location, index) in route.fullPath.split('/').filter(Boolean)" :key="index">
					<BreadcrumbSeparator class="mt-1" />
					<BreadcrumbItem>
						<BreadcrumbLink class="cursor-pointer">
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
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const route = useRoute();
const router = useRouter();

const isMounted = ref(false);
onMounted(() => {
	isMounted.value = true;
});

const links = [
	{ name: "Home", to: "/", linemdicon: "home" },
	{ name: "Projects", to: "/projects", linemdicon: "document-code" },
	{ name: "Blog", to: "/blog", linemdicon: "text-box" },
	{ name: "Github", to: "https://github.com/probablyjassin", linemdicon: "github-loop", href: true }
]
</script>

<style scoped>
#navbar {
	background-color: var(--primary-300);
}

nav ul {
	padding-top: 0.3rem;
}

nav ul li {
	color: var(--text-900);
}

nav ul li:first-child {
	padding-right: 1rem;
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
</style>
