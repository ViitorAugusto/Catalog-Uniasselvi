"use server";
import { checkEmail } from "@/http/check-email";
import { signUp } from "@/http/sign-up";
import { HTTPError } from "ky";
import { z } from "zod";

const signUpSchema = z
  .object({
    name: z.string(),
    email: z
      .string()
      .email({ message: "Please, provide a valid e-mail address." }),
    password: z
      .string()
      .min(6, { message: "Password should have at least 6 characters." }),
    password_confirmation: z.string(),
  })
  .refine(data => data.password === data.password_confirmation, {
    message: "Password confirmation does not match.",
    path: ["password_confirmation"],
  });

export async function signUpAction(data: FormData) {
  const result = signUpSchema.safeParse(Object.fromEntries(data));

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;
    console.log(errors);
    console.error(errors);
    return { success: false, message: null, errors };
  }

  const { email, password, name } = result.data;

  try {
    const emailCheck = await checkEmail(email);

    if (emailCheck.exists) {
      return {
        success: false,
        message: "E-mail already in use.",
        errors: null,
      };
    }

    await signUp({
      name,
      email,
      password,
    });

    console.log("Sign up successful", email, password);
  } catch (err) {
    if (err instanceof HTTPError) {
      const { message } = await err.response.json();

      return { success: false, message, errors: null };
    }

    console.error(err);

    return {
      success: false,
      message: "Unexpected error, try again in a few minutes.",
      errors: null,
    };
  }
  return { success: true, message: null, errors: null };
}
