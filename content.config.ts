import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
	collections: {
		content: defineCollection({
			type: "page",
			source: "*.md",
		}),
		blog: defineCollection({
			type: "page",
			source: "blog/**/*.md",
			schema: z.object({
				date: z.string(),
        		meta: z.object({
          			date: z.string(),
          			image: z.string().optional()
        		}),
      		})
		}),
	},
});
