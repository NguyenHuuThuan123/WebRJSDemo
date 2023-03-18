import axios from "axios"
import {config, getDataApi,postDataApi} from "../../utils/axiosConfig" 
const base_url = "http://localhost:5000/api/";

const register = async(userData) => {
    const response = await axios.post(`${base_url}user/register`, userData);
    if(response.data) {
        return response.data;
    }
}

const login = async(userData) => {
    const response = await axios.postDataApi(`${base_url}user/register`, userData,config);
    if(response.data) {
        return response.data;
    }
}