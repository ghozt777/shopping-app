import {useProducts} from '../components/ProductsProvider'
import {useUsers} from '../components/UsersProvider'

export const Products = () => {
    
    const {products,setProducts} = useProducts()
    const {users,active,setUsers} = useUsers()

    function addToCartHandler(product){
        const user = users.find(user => user.username===active)
        if(user){
            setUsers({type:'ADD_TO_CART',payload:{user:user,product:product}})
            setProducts({type:'REDUCE',payload:product.id})
        }
    }

    return(
        <>
            <h1> Products Page </h1>
            <div >
            <div style={{display:'flex',flexDirection:'row', alignItems:'flex-start',justifyContent:'space-evenly',paddingBottom:'2rem'}}>
                <div> Product Name</div>
                <div> Price </div>
                <div> Quantity Available </div>

            </div>
            {
                products.map(product => {
                    return(
                    <div style={{display:'flex',flexDirection:'row', alignItems:'flex-start',justifyContent:'space-evenly'}}>
                        <div> {product.name} </div>
                        <div> {product.price} </div>
                        <div> {product.quantity} </div>
                        <button onClick={() => {
                            addToCartHandler(product)
                            }}> + </button>
                    </div>
                       
                    )
                })
            }
            </div>
        </>
    )
}