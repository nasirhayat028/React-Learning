import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { GiAbstract120 } from "react-icons/gi";
import { GiAchillesHeel } from "react-icons/gi";
import { GiAwareness } from "react-icons/gi";
import { GiBalloons } from "react-icons/gi";
import { GiCrabClaw } from "react-icons/gi";
import { GiConfirmed } from "react-icons/gi";

function App() {
  return (
    <>
      <ul class="list-group">
        <li class="list-group-item">
          <GiConfirmed />
        </li>
        <li class="list-group-item">
          <GiAchillesHeel />
        </li>
        <li class="list-group-item">
          <GiAwareness />
        </li>
        <li class="list-group-item">
          <GiBalloons />
        </li>
        <li class="list-group-item">
          <GiCrabClaw />
        </li>
        <li class="list-group-item">
          <GiAchillesHeel />
        </li>
        <li class="list-group-item">
          <GiAwareness />
        </li>
        <li class="list-group-item">
          <GiBalloons />
        </li>
        <li class="list-group-item">
          <GiCrabClaw />
        </li>
      </ul>
    </>
  );
}

export default App;
