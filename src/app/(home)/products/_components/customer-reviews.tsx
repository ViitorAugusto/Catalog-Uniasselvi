export const CustomerReviews = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Customer Reviews
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              <span className="text-gray-500 dark:text-gray-400">(4.2)</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              "This backpack is amazing! The quality is top-notch and it's
              extremely comfortable to wear. Highly recommended!"
            </p>
            <div className="flex items-center gap-2">
              <img
                alt="User Avatar"
                className="rounded-full"
                height={40}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "40/40",
                  objectFit: "cover",
                }}
                width={40}
              />
              <div>
                <h3 className="font-medium">John Doe</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Verified Buyer
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              <span className="text-gray-500 dark:text-gray-400">(3.2)</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              "The backpack is well-made, but the straps could be a bit more
              comfortable. Overall, it's a good product."
            </p>
            <div className="flex items-center gap-2">
              <img
                alt="User Avatar"
                className="rounded-full"
                height={40}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "40/40",
                  objectFit: "cover",
                }}
                width={40}
              />
              <div>
                <h3 className="font-medium">Jane Smith</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Verified Buyer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


function StarIcon(props: any) {
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
