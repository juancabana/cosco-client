import axios from "axios";

export const coscoApi = axios.create({
    // baseURL: process.env.GATSBY_API_URL,
    baseURL: 'http://localhost:3000/api',
    headers: {

    }
});

