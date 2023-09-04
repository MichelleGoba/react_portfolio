// import React from 'react';
import "./header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import myLogo from "../../images/logo.png";

const Header = () => {
  return (
    <Navbar expand="xl" className="Navbar sticky-top">
      <Container className="nav">
        <img src={myLogo} className="logo" />
        <Navbar.Brand href="#home" className="name">
          <span>M</span>ichelle
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
            <NavDropdown href="about" title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="#about" className="dropdown">
                About Me
              </NavDropdown.Item>
              <NavDropdown.Item href="#skills" className="dropdown">
                Skills
              </NavDropdown.Item>
              <NavDropdown.Item href="#education" className="dropdown">
                Education
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#portfolio" className="nav-link">Portfolio</Nav.Link>
            <Nav.Link href="#contact" className="nav-link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
