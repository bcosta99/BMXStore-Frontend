import axios from "./AxiosConfig";

const getShopCart = async () => {
    const bearerToken = JSON.parse(localStorage.getItem('user')).accessToken;

    const request = await axios.get('/cart', {
        headers: {
            'Authorization': `Bearer ${bearerToken}`
        }
    })
    return request
}

const addShopCart = async (data) => {
    const bearerToken = JSON.parse(localStorage.getItem('user')).accessToken;

    const request = await axios.post('/cart/add', data, {
        headers: {
            'Authorization': `Bearer ${bearerToken}`
        }
    })
    return request
}

const deleteItemSC = async (id) => {

    const request = await axios.delete(`/cart/delete/${id}`)
    return request
}
export {
    getShopCart,
    addShopCart,
    deleteItemSC
}