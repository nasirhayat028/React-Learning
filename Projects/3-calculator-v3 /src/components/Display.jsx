import Styles from "./Display.module.css";

function Display({ display }) {
  return (
    <>
      <input type="text" className={Styles.display} value={display} readOnly />
    </>
  );
}

export default Display;
