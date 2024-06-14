import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Specifications } from "./specifications";
import { CustomerReviews } from "./customer-reviews";

interface DetailsProductsProps {
  title: string;
  description: string;
  price: number; // O preço deve ser passado em centavos
  img: string;
  moreDetails: string;
  images: string[];
}

export default function DetailsProducts({
  title,
  description,
  moreDetails,
  price,
  img,
  images,
}: DetailsProductsProps) {
  const defaultImage = "/placeholder.svg";
  const pixDiscount = 25; // 25% de desconto
  const installmentDiscount = 15; // 15% de desconto
  const originalPrice = price / (1 - pixDiscount / 100);
  const installmentPrice = price / (1 - installmentDiscount / 100);

  return (
    <div className="flex flex-col min-h-screen mt-12">
      <main className="flex-1">
        <section className="container mx-auto px-4 md:px-6 py-6 md:py-12">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="grid gap-4">
              <Image
                alt={title}
                className="object-cover w-full rounded-lg bg-cover bg-center"
                height={1200}
                src={img}
                style={{
                  aspectRatio: "600/600",
                  objectFit: "cover",
                }}
                width={1200}
                quality={100}
                priority
              />
              <div className="grid grid-cols-3 gap-4">
                <Image
                  alt="Produto"
                  className="object-cover w-full rounded-lg"
                  height={200}
                  src={images[0] || defaultImage}
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width={200}
                  quality={80}
                  priority
                />
                <Image
                  alt="Produto"
                  className="object-cover w-full rounded-lg"
                  height={200}
                  src={images[1] || defaultImage}
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width={200}
                  quality={80}
                  priority
                />
                <Image
                  alt="Produto"
                  className="object-cover w-full rounded-lg"
                  height={200}
                  src={images[2] || defaultImage}
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width={200}
                  quality={80}
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                {title}
                <div className="flex items-center gap-2 mt-2">
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  <span className="text-gray-500 dark:text-gray-400 text-base">
                    (4.2)
                  </span>
                </div>
              </h1>
              <p className="text-gray-500 dark:text-gray-400 mt-4 text-xs">
                {description}
              </p>
              <p className="text-gray-500 dark:text-gray-400 mt-4 text-lg">
                {moreDetails}
              </p>

              <div className="mt-8 grid gap-4">
                <div className="grid gap-2">
                  <Label className="text-base" htmlFor="quantidade">
                    Quantidade
                  </Label>
                  <Select defaultValue="1">
                    <SelectTrigger className="w-24">
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col gap-2 lg:flex-row">
                  <Button size="lg">
                    Adicionar ao carrinho <FiShoppingCart className="ml-2" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Salvar como favoritos <FaRegHeart className="ml-2" />
                  </Button>
                </div>
                <div>
                  <div className="text-3xl font-bold ">
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(price / 100)}
                    <span className="line-through text-gray-500 dark:text-gray-400 text-lg mx-2">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(originalPrice / 100)}
                    </span>{" "}
                    <span className="text-emerald-700 text-base">
                      {pixDiscount}% off
                    </span>
                  </div>
                  <div className="text-base text-gray-500 dark:text-gray-400">
                    ou{" "}
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(installmentPrice / 100)}{" "}
                    em até 12x s/ juros de{" "}
                    <span className="text-gray-500 dark:text-gray-400 text-lg font-bold">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(installmentPrice / 12 / 100)}{" "}
                    </span>
                    <span className="text-emerald-700 text-base font-bold">
                      {installmentDiscount}% off
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="container mx-auto my-10">
        <Specifications />
        <CustomerReviews />
      </div>
    </div>
  );
}

function StarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
