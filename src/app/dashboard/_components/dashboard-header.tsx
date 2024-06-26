import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FiPackage } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoCodeSlash } from "react-icons/io5";
import { RiLineChartLine } from "react-icons/ri";

export const DashboardHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  return (
    <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr] grid-rows-1">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40 ">
        <div className="flex h-full max-h-screen flex-col gap-2 ">
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
          <div className="mt-auto p-4 ">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle>Novo Produto</CardTitle>
                <CardDescription>
                  Clique no botão para adicionar um novo produto ao seu
                  inventário.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" size="sm" onClick={handleOpenModal}>
                  Adicionar produto
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
        <Link className="lg:hidden" href="#">
          <IoCodeSlash className="h-6 w-6" />
          <span className="sr-only">Home</span>
        </Link>
        <div className="w-full flex-1">
          <form>
            <div className="relative">
              <CiSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input
                className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                placeholder="Buscar produtos..."
                type="search"
              />
            </div>
          </form>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
              size="icon"
              variant="ghost"
            >
              <Image
                alt="Avatar"
                className="rounded-full"
                height={32}
                src="https://avatars.githubusercontent.com/u/106840657?v=4"
                style={{
                  aspectRatio: "32/32",
                  objectFit: "cover",
                }}
                width={32}
              />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Configurações</DropdownMenuItem>
            <DropdownMenuItem>Suporte</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Sair</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
    </div>
  );
};
