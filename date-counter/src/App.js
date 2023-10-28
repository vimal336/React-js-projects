import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter2 />
      <Counter />
    </div>
  );
}

function Counter2() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const [inputValue, setInputValue] = useState(1);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  function stepDec() {
    setStep((s) => s - 1);
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

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setInputValue(inputValue+0);
  };

  return (
    <>
      <h1>Date counter app</h1>
      <div>
        <input type="range" min="1" max="100" />1
      </div>

      <div>
        <button onClick={countDec}>-</button>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button onClick={countInc}>+</button>
      </div>
      <div>
        <p>
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </p>
      </div>
    </>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  function stepDec() {
    setStep((s) => s - 1);
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

  return (
    <>
      <h1>Date counter app</h1>
      <div>
        <button onClick={stepDec}>-</button>
        <span> step : {step} </span>
        <button onClick={stepInc}>+</button>
      </div>

      <div>
        <button onClick={countDec}>-</button>
        <span> count : {count} </span>
        <button onClick={countInc}>+</button>
      </div>
      <div>
        <p>
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </p>
      </div>
    </>
  );
}

export default App;
