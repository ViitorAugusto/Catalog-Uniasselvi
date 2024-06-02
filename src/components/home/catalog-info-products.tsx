"use client";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/context/cart-store";
import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

type CartItem = {
  item: Product;
};

export const CatalogInfoProducts = ({ item }: CartItem) => {
  const { upsertCartItem } = useCartStore(state => state);

  const handleAddToCart = () => {
    upsertCartItem(item, 1);
    toast({
      title: "Produto adicionado ao carrinho",
      description: `${item.title} foi adicionado ao carrinho.`,
      action: (
        <ToastAction altText="fechar" className="">
          Fechar
        </ToastAction>
      ),
    });
  };

  return (
    <div
      className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-lg 
      transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105
    "
    >
      <div className="p-4">
        <Link href={`/products/${item.id}`}>
          <Image
            alt={item.title}
            className="w-full h-[200px] object-cover"
            height={300}
            src={item.image}
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width={400}
            priority
            quality={70}
          />

          <h3 className="text-lg font-semibold font-dm_sans truncate hover:underline ">
            {item.title}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mt-2 truncate-2-lines h-12 ">
            {item.description}
          </p>
        </Link>
      </div>
      <div className="flex justify-between items-center mt-4 p-4">
        <div>
          <p className="text-lg font-bold">
            {item.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
        <Button size="sm" onClick={handleAddToCart}>
          Comprar  <FiShoppingCart className="ml-2" />
        </Button>
      </div>
    </div>
  );
};
