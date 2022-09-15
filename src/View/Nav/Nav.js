import React, { useState, useEffect } from 'react';
import './Nav.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import logo from '../../assets/logo.png'

const Nav = () => {
  const [fixedNavbar, setFixedNavbar] = useState(false);
  const [btnNavbar, setBtnNavbar] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [fixedNavbar]);

  const handleScroll = () => {
    setFixedNavbar(window.pageYOffset > 80);
  };

  return (
    <nav className={`navbar${fixedNavbar ? ' navbar-fixed' : ''}`} >
      <div className='section-center navbar-center'>
        <div className='nav-header'>
          <img src={logo} alt='My logo'/>
        </div>
        <ul className={`${btnNavbar ? 'nav-menu' : 'nav-links'}`}>
          {
            btnNavbar &&
            <FontAwesomeIcon icon={faX} className='icon__nav' onClick={() => setBtnNavbar(false)} />
          }
          <li>
            <a href="#home" onClick={() => setBtnNavbar(false)}>Home</a>
          </li>
          <li>
            <a href="#home" onClick={() => setBtnNavbar(false)}>About Me</a>
          </li>
          <li>
            <a href="#home" onClick={() => setBtnNavbar(false)}>Skill</a>
          </li>
          <li>
            <a href="#home" onClick={() => setBtnNavbar(false)}>Product</a>
          </li>
          <li>
            <a href="#home" onClick={() => setBtnNavbar(false)}>Contact</a>
          </li>

        </ul>
        <div className='nav-btn'>
          {
            !btnNavbar &&
            <FontAwesomeIcon icon={faBars} className='icon__nav' onClick={() => setBtnNavbar(true)} />
          }
        </div>
      </div>
    </nav>
  )
}

export default Nav