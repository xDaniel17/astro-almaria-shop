import { defineCollection, z } from "astro:content";

const items = defineCollection({
    schema: z.object({
        id: z.string(),
        title: z.string(),
        regularPrice: z.number(),
        price: z.number(),
        image: z.array(z.string()),
        description: z.string(),
        material: z.string(),
        sizes: z.array(z.string()),
        creationDate: z.string().transform((str) => new Date(str)), // Transform string to Date
        isSale: z.boolean(),
        isStock: z.boolean(),
    }),
});

const banners = defineCollection({
    schema: z.object({
        id: z.string(),
        title: z.string(),
        description: z.string(),
        startDate: z.string().transform((str) => new Date(str)), // Transform string to Date
        endDate: z.string().transform((str) => new Date(str)),   // Transform string to Date
    }),
});

export const collections = {
    items,
    banners,
};
