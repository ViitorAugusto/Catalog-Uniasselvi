import DetailsProducsts from "../../products/_components/details-producsts";
import { getProductSlug } from "@/http/get-product-slug";

interface Props {
  params: {
    slug: string;
  };
}

const DetailsProductsPage = async ({ params }: Props) => {
  const product = await getProductSlug(params.slug);
  const baseURL = "http://127.0.0.1:8000/storage/";
  const imagePaths =
    product && product.images
      ? product.images.map(image =>
          image.path.startsWith("/") || image.path.startsWith("http")
            ? image.path
            : `${baseURL}${image.path}`
        )
      : [];

  return (
    <>
      <DetailsProducsts
        title={product?.title}
        description={product?.description}
        moreDetails={product?.moreDetails}
        price={product?.price}
        img={
          product?.image.startsWith("/") || product?.image.startsWith("http")
            ? product?.image
            : `${baseURL}${product?.image}`
        }
        images={imagePaths}
      />
    </>
  );
};

export default DetailsProductsPage;
