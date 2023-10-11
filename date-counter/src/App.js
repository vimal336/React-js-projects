import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter />
      <Dates />
    </div>
  );
}

function Dates() {


  return (
  <div>
    <h1> date</h1>
  </div>
  )
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function stepDec() {
    if (step > 1) setStep((s) => - 1);
  }

  function stepInc() {
    setStep((s) => s + 1);
  }

  function countDec() {
    if (count > 0) setCount((c) => c - step);
  }

  function countInc() {
    setCount((c) => c + step);
  }
  return (
    <>
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
        <p>
          {count} days from today is {}
        </p>
      </div>
    </>
  );
}

export default App;
