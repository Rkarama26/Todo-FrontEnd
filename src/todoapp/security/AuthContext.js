import React, { createContext, useContext, useState } from 'react'
import { executeBasicAuthenticationService } from '../TodoApiService'
import { apiClient } from '../ApiClient'
//import{ config } from 'npm'

// 1. Create a context 
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)


//2. share the created context with other components
export default function AuthProvider({ children }) {

    const [number, setNumber] = useState(10)

    const [username, setUsername] = useState(null)

    const [token, setToken] = useState(null)

    //3. put some state in the this.state.
    const [isAuthenticated, setAuthenticated] = useState(false)

    //setInterval(() => setNumber(number + 1), 10000)

    // const valueBeShared = {number, isAuhtenticated, setAuthenticated}

    //HARDCODED LOGIN CREDENTIALS FOR LOGIN----------------
    // if (userName === 'Rohitkarma' && password === 'rohit2003') {
    //     setAuthenticated(true);
    //     setUsername(userName);
    //     return true;
    // }
    // else {
    //     setAuthenticated(false);
    //     setUsername(null)
    //     return false;
    // }

    //BY SPRING SECURITY(basic authentiaction)-----------
    async function login(userName, password) {

        //base64 encoding
        const baToken = 'Basic ' + window.btoa(userName + ":" + password)
        try {
            const response = await executeBasicAuthenticationService(baToken)

            if (response.status == 200) {
                setAuthenticated(true);
                setUsername(userName);
                setToken(baToken);
                
                //adding header(baToken) to everyApi requests
                apiClient.interceptors.request.use(
                    (config)=>{
                        console.log('intercepting and adding a token')
                        config.headers.Authorization = baToken
                        return config;
                    }
                )



                return true;
            }
            else {
                setAuthenticated(false);
                setUsername(null)
                setToken(null);
                return false;
            }
        }
        catch (error) {
            console.log("error")
            logout();
            return false;
        }


    }

    function logout() {
        logout();
    }


    return (
        <AuthContext.Provider value={{ number, isAuthenticated, login, logout, username, token }}>
            {children}
        </AuthContext.Provider>
    )
}




