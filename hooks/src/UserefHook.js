import React, { useRef, useState } from 'react'

export const UserefHook = () => {

  const [input, setInput] = useState("");

  const inputref = useRef()

  const display = () =>{
    console.log(inputref.current.value)
  }

  return (
    <div>
        <h1>Useref Hook</h1>
        <input ref={inputref} type='text' placeholder='useref' 
        //onChange={(event)=>setInput(event.target.value)} 
        //value={input}
        />
        {/* <p> My name is {inputref.current.value} 
        </p>*/}
       <button onClick={display}>Display Input</button>
    </div>
  )
}

