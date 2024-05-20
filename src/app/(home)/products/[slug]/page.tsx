import { getProductById } from "@/services/getProductById";

interface Props {
  params: {
    slug: string;
    id: string;
  };
}

export default async function DetailsProducts({ params }: Props) {
  return (
    <div>
      <h1>Name {params.slug}</h1>
    </div>
  );
}
