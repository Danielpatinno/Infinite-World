import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

// styles
import { Div, Barra, Button, Logo, Grupo, Information } from "./style"

// Icons
import {AiOutlineClockCircle, AiOutlineWhatsApp,AiOutlineUser} from "react-icons/ai"

// Redux
import { logout, reset } from "../../slices/managerSlice"
import { useAuth } from "../../hooks/useAuth"

const Navbar = () => {
  const dispatch = useDispatch()

  const {auth} = useAuth()

  const navigate = useNavigate()

  const handleLogout = (e) => {
    e.preventDefault()
    dispatch(logout())
    dispatch(reset())

    navigate('/loginManager')
  }

  return (
    <Div>
        <Logo />
        <h2>Infinite World</h2>
        {auth ? (
        <Barra>  
          <Link to='/'>
            <Button>
                HOME
            </Button>
            </Link>
            <Grupo>
                <Button>CADASTRO</Button>             
                <div>
                    <Link to="/registerproduct">
                      <Button>PRODUTO</Button>            
                    </Link>
                    <Link to="/registerclient">
                      <Button>CLIENTE</Button>            
                    </Link>  
                </div>    
            </Grupo>

            <Grupo>
                <Button>CONSULTA</Button>                
                <div>
                    <Link to="/product">
                      <Button>PRODUTO</Button>            
                    </Link>
                    <Link to="/clients">
                      <Button>CLIENTE</Button>            
                    </Link>  
                </div>    
            </Grupo>   
            <Button onClick={handleLogout}>SAIR</Button>     
        </Barra>          
        ) : (
          <Barra>
            <Link to='/'>
              <Button>
                Home
              </Button>
            </Link>
            <Link to="/product">
              <Button>Produtos</Button>            
            </Link>
            <Link to='/loginmanager'>
              <Button><AiOutlineUser/>Login</Button> 
            </Link>
          </Barra>
        )}
        <Information>
          <p><AiOutlineClockCircle />Atendimento Seg á Sex 09:00 as 17:00</p>
          <p><AiOutlineWhatsApp />Whatsapp (44) 99967-3794</p>
        </Information>
       
    </Div>
  )
}

export default Navbar