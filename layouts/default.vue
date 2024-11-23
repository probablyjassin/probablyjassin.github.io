<template>
	<div>
		<nav id="navbar" class="h-[40px] mb-[24px]">
			<ul class="flex justify-start text-center">
				<template v-for="link in links" :key="link.name">
					<li v-if="link.href">
						<a :href="link.to" class="flex items-center group text-[var(--text-900)] group-hover:text-[var(--secondary-400)]">
							<Icon :name="`line-md:${link.linemdicon}`" class="w-5 h-5 text-[var(--text-900)] group-hover:text-[var(--secondary-400)] mr-2" />
							<span class="group-hover:text-[var(--secondary-400)]">{{ link.name }}</span>
						</a>
					</li>
					<li v-else>
						<NuxtLink :to="link.to" class="flex items-center group no-underline text-[var(--text-900)]">
							<Icon :name="`line-md:${link.linemdicon}`" class="w-5 h-5 text-[var(--text-900)] group-hover:text-[var(--secondary-400)] mr-2" />
							<span class="group-hover:text-[var(--secondary-400)]">{{ link.name }}</span>
						</NuxtLink>
					</li>
				</template>
			</ul>
		</nav>

		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink class="cursor-pointer" @click="router.push('/')"> Home </BreadcrumbLink>
				</BreadcrumbItem>
				<template v-for="(segment, index) in breadcrumbSegments" :key="index">
					<BreadcrumbSeparator class="mt-1" />
					<BreadcrumbItem>
						<BreadcrumbLink class="cursor-pointer" @click="router.push(segment.path)">
							{{ segment.title }}
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
	import { computed } from "vue";
	import type { RouteLocationNormalizedLoaded, Router } from "vue-router";

	interface BreadcrumbSegment {
		path: string;
		title: string;
	}

	interface ContentMeta {
		_path?: string;
		title?: string;
		[key: string]: unknown;
	}

	const route: RouteLocationNormalizedLoaded = useRoute();
	const router: Router = useRouter();

	// Type-safe route titles mapping
	const routeTitles: Record<string, string> = {
		projects: "Projects",
		blog: "Blog",
	};

	// Type-safe content query
	const { data: contentData } = await useAsyncData<ContentMeta | null>("content", async () => {
		if (route.path.startsWith("/blog/")) {
			const content = await queryContent<ContentMeta>().where({ _path: route.path }).findOne();
			return content;
		}
		return null;
	});

	const breadcrumbSegments = computed<BreadcrumbSegment[]>(() => {
		const cleanPath = route.path.split("?")[0];
		const segments = cleanPath.split("/").filter(Boolean);

		let currentPath = "";
		return segments.map((segment): BreadcrumbSegment => {
			currentPath += `/${segment}`;

			// For blog articles
			if (currentPath.startsWith("/blog/")) {
				if (segment === "blog") {
					return {
						path: currentPath,
						title: routeTitles[segment] ?? "Blog",
					};
				}
				// For actual blog posts, use content title or clean up filename
				return {
					path: currentPath,
					title:
						contentData.value?.title ??
						segment
							.split("-")
							.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
							.join(" "),
				};
			}

			// Default handling for other routes
			return {
				path: currentPath,
				title: routeTitles[segment] ?? segment.charAt(0).toUpperCase() + segment.slice(1),
			};
		});
	});

	const isMounted = ref(false);
	onMounted(() => {
		isMounted.value = true;
	});

	const links = [
		{ name: "Home", to: "/", linemdicon: "home" },
		{ name: "Projects", to: "/projects", linemdicon: "document-code" },
		{ name: "Blog", to: "/blog", linemdicon: "text-box" },
		{ name: "Github", to: "https://github.com/probablyjassin", linemdicon: "github-loop", href: true },
	];
</script>

<style scoped>
	#navbar {
		background-color: var(--primary-300);
	}

	ul {
		list-style-type: none;
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
