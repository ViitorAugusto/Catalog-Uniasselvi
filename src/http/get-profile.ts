

interface GetProfileResponse {
  success: boolean;
  user: {
    name: string;
    email: string;
  };
}

import { api } from "./api-client";

export async function getProfile(): Promise<GetProfileResponse> {
  const result = await api
    .get("usuarios/dados-usuario")
    .json<GetProfileResponse>();
  return result;
}