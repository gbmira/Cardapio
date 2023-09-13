import Image from "next/image";
import banners from "../assets/banner.jpg";
import calendar from "../assets/calendar.svg";
import HeaderSemana from "@/components/HeaderSemana";
import Form from "@/components/form/Form";
import produto from "../assets/produto.jpg";
import CardItem from "@/components/CardItem";
import Button from "@/components/form/Button";
import CadastroForm from "@/components/CadastroForm"; // Importa o componente CadastroForm
import { useState, useEffect } from "react";

export default function Home() {
  const [lista, setLista] = useState([]);

  // Função para adicionar um novo item à lista
  const handleCadastrar = (novoItem) => {
    // Atualiza a lista com o novo item
    setLista([...lista, novoItem]);
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
          {/* Renderiza o componente CadastroForm e passa a função de cadastro como prop */}
          <CadastroForm onCadastrar={handleCadastrar} />

          <div className="card-grid">
            {/* Renderiza a lista de itens cadastrados */}
            {lista.map((item, index) => (
              <CardItem
                key={index}
                img={produto}
                nomeComida={item.nome}
                // Outros campos de item aqui
                texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ab totam!"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
