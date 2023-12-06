import { useState, useEffect, createContext } from "react";
import React from "react";
import ReactDom from "react-dom/client";
import App from "./src/Components/App";
import { myRoute } from "./src/Components/App";
import ProductContext from "./src/Context/ProductContext";
import { RouterProvider } from "react-router-dom";
import { MyCartContext } from "./src/Context/CartContext";
import { Provider } from "react-redux";
import Store from "./src/Redux/Store";

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

let root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <Provider store={Store}>
  <ProductContext>
      <RouterProvider router={myRoute} />
  </ProductContext>
  </Provider>
);
