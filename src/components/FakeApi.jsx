import { createContext, useContext } from 'react' 
import {useLoading} from './LoadingProvider'
import {useUsers} from './UsersProvider'

const ApiData = createContext()

export const useApi = () => useContext(ApiData)

export const ApiProvider = ({children}) => {

    const {users} = useUsers()
    const {setIsLoading} = useLoading()
    
    const fakeApi = ({...userInfo}) => {
        setIsLoading(true)
        const currUser = users.find(usr => usr.username===userInfo.username)
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                if(currUser){
                    if(userInfo.password===currUser.password){
                        resolve({success:true,status:200})
                        setIsLoading(false)
                    }
                    else{
                        resolve({success:false,status:401})
                        setIsLoading(false)
                    }
                }
                else{
                    resolve({success:false,status:404})
                    setIsLoading(false)
                }
            },10000)
        })
    }
    return(
        <ApiData.Provider value={fakeApi}>
            {children}
        </ApiData.Provider>
    )
}