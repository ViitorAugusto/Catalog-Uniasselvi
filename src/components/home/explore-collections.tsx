import Link from "next/link";

export default function ExploreCollections() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container grid lg:grid-cols-2 gap-8 px-4 md:px-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Explore Our Collections
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Browse our curated collections of the latest fashion trends and
              essentials.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Link
              className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
              href="#"
            >
              <div className="text-sm font-medium leading-none group-hover:underline">
                Women
              </div>
              <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                Discover the latest trends in women's fashion.
              </div>
            </Link>
            <Link
              className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
              href="#"
            >
              <div className="text-sm font-medium leading-none group-hover:underline">
                Men
              </div>
              <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                Explore our selection of men's fashion essentials.
              </div>
            </Link>
            <Link
              className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
              href="#"
            >
              <div className="text-sm font-medium leading-none group-hover:underline">
                Kids
              </div>
              <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                Find the perfect outfits for your little ones.
              </div>
            </Link>
            <Link
              className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
              href="#"
            >
              <div className="text-sm font-medium leading-none group-hover:underline">
                Accessories
              </div>
              <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                Browse our selection of stylish accessories.
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
