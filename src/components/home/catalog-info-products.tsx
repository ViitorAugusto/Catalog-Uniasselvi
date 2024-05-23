import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";

interface CatalogInfoProductsProps {
  title: string;
  description: string;
  price: number;
  img: string;
  id: number;
}

export const CatalogInfoProducts = ({
  description,
  img,
  price,
  title,
  id,
}: CatalogInfoProductsProps) => {
  const pixDiscount = 25;
  const originalPrice = price / (1 - pixDiscount / 100);
  return (
    <div
      className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-lg
      transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105
    "
    >
      <div className="p-4">
        <Link href={`/products/${id}`}>
          <Image
            alt={title}
            className="w-full h-[200px] object-cover"
            height={300}
            src={img}
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width={400}
            priority
            quality={70}
          />

          <h3 className="text-lg font-semibold font-dm_sans truncate hover:underline ">
            {title}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mt-2 truncate-2-lines h-12 ">
            {description}
          </p>
        </Link>
      </div>
      <div className="flex justify-between items-center mt-4 p-4">
        <div>
          <p className="text-lg font-bold">
            {price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <span className="line-through">
              {originalPrice.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
            <span className="text-emerald-700 ml-2 font-bold">
              {pixDiscount}% off
            </span>
          </div>
        </div>
        <Button size="sm">
          Add to Cart <FiShoppingCart className="ml-2" />
        </Button>
      </div>
    </div>
  );
};
