import React, { useReducer } from 'react'

function Practice() {
    let initial = 10
    function reducer(state,action){
        if(action.type == "INC"){
            return state+1;
        }
        else{
            return state;
        }
    }
    let [state,dispatch] = useReducer(reducer,initial);
  return (
    <div>
      <h1>This is Practice</h1>
      <button onClick={()=>{dispatch({type:"INC"})}}>SDR Button</button>
      <h1>{state}</h1>
    </div>
  )
}

export default Practice
