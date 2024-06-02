import { getProductById } from "@/services/getProductById";
import DetailsProducsts from "../_components/details-producsts";

interface Props {
  params: {
    id: string;
  };
}

const DetailsProductsPage = async ({ params }: Props) => {
  const product = await getProductById(Number(params.id));
  const imagePaths = product.images.map((image) => image.path);
  return (
    <>
      <DetailsProducsts
        title={product.title}
        description={product.description}
        moreDetails={product.moreDetails}
        price={product.price}
        img={product.image}
        images={imagePaths}
      />
    </>
  );
};

export default DetailsProductsPage;
