import axios from 'axios';
import { baseUrl } from './baseUrl';
import { getCookie } from './helper';

const auth_token = getCookie('auth_token');

export const api = axios.create({
    withCredentials: true,
    baseURL: baseUrl,
    headers: {
        'Authorization': 'Bearer ' + auth_token,
        'Content-Type': 'application/json',
    }
});
