import { getProfile } from "@/http/get-profile";
import { cookies } from "next/headers";

export function isAuthenticated() {
  const token = cookies().get("access_token")?.value;
  return !!token;
}


export async function auth() {
  const token = cookies().get("access_token")?.value;
  if (!token) {
    return null;
  }

  try {
    const user = await getProfile();
    return user;
  } catch (err) {
    console.error("Erro durante a obtenção do perfil do usuário:", err);
    return null;
  }
}
