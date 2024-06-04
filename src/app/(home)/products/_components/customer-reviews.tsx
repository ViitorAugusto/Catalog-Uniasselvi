import Image from "next/image";

export const CustomerReviews = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Avaliações de Clientes
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <IconeEstrela className="w-5 h-5 fill-primary" />
              <IconeEstrela className="w-5 h-5 fill-primary" />
              <IconeEstrela className="w-5 h-5 fill-primary" />
              <IconeEstrela className="w-5 h-5 fill-primary" />
              <IconeEstrela className="w-5 h-5 fill-muted stroke-muted-foreground" />
              <span className="text-gray-500 dark:text-gray-400">(4.2)</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Esta mochila é incrível! A qualidade é de primeira e é
              extremamente confortável de usar. Altamente recomendada!
            </p>
            <div className="flex items-center gap-2">
              <Image
                alt="Avatar do Usuário"
                className="rounded-full"
                height={40}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "1/1",
                  objectFit: "cover",
                }}
                width={40}
              />
              <div>
                <h3 className="font-medium">John Doe</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Comprador Verificado
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <IconeEstrela className="w-5 h-5 fill-primary" />
              <IconeEstrela className="w-5 h-5 fill-primary" />
              <IconeEstrela className="w-5 h-5 fill-primary" />
              <IconeEstrela className="w-5 h-5 fill-muted stroke-muted-foreground" />
              <IconeEstrela className="w-5 h-5 fill-muted stroke-muted-foreground" />
              <span className="text-gray-500 dark:text-gray-400">(3.2)</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              A mochila é bem feita, mas as alças poderiam ser um pouco mais
              confortáveis. No geral, é um bom produto.
            </p>
            <div className="flex items-center gap-2">
              <Image
                alt="Avatar do Usuário"
                className="rounded-full"
                height={40}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "1/1",
                  objectFit: "cover",
                }}
                width={40}
              />
              <div>
                <h3 className="font-medium">Jane Smith</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Comprador Verificado
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function IconeEstrela(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
