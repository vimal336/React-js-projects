import React, { useMemo, useState } from 'react'

export const UseCallBack = () => {
   
  const [number, setNumber] = useState(0);
  const [dark, setdark] = useState(false);

  const toggle ={
       backgroundColor: dark? 'black' : 'white',
       color: dark? 'black' : 'white',
  }

  const dbnumber = useMemo(()=>{
    return slow(number);
  },[number])

  return (
    <div>
     <input type='text' value={number}/>
     <button onClick={()=>setdark (curr => !curr)}></button>
     <h1 style={toggle}>{dbnumber}</h1>
    </div>
  )

  function slow(num){
    for(let i=0; i<=100000; i++){}
    return num * 2;
  }
}
