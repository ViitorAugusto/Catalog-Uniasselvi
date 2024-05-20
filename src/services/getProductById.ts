import { Product } from "@/types/product";

export async function getProductById(id: number): Promise<Product> {
  const response = await fetch(`http://localhost:3000/products/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }
  return await response.json();
}
