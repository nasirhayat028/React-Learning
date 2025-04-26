import { useState } from "react";
import Header from "./components/Header";
import Addtodo from "./components/Addtodo";
import Items from "./components/Items";
import "./style.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <div className="items">
        <Header />
        <Addtodo onAdd={addTodo} />
        {todos.map((todo, index) => (
          <Items key={index} todo={todo} onDelete={() => deleteTodo(index)} />
        ))}
      </div>
    </div>
  );
}

export default App;
