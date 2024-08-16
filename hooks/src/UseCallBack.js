// import React from 'react'

// export const UseCallBack = () => {
//   return (
//     <div>
//         <h4>
//         UseCallBack
//         </h4>
//     </div>
//   )
// }
import React from "react";

import { useReducer } from "react";


const initialstate = {count:0};

function counter(state,action){
  switch(state.action){
    case 'increment':
    return {count:state.count+1}
  default:
  return state;
  }

}

const UseCallBack = () =>{


  const [state,dispatch] = useReducer(counter, initialstate)
  
  
  return(
    <>
     
    </>
  )
}