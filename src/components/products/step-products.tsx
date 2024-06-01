import { useProductsStore } from "@/context/products-store";
import { ProductSteps } from "@/types/products-steps";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { generateSlug } from "@/utils/generateSlug";

type Props = {
  setStep: Dispatch<SetStateAction<ProductSteps>>;
};

const formSchema = z.object({
  title: z.string().min(3, "Nome muito curto"),
  price: z.preprocess(
    val => Number(val),
    z.number().min(1, "Preço muito baixo")
  ),
  description: z.string().min(3, "Descrição muito curta"),
  moreDetails: z.string().min(3, "Detalhes muito curtos"),
  category: z.string().min(3, "Categoria muito curta").optional(),
  featured: z.boolean().optional(),
});

export const StepProducts = ({ setStep }: Props) => {
  const { infoProducts, setInfoProducts } = useProductsStore();
  const [isTitleUnique, setIsTitleUnique] = useState(true);
  const [isCheckingTitle, setIsCheckingTitle] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: infoProducts.title,
      price: infoProducts.price,
      description: infoProducts.description,
      moreDetails: infoProducts.moreDetails,
      category: infoProducts.category,
      featured: infoProducts.featured,
    },
  });

  const checkTitleUnique = async (title: string) => {
    setIsCheckingTitle(true);
    try {
      const response = await fetch(
        `http://localhost:8000/api/products/check-title?title=${encodeURIComponent(
          title
        )}`
      );
      const data = await response.json();
      setIsTitleUnique(!data.exists);
    } catch (error) {
      console.error("Erro ao verificar o título:", error);
      setIsTitleUnique(true); // Permitir a criação se houver um erro na verificação
    } finally {
      setIsCheckingTitle(false);
    }
  };

  const onSubmit = async (value: z.infer<typeof formSchema>) => {
    await checkTitleUnique(value.title);

    if (!isTitleUnique) {
      form.setError("title", { type: "manual", message: "Título já existe" });
      return;
    }

    const slug = generateSlug(value.title);
    const payload = {
      ...value,
      slug,
    };
    setInfoProducts(payload);
    console.log("payload", payload); // Verificando o payload
    setStep("imagesProducts"); // Passando para a próxima etapa
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Título do produto</FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite o nome do produto"
                  {...field}
                  onBlur={() => checkTitleUnique(field.value)}
                />
              </FormControl>
              <FormMessage />
              {!isTitleUnique && (
                <p className="text-red-500">Este título já existe</p>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preço</FormLabel>
              <FormControl>
                <Input {...field} placeholder="100" type="number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição</FormLabel>
              <FormControl>
                <Input placeholder="Digite a descrição do produto" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="moreDetails"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Detalhes</FormLabel>
              <FormControl>
                <Input placeholder="Digite os detalhes do produto" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Categoria</FormLabel>
              <FormControl>
                <Input placeholder="Digite a categoria do produto" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="flex justify-end mt-4">
          <Button type="submit" disabled={isCheckingTitle}>
            Próximo
          </Button>
        </div>
      </form>
    </Form>
  );
};
