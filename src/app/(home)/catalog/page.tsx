import Link from "next/link";
import React, { Suspense } from "react";
import { CatalogProducts } from "./_components/catalog-products";
import SkeletonCatalog from "./_components/loading";
import { getProductLaravel } from "@/services/getProductsLaravel";
import { Product } from "@/types/product";

interface CatalogProps {
  products: Product[];
  selectedCategory: string;
}

const Catalog = ({ products = [], selectedCategory }: CatalogProps) => {
  const uniqueCategories = Array.from(
    new Set(products.map(product => product.category))
  );

  return (
    <>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 py-28 min-h-screen">
        <div className="p-6 rounded-lg dark:bg-gray-900">
          <h2 className="text-lg font-semibold mb-4">Categories</h2>
          <div className="grid gap-2">
            {uniqueCategories.map(category => (
              <Link
                key={category}
                href={`?category=${category}`}
                className={`text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 ${
                  selectedCategory === category ? "font-bold" : ""
                }`}
              >
                {category}
              </Link>
            ))}
            <Link
              href="/"
              className={`text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 ${
                selectedCategory === "" ? "font-bold" : ""
              }`}
            >
              All
            </Link>
          </div>
        </div>
        <Suspense fallback={<SkeletonCatalog />}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map(product => (
              <CatalogProducts key={product.id} item={product} />
            ))}
          </div>
        </Suspense>
      </div>
    </>
  );
};

Catalog.getInitialProps = async ({ query }) => {
  const category = query.category || "";
  const products = await getProductLaravel(category);

  return {
    products,
    selectedCategory: category,
  };
};

export default Catalog;
