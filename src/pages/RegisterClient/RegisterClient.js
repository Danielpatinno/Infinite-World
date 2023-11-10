// Components
import Input from "../../components/Input/Input";
import Message from "../../components/Message/Message";

// Styles
import { Form, Button } from "./style";

// hooks
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useResetComponent } from "../../hooks/useResetComponent";

// Redux
import { registerClient, reset } from "../../slices/clientSlice";

const RegisterClient = () => {
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [cpf, setCpf] = useState('')

    const dispatch = useDispatch()

    const resetComponent = useResetComponent(dispatch)

    const {loading, error, message} = useSelector((state) => state.client)


    const handleSubmit = async(e) => {
        e.preventDefault()
        const client = {
            name,
            date,
            cpf,
            email,
            phone
        }

        dispatch(registerClient(client))

        setName("")
        setDate("")
        setCpf("")
        setEmail("")
        setPhone("")
        
        
        resetComponent()
    }

    useEffect(() => {

        dispatch(reset())

    }, [dispatch])


  return (
    <Form onSubmit={handleSubmit} >
    <p>Cadastro de Cliente</p>
    <Input 
        label="Nome Completo" 
        type="text" 
        placeholder="Dígite seu nome aqui"
        value={name || ""}
        onChange={(e) => setName(e.target.value)}
    />
    <Input 
      type="date"
      value={date || ''}
      label='Data de Nascimento'
      onChange={(e) => setDate(e.target.value)}
    />
    <Input 
        label="CPF"
        mask="999.999.999-99" 
        placeholder="Dígite seu CPF aqui"
        value={cpf || ""}
        onChange={(e) => setCpf(e.target.value)}
    />
    <Input 
        label="E-mail" 
        type="text" 
        placeholder="Dígite seu e-mail aqui"
        value={email || ""}
        onChange={(e) => setEmail(e.target.value)}
    />
    <Input 
        label="Telefone" 
        mask="(99) 99999-9999" 
        placeholder="Dígite seu telefone aqui"
        value={phone || ""}
        onChange={(e) => setPhone(e.target.value)}
    />
    
    <Button type="submit">Cadastrar</Button>
    {loading && (<p>Carregando...</p>)}
    {error && <Message msg={error} type="error"/>}
    {message && <Message msg={message} type="success"/>}
</Form>
  )
}

export default RegisterClient