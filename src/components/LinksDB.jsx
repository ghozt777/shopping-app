import {useAuth} from './AuthProvider'
import {useUsers} from './UsersProvider'
import {
    AiFillHome , 
    AiFillApple , 
    AiFillLock , 
    AiOutlineShopping
} from 'react-icons/ai'
import {BsFillBagFill , BsUnlock} from 'react-icons/bs'

export const GenerateLinks = () => {
    
    const {login} = useAuth()
    const {active} = useUsers()
    const Links = [
        {
            pageName: 'Home',
            path: '/',
            logo: <AiFillHome />
        },
        {
            pageName: 'Address',
            path: '/address',
            logo: <AiFillApple />
        },
        {
            pageName: login ? `Welcome ${active}` : 'Login / Create Account',
            path: '/credentials',
            logo: login ? <BsUnlock />  :<AiFillLock />
        },
        {
            pageName: 'Cart',
            path: '/cart',
            logo: <AiOutlineShopping />
        },
        {
            pageName: 'products',
            path: '/products',
            logo: <BsFillBagFill />
        }
    ]
    return Links
}