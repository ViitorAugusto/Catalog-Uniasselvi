"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCartStore } from "@/context/cart-store";
import { FiShoppingCart } from "react-icons/fi";
import { ItemCart } from "./item-cart";
import { useState } from "react";
import { CheckoutDialog } from "../checkout/checkoutDialog";

export function CartProducts() {
  const [checkout, setCheckout] = useState(false);
  const { cart } = useCartStore(state => state);
  let subtotal = 0;
  for (let item of cart) {
    subtotal += item.quantity * item.product.price;
  }
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="link" size="icon" className="relative">
          <FiShoppingCart />
          {cart.length > 0 && (
            <span className="absolute size-4 bg-red-600 rounded-full -right-1 top-1 ml-2 text-xs text-white">
              {cart.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Carrinho</SheetTitle>
          <SheetDescription>
            Revise os itens do seu carrinho e clique em finalizar compra quando
            estiver pronto.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col my-3">
          {cart.length > 0 ? (
            cart.map((item, index) => <ItemCart key={index} item={item} />)
          ) : (
            <div className="text-center text-gray-600 dark:text-gray-400 py-4">
              Seu carrinho está vazio :(
            </div>
          )}
        </div>
        <div className="grid gap-4 py-4">
          <div className="flex justify-between items-center">
            <div>Subtotal:</div>
            <div>R$ {subtotal.toFixed(2)}</div>
          </div>
        </div>
        <SheetFooter>
          <Button
            type="submit"
            className="w-full"
            onClick={() => setCheckout(true)}
            disabled={cart.length === 0}
          >
            Finalizar Pedido
          </Button>
        </SheetFooter>
        <CheckoutDialog open={checkout} onOpenChange={setCheckout} />
      </SheetContent>
    </Sheet>
  );
}
