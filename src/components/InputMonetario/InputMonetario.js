import { NumericFormat } from 'react-number-format'
import { Container } from './style';

const InputMonetario = ({onChange, value, label}) => {

  return (
      <Container>
        <label>{label}</label>
        <NumericFormat
          onChange={onChange}
          value={value}
          fixedDecimalScale
          decimalScale={2}
          thousandSeparator='.'
          decimalSeparator=','
          prefix='R$ '
          placeholder='Digite o preço do produto'
        />  
      </Container>
  )
}

export default InputMonetario;