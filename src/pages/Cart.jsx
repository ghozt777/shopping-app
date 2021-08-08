import {useProducts} from '../components/ProductsProvider'
import {useUsers} from '../components/UsersProvider'
import {FiMinus,FiTrash} from 'react-icons/fi'
import '../styles/Product.css'

export const Cart = () => {
    
    const {setProducts} = useProducts()
    const {users,active,setUsers} = useUsers()
    const currUser = users.find(user => user.username===active)

    function genButton(item){
        return(
            <div className='AddToCart'>
                <button className = 'AddToCart btn' onClick = {() => {
                    setUsers({type:'REDUCE_FROM_CART',payload:{user:currUser,product:item}})
                    setUsers({type:'SET_TOTAL',payload:{user:currUser}})
                    setProducts({type:'ADD',payload:item.id})
                    }}> <FiMinus /> </button>
                <button className = 'AddToCart btn' onClick = {() => {
                    setUsers({type:'REMOVE_FROM_CART',payload:{user:currUser,product:item}})
                    setUsers({type:'SET_TOTAL',payload:{user:currUser}})
                    setProducts({type:'ADD_ALL',payload:item.id})
                    }}> <FiTrash/> Delete </button>
            </div>
        )
    }

    function genPage(){
        return currUser.cart ? (
            <>
                <h1> Cart </h1>
            <div className='Products'>
            {
                currUser.cart.map(item => {
                    return item.quantity>0 ? (
                        <div className='Product__List'>
                        <div className='Product__Details'> {item.name} </div>
                        <div className='Product__Details'> Price: {item.price} </div>
                        <div className='Product__Details'> Available Quantity: <span style={{color: item.quantity>5 ? 'green' : 'red'}}>{item.quantity}</span> </div>
                        <div className='Product__Btn'>
                        {genButton(item)}
                        </div>
                    </div>
                    
                    ) :(
                        <></>
                    )
                })
            }
            </div>
            <h2> The Total Cost is : {currUser.total}</h2>
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