import { useState } from "react";
import "./App.css";

function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  function stepDec() {
    if (step > 0) setStep((s) => -1);
  }

  function stepInc() {
    setStep((s) => s + 1);
  }

  function countDec() {
    if (count > 0) setCount((c) => c - 1);
  }

  function countInc() {
    setCount((c) => c + 1);
  }

  function dates() {
    const currentDate = new Date();

    console.log(currentDate);
  }

  dates();

  return (
    <div className="App">
      <h1>Date counter app</h1>
      <div>
        <button onClick={stepDec}>-</button>
        step : {step}
        <button onClick={stepInc}>+</button>
      </div>

      <div>
        <button onClick={countDec}>-</button>
        count : {count}
        <button onClick={countInc}>+</button>
      </div>
      <div>
        <p> {count} days from today is { 1 dates}</p>
      </div>
    </div>
  );
}

export default App;
