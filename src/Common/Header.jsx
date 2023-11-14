import { Link } from "react-router-dom";

const Header = () =>{
    return(
        <>
            <div className="nav-main">
                <h2>Ecom</h2>
                <Link to="/"><p>Home</p></Link>
                <Link to="/about"><p>About</p></Link>
                <Link to="/allproducts"><p>All Product</p></Link>
                <Link to="/contact"><p>Contact</p></Link>
                <Link to="cart"><p>Cart</p></Link>
            </div>
        </>
    )
}

export default Header;