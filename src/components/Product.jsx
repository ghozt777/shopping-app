import {useProducts} from '../components/ProductsProvider'
import {useUsers} from '../components/UsersProvider'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import '../styles/Product.css'

export function Product({...props}){
    
    const {products,setProducts} = useProducts()
    const {users,active,setUsers} = useUsers()

    function addToCartHandler(product){
        const user = users.find(user => user.username===active)
        if(user){
            setUsers({type:'ADD_TO_CART',payload:{user:user,product:product}})
            setProducts({type:'REDUCE',payload:product.id})
        }
    }

    function genButton(product){
        if(product.quantity>0){
            return(
                <div  className='AddToCart'>
                <button className='AddToCart btn' onClick={() => {
                    addToCartHandler(product)
                    }}> <AiOutlineShoppingCart /> </button>
                <small>Add to cart</small>
                </div>
            )   
            
        }else{
            return(
                <>
                    <small> Product Out Of Stock </small>
                </>
            )
        }
    }
    
    return(
        <div className='Products'>
            {
                products.map(product => {
                    return(
                    <div className='Product__List'>
                        <div className='Product__Details'> {product.name} </div>
                        <div className='Product__Details'> Price: {product.price} </div>
                        <div className='Product__Details'> Available Quantity: <span style={{color: product.quantity>5 ? 'green' : 'red'}}>{product.quantity}</span> </div>
                        <div className='Product__Btn'>
                        {genButton(product)}
                        </div>
                    </div>
                       
                    )
                })
            }
        </div>
    )
}