// Styles
import { Container, ContainerHeader, Button } from "./style"

// Icons
import {BsArrowLeftSquareFill} from "react-icons/bs"
import { AiFillEdit, AiFillCloseCircle } from 'react-icons/ai'

// Hooks
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams , Link} from "react-router-dom"

// Redux
import { getClientById, reset, updateClient } from "../../slices/clientSlice"
import Message from "../../components/Message/Message"
import Input from "../../components/Input/Input"

const ClientDetails = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [editId, setEditId] = useState('')

  const [showEdit, setShowEdit] = useState(undefined)

  const {client, loading, message, error} = useSelector((state) => state.client)

  useEffect(() => {
    dispatch(getClientById(id))
  },[dispatch, id])

  useEffect(() => {
    if(client) {
      setName(client.name)
      setEmail(client.email)
      setPhone(client.phone)
      setEditId(client._id)
    }
  }, [client])

  const resetComponentMessage = () => {
    setTimeout(() => {
      dispatch(reset())
    }, 2000)
  } 

  const handleUpdate = (e) => {
    e.preventDefault()

    const clientData = {
      name: name,
      email: email,
      phone: phone,
      id: editId
    }

    dispatch(updateClient(clientData))
    resetComponentMessage()
  }

  const formatarData = (data) => {
    const dataAtual = new Date()
    const anoAtual = dataAtual.getFullYear()
    const dataObj = new Date(data);
    const dia = String(dataObj.getDate()).padStart(2, '0');
    const mes = String(dataObj.getMonth() + 1).padStart(2, '0');   
    const ano = dataObj.getFullYear();
    const idade = anoAtual - ano
    return `${dia}/${mes}/${ano} ${"-"} Idade: ${idade}`;
  }

  if(loading) {
    return 'Carregando...'
  }
    
  return (
    <>
    {showEdit ? (
    <Container>      
        <Link to={`/clients`}>
          <BsArrowLeftSquareFill onClick={() => setShowEdit(false)} />
        </Link>
        <ContainerHeader>
          <h2>Editando</h2>
          <AiFillCloseCircle onClick={() => setShowEdit(false)}/> 
        </ContainerHeader>
        <hr />
        <div>
          <Input
            label='Nome'          
            type="text" 
            value={name || ''}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <Input
              label='E-mail'         
              type="text"
              value={email || ''} 
              onChange={(e) => setEmail(e.target.value)}      
          />
        </div>
        <div>
          <Input 
            label='Telefone'
            mask="(99) 99999-9999" 
            type="text" 
            value={phone || ''}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <Button onClick={handleUpdate}>Salvar</Button>
        {message && <Message msg={message} type='success' />}
        {error && <Message msg={error} type='error' />}
    </Container>      
    ) : (
    <Container>      
        <Link to={`/clients`}>
          <BsArrowLeftSquareFill />
        </Link>
        <ContainerHeader>
          <h2>DADOS DO CLIENTE</h2>
          <AiFillEdit onClick={() => setShowEdit(true)}/> 
        </ContainerHeader>
        <hr />
        <p>Nome: {client.name}</p>
        <p>Nascimento: {formatarData(client.date)}</p>
        <p>CPF: {client.cpf}</p>
        <p>E-mail: {client.email}</p>
        <p>Telefone: {client.phone}</p>

    </Container>       
    )} 
    </>

  )
}

export default ClientDetails