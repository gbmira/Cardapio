const Input = ({label, id, type, placeholder}) => {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <input 
        id={id}      
        type={type}      
        placeholder={placeholder}      
      />
    </div>
  )
}

export default Input;