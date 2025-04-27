import { useContext } from "react";
import { GlobalInfo } from "../App";

function Child() {
  const { appColor } = useContext(GlobalInfo);

  return (
    <>
      <h1 style={{ color: appColor }}>First Child</h1>
    </>
  );
}

export default Child;
