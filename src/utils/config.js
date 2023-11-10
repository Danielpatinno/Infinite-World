export const api = "http://localhost:5000"
export const uploads = "http://localhost:5000/uploads"


export const requestConfig = (method,data, productImage = null) => {

    let config

    if(productImage) {
        config = {
            method,
            body: data,
            headers: {},
        }
    } else if(method === "DELETE" || data === null) {

        config = {
            method:method,
            headers: {},
        }

    } else {
        config = {
            method: method,
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }
    }

    return config;

}