import { useState } from "react";
import "./App.css";

function App() {


  const [step, setStep] = useState(0);


  return (
   
      <div className="App">
        <h1>Date counter app</h1>
        <div>
          <button onClick={setStep}>-</button> step : 1 <button>+</button>
        </div>

        <div>
          <button>-</button> count : 1 <button>+</button>
        </div>
        <div>
          <p>70 days from today is Mon Aug 30 2027</p>
        </div>
      </div>
    
  );
}

function setStep(step) {
  setStep = (step + 2)
}


export default App;
