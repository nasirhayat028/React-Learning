import { useContext } from "react";
import { GlobalInfo } from "../App";

function OtherChild() {
  const { appColor, getDay } = useContext(GlobalInfo);

  const day = "Saturday";
  console.log(day);

  return (
    <>
      <h1 style={{ color: appColor }}>Other Child</h1>
      <button onClick={() => getDay(day)}>Click Me</button>
    </>
  );
}

export default OtherChild;
