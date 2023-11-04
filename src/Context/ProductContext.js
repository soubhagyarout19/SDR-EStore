import { useState,useEffect, createContext } from "react";
import App from "../Components/App";

export let SDRContext = createContext([]);

const ProductComtext = () =>{
    let [myApi, setMyApi] = useState();
    let [isLoading, setIsLoading] = useState(true);    
    useEffect(()=>{
        async function fetchApiXYZ(){
            let data = await fetch("https://dummyjson.com/products");
            let myData = await data.json();
            setMyApi(myData);
            setIsLoading(false);
        }
        fetchApiXYZ();
    },[])

    if(isLoading){
        return null;
    }
    else{
        return(
            <SDRContext.Provider value={myApi}>
                {children}
            </SDRContext.Provider>
        )
    }
}

export default ProductComtext;