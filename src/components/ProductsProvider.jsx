import { createContext, useContext, useState } from "react"

const ProductsData = createContext()

export const useProducts = () => useContext(ProductsData)

export const ProductsProvider = ({children}) => {

    const [products,setProducts] = useState([
        {
            id: 1,
            name:'Item 1',
            price: 100,
            quantity: 10
        },
        {
            id: 2,
            name:'Item 2',
            price: 100,
            quantity: 10
        },
        {
            id: 3,
            name:'Item 3',
            price: 100,
            quantity: 10
        },
        {
            id: 4,
            name:'Item 4',
            price: 100,
            quantity: 10
        },
    ])

    return(
        <ProductsData.Provider value={{products,setProducts}}>
            {children}
        </ProductsData.Provider>
    )

}