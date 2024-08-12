import React, { useState } from "react";

export const Useeffecthook  = () =>{

  const [even, setEven] = useState(0);

  const addeven = () => {
    setEven((ev)=>(ev)+2)
  }

  const addodd = () => {
    setEven((o)=>(o)+1)
  }

  return(
 <>
  <h1>Useffect Hook</h1>
  <p>{even}</p>
  <button onClick={addodd}>Odd</button>
  <button onClick={addeven}>Even</button>
 </>
  )
}