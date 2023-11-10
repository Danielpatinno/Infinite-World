import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Message from "../../components/Message/Message";
import { getProductByid, updateProduct, reset } from "../../slices/productSlice";
import { uploads } from "../../utils/config"
import { Container,ContainerInput } from "./style";
import {BsArrowLeftSquareFill} from 'react-icons/bs'
import InputMonetario from "../../components/InputMonetario/InputMonetario";


const EditProduct = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [editName, setEditName] = useState('')
  const [editPrice, setEditPrice] = useState('')
 
  const { product, message, error} = useSelector((state) => state.product)
  const [editProduct, setEditProduct] = useState('')

  useEffect(() => {
    dispatch(getProductByid(id))

  }, [dispatch, id])

  useEffect(() => {
    if(product) {
      setEditName(product.name)
      setEditPrice(product.price)
      setEditProduct(product._id)
    }
    
  },[product])

  const resetComponentMessage = () => {
    setTimeout(() => {
      dispatch(reset())
    }, 2000)
  } 

  const handleSubmit = async(e) => {
    e.preventDefault()

    const productData = {
        name: editName,
        price: editPrice,
        id: editProduct
    }
    
    dispatch(updateProduct(productData))
    resetComponentMessage()
  }

  return (
    <Container>
        <Link to={`/product`}>
          <BsArrowLeftSquareFill />
        </Link>
        <h1>Editar Produto</h1>
        <img src={`${uploads}/${product.productImage}`} alt={product.name}/>
        <form onSubmit={handleSubmit}>
            <ContainerInput>
             <label>Nome produto
               <input 
                 type="text"
                 value={editName || ''}
                 onChange={(e) => setEditName(e.target.value)}
                /> 
             </label>
            </ContainerInput>
            <ContainerInput>
            <label>Preço do produto
              <InputMonetario 
                value={editPrice || ''}
                onChange={(e) => setEditPrice(e.target.value)}
              />   
             </label>
            </ContainerInput>
            <input type="submit" value='Salvar' />
            {/* <Message msg={'Erro'} type="success"/> */}
            {error && <Message msg={error} type="error"/>}
            {message && <Message msg={message} type='success'/> }
        </form>
    </Container>
  )
}

export default EditProduct;