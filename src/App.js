import { React, useState } from "react";
import ReactDOM from "react-dom/client";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  function handleStepUp() {}

  return (
    <div>
      <span className="step-div">
        <button className="btn">&minus;</button>
        <p>Step: {step}</p>
        <button className="btn">&#43;</button>
      </span>

      <span className="step-div">
        <button className="btn">&minus;</button>
        <p>Count: {count}</p>
        <button className="btn">&#43;</button>
      </span>

      <span>Today is {"date"}</span>
    </div>
  );
}
