import {useAuth} from './AuthProvider'
import {Route,Navigate} from 'react-router-dom'

export const PrivateRoute = ({path , ...props}) => {
    const {login} = useAuth()
    return login ? (
        <Route path={path} {...props} />
    ) : (
        <Navigate state={{from: path}} replace to='/credentials' /> 
    )
}