import { getProductById } from "@/services/getProductById";
import { Product } from "@/types/product";

interface Props {
  params: {
    slug: string;
    id: string;
  };
}

export default async function DetailsProducts({ params }: Props) {
  const product = await getProductById(Number(params.id));

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {/* Renderize outros detalhes do produto conforme necessário */}
    </div>
  );
}
