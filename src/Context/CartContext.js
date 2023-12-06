import { createContext, useState } from "react"

export let MyCartContext = createContext();


const CartContext = ({children}) =>{
    let initVal = {arr:[],count:0};
    const [cartArr, setCartArr] = useState(initVal);
    return(
        <>
            <MyCartContext.Provider value={...cartArr}>
                {children}
            </MyCartContext.Provider>
        </>
    )
}

export default CartContext;