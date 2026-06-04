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
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handleClick() {
    setStep(1);
    setCount(0);
  }

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        {/* 
        <button className="btn" onClick={() => setStep((s) => s - 1)}>
          &minus;
        </button> */}
        <span>Step: {step}</span>
        {/* <button className="btn" onClick={() => setStep((s) => s + 1)}>
          &#43;
        </button> */}
      </div>

      <div>
        <button className="btn" onClick={() => setCount((c) => c - step)}>
          &minus;
        </button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button className="btn" onClick={() => setCount((c) => c + step)}>
          &#43;
        </button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
              ? `${count} days from now is `
              : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>

      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleClick}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
