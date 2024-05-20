import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

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
  id
}: CatalogInfoProductsProps) => {
  return (
    <div className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-lg">
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
        <div className="p-4">
          <h3 className="text-lg font-semibold font-dm_sans truncate">
            {title}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mt-2 truncate-2-lines h-12 ">
            {description}
          </p>
          <div className="flex justify-between items-center mt-4">
            <p className="text-xl font-bold ">
              {price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
            <Button size="sm">Add to Cart</Button>
          </div>
        </div>
      </Link>
    </div>
  );
};
