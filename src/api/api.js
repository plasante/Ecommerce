import axios from "axios";
//console.log('API_URL:', process.env.REACT_APP_API_URL);
//console.log('API_URL_PROD:', process.env.REACT_APP_API_URL_PROD);
const api = axios.create({
    baseURL: (process.env.NODE_ENV === "production" ? process.env.REACT_APP_API_URL_PROD : process.env.REACT_APP_API_URL),
})

export default api;