import { useContext } from "react";
import { MainContext } from "../Context/ProductContext";
import Banner from "../Common/Banner";
import Card from "../Common/Card";
import { Link } from "react-router-dom";

const Home = () =>{
    let x = useContext(MainContext);
    return(
        <>
            <Banner content="Welcome to Home"/>
            <h1 className="custom-margin">Featured Products</h1>
            <hr className="custom-margin"></hr>
            <div className="card-render">
                {x.loading == true ? <h1>Wait...</h1> : x.data.map((element)=>{
                    return <Link key={element.id} to={`/singleproduct/${element.id}`}><Card data={element}/></Link>
                }).slice(0,3)}
            </div>
        </>
    )
}

export default Home;