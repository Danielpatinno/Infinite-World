import { Container, Title } from './style'

import {BsArrowLeftSquareFill} from "react-icons/bs"

// Hooks
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useResetComponentMessage } from "../../hooks/useResetComponent"
import { useQuery } from "../../hooks/useQuery";
import { Link } from 'react-router-dom';

// Components
import ViewClient from '../../components/ViewClient/ViewClient';

// Redux
import { searchClient } from '../../slices/clientSlice';
 
const SearchClient = () => {
  const query = useQuery()
  const search = query.get("q")

  const dispatch = useDispatch()

//   const resetMessage = useResetComponentMessage()

  const {clients, loading} = useSelector((state) => state.client)

  useEffect(() => {

    dispatch(searchClient(search))

  }, [dispatch, search])

  if(loading) {
    return <p>Carregando...</p>
  }
  return (
    <Container>
        <Title>
          <h2>Você está buscando por: {search}</h2>
          <Link to='/clients'>
            <BsArrowLeftSquareFill />
          </Link>
        </Title>
        

        {clients && clients.map((client) => (
          <ViewClient 
            id={client._id} 
            nome={client.name} 
            // handleDelete={() => handleDelete(client._id)}
          />
        ))}
    </Container>
  )
}
 
export default SearchClient;