
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-6 my-12 px-4">
      <div className="text-lg">
        <h1 className="text-3xl font-bold text-center py-4">NexusTechStore</h1>
        <p className="text-center pb-4">
          Estamos aqui para ajudar! Entre em contato com a NexusTechStore para
          esclarecer dúvidas, obter suporte técnico, fazer consultas de vendas
          ou discutir possíveis parcerias. Preencha o formulário abaixo e nossa
          equipe retornará o mais breve possível.
        </p>
      </div>
      <div className="max-w-md mx-auto">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold">Contatos</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm text-start pb-4">
            Descreva em detalhes sua dúvida, solicitação ou feedback. Quanto
            mais informações você fornecer, melhor poderemos atendê-lo
          </p>
        </div>
        <form className="space-y-4 ">
          <div className="space-y-2">
            <Label htmlFor="name">Nome</Label>
            <Input id="Nome" placeholder="Digite seu nome " required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="Digite seu email"
              required
              type="email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="Enter your password"
              required
              type="password"
            />
          </div>
          <Button className="w-full" type="submit">
            Register
          </Button>
        </form>
        <div className="my-8 text-gray-500 dark:text-gray-400 text-sm">
          A NexusTechStore valoriza o seu contato e está sempre pronta para
          fornecer a melhor assistência e suporte. Agradecemos sua mensagem!
        </div>
      </div>
    </div>
  );
}
