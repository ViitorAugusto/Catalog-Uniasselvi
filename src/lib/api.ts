export async function fetchProducts() {
  try {
    const response = await fetch("http://seu-backend-url.com/api/products");
    if (!response.ok) {
      throw new Error(`Erro: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
    return [];
  }
}
