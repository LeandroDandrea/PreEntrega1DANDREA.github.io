import './App.css'
import ItemListContainer from './Components/ItemListContainer'
import NavBar from './Components/NavBar'

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting = "PRODUCTOS"/>
    </div>
  )
}

export default App
