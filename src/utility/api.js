//creating the axios instance

import axios from 'axios';
import { baseUrl } from './baseUrl';

export const api = axios.create({
    baseURL: baseUrl,
    headers: {
        // 'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
        'Content-Type': 'application/json'
    }
});