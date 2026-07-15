import { useState } from 'react'
import './App.css'
import NavBar from './ui/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutMe from './Pages/AboutMe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <NavBar activeLink={"Home"}/>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/about-me" element={<AboutMe/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
