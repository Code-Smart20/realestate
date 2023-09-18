import React from 'react'
import "./header.css"
import { Link, NavLink, } from 'react-router-dom'


const Header = () => {
  return (
      <header className='header'>
          <div className="header__container container">
              <h2 className="header__logo">
                  <Link to="/"> REALTOR<span>Estate</span></Link> 
              </h2>

              <ul className="header__menu">
                  <li className="Header__Menu-item"><NavLink to="/">Home</NavLink></li>
                  <li className="Header__Menu-item"><NavLink to="/offers">Offer</NavLink></li>
                  <li className="Header__Menu-item"><NavLink to="/signin">SignIn</NavLink></li>
              </ul>  
          </div>
     
          
      </header>
  )
}

export default Header