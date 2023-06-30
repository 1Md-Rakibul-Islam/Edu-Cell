import axios from "axios"

const API = axios.create({baseURL: 'http://localhost:5000'});
// const API = axios.create({baseURL: 'https://edu-cell.vercel.app'});

export const addUser = (data) => API.post('/users', data);
export const loginUser = (data) => API.post('/users/login', data);
export const authData = (data) => API.post('/users/auth', data);