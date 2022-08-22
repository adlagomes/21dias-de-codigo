import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <div className="display">
        <p>{count}</p>
      </div>
      <div className="buttons">
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <p className="footer">by dyboinha</p>
    </div>
  );
}

export default App;
