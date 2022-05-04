import axios from "axios"

const http = axios.create({
    baseURL: "https://api.b7web.com.br/devsfood/api"
})

export const api = {
    getCategories: async () => {
        let response = await http.get('/categories')
        return response.data
    },

    getProducts: async (category, page, search) => {
        let fields = {}

        if(category !== 0){
            fields.category = category
        }

        if(page > 0){
            fields.page = page
        }

        if(search !== ''){
            fields.search = search
        }

        let queryString = new URLSearchParams(fields).toString()


        let response = await http.get('/products?'+ queryString)
        return response.data
    }
}