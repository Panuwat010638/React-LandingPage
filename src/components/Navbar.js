import React from 'react'
import "./Navbar.css"
import { useState } from 'react';
import { FiAlignJustify, FiXCircle } from "react-icons/fi";


function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className='header-navber'>
      <div className='contianer'>
        <div className='header-navber-con'>
          <div className='icon-con'>
              <h1>Res<span className='navbar-span'>ume</span></h1>
          </div>
          <ul className={click ? "menu active" : "menu"}>
            <li className="menu-link" onClick={closeMobileMenu}><a href='#Home' >Home</a></li>
            <li className="menu-link" onClick={closeMobileMenu}><a href='#About'>About</a></li>
            <li className="menu-link" onClick={closeMobileMenu}><a href='#Project'>Project</a></li>
            <li className="menu-link" onClick={closeMobileMenu}><a href='#Contact'>Contact</a></li>
          </ul>
          <div className="mobile-menu" onClick={handleClick}>
          {click ? (
                            <FiXCircle />
                        ) : (
                            <FiAlignJustify />
                        )}
        </div>
        </div>
        
      </div>


    </div>
  )
}

export default Navbar