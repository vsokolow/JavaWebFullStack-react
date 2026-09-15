import './App.css'
import User from './components/User'

function App() {

  return (
    <>
    <div>
      <User name="Anna" age={30} city="Berlin" />
      <User name="Bob" age={25} city="Paris" />
      <User name="Oleg" />
    </div>
    </>
  )
}

export default App
