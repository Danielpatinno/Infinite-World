import {useState, useEffect} from "react"


// Fazer requisições
export const useFetch = (url) => {
    const [data, setData] = useState(null)

    // Refatorar req
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)

    const [loading, setLoading] = useState(false)
    const [error,setError] = useState(null)
    const [itemId, setItemId] = useState(null)

    const httpConfig = (data, method) => {
        if(method === "POST") {
            setConfig({
                method,
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            }
            )

            setMethod(method)
        } else if(method === "DELETE"){
            setConfig({method,
                headers: {
                    "Content-type":"application/json"
                }
            });

        setMethod(method)
        setItemId(data)
        }
    }


    // Refatorar post
    useEffect(() => {

        const httpRequest = async() => {
            if(method === "POST"){

                let fetchOptions = [url, config]

                const res = await fetch(...fetchOptions)

                const json = await res.json()


                setCallFetch(json)
            } else if(method === "DELETE") {
                const deleteUrl = `${url}/${itemId}`

                const res = await fetch(deleteUrl, config)

                const json = await res.json()

                setCallFetch(json)
            }
        }

        httpRequest()
    },[config, method, url])

    return {data, httpConfig, loading, error}
}

