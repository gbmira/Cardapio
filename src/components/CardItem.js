import Image from "next/image";

const CardItem = ({img, texto, preco, nomeComida}) => {
  return (
    <div className="card-item">
      <div className="box-img">
        <Image src={img} alt={nomeComida} />
      </div>

      <div className="box-info flex w-full justify-between"><span>{nomeComida}</span> <span>{preco}</span></div>
      <p>{texto}</p>
    </div>
  )
}

export default CardItem;