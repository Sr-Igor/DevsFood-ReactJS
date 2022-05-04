import axios from "axios"

const http = axios.create({
    baseURL: "https://api.b7web.com.br/devsfood/api"
})

export const api = {
    getCategories: async () => {
        let response = await http.get('/categories')
        return response.data
    },

    getProducts: async () => {
        let response = await http.get('/products')
        return response.data
    }
}