import { useContext } from "react";
import { GlobalInfo } from "../App";

function SuperChild() {
  const { appColor } = useContext(GlobalInfo);

  return (
    <>
      <h1 style={{ color: appColor }}>Super Child</h1>
    </>
  );
}

export default SuperChild;
