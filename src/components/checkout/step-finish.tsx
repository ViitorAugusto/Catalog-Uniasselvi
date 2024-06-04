import { useCheckoutStore } from "@/context/checkout-store";
import { useCartStore } from "@/context/cart-store"; // Importe a store do carrinho
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GenerateMessage } from "@/lib/generate-message";

interface Props {
  onClose: () => void;
}

export const StepFinish = ({ onClose }: Props) => {
  const { name, reset } = useCheckoutStore(state => ({
    name: state.name,
    reset: state.reset,
  }));

  const { resetCart, toggleDrawer } = useCartStore(state => ({
    resetCart: state.resetCart,
    toggleDrawer: state.toggleDrawer,
  }));

  const message = GenerateMessage();
  const url = `https://wa.me/${process.env.NEXT_PUBLIC_ZAP}?text=${encodeURI(
    message
  )}`;

  const handleSend = () => {
    reset();
    resetCart();
    toggleDrawer(false);
    if (onClose) {
      onClose();
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault(); 
    window.open(url, "_blank"); 
    handleSend(); 
  };

  return (
    <div className="space-y-4 rounded-lg ">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
        Obrigado {name}!
      </h1>
      <p className="text-gray-700 dark:text-gray-300">
        Para concluir seu pedido, por favor, envie os detalhes para o nosso
        WhatsApp.
      </p>
      <Button onClick={handleClick}>Enviar para WhatsApp</Button>
    </div>
  );
};
