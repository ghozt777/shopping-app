import {useProducts} from '../components/ProductsProvider'
import {useCart} from '../components/CartProvider'

export const Products = () => {
    
    const {products,setProducts} = useProducts()
    const {setCartItems} = useCart()


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
                            setCartItems({type:'ADD_ITEM',payload:product})
                            setProducts({type:'REDUCE',payload:product.id})
                            }}> + </button>
                    </div>
                       
                    )
                })
            }
            </div>
        </>
    )
}