import { useState } from 'react'
import './App.css'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import Hero from './Hero.jsx'
import Frames from './Frames.jsx'
import Questions from './Questions.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Hero/>
      <Frames/>
      <Questions/>
      <Footer />
    </div>
  )
}

export default App
