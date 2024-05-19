import { Product } from "@/types/product";

export const getAllProducts = async (): Promise<Product[]> => {
    const response = await fetch("http://localhost:3333/products");
    return await response.json();
}