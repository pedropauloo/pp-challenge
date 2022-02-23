import axios from "axios";

const api = axios.create({
  baseURL: "https://pp-api-desafio.herokuapp.com/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default api;
