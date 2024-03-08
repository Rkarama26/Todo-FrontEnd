import axios from "axios";


export const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
);


//http://localhost:8080/users/rohit/todos


 export const retrieveAllTodosByUsername
    = (username) => apiClient.get(`/users/${username}/todos`)

    export const deleteTodoApi
    = (id) => apiClient.delete(`/users/todos/${id}`)

    export const retreiveTodoApi
    = (id) => apiClient.get(`/users/todos/${id}`)

    export const updateTodoApi
    = (id, todo) => apiClient.put(`/users/todos/${id}`, todo)

    









export const retrieveHelloWorldPathVarApi
    = (name) => apiClient.get(`/hello-world/${name}`)