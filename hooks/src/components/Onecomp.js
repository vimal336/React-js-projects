// import React from 'react'
// import { Twocomp } from './Twocomp'

// export const Onecomp = () => {
//   return (
//     <div>Onecomp
//         <Twocomp/>
//     </div>
//   )
// }

import React, { useEffect, useState } from 'react'

export const Onecomp = () => {
  const [num, Setnum] = useState(0);
  const [time, Settime] = useState(0);

  const counter = () =>{
    Setnum(c=>c+1)
  }
  const times = () =>{
    Settime(t=>t+1)
  }

  useEffect(()=>{
    console.log("rendered");
  },[time])


  return (
    <div>
      <h1>{num}</h1>
      <h1>{`clicked ${time} times`}</h1>
      <button onClick={counter}>+</button>
      <button onClick={times}>T</button>
    </div>
  )
}
