import Banner from "../Common/Banner";
import Header from "../Common/Header";
import Card from "../Common/Card";
import { useContext } from "react";
import { MainContext } from "../../index"

const App = () =>{
    let x = useContext(MainContext);
    console.log(x);
    return(
        <>
            {/* <h1>Jai Shree Ram</h1> */}
            <Header/>
            <Banner content="Welcome to Home"/>
            <div className="card-render">
                {x.loading == true ? <h1>Wait...</h1> : x.data.map((element)=>{
                    return <Card key={element.id} data={element}/>
                })}
            </div>
        </>
    )
}

export default App;