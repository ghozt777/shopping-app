import { createContext, useContext, useEffect, useReducer } from "react";


const CartData = createContext()

export const useCart = () => useContext(CartData)




export const CartProvider = ({children}) => {


    function reducer(prevState,action){
        switch(action.type){
            case 'ADD_ITEM':
                let productInCart = prevState.find(product => product.id===action.payload.id)
                if(productInCart){
                    return prevState.map(product => {
                        return product.id===productInCart.id ? {...product,quantity:product.quantity+1} : product
                    })
                }
                else{
                    return [...prevState,{id:action.payload.id , price:action.payload.price ,name:action.payload.name , quantity:1}]
                }

            case 'DELETE_ITEM':
                let productToBeRemoved = prevState.find(product => product.id===action.payload.id)
                if(productToBeRemoved){
                    return prevState.map(product => {
                        return product.id===productToBeRemoved.id ? {...product,quantity:0} : product
                    })
                }else{
                    return prevState
                }
            
            case 'REDUCE_ITEM':
                let itemToBeReduced = prevState.find(product => product.id===action.payload.id)
                if(itemToBeReduced){
                    return prevState.map(product => {
                        return product.id===itemToBeReduced.id ? {...product,quantity:product.quantity-1} : product
                    })
                }
                else{
                    return prevState
                }


            default:
                return prevState
        }
    }

    const [cartItems,setCartItems] = useReducer(reducer , [])

    useEffect(() => {
        const localCartData = localStorage.getItem('cart')
        if(localCartData){
            setCartItems({type:'INITIALIZE',payload:JSON.parse(localCartData)})
        }
    },[])

    useEffect(() => {
        localStorage.setItem('cart',JSON.stringify(cartItems))
    })

    
    return(
        <CartData.Provider value={{cartItems,setCartItems}}>
            {children}
        </CartData.Provider>
    )
}