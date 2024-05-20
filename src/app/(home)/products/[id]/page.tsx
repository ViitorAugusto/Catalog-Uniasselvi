import { getProductById } from "@/services/getProductById";

interface Props {
  params: {
    id: string;
  };
}

export default async function DetailsProducts({ params }: Props) {
  return (
    <div>
      <h1>Name {params.id}</h1>
    </div>
  );
}
