function CardProduto({ produto, aoSelecionar }) {
  return (
    <div className="card-produto">
      <h2>{produto.nome}</h2>

      <p>{produto.descricao}</p>

      <p>
        <strong>Preço:</strong> R$ {produto.preco}
      </p>

      <p>
        <strong>Categoria:</strong> {produto.categoria}
      </p>

      <p>
        <strong>Nota:</strong> ⭐ {produto.nota}
      </p>

      <button onClick={() => aoSelecionar(produto)}>
        Selecionar
      </button>
    </div>
  );
}

export default CardProduto;