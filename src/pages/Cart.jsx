import { useEffect, useState } from 'react'
import {useCart} from '../components/CartProvider'
import {useProducts} from '../components/ProductsProvider'

export const Cart = () => {
    
    const {cartItems,setCartItems} = useCart()
    const {setProducts} = useProducts()


    const [total,setTotal] = useState()
    useEffect(() => {
        setTotal(cartItems.reduce((acc,item) => {
            return item.price*item.quantity + acc
        },0))
    },[cartItems])

    return(
        <>
            <h1> Cart </h1>
            <ul>
            {
                cartItems.map(item => {
                    return item.quantity>0 ? (
                        <li>
                            {item.name}  {item.price}  {item.quantity} 
                            <button onClick = {() => {
                                setCartItems({type:'REDUCE_ITEM' , payload:item})
                                setProducts({type:'ADD',payload:item.id})
                                }}> - </button>
                            <button onClick = {() => {
                                setCartItems({type:'DELETE_ITEM' , payload:item})
                                setProducts({type:'ADD_ALL',payload:item.id})
                                }}> Delete Item </button>
                        </li>
                    ) :(
                        <></>
                    )
                })
            }
            </ul>
            <h2> The Total Cost is : {total}</h2>
        </>
    ) 
}