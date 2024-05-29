import { create } from "zustand";

type States = {
  name: string;
  address: {
    street: string;
    number: string;
    complement?: string | undefined;
    city: string;
    state: string;
    destric: string;
  };
};

type Actions = {
  setName: (name: string) => void;
  setAddress: (address: States["address"]) => void;
};

const initialState: States = {
  name: "",
  address: {
    street: "",
    number: "",
    city: "",
    state: "",
    destric: "",
    complement: "",
  },
};

export const useCheckoutStore = create<States & Actions>()(set => ({
  ...initialState,
  setName: name => set(state => ({ ...state, name })),
  setAddress: address => set(state => ({ ...state, address })),
}));
