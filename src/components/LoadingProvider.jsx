import { createContext , useContext, useState } from "react"

const LoadingData = createContext()
export const useLoading = () => useContext(LoadingData)

export const LoadingProvider = ({children}) => {
    const [isLoading,setIsLoading] = useState(false) 
    return(
        <LoadingData.Provider value={{isLoading,setIsLoading}}>
            {children}
        </LoadingData.Provider>
    )
}