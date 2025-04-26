import Display from "./components/Display";
import Buttons from "./components/Buttons";
import Styles from "./App.module.css";
import { useState } from "react";

function App() {
  let [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const res = eval(calVal);
      setCalVal(res);
    } else {
      const newDisplayVal = calVal + buttonText;
      setCalVal(newDisplayVal);
    }
  };

  return (
    <>
      {" "}
      <div className={Styles.container}>
        <Display display={calVal} />
        <Buttons onButtonClick={onButtonClick} />
      </div>
    </>
  );
}

export default App;
