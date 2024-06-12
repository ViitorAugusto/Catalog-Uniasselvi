import { useProductsStore } from "@/context/products-store";
import { Button } from "../ui/button";
import { Dispatch, SetStateAction } from "react";
import { ProductSteps } from "@/types/products-steps";

type Props = {
  setStep: Dispatch<SetStateAction<ProductSteps>>;
  onClose: () => void;
};

export const StepCreateProduct = ({ setStep, onClose }: Props) => {
  const { infoProducts, images, mainImage } = useProductsStore(state => state);
  console.log(infoProducts);
  console.log(images);
  console.log(mainImage);

  const createProduct = async () => {
    if (!images.length) {
      console.error("Erro: Nenhuma imagem foi selecionada.");
      return;
    }

    const formData = new FormData();
    images.forEach((image, index) => {
      formData.append(`images[${index}]`, image);
    });
    if (mainImage) {
      formData.append("mainImage", mainImage);
    }

    formData.append("title", infoProducts.title);
    formData.append("slug", infoProducts.slug);
    formData.append("price", infoProducts.price.toString());
    formData.append("description", infoProducts.description);
    formData.append("moreDetails", infoProducts.moreDetails);
    formData.append("category", infoProducts.category || "");
    formData.append("featured", infoProducts.featured ? "1" : "0");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/produtos/criar", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(JSON.stringify(errorData));
      }
      const data = await response.json();
      console.log(data);
      onClose();
    } catch (error) {
      console.error("Erro ao criar produto:", error);
    }
  };

  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold">Criar Produto</h1>
        <p className="text-gray-500">Confirme as informações do produto</p>
      </div>
      <div className="flex justify-between items-center my-8">
        <Button variant="link" onClick={() => setStep("imagesProducts")}>
          Voltar
        </Button>
        <Button type="button" onClick={createProduct}>
          Salvar
        </Button>
      </div>
    </div>
  );
};
