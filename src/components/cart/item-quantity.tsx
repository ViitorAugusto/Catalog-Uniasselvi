import { useCartStore } from "@/context/cart-store";
import { Cart } from "@/types/cart";
import { Button } from "../ui/button";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

type CartItemProps = {
  cartItem: Cart;
};

export const CartItemQuantity = ({ cartItem }: CartItemProps) => {
  const { upsertCartItem } = useCartStore(state => state);

  const handleAddToCart = () => {
    upsertCartItem(cartItem.product, 1);
  };

  const handleRemoveFromCart = () => {
    upsertCartItem(cartItem.product, -1);
  };

  return (
    <div className="flex items-center gap-2 ">
      <Button
        variant="outline"
        size="icon"
        className="size-5"
        onClick={handleRemoveFromCart}
      >
        <MinusIcon className="size-6" />
      </Button>
      <span className="text-sm">{cartItem.quantity}</span>
      <Button
        variant="outline"
        size="icon"
        className="size-5"
        onClick={handleAddToCart}
      >
        <PlusIcon className="size-6" />
      </Button>
    </div>
  );
};
