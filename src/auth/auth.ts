
import { getProfile } from "@/http/get-profile";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export function isAuthenticated() {
  const token = cookies().get("access_token")?.value;
  return !!token;
}

export async function auth() {
  const token = cookies().get("access_token")?.value;
  if (!token) {
    return null; // Retorna null imediatamente se não houver token
  }

  try {
    const user = await getProfile();
    return user; // Retorna o perfil do usuário ou null se a API falhar
  } catch (err) {
    console.error("Erro durante a obtenção do perfil do usuário:", err);
    return null;
  }
}
