import React from 'react';
import { Link } from "react-router-dom";
import './css/MainNavbar.css';
import Navbar from 'react-bootstrap/Navbar';

function MainNavbar() {
  return (
    <Navbar expand="lg" id='Nbar' style={{ color: "white" }}>
      <div className="container">
        <h1 className="logo">
          <Link to="/home" className="nav-link">
            Placeholder
          </Link>
        </h1>
        <nav>
          <ul>
            <li className="nav-item">
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/weather" className="nav-link">
                Weather
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Navbar>
  );
}

export default MainNavbar;
