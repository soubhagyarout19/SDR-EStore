import React, { useReducer } from 'react'

function Practice() {
    let initial = 10
    let [state,dispatch] = useReducer(reducer,initial);
    function reducer(state,action){
        // console.log(action);
        return state+1;
    }
    reducer();
  return (
    <div>
      
    </div>
  )
}

export default Practice
