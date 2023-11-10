// requisição HTTP
import { api, requestConfig } from "../utils/config";

// Registrar cliente
const registerClient = async(data) => {
    const config = requestConfig("POST", data)

    try {
      
        const res = await fetch(api + "/create",config)
            .then((res) => res.json())
            .then((err) => err)

        return res;

    } catch (error) {
        console.log(error)
    }
}

// Deletar cliente
const deleteClient = async(id) => {

    const config = requestConfig("DELETE", null)

    try {
        
        const res = await fetch(api + "/delete/"+id, config)
            .then((res) => res.json())
            .catch((err) => err)

        return res;
    } catch (error) {
        console.log(error)
    }

}


// Pegar todos os clientes
const getClient = async() => {

    const config = requestConfig("GET",null)

    try {
        
        const res = await fetch(api + "/clients", config)
            .then((res) => res.json())
            .then((err) => err)

        return res;
    } catch (error) {
        console.log(error)
    }

}

// Pegar client por id
const getClientById = async(id) => {

    const config = requestConfig("GET")

    try {
        
      const res = await fetch(api + "/clientDetails/"+id, config)
        .then((res) => res.json())
        .catch((err) => err)

      return res;
    } catch (error) {
        console.log(error)
    }

}

// Procurar cliente
const searchClients = async(query) => {
    const config = requestConfig("GET")

    try {
        const res = await fetch(api + "/searchClient?q="+query, config)
            .then((res) => res.json())
            .catch((err) => err)
        
        return res;
    } catch (error) {
        console.log(error)
    }
}

// Atualizar cliente
const updateClient = async(data, id) => {
  const config = requestConfig("PUT", data)

  try {
    const res = await fetch(api + "/client/"+id, config)
      .then((res) => res.json())
      .catch((err) => err)
    return res;
  } catch (error) {
    console.log(error)
  }
}

const clientService = {
    registerClient,
    deleteClient,
    getClient,
    getClientById,
    searchClients,
    updateClient
}

export default clientService