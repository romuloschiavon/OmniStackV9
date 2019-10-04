import axios from 'axios';

const api = axios.create({
    baseURL: 'http://200.135.90.45:3333', //Ip UFSC
})

export default api;