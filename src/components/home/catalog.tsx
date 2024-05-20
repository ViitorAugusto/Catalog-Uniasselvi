import { getAllProducts } from "@/services/product";
import { CatalogInfoProducts } from "./catalog-info-products";


export default async function Catalog() {
  const products = await getAllProducts();
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Nossos Catálogo de Produtos
        </h2>
        <p className="mt-4 text-gray-500 dark:text-gray-400 md:text-lg">
          Descubra a nossa mais recente coleção de produtos de alta qualidade.
        </p>
      </div>

      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <CatalogInfoProducts
            key={product.id}
            description={product.description}
            title={product.title}
            price={product.price}
            img={product.image}
            id={product.id}
          />
        ))}
      </div>
    </section>
  );
}
