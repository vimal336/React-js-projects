import React, { useState } from "react";

function App() {
    const [advice, setAdvice] = useState("");
    const [adviceNumber, setadviceNumber] = useState("");

    async function getAdvice() {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      setAdvice(data.slip.advice);
      setadviceNumber(data.slip.id);
   }
  
    return (
      <div> 
        <h2> ID: {adviceNumber}</h2>
        <h1> Advice :{advice}</h1>
        <button onClick={getAdvice} {...setadviceNumber}> Get advice </button>
      </div>
    );
  }

  export default App;