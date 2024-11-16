import axios from "axios";

//sajat myAxios peldany letrehozasa es konfiguralasa
export const myAxios = axios.create({
    baseURL: "https://fakestoreapi.com",

});