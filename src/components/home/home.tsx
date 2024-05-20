import CarouselHome from "./carousel";
import Catalog from "./catalog";
import Hero from "./hero";
import OneProducts from "./one-products";

export const HomeComponent = () => {
  return (
    <div>
      <Hero />
      <Catalog />
      <CarouselHome />
      <OneProducts />
    </div>
  );
};
