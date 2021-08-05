import { useState } from 'react'
import {useAuth} from '../components/AuthProvider'
import {useUsers} from '../components/UsersProvider'
import {useLocation} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    
    const {state} = useLocation()
    const navigate = useNavigate()
    const [userInfo,setUserInfo] = useState({username:'' , password:''})
    const {users,setUsers,setActive} = useUsers()
    const {setLogin} = useAuth()
    
    const clickHandler = () => {
        const user = users.find(user => user.username===userInfo.username)
        if(user){
            const now = new Date()
            if(user.password === userInfo.password){
                setLogin(true)
                setActive(user.username)
                setUsers(users.map(usr => 
                    usr.username === userInfo.username ? 
                    {...usr , lastSuccessfulLogin: now.toString()} : usr   
                ))
                navigate(state?.from? state.from : '/')

            }
            else{
                setLogin(false)
                setActive('')
                setUsers(users.map(usr => 
                    usr.username === userInfo.username ? 
                    {...usr , lastUnSuccessfulLogin: now.toString()} : usr   
                ))
                alert('Wrong Password 🥲')
            }
        }
        else{
            alert(`No user with username : ${userInfo.username} Found :(  Well You can always create one 🍕`)
            setLogin(false)
            navigate('/create-account')
        }
    }
    
    
    return(
        <>
            <h1> Login Into Existing Account </h1>
            <input
            type='text'
            placeholder ='username'
            onFocus={e => e.target.value = ''}
            onChange = {(e) => setUserInfo(prevState => {
                return{
                    ...prevState,
                    username: e.target.value 
                }
            })}
            
            ></input>
            <input
            type='text'
            placeholder ='password'
            onFocus={e => e.target.value = ''}
            onChange = {(e) => setUserInfo(prevState => {
                return{
                    ...prevState,
                    password: e.target.value 
                }
            })}
            
            ></input>

            <button
            onClick={clickHandler}
            >
                Login
            </button>
        </>  
    )
}