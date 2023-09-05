import ItemMenu from "./ItemMenu";

const HeaderSemana = () => {
  return (
    <nav className="w-full flex items-center" style={{marginBottom: '30px'}}>
      <ul className="w-full flex items-center gap-4">
        <li>
          <ItemMenu nome='Segunda' />
        </li>

        <li>
          <ItemMenu nome='Terça' />
        </li>

        <li>
          <ItemMenu nome='Quarta' />
        </li>

        <li>
          <ItemMenu nome='Quita' />
        </li>

        <li>
          <ItemMenu nome='Sexta' />
        </li>

        <li>
          <ItemMenu nome='Sabádo' />
        </li>

        <li>
          <ItemMenu nome='Domingo' />
        </li>
      </ul>
    </nav>
  )
}

export default HeaderSemana