
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Products from './Components/Products';
import {Route, Routes } from 'react-router-dom'
import Product from './Components/Product';
import Cart from './redux/Cart';
import About from './redux/About';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/products/:id' element={<Product/>}/>
      <Route path='/About' element={<About/>} />
      <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </>
  );
}

export default App;
