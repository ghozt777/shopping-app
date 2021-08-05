import {useState} from 'react'
import {useUsers} from '../components/UsersProvider'
import {useAuth} from '../components/AuthProvider'
import { useNavigate, useLocation } from 'react-router-dom'
export const CreateAccount = () => {
    
    const [userInfo,setUserInfo] = useState({username:'' , password:''})
    const {users,setUsers,setActive} = useUsers()
    const {setLogin} = useAuth()
    const navigate = useNavigate()
    const {state} = useLocation
    const now = new Date()

    function clickHandler(){
        
        let userExist = users.find(user => user.username === userInfo.username)
        console.log(userExist)
        if(!userExist){
        setLogin(true)
        setUsers(prevState => [...prevState,userInfo])
        setActive(userInfo.username)
        localStorage.setItem('active' , JSON.stringify(userInfo.username))
        navigate(state?.from? state.from : '/')}
        else{
            alert(`User ${userInfo.username} Alredy Exixts 🍩`)
            navigate('/login')
        }
    }
    
    return(
        <>
            <h1> Create a New Account </h1>
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
                    password: e.target.value,
                    lastSuccessfulLogin: now.toString()
                }
            })}
            
            ></input>

            <button
            onClick={clickHandler}
            >
                Create New Account
            </button>
        </>
    )
}