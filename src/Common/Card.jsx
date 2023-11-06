import { useContext } from "react";
import { MainContext } from "../../index"
const Card = () =>{
    let x = useContext(MainContext);
    return(
        <>
        {
            console.log("This is card component" + x)
        }
        <img src="" alt="Product image"></img>
        <p>title</p>
        <p>Brand</p>
        <p>Price</p>
        <p>Description</p>
        </>
    )
}

export default Card;