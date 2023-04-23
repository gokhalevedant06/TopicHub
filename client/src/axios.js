import axios from "axios"
const instance = axios.create({
    baseURL: 'https://topichub-api.onrender.com',
});
export default instance;
