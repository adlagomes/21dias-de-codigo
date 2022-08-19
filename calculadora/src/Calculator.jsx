import { Button } from "./components/button/Button";
import { Display } from "./components/display/Display";
import "./calculator.css";
import { useState } from "react";

function Calculator() {
  const [displayValue, setDisplayValue] = useState(0);
  const [operator, setOperator] = useState();

  const values = [0, 0]

  function clearDisplay() {
    setDisplayValue(0);
  }

  function insertDigit(n) {
    if (n === "," && displayValue.includes(",")) {
      return;
    }
    if (displayValue === 0) {
      setDisplayValue(n)
    } else {
      setDisplayValue(displayValue + n)
    }
  }

  function setOperation(e) {
    if (displayValue !== 0) {
      
      setOperator(e)
      console.log(operator)
    }
  }

  function setBackspace(){

  }

  function setPercent() {
    setDisplayValue(displayValue / 100)
  }
  
  return (
    <div className="background-color">
      <Display value={displayValue} />
      <Button label="AC" click={clearDisplay} operation />
      <Button label="<X" click={setBackspace} operation />
      <Button label="%" click={setPercent} operation />
      <Button label="/" click={setOperation} operation onChange={setOperation}/>
      <Button label="7" click={insertDigit}/>
      <Button label="8" click={insertDigit} />
      <Button label="9" click={insertDigit}/>
      <Button label="X" click={setOperation} operation />
      <Button label="4" click={insertDigit}/>
      <Button label="5" click={insertDigit}/>
      <Button label="6" click={insertDigit}/>
      <Button label="-" click={setOperation} operation />
      <Button label="1" click={insertDigit}/>
      <Button label="2" click={insertDigit}/>
      <Button label="3" click={insertDigit}/>
      <Button label="+" click={setOperation} operation />
      <Button label="0" click={insertDigit}/>
      <Button label="," click={insertDigit}/>
      <Button label="=" click={setOperation} orange />
    </div>
  );
}

export default Calculator;
