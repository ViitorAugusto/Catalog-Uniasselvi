import { Product } from "@/types/product";

export async function getProductById(id: number): Promise<Product> {
  const response = await fetch(`http://localhost:3333/products/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    console.error("Failed to fetch product. Status:", response.status);
    console.error("Response:", await response.text());
    throw new Error("Failed to fetch product");
  }

  const contentType = response.headers.get("content-type");
  if (!contentType || !contentType.includes("application/json")) {
    console.error("Expected JSON, but received:", contentType);
    throw new Error("Invalid content type");
  }

  return await response.json();
}
