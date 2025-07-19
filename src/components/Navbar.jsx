import React, { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Mobile menu close karne ke liye function jab link click ho
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        Zaika
      </div>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="#home" className="nav-link" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" className="nav-link" onClick={closeMenu}>About</a></li>
        <li><a href="#dishes" className="nav-link" onClick={closeMenu}>Dishes</a></li>
        <li><a href="#team" className="nav-link" onClick={closeMenu}>Team</a></li>
        <li><a href="#reservation" className="nav-link" onClick={closeMenu}>Reservation</a></li>
      </ul>

      <button 
        className="menu-button" 
        aria-label="Toggle Menu" 
        onClick={toggleMenu}
      >
        ☰
      </button>
    </nav>
  );
}
