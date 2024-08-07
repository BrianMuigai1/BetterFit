import React from 'react';
import { Link } from 'react-router-dom'

import './navbar.css';
import Logo from '../../assets/logo.png'


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={Logo} alt="BetterFit Logo" className="logo-image" />
        <div className="logo-text">BetterFit</div>
      </div>
      <ul className="nav-links">
        <li><Link to="#home">Home</Link></li>
        <li><Link to="/programs">Workout Sessions</Link></li>
        <li><Link to="#diet">Healthy Diet</Link></li>
        <li><Link to="/login">Profile</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
