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
    try {
        const response = await axiosInstance.post(endpoint, data);
        return response;
    } catch (error) {
        return error.response;
    }
};

export const getRequest = async (endpoint, params) => {
    try {
        const response = await axiosInstance.get(endpoint, { params });
        return response;
    } catch (error) {
        return error.response;
    }
};

export const putRequest = async (endpoint, data) => {
    try {
        const response = await axiosInstance.put(endpoint, data);
        return response;
    } catch (error) {
        return error.response;
    }
};

export const deleteRequest = async (endpoint, headers = {}) => {
    try {
        const response = await axiosInstance.delete(endpoint, { headers });
        return response;
    } catch (error) {
        return error.response;
    }
};