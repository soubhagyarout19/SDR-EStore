import { useContext } from "react";
import { MainContext } from "../Context/ProductContext";
import Banner from "../Common/Banner";
import Card from "../Common/Card";

const Home = () =>{
    let x = useContext(MainContext);
    return(
        <>
            <Banner content="Welcome to Home"/>
            <div className="card-render">
                {x.loading == true ? <h1>Wait...</h1> : x.data.map((element)=>{
                    return <Card key={element.id} data={element}/>
                }).slice(0,3)}
            </div>
        </>
    )
}

export default Home;