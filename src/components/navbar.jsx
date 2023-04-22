import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navigation() {
  return (
    <Navbar className="nb" expand="lg">
    <Navbar.Brand className="navbrand" href="/saltylocal">Salty Local</Navbar.Brand>
    <Navbar.Toggle className="navbar-toggle" aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link className="nav-link" href="/news">News</Nav.Link>
        <Nav.Link className="nav-link" href="/events">Events</Nav.Link>
        <Nav.Link className="nav-link" href="/shop">Shop</Nav.Link>
        <Nav.Link className="nav-link" href="/extras">Extras</Nav.Link>
        <Nav.Link className="nav-link" href="/about">About</Nav.Link>
        <Nav.Link className="nav-link-login" href="/login">Login</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
}
