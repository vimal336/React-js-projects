import { useState } from "react";
import "./App.css";

function App() {

  const date = new Date()
  const dateString = date.toDateString();
  console.log(dateString);

  return (
    <div className="App">
      <Counter />
      <h1>{dateString}</h1>
    </div>
  );
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
        <span>  step : {step}  </span> 
        <button onClick={stepInc}>+</button>
      </div>

      <div>
        <button onClick={countDec}>-</button>
        <span>  count : {count} </span> 
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
