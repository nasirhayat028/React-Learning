import { useState } from "react";
import "./App.css";

function App() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
    console.log(index);
  };

  return (
    <>
      <ul className="list-group">
        {[1, 2, 3, 4, 5].map((item, index) => (
          <li
            key={index}
            className={`list-group-item ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => handleClick(index)}
          >
            {" "}
            {index === 0
              ? "Umer Hayat"
              : index === 1
              ? "Nasir Hayat"
              : index === 2
              ? "Sudais Hayat"
              : index === 3
              ? "Marwan Hayat"
              : "Roman Hayat"}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
