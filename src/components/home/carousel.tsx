/**
 * v0 by Vercel.
 * @see https://v0.dev/t/OWHs8YS4ciS
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function CarouselHome() {
  return (
    <section className="container mx-auto py-12 md:py-16 lg:py-20">
      <div className="flex flex-col items-center justify-center gap-8 md:gap-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Our Product Catalog
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 md:text-lg">
            Discover our latest collection of high-quality products.
          </p>
        </div>
        <div className="w-full max-w-6xl">
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <div className="flex flex-col items-center gap-4 rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
                  <Image
                    alt="Product 1"
                    className="aspect-video w-full rounded-lg object-cover"
                    height={300}
                    src="/placeholder.svg"
                    width={400}
                  />
                  <div className="flex flex-col items-center gap-2">
                    <h3 className="text-lg font-semibold">
                      Stylish Sunglasses
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Protect your eyes in style.
                    </p>
                    <p className="text-2xl font-bold">$49.99</p>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex flex-col items-center gap-4 rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
                  <Image
                    alt="Product 2"
                    className="aspect-video w-full rounded-lg object-cover"
                    height={300}
                    src="/placeholder.svg"
                    width={400}
                  />
                  <div className="flex flex-col items-center gap-2">
                    <h3 className="text-lg font-semibold">Leather Backpack</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Durable and stylish.
                    </p>
                    <p className="text-2xl font-bold">$79.99</p>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex flex-col items-center gap-4 rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
                  <Image
                    alt="Product 3"
                    className="aspect-video w-full rounded-lg object-cover"
                    height={300}
                    src="/placeholder.svg"
                    width={400}
                  />
                  <div className="flex flex-col items-center gap-2">
                    <h3 className="text-lg font-semibold">
                      Wireless Headphones
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Immersive sound experience.
                    </p>
                    <p className="text-2xl font-bold">$99.99</p>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex flex-col items-center gap-4 rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
                  <Image
                    alt="Product 4"
                    className="aspect-video w-full rounded-lg object-cover"
                    height={300}
                    src="/placeholder.svg"
                    width={400}
                  />
                  <div className="flex flex-col items-center gap-2">
                    <h3 className="text-lg font-semibold">Minimalist Watch</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Timeless design.
                    </p>
                    <p className="text-2xl font-bold">$59.99</p>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
