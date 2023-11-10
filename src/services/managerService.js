import { api, requestConfig } from "../utils/config"

const login = async(data) => {
  
  const config = requestConfig("POST", data)

  try {
    const res = await fetch(api + "/loginManager", config)
      .then((res) => res.json())
      .catch((err) => err)

    if(res._id) {
        localStorage.setItem("manager", JSON.stringify(res))
    }

    return res; 
  } catch (error) {
    console.log(error)
  }

}

const logout = () => {
  localStorage.removeItem("manager")
}

const managerService = {
    login,
    logout
}

export default managerService;