// lib/api.ts
import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.BackendAPI}`,
});


export default api;