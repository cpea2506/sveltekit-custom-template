import axios from "axios";

const config = {
    /*baseURL: fullfil from enviroment variable */
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    },
    params: {},
};

const client = axios.create(config);

export default client;
