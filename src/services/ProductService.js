import axios from "./AxiosConfig";

const getAllProducts = async () => {
    return await axios.get('/products/')
}

const getProductByID = async (id) => {
    return await axios.get(`/products/${id}`)
}

const getByCategory = async (category) => {
    return await axios.get(`/products/category/${category}`)
}

const searchByName = async (name) => {
    return await axios.get('/products/search/', {params: {name: ""}})
}

const postProduct = async (data) => {
    return await axios.post('/products/', data)
}

const updateProduct = async (id, data) => {
    return await axios.put(`/products/${id}`, data)
}

const deleteById = async (id) => {
    return await axios.delete(`/products/${id}`)
}

export {
    getAllProducts,
    getProductByID,
    getByCategory,
    searchByName,
    updateProduct,
    deleteById,
    postProduct
}