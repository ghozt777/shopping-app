import {GenerateLinks} from './LinksDB'
import { NavLink } from 'react-router-dom'
import { LastLogin } from './LastLogin'
import {useAuth} from './AuthProvider'
import {useUsers} from './UsersProvider'

export const NavBar = () => {
    
    
    const {login,setLogin} = useAuth()
    const {setActive} = useUsers()
    
    
    const Links = GenerateLinks()
    
    const dispBtn = () => {
        return login ? (
            <button
            onClick={() => {
                setLogin(false)
                setActive('')
            }}
            > Logout </button>
        ) : (
            <button><NavLink to='/login'> Login </NavLink></button>
        )
    }
    
    return(
        <>
        <div style={{display:'flex' , alignItems:'center', justifyContent:'flex-start'}}>
            <nav style={{padding:'1rem 1rem 1rem 1rem'}}>
                {
                    Links.map(link => {
                        return (
                            <>
                            <NavLink 
                            end
                            activeStyle = {{
                                color:'orange',
                                fontSize:'2rem',
                                fontWeight:'bold'
                            }}
                            style={{ textDecoration:'none' ,marginLeft:'0.3rem', color:'red'}}
                            to={link.path}> { link.pageName } </NavLink> 
                            <div style={{display:'inline' , fontSize:'2rem'}}> || </div>
                            </>
                        )
                    })
                }
            </nav>
            {dispBtn()}
        </div>
            <LastLogin/>
            <div style={{padding:'0rem 0rem 0.3rem 0rem' , backgroundColor:'black' , margin:'0rem 1rem'}}></div>
        </>
    )
}