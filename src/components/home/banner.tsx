import Link from "next/link";

export default function Banner() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_700px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Gaming Peripherals
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Elevate Your Gaming Experience
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Discover our premium gaming peripherals designed to enhance your
                performance, comfort, and style.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Shop Now
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border  border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            <img
              alt="Gaming Peripherals"
              className="aspect-[7/5] object-cover rounded-lg overflow-hidden"
              height={500}
              src="/placeholder.svg"
              width={700}
            />
            <div className="grid grid-cols-2 gap-4">
              <img
                alt="Gaming Mouse"
                className="aspect-[7/5] object-cover rounded-lg overflow-hidden"
                height={240}
                src="/placeholder.svg"
                width={340}
              />
              <img
                alt="Gaming Keyboard"
                className="aspect-[7/5] object-cover rounded-lg overflow-hidden"
                height={240}
                src="/placeholder.svg"
                width={340}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
