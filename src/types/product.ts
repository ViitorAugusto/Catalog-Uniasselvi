export interface Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  image: string;
  images: Array<{ id: number; path: string }>;
  description: string;
  moreDetails: string;
  category?: string;
  featured?: boolean;
}
