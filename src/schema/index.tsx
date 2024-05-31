import { z } from "zod";


export const CreatedProduct = z.object({
  title: z.string(),
  price: z
    .union([z.string(), z.number()])
    .transform(val => Number(val))
    .refine(val => !isNaN(val), { message: "Price must be a number" }),
  image: z.any().optional(),
});
