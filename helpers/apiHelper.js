import axios from 'axios';
const BASE_URL = 'https://petstore.swagger.io/v2';


const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
});

export const postRequest = async (endpoint, data) => {
        const response = await axiosInstance.post(endpoint, data);
        return response;
};

export const getRequest = async (endpoint, params) => {
        const response = await axiosInstance.get(endpoint, { params });
        return response;
};

export const putRequest = async (endpoint, data) => {
        const response = await axiosInstance.put(endpoint, data);
        return response;
};

export const deleteRequest = async (endpoint, headers = {}) => {
        const response = await axiosInstance.delete(endpoint, { headers });
        return response;
};