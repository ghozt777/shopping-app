import { createContext, useContext, useEffect, useReducer } from "react"

const ProductsData = createContext()

export const useProducts = () => useContext(ProductsData)

export const ProductsProvider = ({children}) => {

    function reducer(prevState,action){
        switch(action.type){
            case 'ADD':
                return prevState.map(item => {
                    return item.id===action.payload ? {...item,quantity:item.quantity+1} : item
                })
            
                case 'ADD_ALL':
                return prevState.map(item => {
                    return item.id===action.payload ? {...item,quantity:10} : item
                })

            case 'REDUCE':
                return prevState.map(item => {
                    return item.id===action.payload ? {...item,quantity:item.quantity-1} : item
                })

            case 'INITIALIZE':
                return [...action.payload]

            default:
                return prevState
        }
    }
    
    const [products,setProducts] = useReducer(reducer,[
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

    useEffect(() => {
        const data = localStorage.getItem('products')
        setProducts({type:'INITIALIZE',payload:JSON.parse(data)})
    },[])

    useEffect(() => {
        localStorage.setItem('products',JSON.stringify(products))
    })

    return(
        <ProductsData.Provider value={{products,setProducts}}>
            {children}
        </ProductsData.Provider>
    )

}