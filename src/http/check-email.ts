import { api } from "./api-client";

interface CheckEmailResponse {
  message: string;
  exists: boolean;
}

export async function checkEmail(email: string): Promise<CheckEmailResponse> {
  const result = await api
    .get(`user/email/${email}`)
    .json<CheckEmailResponse>();
  return result;
}
