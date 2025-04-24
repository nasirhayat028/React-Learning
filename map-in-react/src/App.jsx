function App() {

  let nameArr = ['Nasir', 'Roman', 'Sudais', 'Marwan',]
  // let nameArr = []

  if (nameArr == 0) {
    return <h1>There is no name in nameArr...</h1>
  }

  return <>
  <h1>F/Name:   Umer Hayat</h1>
    <ul class="list-group">
      {nameArr.map((name) => <li class="list-group-item">{name}</li>)}
    </ul>
  </>
}

export default App
