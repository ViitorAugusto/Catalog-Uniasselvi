import { api } from "./api-client";

interface Product {
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

export async function getProductSlug(slug: string): Promise<Product> {
  const result = await api.get(`product/slug/${slug}`).json<Product>();
  return result;
}
