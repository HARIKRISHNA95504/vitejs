import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Products from './views/Products'
import Orders from './views/Orders'
import Meetings from './views/Meetings'
import Quickstart from './views/quickstart/QuickStart'
import ThinkingInReact from "./views/quickstart/ThinkingInReact"
import TicTacToe from "./views/quickstart/TicTacToe"
import ProductDetails from './views/Product-details';
import Register from './views/Register'
import Login from './views/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Navbar/> */}
        <Routes>
          <Route path='/products' element={<Products/>}></Route>
          <Route path='/product-details/:productId/:productName' element={<ProductDetails/>}></Route>
          <Route path='/orders' element={<Orders/>}></Route>
          <Route path='/meetings' element={<Meetings/>}></Route>
          <Route path='/'element={<Quickstart/>}>
           <Route path='thinking-in-react'element={<ThinkingInReact/>}></Route>
           <Route path='tic-tac-toe'element={< TicTacToe/>}></Route>
          </Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/login'element={<Login/>}></Route>
        </Routes>
      {/* <Footer/> */}
    </div>
  )
}

export default App
