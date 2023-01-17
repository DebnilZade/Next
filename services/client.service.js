import { fetchWrapper } from '../helpers';
import getConfig from 'next/config';
const { publicRuntimeConfig,reactStrictMode } = getConfig();


const baseUrl = `${publicRuntimeConfig.apiUrl}/clients`;

export const clientService = { 
    getAll,
    add
};


function getAll() {
    return fetchWrapper.get(baseUrl);
}

function add(client){
    return fetchWrapper.post(`${baseUrl}/add`,client);
}

