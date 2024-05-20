interface Props {
  params: {
    id: string;
    title: string;
  };
}

export default function DetailsProducts({ params }: Props) {
  return (
    <div>
      <h1>Name {params.id}</h1>
      <h2>Title {params.title}</h2>
    </div>
  );
}
