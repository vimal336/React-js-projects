import React, { useReducer } from "react";

const  initialState = {count:0};

function Counter(){
  
}

export const UseCallBack = () => {
  const [state,dispatch] = useReducer(Counter,initialState)
  return (
    <div>
      
    </div>
  )
}
