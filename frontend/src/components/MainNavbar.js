import React from 'react';
import './css/MainNavbar.css';

import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function MainNavbar() {
  return (
    <Navbar expand="lg" id='Nbar'>
      <Container>
        <Navbar href="#home" className="Navbar_text" >Placeholder :)</Navbar>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;