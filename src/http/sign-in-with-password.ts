import { api } from "./api-client";

interface SignInWithPasswordRequest {
  
  email: string;
  password: string;
}
interface SignInWithPasswordResponse {
  message: string;
  access_token: string;
  primeiro_acesso: boolean;
  user_admin: boolean;
}
export const signInWithPassword = async ({
  email,
  password,
}: SignInWithPasswordRequest) => {
  const result = await api
    .post("login", {
      json: {
        email,
        password,
      },
    })
    .json<SignInWithPasswordResponse>();

  return result;
};
