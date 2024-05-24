import { Product } from "@/types/product";

export const getAllProducts = async (): Promise<Product[]> => {
  const response = await fetch("http://localhost:3333/products", {
    next: {
      revalidate: 4, // 4 seconds
    },
  });
  return await response.json();
};

export const getProductPage = async (page = 1, limit = 8): Promise<Product> => {
  const response = await fetch(`/api/products?_page=${page}&_limit=${limit}`);
  return await response.json();
};
