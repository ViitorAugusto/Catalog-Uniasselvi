import { useCheckoutStore } from "@/context/checkout-store";
import { Button } from "../ui/button";
import Link from "next/link";
import { GenerateMessage } from "@/lib/generate-message";

export const StepFinish = () => {
  const { name } = useCheckoutStore(state => state);

  const message = GenerateMessage();
  const url = `https://wa.me/${process.env.NEXT_PUBLIC_ZAP}?text=${encodeURI(
    message
  )}`;

  return (
    <div className="space-y-4  bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
        Obrigado, {name}!
      </h1>
      <p className="text-gray-700 dark:text-gray-300">
        Para concluir seu pedido, por favor, envie os detalhes para o nosso
        WhatsApp.
      </p>
      <Button>
        <Link target="_blank" href={url} className="text-white">
          Enviar para WhatsApp
        </Link>
      </Button>
    </div>
  );
};
