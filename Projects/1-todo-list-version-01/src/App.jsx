function App() {


  return <div>
    <center>
      <h1>TODO App</h1>

      <div class="row">
        <div class="col-4"> <input type="text" placeholder="Enter Todo"/></div>
        <div class="col-4"><input type="date" /></div>
        <div class="col-2"> <button class="btn btn-success">Add</button></div>
      </div>

      <div class="row">
        <div class="col-4"> <p>Buy Milk</p> </div>
        <div class="col-4"> <p>06/ 05/2027</p> </div>
        <div class="col-2"> <button class="btn btn-danger">Delecte</button></div>
      </div>

      <div class="row">
        <div class="col-4"> <p>sell Cycle</p> </div>
        <div class="col-4"> <p>10/04/2027</p> </div>
        <div class="col-2"> <button class="btn btn-danger">Delecte</button></div>
      </div>

    </center>
  </div>
}

export default App
