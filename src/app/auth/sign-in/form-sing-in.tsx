"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FiAlertTriangle } from "react-icons/fi";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { LuLoader2 } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "./action";
import { useFormState } from "@/hook/use-form-state";

export const FormSingIn = () => {
  const router = useRouter();

  const [{ errors, message, success }, handleSubmit, isPending] = useFormState(
    signInWithEmailAndPassword,
    () => {
      router.push("/");
    }
  );

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        {success === false && message && (
          <Alert variant="destructive">
            <FiAlertTriangle className="size-4" />
            <AlertTitle>Sign in failed!</AlertTitle>
            <AlertDescription>
              <p>{message}</p>
            </AlertDescription>
          </Alert>
        )}

        <div className="space-y-1">
          <Label htmlFor="email">E-mail</Label>
          <Input name="email" type="email" id="email" />

          {errors?.email && (
            <p className="text-xs font-medium text-red-500 dark:text-red-400">
              {errors.email[0]}
            </p>
          )}
        </div>

        <div className="space-y-1">
          <Label htmlFor="password">Password</Label>
          <Input name="password" type="password" id="password" />

          {errors?.password && (
            <p className="text-xs font-medium text-red-500 dark:text-red-400">
              {errors.password[0]}
            </p>
          )}

          <Link
            href="/auth/forgot-password"
            className="text-xs font-medium text-foreground hover:underline"
          >
            Esqueceu sua senha?
          </Link>
        </div>

        <Button className="w-full" type="submit" disabled={isPending}>
          {isPending ? <LuLoader2 className="size-4 animate-spin" /> : "Entrar"}
        </Button>
      </form>
    </div>
  );
};
