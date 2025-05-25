// import React from 'react';
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/img/logobw.png';

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className={`navbar navbar-expand-lg`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="https://rahules24.github.io/sirenscripts/">
          <img 
            src={logo} 
            style={{ marginLeft: '2rem', maxHeight: '50px' }} 
            alt="Logo" 
          />
        </a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNavDropdown" 
          aria-controls="navbarNavDropdown" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === "/" ? "active" : ""}`} 
                to="/"  // Link to home page
              >
                DextUtils
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} 
                to="/about"  // Link to about page
              >
                README.md
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
