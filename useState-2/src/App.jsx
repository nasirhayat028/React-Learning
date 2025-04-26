import { useState } from "react";
import "./App.css";

function App() {
  let [name, setName] = useState(["Nasir", "Sudais"]);

  let onKeyChange = (e) => {
    if (e.key == "Enter") {
      let newName = e.target.value;
      let newNameArr = [...name, newName];
      setName(newNameArr);
      console.log("The enter value is " + newName);
    }
  };

  return (
    <>
      <ul>
        <input type="text" onKeyDown={onKeyChange} />
        {name.map((names, props) => (
          <li key={props}>{names}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
