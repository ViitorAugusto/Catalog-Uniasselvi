import { getProductLaravel } from "@/services/getProductsLaravel";
import Image from "next/image";

const Page = async () => {
  const catalog = await getProductLaravel();
  const baseURL = "http://127.0.0.1:8000/storage/"; // Altere para o URL do seu backend
  console.log("Catalog:", catalog);

  return (
    <div className="mt-24 mx-auto container">
      {catalog.map(product => (
        <div key={product.id} className="mb-8">
          <h1 className="text-xl font-bold">{product.title}</h1>
          <p className="text-sm text-gray-600">{product.slug}</p>
          <p className="text-lg font-semibold text-gray-800">
            ${product.price}
          </p>
          <p className="text-gray-700">{product.description}</p>
          <p className="text-gray-700">{product.moreDetails}</p>
          <p className="text-gray-600">{product.category}</p>
          <p className="text-gray-600">
            {product.featured ? "Featured" : "Not Featured"}
          </p>
          {product.image && (
            <Image
              className="rounded-lg w-auto h-auto mx-auto"
              src={`${baseURL}${product.image}`}
              alt={product.title}
              width={500}
              height={500}
              quality={100}
              priority
            />
          )}
          {product.images && product.images.length > 0 && (
            <div className="grid grid-cols-2 gap-4 mt-4">
              {product.images.map(img => (
                <Image
                  key={img.id}
                  className="rounded-lg w-auto h-auto"
                  src={`${baseURL}${img.path}`}
                  alt={product.title}
                  width={250}
                  height={250}
                  quality={100}
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Page;
