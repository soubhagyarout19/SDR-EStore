import { useState,createContext,useEffect } from "react";

export let MainContext = createContext();

const ProductContext = ({children})=>{
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
                    {children}
                </MainContext.Provider>
            }
        </>
    )
}

export default ProductContext;
