import React, { useMemo, useState } from 'react'

export const UseCallBack = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);


  //const slowfun = slow(number);

  const 

  const toggle={
    backgroundColor: dark ? "black":"white",
    color: dark ? "white":"black"
  }
  return (
    <div>
      <input type='text' placeholder='double number' value={number} onChange={(e)=>setNumber(e.target.value)}  />
      <button onClick={()=>setDark(curr => !curr)}>toggle</button>
      <h1 style={toggle}>{slowfun}</h1>
    </div>
  )
  function slow(num){
    for(let i=0; i<=1000000000; i++){}
    console.log("slow function")
    return num * 2;
  }
}
