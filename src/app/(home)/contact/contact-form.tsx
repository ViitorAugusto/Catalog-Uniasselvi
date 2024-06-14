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
import { handleCellInput } from "@/types/cell-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import CircleLoader from "react-spinners/CircleLoader";


const formSchema = z.object({
  nome: z.string().min(1, "Nome muito curto"),
  email: z.string().min(1, "E-mail é obrigatório").email("Email inválido"),
  cell: z.string().min(11, "Celular inválido"),
  mensagem: z.string().min(10, "Mensagem deve ter no mínimo 10 caracteres"),
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
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });

      if (!response.ok) {
        toast({
          title: "Erro ao enviar o formulário",
          description:
            "Ocorreu um erro ao tentar enviar o formulário. Por favor, tente novamente.",
          action: <ToastAction altText="fechar">Fechar</ToastAction>,
        });
        throw new Error("Erro ao enviar o formulário");
      }

      const data = await response.json();
      console.log("Formulário enviado com sucesso:", data);
      toast({
        title: "Formulário enviado",
        description: "Seu formulário foi enviado com sucesso!",
        action: <ToastAction altText="fechar">Fechar</ToastAction>,
      });

      form.reset(); 
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      toast({
        title: "Erro ao enviar o formulário",
        description:
          "Ocorreu um erro ao tentar enviar o formulário. Por favor, tente novamente.",
        action: <ToastAction altText="fechar">Fechar</ToastAction>,
      });
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
                <Input
                  placeholder="(11) 99999-9999"
                  {...field}
                  onInput={handleCellInput}
                />
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
          <Button
            type="submit"
            className="w-full h-10 uppercase font-bold"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? (
              <div className="flex items-center justify-center">
                <svg
                  className="w-5 h-5 mr-3 text-white animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  ></path>
                </svg>
                Enviando...
              </div>
            ) : (
              "Enviar"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};
