// hooks
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Components
import ViewProduct from "../../components/ViewProduct/ViewProduct"
import InputConsulta from "../../components/InputConsulta/InputConsulta"

// Redux
import { deleteProduct, getProducts } from '../../slices/productSlice'
import { useDispatch, useSelector } from 'react-redux';

// Style
import { Container, ContainerProduct } from "./style";

const Produtos = () => {
    const [query, setQuery] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { products, loading} = useSelector((state) => state.product)

    useEffect(() => {
      dispatch(getProducts())
    }, [dispatch])

    const handleDeleteProduct = (id) => {
      dispatch(deleteProduct(id))
    }

    const handleSearch = (e) => {
      e.preventDefault()
        console.log(query)
      if(query) {
        return navigate(`/search?q=${query}`)
      }
    }

    if(loading) {
      return <p>Carregando...</p>
    }    

  return (
    <div>

      <Container>
          <p>Consulta Produto</p>
          <InputConsulta
          handleSearch={handleSearch}
          onChange={(e) => setQuery(e.target.value)} 
          type="text" 
          placeholder="Nome do Produto"
          />
      </Container> 
      {products && products.length === 0 && (
              <p>Ainda não há prudutos cadastrado.</p>
          )}
      <ContainerProduct>
          {products && products.map((p) => (
            <ViewProduct 
              key={p._id}
              nameP={p.name} 
              priceP={p.price}
              productImage={p.productImage}
              id={p._id}
              handleDeleteProduct={() =>  handleDeleteProduct(p._id)}
            />
          ))}
      </ContainerProduct>
    </div>
  )
}

export default Produtos;