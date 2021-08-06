import { createContext, useContext, useReducer } from "react";


const CartData = createContext()

export const useCart = () => useContext(CartData)

function reducer(prevState,action){
    switch(action.type){
        case 'ADD_ITEM':
            const isItemInCart = prevState.find(item => item.id===action.payload.id)
            if(isItemInCart){
                return prevState.map(item => {
                    return item.id===action.payload.id ? {...item, quantity :item.quantity++} : item
                })
            }else{
                return [...prevState,action.payload]
            }
        default:
            return prevState
    }
}

export const CartProvider = ({children}) => {
    
    const [cartItems,setCartItems] = useReducer(reducer , [])
    
    return(
        <CartData.Provider value={{cartItems,setCartItems}}>
            {children}
        </CartData.Provider>
    )
}