import React, { useState } from "react";
import Input from "@/components/form/input";
import Button from "@/components/form/Button";

function CadastroForm({ onCadastrar }) {
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [valorCalorico, setValorCalorico] = useState("");
  const [quantidadeProteina, setQuantidadeProteina] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Chama a função onCadastrar passada como prop com os dados do formulário
    onCadastrar({
      nome,
      quantidade,
      valorCalorico,
      quantidadeProteina,
    });
    // Limpa os campos do formulário após o envio
    setNome("");
    setQuantidade("");
    setValorCalorico("");
    setQuantidadeProteina("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Cadastre o cardápio</h1>

      {/* Campos de entrada controlados pelos estados */}
      <Input
        id="comida"
        type="text"
        label="Nome da comida"
        placeholder="ex. frango"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <Input
        id="qtd"
        type="number"
        label="Quantidade"
        placeholder="10 km"
        value={quantidade}
        onChange={(e) => setQuantidade(e.target.value)}
      />

      <Input
        id="valor-calorico"
        type="text"
        label="Valor Calórico"
        placeholder="200kcal"
        value={valorCalorico}
        onChange={(e) => setValorCalorico(e.target.value)}
      />

      <Input
        id="quantidade-proteirna"
        type="text"
        label="Quantidade de proteína"
        value={quantidadeProteina}
        onChange={(e) => setQuantidadeProteina(e.target.value)}
      />

      {/* Botão para enviar o formulário */}
      <Button texto="Cadastrar" />
    </form>
  );
}

export default CadastroForm;
