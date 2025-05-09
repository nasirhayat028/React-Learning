import Style from "./App.module.css";

function App() {
  return (
    <>
      <div className={Style.container}>
        <div>
          {" "}
          <input type="text" className={Style.display} />
        </div>
        <div className={Style.buttons}>
          <button className={Style.button}>C</button>
          <button className={Style.button}>1</button>
          <button className={Style.button}>2</button>
          <button className={Style.button}>+</button>
          <button className={Style.button}>3</button>

          <button className={Style.button}>4</button>
          <button className={Style.button}>-</button>
          <button className={Style.button}>5</button>
          <button className={Style.button}>6</button>
          <button className={Style.button}>*</button>

          <button className={Style.button}>7</button>
          <button className={Style.button}>8</button>
          <button className={Style.button}>/</button>
          <button className={Style.button}>=</button>
          <button className={Style.button}>9</button>
          <button className={Style.button}>0</button>
          <button className={Style.button}>.</button>
        </div>
      </div>
    </>
  );
}

export default App;
