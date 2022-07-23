import React from 'react'
import LOGO from '../../assets/logo.png'

import './header.css'

const Header = () => {
  return (
    <header className='flex center'>
      <nav className='container'>
          <div className="nav_container flex center space-between">
            <div className="header__left flex center space-between">
              <div className="logo flex">
                <a href="/mkasmd">
                  <img src={LOGO} alt="logo" />
                </a>
              </div>
              <ul className="links flex">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#">Programs</a>
                </li>
                <li>
                  <a href="#">Why us</a>
                </li>
                <li>
                  <a href="#">Plans</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
              </ul>
            </div>
            <div className="header__right text-right">
              <a href="#">Join Now</a>
            </div>
          </div>
      </nav>
    </header>
  )
}

export default Header