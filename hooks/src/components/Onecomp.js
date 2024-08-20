import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect, useReducer, useState } from 'react';

// export const Onecomp = () => {
//   const [num, Setnum] = useState(0);
//   const [time, Settime] = useState(0);

//   const counter = () => {
//     Setnum(c => c + 1);
//   };

//   const times = () => {
//     Settime(t => t + 1);
//   };

//   useEffect(() => {
//     console.log('rendered');
    
//     const rand = Math.floor(Math.random()*1000);

//     const intervalId = setInterval(() => {
//       console.log(`random ${rand}`)
//     }, 1000);

//     // Cleanup function to clear the interval on unmount
//     return () => {
//       clearInterval(intervalId);
//       console.log('unmounted and interval cleared');
//     };
//   }); // Empty dependency array, runs only on mount and unmount

//   return (
//     <div>
//       <h1>{num}</h1>
//       <h1>{`clicked ${time} times`}</h1>
//       <button onClick={counter}>+</button>
//       <button onClick={times}>T</button>
//     </div>
//   );
// };




const initialState = {count:0};

function counter(state,action){
switch(action.type)
{
 case 'inc':
return {count:state.count+1};
default :
return {count:state};
}
}

export const Onecomp = () => {
  const [state,dispatch] = useReducer(counter,initialState);
  const increment = () =>{
    dispatch({type:'inc'})
  }
  return (
   
    <div>
      <h1>{state.count}</h1>
      <button onClick={increment}>+</button>
    </div>
  )
}


