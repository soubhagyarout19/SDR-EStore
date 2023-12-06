import { useSelector } from "react-redux";
import SingleCartCard from "./SingleCartCard";
import Store from "../Redux/Store";

const Cart = ()=>{
    let cartItems = useSelector(Store => Store.cart.items)
    console.log(cartItems);
    cartItems.map((element)=>{
        console.log(element.data);
    })
    return(
        <>
            <div className="card-render">
            {
                cartItems.map((element)=>{
                    return  <SingleCartCard data={element.data}/>
                })
            }
            </div>
        </>
    )
}

export default Cart;