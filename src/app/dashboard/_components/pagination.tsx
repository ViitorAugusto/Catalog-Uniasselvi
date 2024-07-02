import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface Links {
  links: {
    url: string;
    label: string;
    active: boolean;
  }[];
  onPageChange: (page: number) => void;
}

export const PaginationPage = ({ links, onPageChange }: Links) => {
  const searchParams = useSearchParams();
  const pathame = usePathname();
  const { replace } = useRouter();

  const handleClickPage = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    if (pageNumber > 1) {
      params.set("page", pageNumber.toString());
    } else {
      params.delete("page");
    }
    replace(`${pathame}?${params.toString()}`, { scroll: false });
    onPageChange(pageNumber);
  };

  const currentPage = Number(searchParams.get("page") || 1);
  const hasPreviousPage = links.some(
    link => link.label.includes("Previous") && link.url
  );
  const hasNextPage = links.some(
    link => link.label.includes("Next") && link.url
  );

  return (
    <Pagination>
      <PaginationContent className="cursor-pointer">
        <PaginationItem
          className={`
            ${
              hasPreviousPage
                ? "cursor-pointer"
                : "cursor-not-allowed text-muted-foreground"
            }
          `}
          onClick={() => {
            if (hasPreviousPage) {
              handleClickPage(currentPage - 1);
            }
          }}
        >
          <PaginationPrevious />
        </PaginationItem>

        {links.map(link => {
          if (link.label.includes("Previous") || link.label.includes("Next")) {
            return null;
          }

          return (
            <PaginationItem key={link.url}>
              <PaginationLink
                onClick={() => handleClickPage(Number(link.label))}
                isActive={link.active}
                dangerouslySetInnerHTML={{ __html: link.label }}
              ></PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem
          className={`
            ${
              hasNextPage
                ? "cursor-pointer"
                : "cursor-not-allowed text-muted-foreground"
            }
          `}
          onClick={() => {
            if (hasNextPage) {
              handleClickPage(currentPage + 1);
            }
          }}
        >
          <PaginationNext />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
