import { type } from "@testing-library/user-event/dist/type";
import React, { useReducer } from "react";

const  initialState = {count:0};

function Counter(state,action){
 switch(action.type){
    case "inc":
    return {count : state.count+1}
    default :
    return {count:state}
 }
}

export const UseCallBack = () => {
  const [state,dispatch] = useReducer(Counter,initialState)
  const inc = ()=>{
    dispatch({type:'inc'})
  }
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={inc}>+</button>
    </div>
  )
}
