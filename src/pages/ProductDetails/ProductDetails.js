// Styles
import { ContainerProduct, Container } from './style';

// Icons
import {BsArrowLeftSquareFill } from "react-icons/bs"

// Backend
import { uploads } from '../../utils/config';

// hooks
import { useEffect } from 'react';
import {useSelector, useDispatch} from "react-redux"
import {Link, useParams} from "react-router-dom";

// Redux
import { getProductByid } from "../../slices/productSlice";


const ProductDetails = () => {
    const { id } = useParams()
    const dispatch = useDispatch()

    const {product, loading} = useSelector((state) => state.product)


    useEffect(() => {
        dispatch(getProductByid(id))
    }, [dispatch])


    if(loading) {
        return <p>Carregando...</p>
    }

  return (
    <Container>
        <Link to={`/product`}>
          <BsArrowLeftSquareFill />
        </Link>
      <ContainerProduct>
        <h1>{product.name}</h1>
        {product.productImage && (
            <img 
              src={`${uploads}/${product.productImage}`} alt=""/>
        )}
        <h1>{product.price}</h1>
      </ContainerProduct> 
   
    </Container>
  )
}

export default ProductDetails;