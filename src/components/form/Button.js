const Button = ({ texto, children, ...props }) => {
  return <button className="button" { ...props }>{ children }{ texto }</button>
}

export default Button