"use client";
import { useRouter } from "next/navigation";
import { AiOutlineEye } from "react-icons/ai";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signUpAction } from "./action";
import { FiAlertTriangle } from "react-icons/fi";
import { LuLoader2 } from "react-icons/lu";
import { useFormState } from "@/hook/use-form-state";
import { useState } from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
export function SignUpForm() {
  const router = useRouter();

  const [{ errors, message, success }, handleSubmit, isPending] = useFormState(
    signUpAction,
    () => {
      router.push("/auth/sign-in");
    }
  );

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        {success === false && message && (
          <Alert variant="destructive">
            <FiAlertTriangle className="size-4" />
            <AlertTitle>Sign up failed!</AlertTitle>
            <AlertDescription>
              <p>{message}</p>
            </AlertDescription>
          </Alert>
        )}

        <div className="space-y-1">
          <Label htmlFor="name">Nome</Label>
          <Input name="name" type="name" id="name" />

          {errors?.name && (
            <p className="text-xs font-medium text-red-500 dark:text-red-400">
              {errors.name[0]}
            </p>
          )}
        </div>

        <div className="space-y-1">
          <Label htmlFor="email">E-mail</Label>
          <Input name="email" type="email" id="email" />

          {errors?.passemailword && (
            <p className="text-xs font-medium text-red-500 dark:text-red-400">
              {errors.email[0]}
            </p>
          )}
        </div>

        <div className="space-y-1">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              name="password"
              type={showPassword ? "text" : "password"}
              id="password"
              className="pr-10"
            />
            <button
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
              type="button"
              onClick={toggleShowPassword}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>
        </div>

        <div className="space-y-1">
          <Label htmlFor="password_confirmation">Confirm your password</Label>
          <Input
            name="password_confirmation"
            type="password"
            id="password_confirmation"
          />

          {errors?.password_confirmation && (
            <p className="text-xs font-medium text-red-500 dark:text-red-400">
              {errors.password_confirmation[0]}
            </p>
          )}
        </div>

        <Button className="w-full" type="submit" disabled={isPending}>
          {isPending ? (
            <LuLoader2 className="size-4 animate-spin" />
          ) : (
            "Criar conta"
          )}
        </Button>
      </form>
    </div>
  );
}
