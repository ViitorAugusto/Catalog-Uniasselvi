export const Specifications = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Product Details
            </h2>
            <ul className="space-y-2 text-gray-500 dark:text-gray-400">
              <li>
                <strong className="text-gray-900 dark:text-gray-100 font-medium">
                  Material:
                </strong>
                Italian Leather
              </li>
              <li>
                <strong className="text-gray-900 dark:text-gray-100 font-medium">
                  Dimensions:
                </strong>
                15" x 11" x 5"
              </li>
              <li>
                <strong className="text-gray-900 dark:text-gray-100 font-medium">
                  Weight:
                </strong>
                2.5 lbs
              </li>
              <li>
                <strong className="text-gray-900 dark:text-gray-100 font-medium">
                  Features:
                </strong>
                Padded laptop compartment, multiple pockets, water-resistant
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Specifications
            </h2>
            <ul className="space-y-2 text-gray-500 dark:text-gray-400">
              <li>
                <strong className="text-gray-900 dark:text-gray-100 font-medium">
                  Material:
                </strong>
                100% Italian Leather
              </li>
              <li>
                <strong className="text-gray-900 dark:text-gray-100 font-medium">
                  Hardware:
                </strong>
                Solid Brass Zippers and Buckles
              </li>
              <li>
                <strong className="text-gray-900 dark:text-gray-100 font-medium">
                  Capacity:
                </strong>
                15" Laptop, A4 Folders, and Daily Essentials
              </li>
              <li>
                <strong className="text-gray-900 dark:text-gray-100 font-medium">
                  Warranty:
                </strong>
                1 Year Manufacturer's Warranty
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};