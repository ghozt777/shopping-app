import {useCart} from '../components/CartProvider'

export const Cart = () => {
    
    const {cartItems,setCartItems} = useCart()
    
    return(
        <>
            <h1> Cart </h1>
            <ul>
            {
                cartItems.map(item => {
                    return(
                        <li>
                            {item.name} || {item.price} || {item.quantity} ||
                        </li>
                    )
                })
            }
            </ul>
        </>
    )
}