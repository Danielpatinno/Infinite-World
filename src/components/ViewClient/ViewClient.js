// Styles
import { Container, ModalContainer } from "./style"

// hooks
import { useState } from "react"

// Icons
import { BsFillEyeFill } from "react-icons/bs"
import {AiFillDelete} from "react-icons/ai"

// Components
import Modal from "react-modal"
import { Link } from "react-router-dom"

const ViewClient = ({nome, id, handleDelete }) => {
  const [openModal, setOpenModal] = useState(undefined)

  Modal.setAppElement("#root")

  return (
    <Container to={`/clientdetails/${id}`}>
    <div className="profileImage">

    </div>
    <div className="profileName">
        <p>{nome}</p>
    </div>

    <div className="buttons">
      <AiFillDelete 
        size={22} 
        onClick={() => setOpenModal(true)} 
      />
    </div>      
</Container> 
  )
}

export default ViewClient