import axios from "axios"

const API = axios.create({baseURL: 'https://edu-cell.vercel.app'});

export const addUser = (data) => API.post('/users', data)