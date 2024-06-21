"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "../button-theme";
import { CartProducts } from "../cart/cart-products";
import { IoCodeSlash, IoMenuOutline } from "react-icons/io5";
import { DrawerHeader } from "./drawer-header";
import { Button } from "@/components/ui/button";
import { FaUser } from "react-icons/fa";
import { FiUser } from "react-icons/fi";

export default function NavBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white shadow-lg dark:bg-gray-950 z-50 h-16">
        <div className="container mx-auto flex h-full items-center justify-between px-4 md:px-6">
          <Link className="flex items-center" href="/">
            <IoCodeSlash className="h-6 w-6 text-gray-900 dark:text-gray-50" />
            <span className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-50">
              NexusTechStore
            </span>
          </Link>
          <nav className="hidden space-x-4 md:flex md:justify-center md:items-center">
            <Link
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="/"
            >
              Home
            </Link>
            <Link
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="/catalog"
            >
              Produtos
            </Link>
            <Link
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="/about"
            >
              Sobre
            </Link>
            <Link
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="/contact"
            >
              Contato
            </Link>

            <Link href='/auth/sign-in'>
              <Button size="icon" variant="secondary">
                <FiUser />
              </Button>
            </Link>
            <CartProducts />
            <ModeToggle />
          </nav>
          <button
            className="rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-950 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:ring-gray-300 md:hidden"
            type="button"
            onClick={toggleDrawer}
          >
            <IoMenuOutline className="h-6 w-6" />

            <span className="sr-only">Open menu</span>
          </button>
        </div>
      </header>

      <DrawerHeader isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </>
  );
}
