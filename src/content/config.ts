import { defineCollection, z } from "astro:content";

const items = defineCollection({
    schema: z.object({
        id: z.string(),
        title: z.string(),
        regularPrice: z.number(),
        price: z.number(),
        image: z.string(),
        description: z.string(),
        material: z.string(),
        sizes: z.array(z.enum(["M", "L", "XL"])),
        creationDate: z.string().transform((str) => new Date(str)),
        isSale: z.boolean(),
        isStock: z.boolean(),
    }),
});

export const collections = {
    items,
};