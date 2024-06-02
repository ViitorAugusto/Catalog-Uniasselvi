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

  const handleImageChange = (files: FileList) => {
    const newFiles = Array.from(files);
    const updatedImages = [...form.getValues("images"), ...newFiles].slice(
      0,
      4
    );
    const updatedPreviews = updatedImages.map(file =>
      URL.createObjectURL(file)
    );
    setPreview(updatedPreviews);
    form.setValue("images", updatedImages);
  };

  const handleMainImageChange = (file: File, event: React.MouseEvent) => {
    event.stopPropagation();
    form.setValue("mainImage", file);
  };

  const handleRemoveImage = (index: number, event: React.MouseEvent) => {
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
        <FormField
          control={form.control}
          name="images"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Imagens</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={e => {
                    if (e.target.files) {
                      handleImageChange(e.target.files);
                    }
                  }}
                />
              </FormControl>
              <div className="mt-4 grid grid-cols-2 gap-4">
                {preview.map((src, index) => (
                  <div
                    key={index}
                    className={`relative ${
                      form.watch("mainImage") === form.watch("images")[index]
                        ? "border-2 border-blue-500"
                        : ""
                    }`}
                  >
                    <img
                      src={src}
                      alt={`Preview ${index}`}
                      className="max-w-xs"
                    />
                    <Button
                      variant="outline"
                      className="absolute top-2 right-2"
                      onClick={event =>
                        handleMainImageChange(
                          form.getValues("images")[index],
                          event
                        )
                      }
                      type="button"
                    >
                      {form.watch("mainImage") === form.watch("images")[index]
                        ? "Principal"
                        : "Marcar como Principal"}
                    </Button>
                    <Button
                      variant="outline"
                      className="absolute bottom-2 right-2"
                      onClick={event => handleRemoveImage(index, event)}
                      type="button"
                    >
                      Remover
                    </Button>
                  </div>
                ))}
              </div>
              <FormDescription>
                Escolha até 4 imagens para o produto. Clique em uma imagem para
                marcar como principal.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-between items-center">
          <Button variant="link" onClick={() => setStep("products")}>
            Voltar
          </Button>
          <Button type="submit">Continuar</Button>
        </div>
      </form>
    </Form>
  );
};
