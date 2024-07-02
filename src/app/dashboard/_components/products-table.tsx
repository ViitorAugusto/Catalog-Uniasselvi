import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import { FaRegTrashAlt } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { BiSolidEdit } from "react-icons/bi";

interface ProductsTableProps {
  id: number;
  title: string;
  description: string;
  price: number;
  image?: string;
  onDelete?: (id: number) => void;
}

export const ProductsTable = ({
  id,
  title,
  description,
  price,
  image,
  onDelete,
}: ProductsTableProps) => {
  const baseURL = "http://127.0.0.1:8000/storage/";
  const imageUrl = image
    ? image.startsWith("http")
      ? image
      : `${baseURL}${image}`
    : "";
  const formattedPrice = price / 100;

  return (
    <TableRow>
      <TableCell>
        {imageUrl ? (
          <Image
            alt={`Image of ${title}`}
            className="aspect-square rounded-md object-cover size-20"
            height={350}
            src={imageUrl}
            width={350}
            quality={100}
            priority
          />
        ) : (
          "No Image"
        )}
      </TableCell>
      <TableCell className="font-medium max-w-[80px] truncate">
        {title}
      </TableCell>
      <TableCell className="hidden md:table-cell max-w-[300px] truncate">
        {description.split(" ").slice(0, 10).join(" ") + "..."}
      </TableCell>
      <TableCell>
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(formattedPrice)}
      </TableCell>
      <TableCell className="text-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="icon" variant="outline">
              <SlOptionsVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <BiSolidEdit className="mr-2 h-4 w-4" />
              Editar
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => onDelete && onDelete(id)}>
              <FaRegTrashAlt className="mr-2 h-4 w-4" />
              Deletar
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
};
