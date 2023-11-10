import {api, requestConfig} from "../utils/config"

// Cadastrar Produto
const registerProduct = async(data) => {

    const config = requestConfig("POST", data, true)

    try {

        const res = await fetch(api + "/createProduct", config)
            .then((res) => res.json())
            .catch((err) => err)

        return res;
    } catch (error) {
        console.log(error)
    }
}

// Deletar Produtos
const deleteProdutos = async(id) => {
    const config = requestConfig("DELETE", null)

    try {
        
        const res = await fetch(api + "/deleteProduct/"+id, config)
            .then((res) => res.json())
            .catch((err) => err)

        return res;
    } catch (error) {
        console.log(error)
    }
}



// Pegar produtos
const getProducts = async() => {

    const config = requestConfig("GET")

    try {

        const res = await fetch(api + "/products", config)
                    .then((res) => res.json())
                    .catch((err) => err)

        return res;
    } catch (error) {
        console.log(error)
    }

}

// Pegar produto por id
const getProductId = async(id) => {

    const config = requestConfig("GET")

    try {
        
      const res = await fetch(api + "/productDetails/"+id, config)
            .then((res) => res.json())
            .catch((err) => err)

      return res;
    } catch (error) {
        console.log(error)
    }

}

// Procurar produto
const searchProducts = async(query) => {

    const config = requestConfig("GET")

    try {
      const res = await fetch(api + "/search?q=" + query, config)
        .then((res) => res.json())
        .catch((err) => err)

      return res;
    } catch (error) {
        console.log(error)
    }
}

// Atualizar product
const updateProduct = async(data, id) => {
  const config = requestConfig("PUT", data)
 
  try {
    const res = await fetch(api + '/product/' + id, config)
      .then((res) => res.json())
      .catch((err) => err)
    return res;

  } catch (error) {
    console.log(error)
  }
}

const productService = {
    registerProduct,
    deleteProdutos,
    getProducts,
    getProductId,
    searchProducts,
    updateProduct
}

export default productService;