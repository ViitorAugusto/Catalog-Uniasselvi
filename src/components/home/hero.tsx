import { Button } from "@/components/ui/button";
import { HeroBanner } from "./hero-banner";
import { HeroCard } from "./hero-card";

export default function Hero() {
  return (
    <>
      <section className="w-full py-24 md:py-24 lg:py-32 font-rethink_sans">
        <div className="container flex flex-col-reverse lg:flex lg:flex-row gap-8 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-dm_sans">
              Eleve seu espaço de trabalho com nossos produtos premium
            </h1>
            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400">
              Descubra a combinação perfeita de estilo e funcionalidade para o
              seu escritório.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button size="lg">Compre agora</Button>
              <Button size="lg" variant="outline">
                Saiba mais
              </Button>
            </div>
          </div>
          <HeroBanner />
        </div>
      </section>
      <section className="w-full py-12 space-y-8 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <HeroCard
            title="Setup gamer completo"
            description="Aumente seu conforto e produtividade com nossos produtos premium cadeira de mesa e setups."
            image="/catalog-products/table.png"
          />
          <HeroCard
            title="Drones IAs e Robôs"
            description="Ajuste a altura e inclinação para uma combinação perfeita de tecnologia avançada e design robusto"
            image="/banner/drone-banner.png"
          />
          <HeroCard
            title="Configuração definitiva para jogos e escritório"
            description="Cada peça foi projetada para oferecer desempenho superior, durabilidade e estilo."
            image="/banner/vitrine.png"
          />
        </div>
      </section>
    </>
  );
}
