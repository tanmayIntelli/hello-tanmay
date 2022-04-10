import React from 'react'
import '../css/header.css'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

function Header() {
  return (
      <>
      <Container fluid className='header'>
      <div className='nav-links'>
              <div><a href="#about">About</a></div>
              <div><a href="#skill-section">Skills</a></div>
              <div><a href="#contact-section">Let's connect</a></div>
          </div>
      </Container>
      </>
  )
}

export default Header;