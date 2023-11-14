import { useState,useEffect, createContext } from "react";
import React from 'react';
import ReactDom from 'react-dom/client';
import App from './src/Components/App';
import { myRoute } from "./src/Components/App";
import ProductContext from "./src/Context/ProductContext";
import { RouterProvider } from "react-router-dom";

// const Index = () =>{
//     return(
//         <>
//             <ProductContext>
//                 <App/>
//             </ProductContext>
//         </>
//     )
// }

// export default Index;

let root = ReactDom.createRoot(document.getElementById('root'));
root.render(<ProductContext><RouterProvider router={myRoute}/></ProductContext>);