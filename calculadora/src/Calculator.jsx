import { Button } from "./components/button/Button";
import { Display } from "./components/display/Display";
import "./calculator.css";
import { useState } from "react";

function Calculator() {
  const [displayValue, setDisplayValue] = useState("0");
  const [oldValue, setOldValue] = useState();
  const [operator, setOperator] = useState(null);

  function insertDigit(digit) {

    if (digit === "." && displayValue.includes(".")) {
      return;
    }
    if (displayValue === "0") {
      setDisplayValue(digit)
    }else {
      setDisplayValue(displayValue + digit)
    }
  }

  function clearMemory() {
    setDisplayValue("0")
  }

  function setOperation(op) {
    const signOperator = op;
    setOperator(signOperator);
    setOldValue(displayValue);
    setDisplayValue("0");
  }

  function calculate() {

    switch (operator) {
      case "/":
        setDisplayValue(parseFloat(oldValue) / parseFloat(displayValue))
        if (isNaN(oldValue) || !isFinite(displayValue)) {
          clearMemory();
        }
        break;
      case "+":
        setDisplayValue(parseFloat(oldValue) + parseFloat(displayValue))
        break;
      case "X":
        setDisplayValue(parseFloat(oldValue) * parseFloat(displayValue))
        break;
      case "-":
        setDisplayValue(parseFloat(oldValue) - parseFloat(displayValue))
        break;
      default:
        break;
      }
    setOperator(null);
  }

  function setBackspace(){
    // Criar uma maneira de apagar digitos individualmente do display como o botao "backspace"
  }

  function setPercentage() {
    // Atribuir calculo matematico com as operações envolvendo porcentagem
    setDisplayValue(displayValue / 100)
  }
  
  return (
    <div className="background-color">
      <Display value={displayValue} />
      <Button label="AC" click={clearMemory} operation />
      <Button label="<X" click={setBackspace} operation />
      <Button label="%" click={setPercentage} operation />
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
      <Button label="." click={insertDigit}/>
      <Button label="=" click={calculate} orange />
    </div>
  );
}

export default Calculator;
