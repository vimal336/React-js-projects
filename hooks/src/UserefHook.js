import React, { useState } from 'react'

export const UserefHook = () => {
  const [input, setInput] = useState("")
  return (
    <div>
        <h1>Usere Hook</h1>
        <input type='text' placeholder='useref' onChange={(event)=>setInput(event.target.value)} value={input}/>
        <h3>{input}</h3>
    </div>
  )
}
