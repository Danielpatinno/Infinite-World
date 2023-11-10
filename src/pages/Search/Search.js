import { Container, Title } from './style'

import {BsArrowLeftSquareFill} from "react-icons/bs"

// Hooks
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useResetComponentMessage } from "../../hooks/useResetComponent"
import { useQuery } from "../../hooks/useQuery";
import { Link } from 'react-router-dom';

// Components
import ViewProduct from "../../components/ViewProduct/ViewProduct";

// Redux
import { searchProduct } from "../../slices/productSlice"
 
const Search = () => {
  const query = useQuery()
  const search = query.get("q")

  const dispatch = useDispatch()

//   const resetMessage = useResetComponentMessage()

  const { products, loading } = useSelector((state) => state.product)

  useEffect(() => {

    dispatch(searchProduct(search))

  }, [dispatch, search])

  if(loading) {
    return <p>Carregando...</p>
  }
  return (
    <Container>
        <Title>
          <h2>Você está buscando por: {search}</h2>
          <Link to='/product'>
            <BsArrowLeftSquareFill />
          </Link>
        </Title>
        

        {products && products.map((product) => (
            <ViewProduct 
                name={product.name}
                price={product.price}
                productImage={product.productImage}
                id={product._id}
            />
        ))}
    </Container>
  )
}
 
export default Search;