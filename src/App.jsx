import './App.css'
import ItemListContainer from './Components/ItemListContainer'
import NavBar from './Components/NavBar'

function App() {
  return (
    <div>
      <NavBar greeting = "PRODUCTOS"/>
      <ItemListContainer />
    </div>
  )
}

export default App
