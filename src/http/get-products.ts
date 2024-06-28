import { Product } from "@/types/product";
import { api } from "./api-client";

interface ProductListResponse {
  id: number;
  title: string;
  slug: string;
  price: number;
  image: string;
  images: Array<{ id: number; path: string }>;
  description: string;
  moreDetails: string;
  category?: string;
  featured?: boolean;
}

export async function getProducts(): Promise<ProductListResponse[]> {
  const result = await api
    .get("products")
    .json<{ data: ProductListResponse[] }>();
  const products = result.data;
  console.log("Produtos:", products);
  return products;
}
