import { useProductsStore } from "@/context/products-store";
import { ProductSteps } from "@/types/products-steps";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { generateSlug } from "@/utils/generateSlug";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Props = {
  setStep: Dispatch<SetStateAction<ProductSteps>>;
};

const formSchema = z.object({
  title: z.string().min(3, "Nome muito curto"),
  price: z.preprocess(
    val => parseFloat((val as string).replace(/[^\d.-]/g, "")), 
    z.number().min(1, "Preço muito baixo") 
  ),
  description: z.string().min(3, "Descrição muito curta"),
  moreDetails: z
    .string()
    .min(3, "Detalhes muito curtos")
    .max(1000, "Detalhes muito longos"),
  category: z.string().min(3, "Categoria muito curta").optional(),
  featured: z.union([z.literal(0), z.literal(1)]).optional(),
});

export const StepProducts = ({ setStep }: Props) => {
  const { infoProducts, setInfoProducts } = useProductsStore();
  const [isTitleUnique, setIsTitleUnique] = useState(true);
  const [isCheckingTitle, setIsCheckingTitle] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: infoProducts.title,
      price: infoProducts.price / 100,
      description: infoProducts.description,
      moreDetails: infoProducts.moreDetails,
      category: infoProducts.category,
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
      setIsTitleUnique(true);
    } finally {
      setIsCheckingTitle(false);
    }
  };

const handlePriceInput = (event: React.ChangeEvent<HTMLInputElement>) => {
  let value = event.target.value;
  value = value.replace(/\D/g, "");
  if (value === "") {
    event.target.value = "";
    form.setValue("price", 0); 
    return;
  }
  const formattedValue = (parseInt(value) / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  event.target.value = formattedValue;
  form.setValue("price", parseInt(value)); 
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
    price: Math.round(value.price), 
    slug,
    featured: value.featured === 1 ? true : false,
  };
  setInfoProducts(payload);
  setStep("imagesProducts");
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
                <Input
                  {...field}
                  placeholder="R$ 0,00"
                  onInput={handlePriceInput}
                  type="text"
                  value={
                    field.value === 0
                      ? ""
                      : field.value.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })
                  }
                />
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
                <Textarea
                  placeholder="Digite os detalhes do produto"
                  {...field}
                />
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
                <Select
                  defaultValue={field.value}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="eletronicos">Eletrônicos</SelectItem>
                    <SelectItem value="hardware">Hardware</SelectItem>
                    <SelectItem value="perifericos">Periféricos</SelectItem>
                    <SelectItem value="computadores">Computadores</SelectItem>
                    <SelectItem value="games">Games</SelectItem>
                    <SelectItem value="cell">Celular & Smartphone</SelectItem>
                    <SelectItem value="gamer">Espaço Gamer</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="featured"
          render={({ field }) => (
            <div className=" flex justify-start items-center space-x-4">
              <Switch
                checked={field.value === 1}
                onCheckedChange={checked => field.onChange(checked ? 1 : 0)}
                id="featured"
              />
              <Label htmlFor="featured">Destaque</Label>
            </div>
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
