export interface Product {
  map(arg0: (product: any) => import("react").JSX.Element): import("react").ReactNode;
  id: number;
  title: string;
  slug: string;
  price: number;
  image: string;
  images: string[];
  description: string;
  moreDetails: string;
  featured: boolean;
}
