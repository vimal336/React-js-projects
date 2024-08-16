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


initialstate = 0

const UseCallBack = () =>{


  const [state,dispatch] = useReducer(Counter, initialstate)
  
  
  return(
    <>
     
    </>
  )
}