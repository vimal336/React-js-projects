import React, { useEffect, useState } from "react";

function App() {
  const [advice, setAdvice] = useState("");
  const [adviceNumber, setadviceNumber] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setadviceNumber(data.slip.id);
    setCount((c) => c + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div className="container">
      <h2> ID: {adviceNumber}</h2>
      <h1> Advice :{advice}</h1>
      <button onClick={getAdvice} {...setadviceNumber}>
        Get advice
      </button>
      <Message count={count} />
    </div>
  );
}

function Message(props) {
  return (
    <p>
      You have read <strong>{props.count}</strong> pieces of advice
    </p>
  );
}

export default App;
