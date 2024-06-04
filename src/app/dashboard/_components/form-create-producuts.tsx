"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { FaDoorClosed } from "react-icons/fa";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreatedProduct } from "@/schema";

interface FormCreateProductsProps {
  onClose: () => void;
}

const generateSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") 
    .replace(/^-+|-+$/g, ""); 
};

const onSubmit = async (data: zod.infer<typeof CreatedProduct>) => {
  console.log("data", data);

  const formData = new FormData();
  if (data.image && data.image[0]) {
    formData.append("image", data.image[0]); // Append the image file
  }
  const payload = {
    title: data.title,
    slug: generateSlug(data.title),
    price: Number(data.price),
    image: data.image,
  };

  try {
    const response = await fetch("http://127.0.0.1:8000/api/produtos/criar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Erro detalhado:", errorData);
      throw new Error("Erro ao criar produto");
    }

    const result = await response.json();
    console.log("Produto criado com sucesso:", result);
  } catch (error) {
    console.error("Erro:", error);
  }
};
export const FormCreateProducts = ({ onClose }: FormCreateProductsProps) => {
  const form = useForm<zod.infer<typeof CreatedProduct>>({
    resolver: zodResolver(CreatedProduct),
    defaultValues: {
      title: "",
      price: 0,
      image: null,
    },
  });
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg w-full max-w-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Add New Product</h2>
          <Button
            className="ml-auto"
            size="icon"
            variant="ghost"
            onClick={onClose}
          >
            <FaDoorClosed className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
        <Form {...form}>
          <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>title</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Fone..." type="text" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="100" type="number" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image</FormLabel>
                    <FormControl>
                      <Input {...field} type="file" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit">Save</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};
