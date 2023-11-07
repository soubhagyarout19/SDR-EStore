import { useState,useEffect, createContext } from "react";
import React from 'react';
import ReactDom from 'react-dom/client';
import App from './src/Components/App';
import { myRoute } from "./src/Components/App";

export let MainContext = createContext();

const Index = ()=>{
    let initialValue = {data:[],loading:"false"}
    const [globalArr, setGlobalArr] = useState(initialValue);
    useEffect(()=>{
        async function fetchApiXYZ(){
            try{
                setGlobalArr({data:[],loading:"true"});
                let data = await fetch("https://dummyjson.com/products");
                let myData = await data.json();
                setGlobalArr({data:myData.products,loading:"false"});
            }
            catch(error){
                console.log("Unable to Fetch" + error);
            }
        }
        fetchApiXYZ();
    },[])
    return(
        <>
            {
                <MainContext.Provider value={...globalArr}>
                <App/>
                </MainContext.Provider>
            }
        </>
    )
}

export default Index;

let root = ReactDom.createRoot(document.getElementById('root'));
root.render(<Index/>);