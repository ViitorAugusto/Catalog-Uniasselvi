import { useCartStore } from "@/context/cart-store";
import { useCheckoutStore } from "@/context/checkout-store";

export const GenerateMessage = () => {
  const { name, address } = useCheckoutStore(state => state);
  const { cart } = useCartStore(state => state);

  return `
Olá, ${name}! Gostaria de fazer um pedido. 

Endereço:
${address.street}, ${address.number}, (${address.complement})
${address.destric}, ${address.city} - ${address.state}

Detalhes do pedido:
${cart
  .map(item => `- ${item.product.title} - ${item.quantity} unidade(s)`)
  .join("\n")}

Obrigado!
  `;
};
