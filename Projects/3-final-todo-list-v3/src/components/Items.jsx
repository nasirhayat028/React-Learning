function Items({ todo, onDelete }) {
  return (
    <div className="todo-item">
      <div className="row kg-row">
        <div className="col-4">
          <p>{todo.text}</p>
        </div>
        <div className="col-4">
          <p>{todo.date}</p>
        </div>
        <div className="col-2">
          <button className="btn btn-danger kg-btn" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Items;
