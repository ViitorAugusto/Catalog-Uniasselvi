import Image from "next/image";
import { FormSingIn } from "./form-sing-in";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const SignInPage = () => {

  return (
    <div className="grid w-full min-h-[100dvh] grid-cols-1 lg:grid-cols-2 ">
      <div className=" hidden lg:flex items-center justify-center dark:bg-gray-800">
        <div className="relative w-full h-full">
          <Image
            src="/placeholder.svg"
            layout="fill"
            objectFit="cover"
            alt="Witch illustration"
          />
        </div>
      </div>
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative ">
        <div className="w-full max-w-md space-y-6">
          <div className="space-y-4 text-start">
            <Badge>Nexus</Badge>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Venda muito de forma fácil, rápida e segura.
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-xs">
              Digite seu e-mail e senha para acessar seu painel.
            </p>
          </div>
          <FormSingIn />
          <div className="text-start text-gray-500 dark:text-gray-400 text-xs flex justify-between items-center">
            <span>
              Não tem uma conta?{" "}
              <Link
                href="/auth/sign-up"
                className="font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 "
                prefetch={false}
              >
                Inscrever-se
              </Link>
            </span>
            <Link
              href="#"
              className="text-xs font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 "
              prefetch={false}
            >
              Esqueceu sua senha?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
