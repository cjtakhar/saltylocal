import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navigation() {
  return (
    <Navbar className="nb" expand="lg">
    <Navbar.Brand className="navbrand" href="#home">The Salty Local</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link className="nav-link" href="#about">News</Nav.Link>
        <Nav.Link className="nav-link" href="#contact">Events</Nav.Link>
        <Nav.Link className="nav-link" href="#contact">Shop</Nav.Link>
        <Nav.Link className="nav-link" href="#contact">Extras</Nav.Link>
        <Nav.Link className="nav-link" href="#contact">About</Nav.Link>
      </Nav>
      <Nav className="ml-auto">
        <Nav.Link className="nav-link-login" href="#login">Login</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
}
