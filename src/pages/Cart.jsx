import {useProducts} from '../components/ProductsProvider'
import {useUsers} from '../components/UsersProvider'

export const Cart = () => {
    
    const {setProducts} = useProducts()
    const {users,active,setUsers} = useUsers()
    const currUser = users.find(user => user.username===active)

    function genPage(){
        return currUser.cart ? (
            <>
                <h1> Cart </h1>
            <ul>
            {
                currUser.cart.map(item => {
                    return item.quantity>0 ? (
                        <li>
                            {item.name}  {item.price}  {item.quantity} 
                            <button onClick = {() => {
                                setUsers({type:'REDUCE_FROM_CART',payload:{user:currUser,product:item}})
                                setProducts({type:'ADD',payload:item.id})
                                }}> - </button>
                            <button onClick = {() => {
                                setUsers({type:'REMOVE_FROM_CART',payload:{user:currUser,product:item}})
                                setProducts({type:'ADD_ALL',payload:item.id})
                                }}> Delete Item </button>
                        </li>
                    ) :(
                        <></>
                    )
                })
            }
            </ul>
            <h2> The Total Cost is : {}</h2>
            </>
        ) : (
            <>
                <h1> No Items In The Cart</h1>
            </>
        )
    }

    return(
        <>
            {genPage()}
        </>
    ) 
}