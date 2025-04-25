import Styles from "./Items.module.css";

function Items() {
  let Item = "Buy Milk";

  let Date = "06/05/2025";
  return (
    <>
      <div class="container text-center">
        <div class="row">
          <div class="col-4">
            {" "}
            <p className={Styles.p}> {Item}</p>{" "}
          </div>
          <div class="col-4">
            {" "}
            <p className={Styles.p}>{Date}</p>
          </div>
          <div class="col-2">
            {" "}
            <button
              type="button"
              class="btn btn-danger"
              className={Styles.btndel}
            >
              DELETE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Items;
