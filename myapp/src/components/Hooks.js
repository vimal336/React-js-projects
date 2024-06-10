import React, { useState } from 'react'

export const Hooks = () => {
   let x =1;
   const inc = () => {
    x = x+1;
    console.log(x)
   }
  return (

    <div>
           <h1>{x}</h1>
           <button onClick={inc}>+</button>
    </div>
  )
}
