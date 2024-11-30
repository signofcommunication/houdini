import { useState } from "react";
import "./App.css";

function App() {
  const [size, setSize] = useState(30);
  const [count, setCount] = useState(20);

  return (
    <div className="App">
      <h1>Houdini CSS - Paint Worklet</h1>
      <div className="controls">
        <label>
          Ukuran:
          <input
            type="range"
            min="10"
            max="100"
            value={size}
            onChange={e => setSize(e.target.value)}
          />
        </label>
        <label>
          Jumlah:
          <input
            type="range"
            min="5"
            max="50"
            value={count}
            onChange={e => setCount(e.target.value)}
          />
        </label>
      </div>

      <div
        className="bercak"
        style={{
          "--spot-size": `${size}px`,
          "--spot-count": count,
        }}
      ></div>
    </div>
  );
}

export default App;
