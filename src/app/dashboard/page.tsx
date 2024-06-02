"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { useEffect, useState, Suspense } from "react";
import { ProductsDialog } from "@/components/products/products-dialog";
import { IoCodeSlash } from "react-icons/io5";
import { FiPackage } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiLineChartLine } from "react-icons/ri";
import { ProductsTable } from "./_components/products-table";
import { Product } from "@/types/product";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { DashboardHeader } from "./_components/dashboard-header";
import { ProductsTableSkeleton } from "./_components/products-table-skeleton"; 

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState<Product[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8000/api/produtos");
      const result = await res.json();
      setData(result);
    };

    fetchData();
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-[60px] items-center border-b px-6">
              <Link className="flex items-center gap-2 font-semibold" href="/">
                <IoCodeSlash className="h-6 w-6" />
                <span>NexusTechStore</span>
              </Link>
              <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
                <IoIosNotificationsOutline className="h-4 w-4" />
                <span className="sr-only">Toggle notifications</span>
              </Button>
            </div>

            <div className="flex-1 overflow-auto py-2">
              <nav className="grid items-start px-4 text-sm font-medium">
                <Link
                  className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                  href="#"
                >
                  <FiPackage className="h-4 w-4" />
                  Produtos
                </Link>
                <Link
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  <RiLineChartLine className="h-4 w-4 " />
                  Análise (Em breve)
                </Link>
              </nav>
            </div>
            <div className="mt-auto p-4">
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle>Novo Produto</CardTitle>
                  <CardDescription>
                    Clique no botão para adicionar um novo produto ao seu
                    inventário.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    className="w-full"
                    size="sm"
                    onClick={handleOpenModal}
                  >
                    Adicionar produto
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <DashboardHeader />
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            <div className="flex items-center">
              <h1 className="font-semibold text-lg md:text-2xl">Produtos</h1>
              <Button className="ml-auto" size="sm" onClick={handleOpenModal}>
                Adicionar produto
              </Button>
            </div>
            <div className="border shadow-sm rounded-lg">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[80px]">Image</TableHead>
                    <TableHead className="max-w-[150px]">Nome</TableHead>
                    <TableHead className="hidden md:table-cell">
                      Descrição
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      Preço
                    </TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <Suspense fallback={<ProductsTableSkeleton />}>
                  {data ? (
                    data.map(product => (
                      <ProductsTable
                        key={product.id}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                        image={product.image}
                      />
                    ))
                  ) : (
                    <ProductsTableSkeleton />
                  )}
                </Suspense>
              </Table>
            </div>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </main>
        </div>
        <ProductsDialog open={isModalOpen} onOpenChange={handleCloseModal} />
      </div>
    </>
  );
}
