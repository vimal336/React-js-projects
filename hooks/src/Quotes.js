import React from "react";
import { useState } from "react";
import "./css/advice.css";
import { useParams } from "react-router-dom";

const Quotes = () => {
  const [Advice, setAdvice] = useState("Get Quote");

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice)
  }

  const {username} = useParams();

  return (
   
    <div className="advice">
      <button onClick={getAdvice}>{Advice}</button>
      <h3>{username}</h3>
    </div>
  );
};

export default Quotes;
