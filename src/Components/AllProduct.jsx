import { useContext } from "react";
import { MainContext } from "../..";
import Card from "../Common/Card";

const AllProduct = () =>{
    let x = useContext(MainContext);
    return(
        <>
        <hr></hr>
        <h1>This is AllProduct page</h1>
            <div className="all-product-main">
            <div className="all-product-left">
                <input type="text"></input>
            </div>
            <div className="card-render">
                {x.loading == true ? <h1>Wait...</h1> : x.data.map((element)=>{
                    return <Card key={element.id} data={element}/>
                })}
            </div>
            </div>
        </>
    )
}

export default AllProduct;