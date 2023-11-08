import Banner from "../Common/Banner";
import Header from "../Common/Header";
import { useContext } from "react";
import { MainContext } from "../../index"
import Home from "./Home";
import About from "./About";
import { Outlet, createBrowserRouter } from "react-router-dom";
import AllProduct from "./AllProduct";
const App = () =>{
    let x = useContext(MainContext);
    return(
        <>
            {/* <h1>Jai Shree Ram</h1> */}
            <Header/>
            <Home/>
            <About/>
            <AllProduct/>
        </>
    )
}

export let myRoute = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/about",
                element:<About/>
            }
        ]
    }
])

export default App;