import {useAuth} from '../components/AuthProvider'
import {useState} from 'react'
import {Loader} from '../components/Loader'
import {useLoading} from '../components/LoadingProvider'

export const Login = () => {
    
    const {resolveLogin} = useAuth()
    const[userInfo,setUserInfo] = useState({})
    const {isLoading} = useLoading()

   const pageContent = () => {
       if(!isLoading){
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
       }else{
           return(
               <>
                    <h1>Please Wait...</h1>
                    <Loader />
               </>
           )
       }
   }

    const clickHandler = () => {
        resolveLogin({...userInfo})
    }
    
    
    return(
        <>
            {pageContent()}
        </>  
    )
}