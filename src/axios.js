import axios from "axios";

const url = axios.create({
    baseURL: "https://api.github.com",
});

export  default url;