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
  const [count, setCount] = useState(0);
  const [slide, setSlide] = useState(0);
  const [sliderValue, setSliderValue] = useState(1);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  function handleDec() {
    setCount((c) => count - sliderValue);
  }

  function addSlide() {
    setSlide((c) => slide + 1);
  }

  function handleInc() {
    setCount((c) => count + sliderValue);
  }

  const handleSliderChange = (e) => {
    setSliderValue(Number(e.target.value, 10));
  };


  const handleInputChange = (e) => {
    const value = (Number(e.target.value, 10)) || 0;
    setCount(value);
  };

  const handleResetSlider = () => {
    // Reset the slider to its initial value (e.g., 50)
    setSliderValue(1);
    setSlide(1);
  };


  return (
    <>
      <h1>Date counter app</h1>
      <div>
        <input type="range" min="1" max="10" value={slide} onChange={handleSliderChange}/>10
      </div>

      <div>
        <button onClick={handleDec}>-</button>
        <input type="text" value={count} onChange={handleInputChange}/>
        <button onClick={handleInc}>+</button>
      </div>
      <button onClick={handleResetSlider}>Reset Slider</button>
      <p>Slider Value: {sliderValue}</p>
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
