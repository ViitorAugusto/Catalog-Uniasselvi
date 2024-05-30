
import { ContactForm } from "./contact-form";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-6 my-24 px-4 ">
      <div className="text-lg">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-center">
          NexusTechStore
        </h1>
        <p className="mx-auto max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Estamos aqui para ajudar! Entre em contato com a NexusTechStore para
          esclarecer dúvidas, obter suporte técnico, fazer consultas de vendas
          ou discutir possíveis parcerias. Preencha o formulário abaixo e nossa
          equipe retornará o mais breve possível.
        </p>
      </div>
      <div className="max-w-[500px] mx-auto">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-4 text-center">
            Contatos
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm text-start pb-4">
            Descreva em detalhes sua dúvida, solicitação ou feedback. Quanto
            mais informações você fornecer, melhor poderemos atendê-lo
          </p>
        </div>
        <ContactForm />
        <div className="my-8 text-gray-500 dark:text-gray-400 text-sm">
          A NexusTechStore valoriza o seu contato e está sempre pronta para
          fornecer a melhor assistência e suporte. Agradecemos sua mensagem!
        </div>
      </div>
    </div>
  );
}
