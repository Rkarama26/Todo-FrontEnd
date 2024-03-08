import axios from "axios";



export const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
);




export const retrieveHelloWorldBean
    = () => axios.get('http://localhost:8080/hello-world-bean')


export const retrieveHelloWorldPathVarApi
    = (name) => apiClient.get(`/hello-world/${name}`)