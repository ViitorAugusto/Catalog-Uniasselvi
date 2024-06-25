interface GetProfileResponse {
  id: number;
  name: string;
  email: string;
  is_admin: boolean;
}

import { api } from "./api-client";

export async function getProfile(): Promise<GetProfileResponse | null> {
  try {
    const response = await api.get("user");
    if (!response.ok) {
      console.log(`Erro HTTP: ${response.status}`);
      return null; // Retorna null se houver algum problema com a resposta
    }
    return await response.json<GetProfileResponse>();
  } catch (error) {
    console.error("Erro ao buscar perfil do usuário:", error);
    return null; // Retorna null em caso de erros de rede ou outros
  }
}
