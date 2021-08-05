import {NavLink} from 'react-router-dom'
import {useLocation} from 'react-router-dom'
import {useAuth} from '../components/AuthProvider'

export const Credentials = () => {
    
    const {state} = useLocation()
    const {login,setLogin} = useAuth()
    function generateContent(){
        
        const headMessage = state?.from? <h1>To Access <span style={{color:'red'}}>{state.from}</span> Please Login</h1> :
        <h1> Hey! </h1>
        
        if(!login) {return(
            <>
            {headMessage}
            <h3> Don't Have an account :( create one in no time</h3>
            <button><NavLink state={{from: state?.from? state.from : '/' }}to='/create-account'>Create New Account</NavLink> </button>    

            <h3> Already A user Login :</h3>
            <button><NavLink state={{from: state?.from ? state.from : '/'}}to='/login'>Login</NavLink></button> 
            </> 
        )}
        else{
            return(
                <>
                    <h1> You are alredy logged in </h1>
                    <button onClick ={() => setLogin(false)}>Log Out</button>
                </>
            )
        }
    }
    
    return(
        <>
              {
                  generateContent()
              }

        </>
    )
}