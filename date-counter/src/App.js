import { useState } from "react";
import "./App.css";

function App() {


  useState = [step setStep] = (0);

  return (
   
      <div className="App">
        <h1>Date counter app</h1>
        <div>
          <button>-</button> {step} : 1 <button>+</button>
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

export default App;
