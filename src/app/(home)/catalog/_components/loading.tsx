import { Skeleton } from "@/components/ui/skeleton";

const SkeletonCatalog = () => {
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array(8)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm dark:bg-gray-950 p-4"
          >
            <Skeleton className="rounded-t-lg w-full h-48" />
            <div className="mt-4">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-6 w-1/4 mt-2" />
            </div>
          </div>
        ))}
    </div>
  );
};

export default SkeletonCatalog;
