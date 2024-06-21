"use server";

import { signInWithPassword } from "@/http/sign-in-with-password";
import { HTTPError } from "ky";
import { cookies } from "next/headers";
import { z } from "zod";


const signInSchema = z.object({
  email: z.string().email({ message: "Email é obrigatório" }),
  password: z.string().min(1, { message: "Senha é obrigatória" }),
});

export async function signInWithEmailAndPassword(data: FormData) {
  const result = signInSchema.safeParse(Object.fromEntries(data));

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;

    return { success: false, message: null, errors };
  }

  const { email, password } = result.data;

  try {
    const { access_token } = await signInWithPassword({
      
      email,
      password,
    });
    cookies().set("access_token", access_token, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
  } catch (err) {
    if (err instanceof HTTPError) {
      const { message } = await err.response.json();

      return { success: false, message, errors: null };
    }

    return {
      success: false,
      message: "Unexpected error, try again in a few minutes.",
      errors: null,
    };
  }

  return { success: true, message: null, errors: null };
}
