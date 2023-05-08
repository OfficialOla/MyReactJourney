import React, {useState} from "react";
import '../styles/Calculator.css';
function Calculator() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
  
    function handleInput(event) {
      setInput(input + event.target.value);
    };
    
    function handleClear(){
      setInput("");
      setResult("");
    };
  
    function handleCalculate() {
      setResult(eval(input).toString());
      setInput(eval(input).toString());
    };
    return(
        
        <div className="mainContainer">
      <h1 className="cal">Calculator</h1>
      <input className="text" type="text" value={input}  />
      <br />
            <div className="button">
                <button className="number" value="1" onClick={handleInput} >1</button>
                <button className="number" value="2" onClick={handleInput}>2</button>
                <button className="number" value="3" onClick={handleInput}>3</button>
                <button className="operator" value="+" onClick={handleInput}>+</button>
                <button className="number" value= "4" onClick={handleInput}>4</button>
                <button className="number" value="5" onClick={handleInput}>5</button>
                <button className="number" value="6" onClick={handleInput}>6</button>
                <button className="operator" value="-" onClick={handleInput}>-</button>
                <button className="number" value="7" onClick={handleInput}>7</button>
                <button className="number" value="8" onClick={handleInput}>8</button>
                <button className="number" value="9" onClick={handleInput}>9</button>
                <button className="operator" value="/" onClick={handleInput}>/</button>
                <button className="number" value="0" onClick={handleInput}>0</button>
                <button className="decimal" value="." onClick={handleInput}>.</button>
                <button className="equals" value="=" onClick={handleCalculate}>=</button>
                <button className="operator" value="*" onClick={handleInput}>*</button>
                <button className="clear" value="C" onClick={handleClear}>C</button>
                <br />
            </div>

        </div>
    
    )
}
export default Calculator
