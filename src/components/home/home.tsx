import CarouselHome from "./carousel";
import Catalog from "./catalog";
import ExploreCollections from "./explore-collections";
import Hero from "./hero";
import OneProducts from "./one-products";

export const HomeComponent = () => {
  return (
    <div>
      <Hero />
      <Catalog />
      <ExploreCollections />
      <CarouselHome />
      <OneProducts />
    </div>
  );
};
