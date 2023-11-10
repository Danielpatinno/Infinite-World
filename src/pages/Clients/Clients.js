// hooks
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";

// Components
import InputConsulta from "../../components/InputConsulta/InputConsulta"

// Styles
import { 
  ContainerInput,
  ContainerPrincipal, 
  TableContainer, 
  Container, 
  ModalContainer, 
  SvgContainer
} from "./style";

// Redux
import {useSelector, useDispatch} from "react-redux"
import { deleteClient, getClients, searchClient } from "../../slices/clientSlice";

// icons
import {AiFillDelete} from 'react-icons/ai'
import { BsArrowLeftSquareFill, BsFillEyeFill } from "react-icons/bs"

import Modal from "react-modal"

const Clients = () => {
    const [query, setQuery] = useState("") 
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [openModal, setOpenModal] = useState(undefined)
    const [deleteId, setDeleteId] = useState(undefined)
    const [searchOpen, setSearchOpen] = useState(false)

    const {clients, loading } = useSelector((state) => state.client)

    Modal.setAppElement("#root")

    useEffect(() => {
        dispatch(getClients())
        setSearchOpen(false)
    }, [dispatch])

    const handleDelete = () => {
        dispatch(deleteClient(deleteId))
        setOpenModal(false)
        setDeleteId(undefined)
    }

    const handleSearch = (e) => {
      e.preventDefault()
        
      dispatch(searchClient(query))
      setSearchOpen(true)

      //   if(query) {
      //     return navigate(`/searchClient?q=${query}`)
      // }
    }

    if(loading) {
      return <p>Carregando...</p>
    }

  return (
    <ContainerPrincipal>
      <Modal        
        title="Atenção"          
        isOpen={openModal}  
        style={{
          overlay: {
            margin:"auto"
          },
          content: {
            margin:"auto",
            top: '200px',
            bottom: '280px',
            border: '1px solid black',
            background: '#fff',
            borderRadius: '20px',
            width:"600px",
            maxWidth:'600px'
          }
        }}
      >
        <ModalContainer>
          <h1>Atenção</h1>
          <p>Deseja excluir o cliente ?</p>
          <button className="confirm" onClick={handleDelete}>Excluir</button>
          <button 
            className="cancel" 
            onClick={() => setOpenModal(false)}>
            Cancelar
          </button>
        </ModalContainer>

      </Modal>
      <ContainerInput>
        <p>Pesquizar Cliente</p>
        <InputConsulta 
          handleSearch={handleSearch}
          onChange={(e) => setQuery(e.target.value)}
          type="text" 
          placeholder="Nome do Cliente"
        />
     
      </ContainerInput>
      {clients && clients.length === 0 ? (
        <div>
         {searchOpen && 
          <BsArrowLeftSquareFill               
            size={45}
            onClick={() => {window.location.reload()}}
          />
          }
        </div> 
      ) : (
      <Container>
        {searchOpen && (
          <SvgContainer>
            <BsArrowLeftSquareFill 
            size={45}
            onClick={() => { window.location.reload() }}
            />
          </SvgContainer>
          )     
        }

        <TableContainer border="1">
        <thead>
          <th>N°</th>
          <th>Nome</th>
          <th>E-mail</th>
        </thead>
        {clients.map((cli, index) => (         
          <tr>
            <td>{index + 1}</td>
            <td>{cli.name}</td>
            <td className="tdDelete">
              {cli.email} 
              <div>
                <Link to={`/clientdetails/${cli._id}`}>
                  <BsFillEyeFill title="Detalhes"/>
                </Link>
                <Link>
                  <AiFillDelete onClick={() => {
                    setOpenModal(true)
                    setDeleteId(cli._id)
                  }} title="Deletar"/>
                </Link>
              </div>
            </td>
          </tr>    
      ))}
        </TableContainer>
      </Container>
      ) }
    </ContainerPrincipal>
  )
}
export default Clients