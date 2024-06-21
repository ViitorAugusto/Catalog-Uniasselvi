// ProductsTable.js
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import { BiEditAlt } from "react-icons/bi";
import { FaRegTrashAlt } from "react-icons/fa";

interface ProductsTableProps {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  onDelete: (id: number) => void;
  onOpenDeleteDialog: () => void;
}

export const ProductsTable = ({
  description,
  image,
  price,
  title,
  onOpenDeleteDialog,
}: ProductsTableProps) => {
  const baseURL = "http://192.168.20.149:8000/storage/";
  const imageUrl = image.startsWith("http") ? image : `${baseURL}${image}`;
  const formattedPrice = price / 100;
  return (
    <>
      <TableBody>
        <TableRow>
          <TableCell>
            <Image
              alt="Product image"
              className="aspect-square rounded-md object-cover size-16"
              height={350}
              src={imageUrl}
              width={350}
              quality={100}
              priority
            />
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
          <TableCell className="flex items-center gap-2">
            {/* <Button size="icon" variant="outline">
              <BiEditAlt className="h-4 w-4" />
              <span className="sr-only">Editar</span>
            </Button> */}
            <Button size="icon" variant="outline" onClick={onOpenDeleteDialog}>
              <FaRegTrashAlt className="h-4 w-4" />
              <span className="sr-only">Deletar</span>
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </>
  );
};
