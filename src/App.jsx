import { useState } from 'react'
import './App.css'
import NavBar from './ui/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutMe from './Pages/AboutMe'
import Footer from './ui/Footer'
import NotFound from './Pages/notFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <NavBar activeLink={"Home"}/>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/about-me" element={<AboutMe/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
