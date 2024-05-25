import { IoConstructOutline, IoShieldCheckmarkOutline } from "react-icons/io5";

import { FiTruck } from "react-icons/fi";

import { FaRocket } from "react-icons/fa";
export default function AboutEcommerce() {
  return (
    <section className="w-full pb-12">
      <div className="container grid items-center justify-center gap-8 px-4 md:px-6">
        <div className="space-y-4 text-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              NexusTechStore
            </h2>
            <p className="mx-auto max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Em nossa empresa de tecnologia, nos orgulhamos de nossa
              experiência e compromisso em fornecer produtos e serviços de ponta
              aos nossos clientes. Com mais de uma década de experiência no
              setor, nossa equipe de especialistas altamente qualificados possui
              o conhecimento e as ferramentas para lidar com uma ampla gama de
              necessidades tecnológicas. Seja oferecendo os mais recentes
              gadgets e dispositivos, ou proporcionando suporte técnico e
              consultoria especializada, estamos dedicados a garantir que nossos
              clientes tenham acesso às melhores soluções tecnológicas
              disponíveis no mercado.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-md gap-4 sm:max-w-xl sm:grid-cols-2 lg:max-w-4xl lg:grid-cols-4">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <div className="flex items-center justify-center">
              <IoConstructOutline className="h-8 w-8 text-gray-500 dark:text-gray-400" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">
              Suporte Técnico e Consultoria
            </h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Proporcionamos suporte técnico e consultoria especializada para
              garantir que nossos clientes obtenham o máximo de suas soluções
              tecnológicas.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <div className="flex items-center justify-center">
              <IoShieldCheckmarkOutline className="h-8 w-8 text-gray-500 dark:text-gray-400" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">
              Experiência e Compromisso
            </h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Com mais de uma década de experiência no setor, nos orgulhamos do
              nosso compromisso em fornecer produtos e serviços de ponta.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <div className="flex items-center justify-center">
              <FiTruck className="h-8 w-8 text-gray-500 dark:text-gray-400" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">
              Entrega de Produtos e Serviços
            </h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Nosso e-commerce garante a entrega rápida e eficiente de produtos
              de tecnologia e serviços especializados. Confie em nós para
              receber suas soluções tecnológicas de ponta com agilidade e
              segurança.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <div className="flex items-center justify-center">
              <FaRocket className="h-8 w-8 text-gray-500 dark:text-gray-400" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">Inovação e Futurismo</h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Nossa missão é impulsionar o futuro da tecnologia com soluções
              inovadoras. Descubra os produtos mais avançados e fique à frente
              com as tendências tecnológicas que moldam o amanhã.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


