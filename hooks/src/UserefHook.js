// import React, { useRef, useState } from 'react'

// export const UserefHook = () => {

//   const [input, setInput] = useState("");

//   const inputref = useRef()

//   const display = () =>{
//     console.log(inputref.current.value)
//   }

//   return (
//     <div>
//         <h1>Useref Hook</h1>
//         <input ref={inputref} type='text' placeholder='useref' 
//         //onChange={(event)=>setInput(event.target.value)} 
//         //value={input}
//         />
//         {/* <p> My name is {inputref.current.value} 
//         </p>*/}
//        <button onClick={display}>Display Input</button>
//     </div>
//   )
// }

import React, { useRef, useState, useEffect } from 'react';

export const UserefHook = () => {
  const uref = useRef();        // Ref for the current input value
  const prevValueRef = useRef(); // Ref for storing the previous value

  const setval = () => {
    console.log('Current Value:', uref.current.value);
    console.log('Previous Value:', prevValueRef.current);
    // Store the current value in prevValueRef after displaying it
    prevValueRef.current = uref.current.value;
  };

  return (
    <div>
      <input type='text' ref={uref} />
      <button onClick={setval}>Show Values</button>
    </div>
  );
};
