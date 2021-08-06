import { createContext, useContext, useReducer } from "react";


const CartData = createContext()

export const useCart = () => useContext(CartData)

function reducer(prevState,action){
    switch(action.type){
        case 'ADD_ITEM':
            const isItemInCart = prevState.find(item => item.id===action.payload.id)
            if(isItemInCart){
                return prevState.map(item => {
                    return item.id===action.payload.id ? {...item, quantity: item.quantity+1} : item
                })
            }else{
                return [...prevState,{id:action.payload.id , name:action.payload.name, quantity: 1}]
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