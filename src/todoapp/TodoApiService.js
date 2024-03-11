import axios from "axios";
import { apiClient } from "./ApiClient";





//http://localhost:8080/users/rohit/todos


export const retrieveAllTodosByUsername
    = (username) => apiClient.get(`/users/${username}/todos`)

export const deleteTodoApi
    = (id) => apiClient.delete(`/users/todos/${id}`)

export const retreiveTodoApi
    = (id) => apiClient.get(`/users/todos/${id}`)

export const updateTodoApi
    = (id, todo) => apiClient.put(`/users/todos/${id}`, todo)

export const createTodoApi
    = (username, todo) => apiClient.put(`/users/${username}/todos}`, todo)

//basic-auth
export const executeBasicAuthenticationService
    = (token) => apiClient.get(`/basic-auth`, {
        headers: {
            Authorization: token
        }
    })









export const retrieveHelloWorldPathVarApi
    = (name) => apiClient.get(`/hello-world/${name}`)