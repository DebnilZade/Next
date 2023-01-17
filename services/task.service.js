import { fetchWrapper } from '../helpers';
import getConfig from 'next/config';
const { publicRuntimeConfig,reactStrictMode } = getConfig();


const baseUrl = `${publicRuntimeConfig.apiUrl}/tasks`;

export const taskService = { 
    getAll,
    add
};

function add(task){
    return fetchWrapper.post(`${baseUrl}/add`,task);
}

function getAll() {
    return fetchWrapper.get(baseUrl);
}

