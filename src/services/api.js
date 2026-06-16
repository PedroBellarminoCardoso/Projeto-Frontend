const API_URL = "http://localhost:3000";

export async function buscarProdutos() {
  const resposta = await fetch(`${API_URL}/produtos`);
  return resposta.json();
}

export async function buscarCupons() {
  const resposta = await fetch(`${API_URL}/cupons`);
  return resposta.json();
}