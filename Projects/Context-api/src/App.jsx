import { createContext, useState } from "react";
import Child from "./components/Child";
import "./App.css";
import SuperChild from "./components/SuperChild";
import OtherChild from "./components/OtherChild";

export const GlobalInfo = createContext();

function App() {
  const getDay = (item) => {
    console.log(item);
    setDay(item);
  };
  const [color] = useState("Green");
  const [day, setDay] = useState("Monady");
  return (
    <GlobalInfo.Provider value={{ appColor: color, getDay: getDay }}>
      <div className="App">
        <h1>Context API Demo</h1>
        <p className="day-display">Today is {day}</p>
        <div className="child-container">
          <Child />
          <SuperChild />
          <OtherChild />
        </div>
      </div>
    </GlobalInfo.Provider>
  );
}

export default App;
