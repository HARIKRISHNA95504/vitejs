import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Products from './views/Products'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
          {/* <Navbar/> */}
          <Products/>
          {/* <Footer/> */}
    </div>
  )
}

export default App
