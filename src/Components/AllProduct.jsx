import { useContext } from "react";
import { MainContext } from "../Context/ProductContext";
import Card from "../Common/Card";
import { Link } from "react-router-dom";

const AllProduct = () =>{
    let x = useContext(MainContext);
    console.log(x.data);
    return(
        <>
        <hr></hr>
        <h1>This is AllProduct page</h1>
            <div className="all-product-main">
            <div className="all-product-left">
                {/* <input type="text"></input> */}
            </div>
            <div className="card-render">
                {x.loading == true ? <h1>Wait...</h1> : x.data.map((element)=>{
                    return <Link to={`/singleproduct/${element.id}`}><Card key={element.id} data={element}/></Link>
                })}
            </div>
            </div>
        </>
    )
}

export default AllProduct;