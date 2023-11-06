import { useContext } from "react";
import Banner from "../Common/Banner";
import Header from "../Common/Header";
import { MainContext } from "../..";
import Card from "../Common/Card";

const App = () =>{
let catchContext = useContext(MainContext);
    console.log("This is App" + catchContext);
    return(
        <>
            {/* <h1>Jai Shree Ram</h1> */}
            <Header/>
            <Banner content="Welcome to Home"/>
            <Card/>
        </>
    )
}

export default App;