import { Container } from "./style"

import {AiFillInstagram, AiFillFacebook, AiOutlineTwitter, AiFillYoutube} from "react-icons/ai"

const Footer = () => {
  return (
    <Container>
      <h2>Contato</h2>
      <p>Av. Brasil, 4970, Maringá-PR</p>
      <h2>Redes Sociais</h2>
      <div>
        <a href="#">
          <AiFillInstagram />
        </a>
        <a href="#">
          <AiFillFacebook />
        </a>
        <a href="#">
          <AiOutlineTwitter />
        </a>
        <a href="#">
          <AiFillYoutube />
        </a>
      </div>
      <p>&copy; Infinite World 2023</p>
    </Container>
  )
}

export default Footer