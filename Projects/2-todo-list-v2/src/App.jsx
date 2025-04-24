import Header from "./components/Header"
import Addtodo from "./components/Addtodo"
import Items from "./components/Items"
import Items2 from "./components/Item2"
import "./style.css"


function App() {
  return <div>
      <div className="items">
        <Header />
        <Addtodo />
        <Items />
        <Items2 />
      </div>
  </div>
}

export default App
