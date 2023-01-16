import { fetchWrapper } from '../helpers';
import getConfig from 'next/config';
const { publicRuntimeConfig,reactStrictMode } = getConfig();


const baseUrl = `${publicRuntimeConfig.apiUrl}/clients`;

export const clientService = { 
    getAll
};


function getAll() {
    return fetchWrapper.get(baseUrl);
}

