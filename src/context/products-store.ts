import { create } from "zustand";

type States = {
  infoProducts: {
    title: string;
    slug: string;
    price: number;
    description: string;
    moreDetails: string;
    category?: string;
    featured?: boolean;
  };
  images: File[];
  mainImage: File | null;
};

type Actions = {
  setInfoProducts: (infoProducts: States["infoProducts"]) => void;
  setImages: (images: File[]) => void;
  setMainImage: (image: File) => void;
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
  images: [],
  mainImage: null,
};

export const useProductsStore = create<States & Actions>()(set => ({
  ...initialState,
  setInfoProducts: infoProducts => set(state => ({ ...state, infoProducts })),
  setImages: images => set(state => ({ ...state, images })),
  setMainImage: mainImage => set(state => ({ ...state, mainImage })),
}));
