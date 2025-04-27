import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("blue");

  useEffect(() => {
    console.warn(count);
    // Change color based on count
    if (count % 2 === 0) {
      setColor("blue");
    } else {
      setColor("red");
    }
  }, [count]);

  return (
    <>
      <button
        className="button"
        onClick={() => setCount(count + 1)}
        style={{ backgroundColor: color }}
      >
        Count: {count}
      </button>
    </>
  );
}

export default App;
