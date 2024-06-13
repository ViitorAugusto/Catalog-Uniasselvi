import Link from "next/link";
import { JSX, SVGProps } from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link className="hover:text-gray-200" href="/about">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-gray-200" href="/contact">
                    Contatos
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2">
                <li>
                  <Link className="hover:text-gray-200" href="/catalog">
                    Espaço Gamer
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-gray-200" href="/catalog">
                    Eletrônicos
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-gray-200" href="/catalog">
                    Hardware
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <Link className="hover:text-gray-200" href="#">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-gray-200" href="#">
                    Envios e Devoluções
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-gray-200" href="#">
                    Atendimento ao Cliente
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Siga-nos</h4>
              <div className="flex gap-4">
                <Link className="hover:text-gray-200" href="#">
                  <FacebookIcon className="h-6 w-6" />
                </Link>
                <Link className="hover:text-gray-200" href="#">
                  <TwitterIcon className="h-6 w-6" />
                </Link>
                <Link className="hover:text-gray-200" href="#">
                  <InstagramIcon className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>© 2024 NexusTechStore. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

function FacebookIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TwitterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
