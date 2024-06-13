import { Product } from "@/types/product";

export const getProductLaravel = async (): Promise<Product[]> => {
  const response = await fetch("http://localhost:8000/api/produtos", {
    next: {
      revalidate: 2, // 2 seconds
    },
  });
  console.log("response", response);
  return await response.json();
};

export const getProductBySlug = async (slug: string): Promise<Product> => {
  const response = await fetch(
    `http://localhost:8000/api/produtos/por-slug/${slug}`,
    {
      next: {
        revalidate: 2, // 2 seconds
      },
    }
    );
  console.log("response", response.body);
  return await response.json();
};
