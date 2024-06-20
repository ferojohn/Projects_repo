import React, { useState } from 'react';
import './Appbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faBars } from '@fortawesome/free-solid-svg-icons';

const Appbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className='mt-6 nav-cover'>
      <div className='main-nav-wrapper'>
        <div>
          <a href="#home" className="navbar-brand">
            <h1 className="text">
              <FontAwesomeIcon icon={faUtensils} className="me-3" />
              Restoran
            </h1>
          </a>
        </div>
        <FontAwesomeIcon icon={faBars} className="navbar-toggle" onClick={toggleMenu} />
        <div className={`nav-list-wrapper ${menuOpen ? 'active' : ''}`}>
          <ul className='nav-list'>
            <li><a href='#home' onClick={closeMenu}>HOME</a></li>
            <li><a href='#about' onClick={closeMenu}>ABOUT</a></li>
            <li><a href='#service' onClick={closeMenu}>SERVICE</a></li>
            <li><a href='#team' onClick={closeMenu}>TEAM</a></li>
            <li><a href='#testimoniel' onClick={closeMenu}>TESTIMONIAL</a></li>
            <li><a href='#contact' onClick={closeMenu}>CONTACT</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Appbar;
