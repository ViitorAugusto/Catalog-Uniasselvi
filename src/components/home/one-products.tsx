import { Button } from "@/components/ui/button";

export default function OneProducts() {
  return (
    <section className="py-12 md:py-20">
      <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8 items-start">
        <div>
          <img
            alt="Product Details"
            className="rounded-lg object-cover"
            height={600}
            src="/placeholder.svg"
            style={{
              aspectRatio: "600/600",
              objectFit: "cover",
            }}
            width={600}
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Wireless Headphones
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Experience high-quality sound and noise cancellation with our
            premium wireless headphones.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold">$99.99</span>
            <Button size="lg">Add to Cart</Button>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Key Features:</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-500 dark:text-gray-400">
              <li>Bluetooth 5.0 connectivity</li>
              <li>Up to 30 hours of battery life</li>
              <li>Noise cancellation technology</li>
              <li>Comfortable and adjustable design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
