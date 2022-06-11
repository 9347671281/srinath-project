import React from 'react'
// import Products from './Products';
import LoginIcon from '@mui/icons-material/Login';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import actionReducer from '../redux/actionReducer';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Navbar = () => {
  // const action = actionReducer;
  const state = useSelector((state) => state.actionReducer)
  console.log(state)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">LA COLLECTION</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">Products</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/About">About</NavLink>
              </li>
            </ul>
            <div className='buttons'>
              <NavLink to="/login" className='btn btn-outline-dark'>
                <i>
                  <LoginIcon />
                </i>
                Login</NavLink>
            </div>
            <div className='buttons'>
              <NavLink to="/register" className='btn btn-outline-dark ms-2'>
                <i>
                  <HowToRegIcon />
                </i>
                Register</NavLink>
            </div>
            <div className='buttons'>
              <NavLink to="/cart" className='btn btn-outline-dark ms-2'>
                <i>
                  <ShoppingCartIcon />
                </i>
                cart({state.length})</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar