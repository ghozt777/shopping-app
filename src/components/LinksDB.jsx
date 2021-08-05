import {useAuth} from './AuthProvider'
import {useUsers} from './UsersProvider'

export const GenerateLinks = () => {
    
    const {login} = useAuth()
    const {active} = useUsers()
    console.log(active)
    const Links = [
        {
            pageName: 'Home',
            path: '/'
        },
        {
            pageName: 'Address',
            path: '/address'
        },
        {
            pageName: login ? `Welcome ${active}` : 'Login / Create Account',
            path: '/credentials'
        },
        {
            pageName: 'Cart',
            path: '/cart'
        }
    ]
    return Links
}