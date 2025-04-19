import { useState } from "react";
import  calcSlice  from "./features/calc/CalcSlice";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";


export default function App() {
  const [firstInputValue, setFirstInputValue] = useState("");
  const [secondInputValue, setSecondInputValue] = useState("");
  const [result, setResult] = useState("");
  const dispatch = useDispatch();

  // Event handlers for the buttons
  const handleSumClick = () => {
    const result = Number(firstInputValue) + Number(secondInputValue);
    setResult(result);
  };
  const handleSubClick = () => {
    const result = Number(firstInputValue) - Number(secondInputValue);
    setResult(result);
  };

  const handleMultClick = () => {
    const result = Number(firstInputValue) * Number(secondInputValue);
    setResult(result);
  };

  const handleDivClick = () => {
    const result = Number(firstInputValue) / Number(secondInputValue);
    setResult(result);
  };

  return (
    <div className="App">
      <div className="input-container">
        <label htmlFor="first-input">First Input</label>
        <input
          type="text"
          id="first-input"
          value={firstInputValue}
          onChange={(e) => setFirstInputValue(e.target.value)}
        />
        <label htmlFor="second-input">Second Input</label>
        <input
          type="text"
          id="second-input"
          value={secondInputValue}
          onChange={(e) => setSecondInputValue(e.target.value)}
        />

        <div>
          <button onClick={handleSumClick}>Sum</button>
          <button onClick={handleSubClick}>Subtract</button>
          <button onClick={handleMultClick}>Multiply</button>
          <button onClick={handleDivClick}>Divide</button>
        </div>

        <div>
          <h2>The Result Is : {result}</h2>
        </div>
      </div>
    </div>
  );
}
