import { getProductById } from "@/services/getProductById";

interface Props {
  params: {
    id: string;
    title: string;
  };
}

export default async function DetailsProducts({ params }: Props) {
  const detailsProducts = await getProductById(Number(params.id));
  console.log(detailsProducts);
  return (
    <div>
      <h1>Name {params.id}</h1>
      <h2>Title {params.title}</h2>
    </div>
  );
}
