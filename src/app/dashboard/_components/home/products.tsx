"use client";

import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import { ProductsTable } from "../products-table";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { api } from "@/http/api-client";
import { ProductsTableSkeleton } from "../products-table-skeleton";
import DeleteDialog from "../delete-dialog";
import { Button } from "@/components/ui/button";
import { ProductsDialog } from "@/components/products/products-dialog";
import { PaginationPage } from "../pagination";
import { SearchInput } from "../search-input";
import { useSearchParams, useRouter } from "next/navigation";

interface Links {
  url: string;
  label: string;
  active: boolean;
}
type ComponentProps = {
  params?: {
    search?: string;
    page?: number;
  };
};

export default function Dashboard({ params }: ComponentProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isProductsDialogOpen, setIsProductsDialogOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<number | null>(null);
  const [paginationLinks, setPaginationLinks] = useState<Links[]>([]);
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
  const [currentPage, setCurrentPage] = useState(params?.page || 1);
  const { replace } = useRouter();

  useEffect(() => {
    fetchProducts();
  }, [search, currentPage]);

  useEffect(() => {
    if (search) {
      setCurrentPage(1);
      replace(`${window.location.pathname}?search=${search}&page=1`);
    }
  }, [search]);

  const fetchProducts = () => {
    setLoading(true);
    api
      .get(`products`, {
        searchParams: {
          search: search,
          page: currentPage,
        },
      })
      .json<{ data: Product[]; links: Links[] }>()
      .then(response => {
        const { data: products, links } = response;
        setProducts(products);
        setPaginationLinks(links);
        setLoading(false);
      })
      .catch(error => {
        console.error("Erro ao buscar produtos:", error);
        setLoading(false);
      });
  };

  const handleOpenDeleteDialog = (id: number) => {
    setProductToDelete(id);
    setIsDeleteDialogOpen(true);
  };

  const handleCloseDeleteDialog = () => {
    setIsDeleteDialogOpen(false);
    setProductToDelete(null);
  };

  const handleDelete = async () => {
    if (productToDelete !== null) {
      try {
        await api.delete(`products/${productToDelete}`);
        setProducts(products.filter(product => product.id !== productToDelete));
        handleCloseDeleteDialog();
      } catch (error) {
        console.error("Erro ao deletar produto:", error);
      }
    }
  };

  const handleOpenProductsDialog = () => {
    setIsProductsDialogOpen(true);
  };

  const handleCloseProductsDialog = () => {
    setIsProductsDialogOpen(false);
  };

  const handleProductCreated = (newProduct: Product) => {
    fetchProducts();
    handleCloseProductsDialog();
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    replace(`${window.location.pathname}?search=${search}&page=${page}`);
  };

  return (
    <>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="flex gap-10 self-end">
          <Button onClick={handleOpenProductsDialog}>Criar Produto</Button>
        </div>
        <div className="border shadow-sm rounded-lg p-2">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Image</TableHead>
                <TableHead className="min-w-[150px]">Título</TableHead>
                <TableHead className="hidden md:table-cell">
                  Descrição
                </TableHead>
                <TableHead className="md:table-cell">Preço</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <ProductsTableSkeleton />
              ) : products.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-20">
                    Não tem produtos cadastrados
                  </TableCell>
                </TableRow>
              ) : (
                products.map(product => (
                  <ProductsTable
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    image={product.image}
                    onDelete={() => handleOpenDeleteDialog(product.id)}
                  />
                ))
              )}
            </TableBody>
          </Table>
        </div>
        <PaginationPage
          links={paginationLinks}
          onPageChange={handlePageChange}
        />
      </main>
      <DeleteDialog
        isOpen={isDeleteDialogOpen}
        onClose={handleCloseDeleteDialog}
        onDelete={handleDelete}
      />
      <ProductsDialog
        open={isProductsDialogOpen}
        onOpenChange={setIsProductsDialogOpen}
        onProductCreated={handleProductCreated}
      />
    </>
  );
}
