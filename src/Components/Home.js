import React from 'react'
import shopping_girl from '../assets/shopping_girl.jpg'
import Products from './Products'
const Home = () => {
  return (
    <div className='hero'>
        <div className="card bg-dark text-white border-0">
  <img src={shopping_girl} className="card-img" alt="shopping girl" height="550px"/>
  <div className="card-img-overlay d-flex flex-column justify-content-center">
      <div className='container'>
      <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVAL</h5>
    <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
      </div>
  </div>
</div>
<Products/>
    </div>
  )
}
export default Home