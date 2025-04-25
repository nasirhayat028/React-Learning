import Styles from "./Input.module.css";

function Input() {
  return (
    <>
      <div class="container text-center">
        <div class="row">
          <div class="col-4">
            {" "}
            <input
              type="text"
              placeholder="Enter TODO"
              className={Styles.input}
            />
          </div>
          <div class="col-4">
            {" "}
            <input type="date" className={Styles.input} />
          </div>
          <div class="col-2">
            {" "}
            <button
              type="button"
              class="btn btn-primary"
              className={Styles.btnAdd}
            >
              ADD
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Input;
