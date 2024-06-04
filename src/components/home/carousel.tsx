import { Button } from "@/components/ui/button";
import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";
import { getAllProducts } from "@/services/product";
import Image from "next/image";
import Link from "next/link";

export default async function CarouselHome() {
  const products = await getAllProducts();
  const featuredProducts = products.filter(product => product.featured);
  return (
    <section className="container mx-auto py-12 md:py-16 lg:py-20">
      <div className="flex flex-col items-center justify-center gap-8 md:gap-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Nosso Catálogo de Produtos
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 md:text-lg">
            Descubra a nossa mais recente coleção de produtos de alta qualidade.
          </p>
        </div>
        <div className="w-full max-w-6xl">
          <Carousel>
            <CarouselContent>
              {featuredProducts.map(product => (
                <CarouselItem key={product.id}>
                  <div className="flex flex-col items-center gap-4 rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
                    <Image
                      alt={product.title}
                      className="aspect-video w-full rounded-lg object-cover"
                      height={1000}
                      src={product.image}
                      width={1000}
                      quality={100}
                      priority
                    />
                    <div className="flex flex-col items-center gap-2">
                      <h3 className="text-lg font-semibold">{product.title}</h3>
                      <p className="text-2xl font-bold">
                        {product.price.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </p>
                      <Link href={`/products/${product.id}`}>
                        <Button size="sm">Mais detalhes</Button>
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
