import './App.css'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Navbar from './Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="about" element={<About/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
