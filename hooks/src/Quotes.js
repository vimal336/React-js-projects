import React from "react";
import { useState } from "react";
import "./css/advice.css";

const Quotes = () => {
  const [Advice, setAdvice] = useState("Get Quote");

  async function getAdvice() {
    const res = await fetch();
    const data = await res.json();
    console.log(data);
  }

  return (
    <div className="advice">
      <button onClick={getAdvice}>{Advice}</button>
    </div>
  );
};

export default Quotes;
