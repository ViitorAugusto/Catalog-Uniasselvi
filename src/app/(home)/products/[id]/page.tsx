// /app/products/[slug]/page.tsx
import { getProductById } from "@/services/getProductById";
import { Product } from "@/types/product";
import DetailsProducsts from "../_components/details-producsts";

interface Props {
  params: {
    id: string;
  };
}

const DetailsProductsPage = async ({ params }: Props) => {
  try {
    const product = await getProductById(Number(params.id));
    return (
      <>
        <DetailsProducsts
          title={product.title}
          description={product.description}
          moreDetails={product.moreDetails}
          price={product.price}
          img={product.image}
          images={product.images}
        />
      </>
    );
  } catch (error) {
    console.error("Error fetching product:", error);
    return <div>Failed to load product details. Please try again later.</div>;
  }
};

export default DetailsProductsPage;
