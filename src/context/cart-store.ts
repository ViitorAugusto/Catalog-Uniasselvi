import { Cart } from "@/types/cart";
import { Product } from "@/types/product";
import { create } from "zustand";

type States = {
  cart: Cart[];
  isDrawerOpen: boolean;
};

type Actions = {
  upsertCartItem: (product: Product, quantity: number) => void;
  resetCart: () => void;
  toggleDrawer: (open: boolean) => void;
};

const initialState: States = {
  cart: [],
  isDrawerOpen: false,
};

export const useCartStore = create<States & Actions>()(set => ({
  ...initialState,
  upsertCartItem: (product, quantity) =>
    set(state => {
      let newCart = state.cart;
      let existingCartItemIndex = newCart.findIndex(
        cartItem => cartItem.product.id === product.id
      );
      if (existingCartItemIndex < 0) {
        newCart.push({ product, quantity: 0 });
        existingCartItemIndex = newCart.findIndex(
          cartItem => cartItem.product.id === product.id
        );
      }

      newCart[existingCartItemIndex].quantity += quantity;

      if (newCart[existingCartItemIndex].quantity <= 0) {
        newCart = newCart.filter(
          cartItem => cartItem.product.id !== product.id
        );
      }
      return { ...state, cart: newCart };
    }),
  resetCart: () => set(() => ({ cart: [], isDrawerOpen: false })),
  toggleDrawer: open => set(() => ({ isDrawerOpen: open })),
}));
