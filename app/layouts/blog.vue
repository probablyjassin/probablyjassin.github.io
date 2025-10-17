<template>
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
    <slot></slot>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/Breadcrumb/component";
import type { RouteLocationNormalizedLoaded, Router } from "vue-router";

interface BreadcrumbSegment {
    path: string;
    title: string;
}

/* interface ContentMeta {
    _path?: string;
    title?: string;
    [key: string]: unknown;
} */

const route: RouteLocationNormalizedLoaded = useRoute();
const router: Router = useRouter();

// Type-safe route titles mapping
const routeTitles: Record<string, string> = {
    projects: "Projects",
    blog: "Blog",
};

const { data: contentData } = await useAsyncData(() => queryCollection("content").path(route.path).first());

const breadcrumbSegments = computed<BreadcrumbSegment[]>(() => {
    const cleanPath = route.path.split("?")[0] || "/";
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
</script>