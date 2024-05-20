import { Product } from "@/types/product";

export async function getProductById(id: number): Promise<Product> {
  const response = await fetch(`http://localhost:3000/products/${id}`);
  console.log(response);
  return await response.json();
}
