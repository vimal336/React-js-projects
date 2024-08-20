// import React, { useEffect } from "react";
// import { useState } from "react";
// import "./css/advice.css";
// import { useParams } from "react-router-dom";

// const Quotes = () => {
//   const [Advice, setAdvice] = useState("Get Quote");

//   async function getAdvice() {
//     const res = await fetch("https://api.adviceslip.com/advice");
//     const data = await res.json();
//     setAdvice(data.slip.advice)
//   }

//   useEffect(()=>{
//     getAdvice();
//   },[])

//   const {username} = useParams();

//   return (
   
//     <div className="advice">
//       <button onClick={getAdvice}>{Advice}</button>
//       <h3>{username}</h3>
//     </div>
//   );
// };
 export default Quotes;


import React, { useEffect, useState } from 'react'

const Quotes = () => {
  const [advice, setadvice] = useState("");

  async function uotes(){
     const response = await fetch('https://api.adviceslip.com/advice');
     const data = await response.json();
     console.log(data);
     setadvice(data.slip.advice)
  }

  useEffect(()=>{
    setadvice()
  },[])

  return (
    <div>
      <h1>{advice}</h1>
       <button onClick={uotes}></button>
    </div>
  )
}

export default Quotes;