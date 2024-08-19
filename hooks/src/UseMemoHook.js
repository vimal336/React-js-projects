import React, { useMemo, useState } from "react";

export const UseMemoHook = () => {
  const [number, setNumber] = useState(0);
  const [dark, SetDark] = useState(false);

  
  //const doubleNumber = slowFunction(number);

  const doubleNumber = useMemo(()=>{
    return slowFunction(number)
  },[number])

  const themeStyle = {
    backgroundColor: dark ?"white":"black",
    color: dark ?"black":"white"
}

  return (
    <>
      <p>UseMemoHook</p>
      <input type="number" value={number}
      onChange={(e)=> setNumber(e.target.value)}
      />
     <button onClick={() => SetDark((curr)=>!curr)}>Toggle Button</button>
     <div style={themeStyle}>{doubleNumber}</div>
    </>
  );
};

function slowFunction(num){
    console.log("slow function")
    for(let i=0; i<=1000000000; i++){}
    return num * 2
}
