import { Container } from "./style";

import {BsSearch} from "react-icons/bs"

const InputConsulta = ({type, placeholder,onChange,handleSearch, onCLick}) => {
  return (
    <Container>
    <input                
      type={type} 
      placeholder={placeholder}
      onChange={onChange}
    />                
    <button onClick={handleSearch}>
      <BsSearch size={30} />
    </button>

    </Container>
  )
}

export default InputConsulta;
