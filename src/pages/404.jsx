import {NavLink} from 'react-router-dom'
export const PageNotFound = () => {
    return(
        <>
            <h1> Page Not Found 404</h1>
            <NavLink to='/'> Go Back </NavLink>
        </>
    )
}