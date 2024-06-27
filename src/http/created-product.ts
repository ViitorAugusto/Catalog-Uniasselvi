import { api } from "./api-client";

interface CreatedProductRequest {}

type CreatedProductResponse = void


export async function createdProduct({}: CreatedProductRequest): Promise<CreatedProductResponse> {
  await api.post("products", {});
}

