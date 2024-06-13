"use client";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { toast } from "@/components/ui/use-toast";
import { useCartStore } from "@/context/cart-store";
import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";

interface CatalogProductsProps {
  item: Product;
}

export const CatalogProducts = ({ item }: CatalogProductsProps) => {
  const baseURL = "http://127.0.0.1:8000/storage/";

  const imageUrl = item.image.startsWith("http")
    ? item.image
    : `${baseURL}${item.image}`;

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
    <div className="h-80 rounded-lg dark:bg-gray-950 shadow-2xl  border border-gray-100">
      <Link href={`/catalog/${item.slug}`}>
        <Image
          className="rounded-t-lg w-full h-48 object-cover"
          src={imageUrl}
          alt={item.title}
          width={400}
          height={300}
          quality={80}
          priority
        />
        <div className="p-4 flex flex-col gap-2">
          <h3 className="font-medium text-base truncate">{item.title}</h3>
          <p className="text-gray-500 text-sm">${item.price}</p>
        </div>
      </Link>
      <div className="px-4">
        <Button
          size="sm"
          onClick={handleAddToCart}
          className="uppercase w-full "
        >
          Comprar <FiShoppingCart className="ml-2" />
        </Button>
      </div>
    </div>
  );
};
