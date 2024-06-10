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
