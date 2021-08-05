import { createContext, useContext, useEffect, useState } from 'react'
import {useApi} from './FakeApi'
import {useUsers} from './UsersProvider'
import {useLocation} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const AuthData = createContext()

export const useAuth = () => useContext(AuthData)

export const AuthProvider = ({children}) => {
    
    const [login,setLogin] = useState(false)
    const fakeApi = useApi()
    const navigate = useNavigate()
    const {state} = useLocation()
    const {users,setUsers,setActive} = useUsers()
    

    useEffect(() => {
        const loginData = localStorage.getItem('login')
        if(loginData){
            setLogin(JSON.parse(loginData))
        }
    },[])

    useEffect(() => {
        localStorage.setItem('login',JSON.stringify(login))
    })

    async function resolveLogin({...userInfo}){
        const response = await fakeApi({...userInfo})
        try{
            const now = new Date()
            if(response.status===200){
                setLogin(true)
                setActive(userInfo.username)
                setUsers(users.map(usr => 
                    usr.username === userInfo.username ? 
                    {...usr , lastSuccessfulLogin: now.toString()} : usr   
                ))
                navigate(state?.from? state.from : '/')
            }else if(response.status===401){
                setLogin(false)
                setActive('')
                setUsers(users.map(usr => 
                    usr.username === userInfo.username ? 
                    {...usr , lastUnSuccessfulLogin: now.toString()} : usr   
                ))
                alert('Wrong Password 🥲')
            }else if(response.status===404){
                alert(`No user with username : ${userInfo.username} Found :(  Well You can always create one 🍕`)
                setLogin(false)
                navigate('/create-account')
            }
        }
        catch(err){
            console.log(err)
        }

    }


    
    return(
        <>
            <AuthData.Provider value={{login,setLogin,resolveLogin}}>
                {children}
            </AuthData.Provider>
        </>
    )
}