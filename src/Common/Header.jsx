import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Store from "../Redux/Store";

const Header = () =>{
    let itemCount = useSelector(Store => Store.cart.items);
    console.log(itemCount);
    return(
        <>
            <div className="nav-main">
                <Link to="/"><h2>Ecom</h2></Link>
                <Link to="/"><p>Home</p></Link>
                <Link to="/about"><p>About</p></Link>
                <Link to="/allproducts"><p>All Product</p></Link>
                <Link to="/contact"><p>Contact</p></Link>
                <Link to="cart"><p>Cart-{itemCount.length}</p></Link>
            </div>
        </>
    )
}

export default Header;