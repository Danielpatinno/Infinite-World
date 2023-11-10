import { Container } from './style'
import InputMask from 'react-input-mask'

const Input = ({label,type, mask,ref, placeholder,value,onChange}) => {
  return (
    <Container>
    {label}
    <InputMask
      ref={ref}
      mask={mask}
      maskChar='_'
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
    />
    {/* <input
        value={value}
        type={type} 
        placeholder={placeholder}
        onChange={onChange}
    /> */}
    </Container>
  )
}

export default Input