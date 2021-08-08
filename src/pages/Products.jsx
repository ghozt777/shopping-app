import {Product} from '../components/Product'
import {useAuth} from '../components/AuthProvider'

export const Products = () => {
    const {login} = useAuth()
    const withoutLoginMessage = login? <></> : <small>To Add Products To Cart Please Sign In</small>
    return(
        <>
            <h1> Products Page </h1>
            {withoutLoginMessage}
            <Product />
        </>
    )
}