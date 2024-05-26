import { z } from "zod";


export const CreatedProduct = z.object({
    title: z.string(),
    slug: z.string(),
    price: z.string(),
    image: z.string(),
    description: z.string(),
    moreDetails: z.string(),
    featured: z.boolean(),
});