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
  image: z
    .instanceof(File)
    .refine(file => file.size > 0, "Você deve selecionar uma imagem"),
});

export const StepImagesProducts = ({ setStep }: Props) => {
  const { setImage, image } = useProductsStore();
  const [preview, setPreview] = useState<string | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      image: undefined,
    },
  });

  const onSubmit = (value: z.infer<typeof formSchema>) => {
    setImage(value.image);
    setStep("createProduct");
  };

  const handleImageChange = (file: File) => {
    setPreview(URL.createObjectURL(file));
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Imagens</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={e => {
                    if (e.target.files && e.target.files[0]) {
                      field.onChange(e.target.files[0]);
                      handleImageChange(e.target.files[0]);
                    }
                  }}
                />
              </FormControl>
              {preview && (
                <div className="mt-4">
                  <img
                    src={preview}
                    alt="Preview da Imagem"
                    className="max-w-xs"
                  />
                </div>
              )}
              <FormDescription>
                Escolha uma imagem para o produto.
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
