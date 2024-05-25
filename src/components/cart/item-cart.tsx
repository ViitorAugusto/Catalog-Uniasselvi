import { Cart } from "@/types/cart";
import { CartItemQuantity } from "./item-quantity";

type CartItem = {
  item: Cart;
};

export const ItemCart = ({ item }: CartItem) => {
  return (
    <div className="flex items-center gap-5 my-0.5">
      <div className="w-20 overflow-hidden rounded-md">
        <img
          src={item.product.image}
          alt={item.product.title}
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="flex-1">
        <p className="truncate-2-lines text-xs text-gray-600 hover:text-gray-900 dark:text-gray-400 ">
          {item.product.title}
        </p>
        <p className="text-xs text-gray-600 hover:text-gray-900 dark:text-gray-400 ">
          {item.product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
      <div>
        <CartItemQuantity cartItem={item} key={item.product.id} />
      </div>
    </div>
  );
};
