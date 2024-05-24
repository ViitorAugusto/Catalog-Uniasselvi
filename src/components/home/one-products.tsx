import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function OneProducts() {
  return (
    <section className="py-12 md:py-20">
      <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8 items-start">
        <div>
          <Image
            alt="Product Details"
            className="rounded-lg object-cover"
            height={1000}
            src="/celularg.png"
            style={{
              aspectRatio: "600/600",
              objectFit: "cover",
            }}
            width={1000}
            quality={100}
            priority
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Smartphone Galaxy S40 Ultra 5G
          </h1>
          <p>
            Experimente uma tela de alta resolução e recursos avançados com
            nosso smartphone moderno.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold">R$: 3.999,99</span>
            <Button size="lg">Add to Cart</Button>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">
              Características Principais
            </h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-500 dark:text-gray-400">
              <li>Conectividade Bluetooth 5.0</li>
              <li>Até 30 horas de duração da bateria</li>
              <li>Tecnologia de cancelamento de ruído</li>
              <li>Design confortável e ajustável</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
