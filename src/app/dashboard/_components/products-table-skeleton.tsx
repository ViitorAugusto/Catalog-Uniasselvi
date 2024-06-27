import { Skeleton } from "@/components/ui/skeleton";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";

export const ProductsTableSkeleton = () => {
  return (
    <>
      {Array.from({ length: 7 }).map((_, index) => (
        <TableRow key={index}>
          <TableCell>
            <Skeleton className="w-16 h-16 rounded-md" />
          </TableCell>
          <TableCell className="max-w-[80px]">
            <Skeleton className="h-4 w-full" />
          </TableCell>
          <TableCell className="hidden md:table-cell max-w-[300px]">
            <Skeleton className="h-4 w-full" />
          </TableCell>
          <TableCell>
            <Skeleton className="h-4 w-20" />
          </TableCell>
          <TableCell className="flex items-center gap-2">
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-4" />
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};
