
// syntax

// useEffect(()=>{},[])


// 1. No dependency passed:
// useEffect(() => {
//Runs on every render
// });


// 2. An empty array:
// useEffect(() => {
// Runs only on the first render
// }, []);


// 3. Props or state values:
// useEffect(() => {
//Runs on the first render
//And any time any dependency value changes
// }, [prop, state]);


import { useEffect, useState } from "react"

export const Useeffecthook = () =>{
    const [effect, Seteffect] =  useState(100);
    useEffect(()=>{
      Seteffect(200);
    },[])
    return(
        <>
         <p>Useeffect hooks</p>
         <p>{effect}</p>
      
        </>
    )
}
