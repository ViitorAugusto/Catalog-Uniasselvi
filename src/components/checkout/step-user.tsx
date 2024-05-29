import { useCheckoutStore } from "@/context/checkout-store";
import { CheckoutSteps } from "@/types/checkout-steps";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction } from "react";
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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Props = {
  setStep: Dispatch<SetStateAction<CheckoutSteps>>;
};

const formSchema = z.object({
  name: z.string().min(3, "Nome muito curto"),
});
export const StepUser = ({ setStep }: Props) => {
  const { name, setName } = useCheckoutStore();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name,
    },
  });
  const onSubmit = (value: z.infer<typeof formSchema>) => {
    setName(value.name);
    setStep("address");
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Digite seu nome" {...field} />
              </FormControl>
              <FormDescription>Seu nome de exibição público.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Continuar</Button>
      </form>
    </Form>
  );
};
