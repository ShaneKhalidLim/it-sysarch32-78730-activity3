import { useState } from 'react'
import Header from "./Header.jsx"
import Footer from './Footer.jsx'
import Pokedex from "./Pokedex.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
        <Header/>
        <Pokedex/>
        <Footer/>
    </>
  )
}

export default App
