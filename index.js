import { useState,useEffect, createContext } from "react";
import React from 'react';
import ReactDom from 'react-dom/client';
import App from './src/Components/App';

export let MainContext = createContext();

const Index = ()=>{
    const [globalArr, setGlobalArr] = useState();
    useEffect(()=>{
        async function fetchApiXYZ(){
            try{
                let data = await fetch("https://dummyjson.com/products");
                let myData = await data.json();
                setGlobalArr(myData.products);
            }
            catch(error){
                console.log("Unable to Fetch" + error);
            }
        }
        fetchApiXYZ();
    },[])
    console.log(globalArr);
    return(
        <>
            {
                globalArr?.length == 0 ? <h1>Loading...</h1> : <MainContext.Provider value={globalArr}>
                <App/>
                </MainContext.Provider>
            }
        </>
    )
}

export default Index;

let root = ReactDom.createRoot(document.getElementById('root'));
root.render(<Index/>);