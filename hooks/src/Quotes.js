import React from "react";
import { useState } from "react";
import "./css/advice.css";

const Quotes = () => {
  const [Advice, setAdvice] = useState("Get Quote");

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    getAdvice(data.slip.advice)
  }

  return (
    <div className="advice">
      <button onClick={getAdvice}>{Advice}</button>
    </div>
  );
};

export default Quotes;
