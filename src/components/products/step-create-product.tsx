import { useProductsStore } from "@/context/products-store";
import { Button } from "../ui/button";
import { Dispatch, SetStateAction } from "react";
import { ProductSteps } from "@/types/products-steps";
import { Product } from "@/types/product";
import { toast } from "../ui/use-toast";
import { api } from "@/http/api-client";

type Props = {
  setStep: Dispatch<SetStateAction<ProductSteps>>;
  onClose: () => void;
  onProductCreated?: (newProduct: Product) => void;
};

export const StepCreateProduct = ({
  setStep,
  onClose,
  onProductCreated,
}: Props) => {
  const { infoProducts, images, mainImage } = useProductsStore(state => state);

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
      const response = await api.post("products/new-product", {
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        const newProduct: Product = await response.json();
        onProductCreated?.(newProduct);
        onClose();
      } else {
        console.error("Erro ao criar produto:", response.statusText);
      }
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
