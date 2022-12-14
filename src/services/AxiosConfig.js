import axios from "axios";

const BASE_URL = "http://localhost:8080";

axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

export default axios.create({
    baseURL: BASE_URL,
    timeout: 1000
});