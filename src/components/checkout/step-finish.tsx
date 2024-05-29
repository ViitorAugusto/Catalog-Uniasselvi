import { useCheckoutStore } from "@/context/checkout-store";

export const StepFinish = () => {
  const { name } = useCheckoutStore(state => state);
  return (
    <div>
      <h1>Thank you, {name}!</h1>
      <p>Agora envie seu pedido ao nosso WhatsApp para concluir</p>
    </div>
  );
};
