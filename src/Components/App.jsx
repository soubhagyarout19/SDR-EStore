import Banner from "../Common/Banner";
import Header from "../Common/Header";
import { useContext } from "react";
import {MainContext} from '../Context/ProductContext'
import Home from "./Home";
import About from "./About";
import { Outlet, Route, Routes, createBrowserRouter } from "react-router-dom";
import AllProduct from "./AllProduct";
import Contact from "./Contact";
import Cart from "./Cart";
import SingleProduct from "./SingleProduct";
import Footer from "../Common/Footer";

const App = () =>{
    let x = useContext(MainContext);
    console.log(x);
    return(
        <>
            {/* <h1>Jai Shree Ram</h1> */}
            <Header/>
            <Outlet/>
            <Footer/>
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
            },
            {
                path:"/allproducts",
                element:<AllProduct/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/singleproduct/:id",
                element:<SingleProduct/>
            }
        ]
    }
])

export default App;