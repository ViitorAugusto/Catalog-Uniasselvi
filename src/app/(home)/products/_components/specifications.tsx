export const Specifications = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Detalhes do Produto
            </h2>
            <ul className="space-y-2 text-gray-500 dark:text-gray-400">
              <li>
                <strong className="text-gray-900 dark:text-gray-100 font-medium">
                  Material:
                </strong>
                Couro Italiano
              </li>
              <li>
                <strong className="text-gray-900 dark:text-gray-100 font-medium">
                  Dimensões:
                </strong>
                15 x 11 x 5
              </li>
              <li>
                <strong className="text-gray-900 dark:text-gray-100 font-medium">
                  Peso:
                </strong>
                2,5 lbs
              </li>
              <li>
                <strong className="text-gray-900 dark:text-gray-100 font-medium">
                  Características:
                </strong>
                Compartimento acolchoado para laptop, múltiplos bolsos,
                resistente à água
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Especificações
            </h2>
            <ul className="space-y-2 text-gray-500 dark:text-gray-400">
              <li>
                <strong className="text-gray-900 dark:text-gray-100 font-medium">
                  Material:
                </strong>
                100% Couro Italiano
              </li>
              <li>
                <strong className="text-gray-900 dark:text-gray-100 font-medium">
                  Ferragens:
                </strong>
                Zíperes e fivelas de latão maciço
              </li>
              <li>
                <strong className="text-gray-900 dark:text-gray-100 font-medium">
                  Capacidade:
                </strong>
                Laptop de 15, Pastas A4, e itens essenciais do dia a dia
              </li>
              <li>
                <strong className="text-gray-900 dark:text-gray-100 font-medium">
                  Garantia:
                </strong>
                1 ano de garantia do fabricante
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
