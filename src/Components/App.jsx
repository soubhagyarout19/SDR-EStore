import Banner from "../Common/Banner";
import Header from "../Common/Header";
import { useContext } from "react";
import { SDRContext } from "../Context/ProductContext";
import Practice from "./Practice";

const App = () =>{
    let x = useContext(SDRContext);
    console.log(x);
    return(
        <>
            {/* <h1>Jai Shree Ram</h1> */}
            <Header/>
            <Banner content="Welcome to Home"/>
            <Practice/>
        </>
    )
}

export default App;