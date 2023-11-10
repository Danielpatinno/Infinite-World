import  Input  from "../../components/Input/Input";

import { Form, Button } from "./style";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"

import Message from "../../components/Message/Message"

// Redux
import { registerProduct, reset } from "../../slices/productSlice";
import InputMonetario from "../../components/InputMonetario/InputMonetario";

const RegisterProduct = () => {
    const dispatch = useDispatch()

    const {products,loading, message, error} = useSelector((state) => state.product)

    // const newProductForm = useRef()

    const [name, setProduct] = useState("")
    const [price, setPrice] = useState('')
    const [codig, setCodig] = useState("")
    const [productImage, setProductImage] = useState("")

    const resetComponentMessage = () => {
        setTimeout(() => {
          dispatch(reset())
        }, 2000)
      } 
    


    const handleSubmit = (e) => {
        e.preventDefault()

        const productData = {
            name,
            price,
            codig,
            productImage
        }

        const formData = new FormData()

        const photoFormData = Object.keys(productData).forEach((key) => formData.append(key, productData[key]))

        formData.append("product", photoFormData)  
        
        console.log(formData)

        dispatch(registerProduct(formData))

        setProduct("")
        setPrice("")
        setCodig("")
        setProductImage("")

        resetComponentMessage()
    }

    const handleFile = (e) => {
        // image preview
        const productImage = e.target.files[0]
  
        setProductImage(productImage)
    }   

    

  return (

    <Form onSubmit={handleSubmit}>
        <p>Cadastro de Produto</p>
        <Input 
            label="Produto" 
            type="text" 
            placeholder="Dígite seu nome aqui"
            value={name || ""}
            onChange={(e) => setProduct(e.target.value)}
        />

        <InputMonetario 
            label='Preço'
            value={price || ''}
            onChange={(e) => setPrice(e.target.value)}
        />
        {/* <Input 
            ref={inputRef}
            label="Preço" 
            type="text" 
            placeholder="Dígite seu e-mail aqui"
            value={price || ""}
            onChange={handlePriceChange}
        /> */}
        <Input 
            label="Código" 
            type="number" 
            placeholder="Código do produto"
            value={codig || ""}
            onChange={(e) => setCodig(e.target.value)}
        />
        <Input 
            label="Adicione uma foto" 
            type="file"
            onChange={handleFile}
        />
        
        <Button type="submit">Cadastrar</Button>
        {error && <Message msg={error} type="error"/>}
        {message && <Message msg={message} type="success"/>}
    </Form>
       
  )
}

export default RegisterProduct