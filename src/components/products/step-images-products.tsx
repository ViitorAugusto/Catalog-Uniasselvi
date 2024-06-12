import { useProductsStore } from "@/context/products-store";
import { ProductSteps } from "@/types/products-steps";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { BiSolidCloudUpload } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";

type Props = {
  setStep: Dispatch<SetStateAction<ProductSteps>>;
};

const formSchema = z.object({
  images: z
    .array(z.instanceof(File))
    .min(1, "Você deve selecionar pelo menos uma imagem")
    .max(4, "Você pode selecionar no máximo 4 imagens"),
  mainImage: z.instanceof(File).optional(),
});

export const StepImagesProducts = ({ setStep }: Props) => {
  const { setImages, setMainImage, images, mainImage } = useProductsStore();
  const [preview, setPreview] = useState<string[]>([]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      images: [],
      mainImage: undefined,
    },
  });

  const onSubmit = (value: z.infer<typeof formSchema>) => {
    setImages(value.images);
    setMainImage(value.mainImage || value.images[0]);
    setStep("createProduct");
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newFiles = Array.from(event.target.files);
      const updatedImages = [...form.getValues("images"), ...newFiles].slice(
        0,
        4
      );
      const updatedPreviews = updatedImages.map(file =>
        URL.createObjectURL(file)
      );
      setPreview(updatedPreviews);
      form.setValue("images", updatedImages);
    }
  };

  const handleMainImageChange = (file: File, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    form.setValue("mainImage", file);
  };

  const handleRemoveImage = (index: number, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    const updatedImages = form
      .getValues("images")
      .filter((_, i) => i !== index);
    const updatedPreviews = updatedImages.map(file =>
      URL.createObjectURL(file)
    );
    setPreview(updatedPreviews);
    form.setValue("images", updatedImages);
    if (form.getValues("mainImage") === form.getValues("images")[index]) {
      form.setValue("mainImage", updatedImages[0] || undefined);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex flex-col items-center justify-center w-full max-w-xl mx-auto space-y-4">
          <label className="flex flex-col items-center justify-center w-full h-24 p-6 border-2 border-dashed border-gray-300 rounded-lg  hover:bg-gray-100 transition-colors cursor-pointer">
            <BiSolidCloudUpload className="w-10 h-10 text-gray-500" />
            <p className="mt-2 text-sm font-medium text-gray-500">
              Solte os arquivos aqui ou clique para fazer upload
            </p>
            <Input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </label>
          <div className="grid grid-cols-3 gap-4 w-full h-full ">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                className="relative group shadow-xl border border-gray-400 rounded-lg"
                key={index}
              >
                {preview[index] ? (
                  <Image
                    src={preview[index]}
                    alt={`Uploaded Image ${index}`}
                    width={300}
                    height={300}
                    quality={80}
                    className="object-cover w-full h-full rounded-lg shadow-md transition-transform transform group-hover:scale-105 "
                  />
                ) : (
                  <Image
                    src="/placeholder.svg"
                    alt="Placeholder"
                    className="object-cover rounded-lg shadow-sm "
                    width={300}
                    height={300}
                    quality={50}
                    priority
                  />
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-1 right-1 bg-white/80 hover:bg-white/100 transition-colors border border-gray-300 "
                  onClick={event => handleRemoveImage(index, event)}
                  style={{ visibility: preview[index] ? "visible" : "hidden" }}
                >
                  <IoMdClose className="w-4 h-4 text-red-500 " />
                </Button>
                {preview[index] && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`absolute top-1 left-1 border border-gray-300 ${
                      form.watch("mainImage") ===
                      form.getValues("images")[index]
                        ? "bg-slate-900 text-gray-500 border-none"
                        : "bg-gray-400 text-gray-500"
                    }`}
                    onClick={event =>
                      handleMainImageChange(
                        form.getValues("images")[index],
                        event
                      )
                    }
                  >
                    {form.watch("mainImage") ===
                    form.getValues("images")[index] ? (
                      <FaCheck className="w-4 h-4 text-primary" />
                    ) : (
                      <FaCheck className="w-4 h-4 text-primary" />
                    )}
                  </Button>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center w-full">
            <Button variant="link" onClick={() => setStep("products")}>
              Voltar
            </Button>
            <Button variant="outline" onClick={() => form.reset()}>
              Limpar
            </Button>
            <Button type="submit">Continuar</Button>
          </div>
        </div>
      </form>
    </Form>
  );
};
