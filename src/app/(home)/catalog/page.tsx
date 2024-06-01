import { getProductLaravel } from "@/services/getProductsLaravel";
import Image from "next/image";

const Page = async () => {
  const catalog = await getProductLaravel();
   const baseURL = "http://127.0.0.1:8000/storage/"; // Altere para o URL do seu backend
    console.log(catalog);
  return (
    <div className="mt-24 mx-auto container">
      {catalog.map(product => (
        <div key={product.id}>
          <h1>{product.title}</h1>
          <p>{product.slug}</p>
          <p>{product.price}</p>
          <p>{product.description}</p>
          <p>moreDetails :{product.moreDetails}</p>
          <p>{product.category}</p>
          <p>{product.featured}</p>
          {product.image && (
            <Image
              className="rounded-lg w-auto h-auto mx-auto container"
              src={`${baseURL}${product.image}`}
              alt={product.title}
              width={1000}
              height={1000}
              quality={100}
              priority
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Page;
