import Link from "next/link";
import { ModeToggle } from "./button-theme";
import { CartProducts } from "./cart/cart-products";

export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-lg dark:bg-gray-950 z-50 ">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link className="flex items-center" href="/">
          <MountainIcon className="h-6 w-6 text-gray-900 dark:text-gray-50" />
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
          <CartProducts />
          <ModeToggle />
        </nav>
        <button
          className="rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-950 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:ring-gray-300 md:hidden"
          type="button"
        >
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </button>
      </div>
    </header>
  );
}

function MenuIcon(props: any) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props: any) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
