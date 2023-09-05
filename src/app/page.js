import Image from "next/image";
import banners from "../assets/banner.jpg";
import calendar from "../assets/calendar.svg";
import HeaderSemana from "@/components/HeaderSemana";
import Form from "@/components/form/Form";
import Input from "@/components/form/input";
import produto from "../assets/produto.jpg"
import CardItem from "@/components/CardItem";
import Button from "@/components/form/Button";

export default function Home() {
  // const [nome, setNome] = React.useState('')
  // const [quantidade, setQuantidade] = React.useState('')
  // const [valorCalorico, setValorCalorico] = React.useState('')
  // const [quantidadeProteina, setQuantidadeProteina] = React.useState('')
  // const [lista, setLista] = React.useState([])

  // React.useEffect(() => {
  //   const buscarLista = async () => {
  //     const response = await fetch('https://api.example.com/...')
  //     const json = await response.json()

  //     // setLista(json)
  //   }

  //   buscarLista()
  // }, [])
  
  // const handleCadastrar = async (event) => {
  //   // event.preventDefault();
  //   // const response = await fetch('https://api.example.com/...', {
  //   //   method: 'POST',
  //   //   headers: { 'Content-Type': 'application/json' },
  //   //   body: JSON.stringify({
  //   //     nome: nome,
  //   //     quantidade: quantidade,
  //   //     valorCalorico: valorCalorico,
  //   //     quantidadeProteina: quantidadeProteina,
  //   //     quantidadeProteina: quantidadeProteina
  //   //   })
  //   // })
  // }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="gradiente">
        <h1 className="titulo-principal">
          Crie seu cardapio e tenha uma vida mais saudável
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
            <h1>Cadastre o cardapio</h1>

            <Input
              id="comida"
              type="text"
              label="Nome da comida"
              placeholder="ex. frango"
              // value={nome}
              // onChange={({target}) => setNome(target.value)}
            />

            <Input
              id="qtd"
              type="number"
              label="Quantidade"
              placeholder="10 km"
              // value={quantidade}
              // onChange={({target}) => setQuantidade(target.value)}
            />

            <Input
              id="valor-calorico"
              type="text"
              label="Valor Calórico"
              placeholder="200kcal"
              // value={valorCalorico}
              // onChange={({target}) => setValorCalorico(target.value)}
            />

            <Input
              id="quantidade-proteirna"
              type="text"
              label="Quantidade de proteína"
              // value={quantidadeProteina}
              // onChange={({target}) => setQuantidadeProteina(target.value)}
            />

            <Button texto="Cadastrar" />
          </Form>

          <div className="card-grid">
            <CardItem
              img={produto}
              nomeComida='Salada'
              preco='R$ 19,50'
              texto='Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ab totam!'
            />
            <CardItem
              img={produto}
              nomeComida='Salada'
              preco='R$ 19,50'
              texto='Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ab totam!'
            />
          </div>
        </div>
      </section>
    </main>
  );
}
