import {GenerateLinks} from './LinksDB'
import { NavLink } from 'react-router-dom'
import { LastLogin } from './LastLogin'
import {useAuth} from './AuthProvider'
import {useUsers} from './UsersProvider'
import '../styles/NavLink.css'
import logo from '../pages/images/logo.png'

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
            <button className='btn'><NavLink className='btn__NavLink' to='/login'> Login </NavLink></button>
        )
    }
    
    return(
        <>
        <div className='NavBar'>
            <a href='https://www.amazon.com/'><img className='NavBar__logo' src={logo} alt='logo' /></a>
            <div className='NavBar__Links'>
                {
                    Links.map(link => {
                        return (
                            <>
                            <NavLink 
                            end
                            className='NavLink'
                            activeClassName='NavLink-seleted'
                            to={link.path}><span>{link.logo}</span> { link.pageName } </NavLink> 
                            </>
                        )
                    })
                }
            </div>
            {dispBtn()}
        </div>
            <LastLogin/>
            <div style={{padding:'0rem 0rem 0.3rem 0rem' , backgroundColor:'black' , margin:'0rem 1rem'}}></div>
        </>
    )
}