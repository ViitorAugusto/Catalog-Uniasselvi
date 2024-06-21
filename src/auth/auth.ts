
import { getProfile } from "@/http/get-profile";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export function isAuthenticated() {
  const token = cookies().get("access_token")?.value;
  return !!token;
}

export async function auth() {
  const token = cookies().get("access_token")?.value;
  console.log("token", token);
  if (!token) {
    redirect("/sign-in");
  }
  try {
    const { user } = await getProfile();
    return { user };
  } catch (err) {
    console.error(err);
  }

  redirect("/api/auth/sign-out");
}
