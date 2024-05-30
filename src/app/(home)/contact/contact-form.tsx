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
import { Textarea } from "@/components/ui/textarea";
import { ToastAction } from "@/components/ui/toast";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const formSchema = z.object({
  nome: z.string().min(3, "Nome muito curto"),
  email: z.string().email("Email inválido"),
  cell: z.string().min(11, "Celular inválido"),
  mensagem: z.string().min(10, "Mensagem muito curta"),
});

export const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      cell: "",
      mensagem: "",
    },
  });

  const handleSubmit = async (value: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch("/api/sendd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });

      if (!response.ok) {
        toast({
          title: "Erro ao enviar o formulário",
          description: `Erro ao enviar o formulário`,
          action: (
            <ToastAction altText="fechar" className="">
              Fechar
            </ToastAction>
          ),
        });
        throw new Error("Erro ao enviar o formulário");
      }

      const data = await response.json();
      console.log("Formulário enviado com sucesso:", data);
       toast({
         title: "Produto adicionado ao carrinho",
         description: `Formulário enviado com sucesso`,
         action: (
           <ToastAction altText="fechar" className="">
             Fechar
           </ToastAction>
         ),
       });
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="nome"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Digite seu nome" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Digite seu email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cell"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Celular</FormLabel>
              <FormControl>
                <Input placeholder="Digite seu celular" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="mensagem"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensagem</FormLabel>
              <FormControl>
                <Textarea placeholder="Digite sua mensagem" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="pt-4">
          <Button type="submit" className="w-full h-10 uppercase font-bold ">
            Enviar
          </Button>
        </div>
      </form>
    </Form>
  );
};
