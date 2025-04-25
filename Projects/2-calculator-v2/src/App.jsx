import Display from "./components/Display";
import Buttons from "./components/Buttons";
import Styles from "./App.module.css";

function App() {
  return (
    <>
      {" "}
      <div className={Styles.container}>
        <Display />
        <Buttons />
      </div>
    </>
  );
}

export default App;
