import "./App.css";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState([""]);
  console.log(name);

  const onChange = (event) => {
    let newNam = event.target.value;
    setName(newNam);
  };

  console.log(name);

  return (
    <>
      <input type="text" placeholder="Write Something.." onChange={onChange} />

      <p>Display here: {name}</p>
    </>
  );
}

export default App;
