import Image from "next/image";
import banners from "../assets/banner.jpg";
import calendar from "../assets/calendar.svg";
import HeaderSemana from "@/components/HeaderSemana";
import Form from "@/components/form/Form";
import Input from "@/components/form/input";
import produto from "../assets/produto.jpg";
import CardItem from "@/components/CardItem";
import Button from "@/components/form/Button";

export default function Home() {
  let nome = '';
  let quantidade = '';
  let valorCalorico = '';
  let quantidadeProteina = '';
  let lista = [];
  let selectedIndex = null;

  const handleCadastrar = () => {
    const novoItem = {
      nome: nome,
      quantidade: quantidade,
      valorCalorico: valorCalorico,
      quantidadeProteina: quantidadeProteina,
    };
    lista = [...lista, novoItem];
    nome = '';
    quantidade = '';
    valorCalorico = '';
    quantidadeProteina = '';
  };

  const handleAtualizar = () => {
    if (selectedIndex !== null) {
      const novoItem = {
        nome: nome,
        quantidade: quantidade,
        valorCalorico: valorCalorico,
        quantidadeProteina: quantidadeProteina,
      };
      lista[selectedIndex] = novoItem;
      nome = '';
      quantidade = '';
      valorCalorico = '';
      quantidadeProteina = '';
      selectedIndex = null;
    }
  };

  const handleExcluir = (index) => {
    lista.splice(index, 1);
  };

  const handleEdit = (index) => {
    const selectedItem = lista[index];
    nome = selectedItem.nome;
    quantidade = selectedItem.quantidade;
    valorCalorico = selectedItem.valorCalorico;
    quantidadeProteina = selectedItem.quantidadeProteina;
    selectedIndex = index;
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="gradiente">
        <h1 className="titulo-principal">
          Crie seu cardápio e tenha uma vida mais saudável
        </h1>
        <Image src={banners} alt="banner" width="100%" />
      </div>

      <section style={{ margin: "40px 0" }}>
        <h2
          className="flex items-center gap-2"
          style={{ marginBottom: "20px" }}
        >
          <Image src={calendar} alt="calendário" className="w-[20px]" />
          <span style={{ color: "#fff" }}>Dias da Semana</span>
        </h2>
        <HeaderSemana />

        <div className="container-form">
          <Form>
            <h1>Cadastre o cardápio</h1>

            <Input
              id="comida"
              type="text"
              label="Nome da comida"
              placeholder="ex. frango"
              value={nome}
              onChange={(e) => (nome = e.target.value)}
            />

            <Input
              id="qtd"
              type="number"
              label="Quantidade"
              placeholder="10 km"
              value={quantidade}
              onChange={(e) => (quantidade = e.target.value)}
            />

            <Input
              id="valor-calorico"
              type="text"
              label="Valor Calórico"
              placeholder="200kcal"
              value={valorCalorico}
              onChange={(e) => (valorCalorico = e.target.value)}
            />

            <Input
              id="quantidade-proteina"
              type="text"
              label="Quantidade de proteína"
              value={quantidadeProteina}
              onChange={(e) => (quantidadeProteina = e.target.value)}
            />

            <Button texto="Cadastrar" onClick={handleCadastrar} />
            <Button texto="Atualizar" onClick={handleAtualizar} />
          </Form>

          <div className="card-grid">
            {lista.map((item, index) => (
              <CardItem
                key={index}
                img={produto}
                nomeComida={item.nome}
                preco="R$ 19,50"
                texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ab totam!"
              >
                <Button
                  texto="Editar"
                  onClick={() => handleEdit(index)}
                />
                <Button
                  texto="Excluir"
                  onClick={() => handleExcluir(index)}
                />
              </CardItem>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
