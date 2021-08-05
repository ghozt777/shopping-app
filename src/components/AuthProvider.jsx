import { createContext, useContext, useEffect, useState } from 'react'

export const AuthData = createContext()

export const useAuth = () => useContext(AuthData)

export const AuthProvider = ({children}) => {
    
    const [login,setLogin] = useState(false)
    useEffect(() => {
        const loginData = localStorage.getItem('login')
        if(loginData){
            setLogin(JSON.parse(loginData))
        }
    },[])

    useEffect(() => {
        localStorage.setItem('login',JSON.stringify(login))
    })


    
    return(
        <>
            <AuthData.Provider value={{login,setLogin}}>
                {children}
            </AuthData.Provider>
        </>
    )
}