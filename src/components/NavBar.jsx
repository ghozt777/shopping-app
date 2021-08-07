import {GenerateLinks} from './LinksDB'
import { NavLink } from 'react-router-dom'
import { LastLogin } from './LastLogin'
import {useAuth} from './AuthProvider'
import {useUsers} from './UsersProvider'
import '../styles/NavLink.css'
import logo from '../pages/images/logo.png'
import {Divider} from '../components/Divider'

export const NavBar = () => {
    
    
    const {login,setLogin} = useAuth()
    const {setActive} = useUsers()
    
    
    const Links = GenerateLinks()

    const logInBtn = <button className='btn'><NavLink className='btn__NavLink' to='/login'> Login </NavLink></button>
    const logOutBtn =  <button className='btn' onClick={() => {setLogin(false) ;setActive('')}}> Logout </button>
    
    return(
        <>
        <div className='NavBar'>
            <a href='https://www.amazon.com/'><img className='NavBar__logo' src={logo} alt='logo' /></a>
            <div className="NavBar__Header">
                <div className='NavBar__Header siteName'>
                scamazon.com
                </div>
                <div className='NavBar__Header tagline'>
                    the shadiest site you've ever seen
                </div>
            </div>
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
            <div className='NavBar__btn'>
            {login? logOutBtn : logInBtn}
            </div>
        </div>
            <LastLogin/>
            <Divider />
        </>
    )
}