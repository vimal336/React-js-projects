import { useState } from "react";
import "./App.css";

function App() {

  return (
    <div className="App">
      <Counter />
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
    setCount((c) => c - step);
  }

  function countInc(props) {
    setCount((c) => c + step);
  }

  
  const currentDate = new Date()
  currentDate.setFullYear(currentDate.getFullYear() + 3);

  const dateString = currentDate.toDateString();
  console.log(dateString);

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
          {count} days from today is {dateString}
        </p>
      </div>
    </>
  );
}

export default App;
