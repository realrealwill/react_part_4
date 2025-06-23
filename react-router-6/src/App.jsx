import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import NotFound from './pages/404'
import About from './pages/About'
import Something from './pages/ShowSomething'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Home bg_color="lightblue" />} />
      <Route path='/about' element={<About />} />
      <Route path="/about/:name/:age" element={<Something />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
