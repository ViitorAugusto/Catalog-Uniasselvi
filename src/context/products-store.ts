import { create } from "zustand";


type States = {
  infoProducts: {
    title: string;
    slug: string;
    price: number;
    description: string;
    moreDetails: string;
    category?: string;
    featured? : boolean;
  };
  image : string;
};

type Actions = {
  setInfoProducts: (infoProducts: States["infoProducts"]) => void;
  setImage: (image: string) => void;
};


const initialState: States = {
  infoProducts: {
    title: "",
    slug: "",
    price: 0,
    description: "",
    moreDetails: "",
    category: "",
    featured: false,
  },
  image: "",
};

export const useProductsStore = create<States & Actions>()(set => ({
    ...initialState,
    setInfoProducts: infoProducts => set(state => ({ ...state, infoProducts })),
    setImage: image => set(state => ({ ...state, image })),
}));