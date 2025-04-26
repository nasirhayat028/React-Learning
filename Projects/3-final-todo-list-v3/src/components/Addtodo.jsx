import { useState } from "react";

function Addtodo({ onAdd }) {
  const [todoText, setTodoText] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleAdd = () => {
    if (todoText.trim() === "") return;
    onAdd({
      text: todoText,
      date: todoDate,
    });
    setTodoText("");
    setTodoDate("");
  };

  return (
    <div className="add-todo">
      <div className="row kg-row">
        <div className="col-4">
          <input
            type="text"
            placeholder="Enter Todo"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            value={todoDate}
            onChange={(e) => setTodoDate(e.target.value)}
          />
        </div>
        <div className="col-2">
          <button className="btn btn-success kg-btn" onClick={handleAdd}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addtodo;
