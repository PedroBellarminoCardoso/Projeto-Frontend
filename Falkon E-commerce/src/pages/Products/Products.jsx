import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CardProduto from "../../components/ProductCard/ProductCard";
import { buscarProdutos } from "../../services/api";    

function Produtos() {

  const [produtos, setProdutos] = useState([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    carregarProdutos();
  }, []);

  async function carregarProdutos() {
    const dados = await buscarProdutos();
    setProdutos(dados);
  }

  function avancarPagamento() {
    navigate("/checkout", {
      state: produtoSelecionado
    });
  }

  return (
    <div>

      <h1>Carrinho Falkon</h1>

      <h3>Escolha um produto</h3>

      {produtos.map(produto => (
        <CardProduto
          key={produto.id}
          produto={produto}
          aoSelecionar={setProdutoSelecionado}
        />
      ))}

      {produtoSelecionado && (
        <div>
          <h2>Produto Selecionado</h2>

          <p>{produtoSelecionado.nome}</p>

          <button onClick={avancarPagamento}>
            Avançar para Pagamento
          </button>
        </div>
      )}

    </div>
  );
}

export default Produtos;