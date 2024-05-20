// /app/products/[slug]/page.tsx
import { getProductById } from "@/services/getProductById";
import { Product } from "@/types/product";

interface Props {
  params: {
    slug: string;
    id: string;
  };
}

const DetailsProducts = async ({ params }: Props) => {
  try {
    const product = await getProductById(Number(params.id));

    return (
      <div>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        {/* Renderize outros detalhes do produto conforme necessário */}
      </div>
    );
  } catch (error) {
    console.error("Error fetching product:", error);
    return <div>Failed to load product details. Please try again later.</div>;
  }
};

export default DetailsProducts;
