import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
      <Navbar.Brand href="/" style={{ color: "#f0f8ff !important" }}>
        Sorakopatas
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link
            href="/products"
            style={{ pointerEvents: "none", color: "#666" }}
          >
            Produtos(Em breve!)
          </Nav.Link>
          <Nav.Link href="/about">Sobre</Nav.Link>
          <Nav.Link href="/rules">Regras</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
