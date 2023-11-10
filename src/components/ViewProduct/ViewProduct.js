// Icons
import {BsFillCartPlusFill, BsFillEyeFill} from "react-icons/bs"
import {AiFillDelete,AiOutlineWhatsApp, AiFillEdit} from "react-icons/ai"

import Modal from "react-modal"

// style
import { Container, Image, Description, ModalContainer } from "./style"

// Hooks
import { Link } from "react-router-dom"

// Backend
import { uploads } from "../../utils/config"
import { useAuth } from "../../hooks/useAuth"
import { useEffect, useState } from "react"
import Input from "../Input/Input"
import { useDispatch, useSelector } from "react-redux"
import { getProductByid ,updateProduct } from "../../slices/productSlice"

const ViewProduct = ({nameP, priceP, productImage,id, handleDeleteProduct}) => {   
  const dispatch = useDispatch()
  
  const [openModal, setOpenModal] = useState(undefined)
  const [openModalMessage, setOpenModalMessage] = useState(undefined)


  const { auth } = useAuth()

  Modal.setAppElement("#root")


  const handleSendMessageWhatsapp = () => {
    const phoneNumber = '+55 44 998451188'
    const message = `Olá, tudo bem ? Gostei de um produto em seu site, o ${nameP}, estão custando R$ ${priceP},00.Pode me passar mais informações do produto por gentileza.`; 

    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank');
  }

  return (
    <Container>
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
          <p>Deseja excluir o produto ?</p>
          <button className="confirm" onClick={handleDeleteProduct}>Excluir</button>
          <button 
            className="cancel" 
            onClick={() => setOpenModal(false)}>
              Cancelar
          </button>
        </ModalContainer>
      </Modal>
      <Modal         
        title="Atenção"          
        isOpen={openModalMessage}  
        style={{
          overlay: {
            margin:"auto"
          },
          content: {
            margin:"auto",
            top: '190px',
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
          <p>Interessado no produto ? Clique no botão Enviar para entrar em contato</p>
          <button 
            className="enviar" 
            onClick={() => 
              handleSendMessageWhatsapp()
            }>
              Enviar <AiOutlineWhatsApp size={15} />
          </button>
          <button 
            className="cancel" 
            onClick={() => setOpenModalMessage(false)}>
              Cancelar
          </button>
        </ModalContainer>
      </Modal>


        <Container to={`/productdetails/${id}`}>
            <Image src={`${uploads}/${productImage}`} />
            <Description>
                <h2>{nameP}</h2>
                <p>{priceP}</p>
                <Link>
                  <BsFillCartPlusFill onClick={() => setOpenModalMessage(true)}/>
                </Link>
                {/* <Link to={`/productdetails/${id}`}>
                  <BsFillEyeFill />
                </Link> */}
                {auth && 
                <Link>
                  <AiFillDelete onClick={() => setOpenModal(true)}/>
                </Link>}
                {auth && 
                <Link to={`/editproduct/${id}`}>
                  <AiFillEdit />
                </Link>} 
            </Description>
        </Container>
    </Container>
  )
}

export default ViewProduct; 