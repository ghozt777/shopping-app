import {createContext, useContext , useEffect, useReducer, useState} from 'react' 

const UserData = createContext()

export const useUsers = () => useContext(UserData)


function reducer(prevState,action){
    switch(action.type){
        case 'ADD_USER':
            return [...prevState,action.payload]

        case 'INITIALIZE':
            return [...action.payload]
        
        case 'ADD_TO_CART':
            const user = prevState.find(user => user.username===action.payload.user.username)
            if(user){
                if(user.cart){
                    const isProductInTheCart = user.cart.find(product => product.id===action.payload.product.id)
                    if(isProductInTheCart){
                        return prevState.map(users => {
                            return users.username===user.username ? {...users,cart:users.cart.map(item => {
                                return item.id===action.payload.product.id ? {...item,quantity:item.quantity+1} : item
                            })} : users
                        })
                    }else{
                        return prevState.map(users => {
                            return users.username===user.username ? {...users,cart:[...users.cart,{id:action.payload.product.id , name:action.payload.product.name, price:action.payload.product.price, quantity:1}]} : users
                        })
                    }
                }
                else{
                    return prevState.map(users => {
                        return users.username===user.username ? {...users,cart:[{id:action.payload.product.id , name:action.payload.product.name, price:action.payload.product.price, quantity:1}]} : users
                    })
                }
            }
            else{
                return [...prevState]
            }

        case 'REDUCE_FROM_CART':
            if(action.payload.user){
                return prevState.map(users => {
                    return users.username===action.payload.user.username ? {...users,cart:users.cart.map(item => {
                        return item.id===action.payload.product.id ? {...item,quantity:item.quantity-1} : item
                    })} : users
                })
            }
            else{
                return [...prevState]
            }
        
            case 'REMOVE_FROM_CART':
                if(action.payload.user){
                    const user = prevState.find(user => user.username===action.payload.user.username)
                    const itemToBeDeleted = user.cart.find(item => item.id===action.payload.product.id)
                    return prevState.map(users => {
                        return users.username===action.payload.user.username ? {...users,cart:users.cart.filter((item) => item.id!==itemToBeDeleted.id)} : users
                    })
                }
                else{
                    return [...prevState]
                }
            
            case 'SET_TOTAL':
                const isUser = prevState.find(user => user.username===action.payload.user.username)
                console.log(isUser.username)
                if(isUser){
                    return prevState.map(users => {
                        return users.username===isUser.username ? {...users,total:users.cart.reduce((acc,item) => item.quantity*item.price + acc,0)} : users
                    })
                }else{
                    return [...prevState]
                }


        default:
            return [...prevState]
    }
}

export const UsersProvider = ({children}) => {
    
    const [users,setUsers] = useReducer(reducer,[])
    const [active,setActive] = useState('')
    
    useEffect(() => {
        const usersData = localStorage.getItem('users')
        const activeUser = localStorage.getItem('active')
        if(usersData){
            setUsers({type:'INITIALIZE',payload:JSON.parse(usersData)})
        }if(activeUser){
            setActive(JSON.parse(activeUser))
        }
    },[])
    
    useEffect(() => {
        localStorage.setItem('users' , JSON.stringify(users))
        localStorage.setItem('active' , JSON.stringify(active))
    })

    
    
    return(
        <>
            <UserData.Provider value={{users,setUsers,active,setActive}}>
                {children}
            </UserData.Provider>
        </>
    )
}