import { Formulário, ButtonSubmit, Tittle, Container, Button } from "./style"
import { useSelector, useDispatch } from "react-redux"

import { useEffect, useState } from "react"
import Input from "../../components/Input/Input"

import { useResetComponent } from "../../hooks/useResetComponent"

import { login, reset } from "../../slices/managerSlice"
import { Link } from "react-router-dom"
import Message from "../../components/Message/Message"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()
    const resetComponent = useResetComponent(dispatch)
    const {loading, error} = useSelector((state) => state.auth)

    const handleLogin = (e) => {
      e.preventDefault()
      const manager = {
        email,
        password
      }

      dispatch(login(manager))
      resetComponent()
    }

    useEffect(() => {
      dispatch(reset())
    }, [dispatch])
  return (
    <Container>
        {/* <Tittle>Infinite World</Tittle>
        <Link to='/'>
          <Button>
            Página Inicial
          </Button>
        </Link> */}
        <Formulário onSubmit={handleLogin}>
          <h3>Faça Login</h3>
          <Input 
            label="E-mail"
            type="text"
            placeholder="Digite seu e-mail aqui"
            onChange={(e) => setEmail(e.target.value)}
          /> 
          <Input 
            label="Senha"
            type="password"
            placeholder="Digite sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />

          <ButtonSubmit type="submit" value="Acessar"/>
          {error && (<Message msg={error} type='error' />)}
        </Formulário>

        
        
    </Container>
  )
}

export default Login;