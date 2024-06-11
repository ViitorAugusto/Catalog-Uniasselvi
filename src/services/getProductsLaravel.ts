import { Product } from "@/types/product";

export const getProductLaravel = async (category = ""): Promise<Product[]> => {
  try {
    const response = await fetch(
      `http://localhost:8000/api/produtos?category=${category}`,
      {
        next: {
          revalidate: 2, // 2 seconds
        },
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const products = await response.json();
    return Array.isArray(products) ? products : [];
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
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
  return await response.json();
};
