import { useState } from 'react'
import './App.css'
import NavBar from './ui/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar activeLink={"Home"}/>
      <main>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, eveniet. Dolores itaque reprehenderit iste blanditiis consequuntur incidunt distinctio perferendis illum nihil tempora necessitatibus esse culpa laborum sequi non, ipsam sit!</p>
      </main>
    </>
  )
}

export default App
