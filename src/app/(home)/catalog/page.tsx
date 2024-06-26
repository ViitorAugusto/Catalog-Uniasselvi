import Link from "next/link";
import React, { Suspense } from "react";
import { CatalogProducts } from "./_components/catalog-products";
import SkeletonCatalog from "./_components/loading";
import { getProducts } from "@/http/get-products";

const Catalog = async () => {
  const products = await getProducts();
  return (
    <>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 py-28 min-h-screen ">
        <div className="p-6 rounded-lg dark:bg-gray-900">
          <h2 className="text-lg font-semibold mb-4">Categorias</h2>
          <div className="grid gap-2">
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              prefetch={false}
            >
              Eletrônicos
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              prefetch={false}
            >
              Hardware
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              prefetch={false}
            >
              Periféricos
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              prefetch={false}
            >
              Computadores
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              prefetch={false}
            >
              Games
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              prefetch={false}
            >
              Celular & Smartphone
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              prefetch={false}
            >
              Espaço Gamer
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

export default Catalog;
