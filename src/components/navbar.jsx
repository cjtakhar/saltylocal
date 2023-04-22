import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navigation() {
  return (
    <Navbar className="nb" expand="lg">
      <Navbar.Brand className="navbrand" href="/saltylocal">
        Salty Local
      </Navbar.Brand>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon">
          <i className="fas fa-bars"></i>
        </span>
      </button>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="nav-link" href="/news">
            News
          </Nav.Link>
          <Nav.Link className="nav-link" href="/events">
            Events
          </Nav.Link>
          <Nav.Link className="nav-link" href="/shop">
            Shop
          </Nav.Link>
          <Nav.Link className="nav-link" href="/extras">
            Extras
          </Nav.Link>
          <Nav.Link className="nav-link" href="/about">
            About
          </Nav.Link>
          <Nav.Link className="nav-link" href="/login">
            Login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

