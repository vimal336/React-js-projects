import { useState } from "react";
import "./App.css";
import dateFormat from 'dateformat';

function App() {
 

  function dates() {
    dateFormat("2019-04-30T08:59:00.000Z", "mmmm dS, yyyy") 
   
  }

  dates();

  return (
    <div className="App">
     
    </div>
  );

}


export const counter = () => {
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
  return (
    <div>
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
        <p> {count} days from today is {dateFormat}</p>
      </div>
    </div>
  )
}


export default App;
