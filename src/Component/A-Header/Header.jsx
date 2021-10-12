import React from "react";
import "./Header.css";
import { Navbar,Nav,Container } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar className="Nav">
    <Container>
    <Navbar.Brand href="">NAGUR INFRA</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">About us</Nav.Link>
      <Nav.Link href="#pricing">Services</Nav.Link>
      <Nav.Link href="#pricing">Contact us</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

<button>login</button>




  <button>Done</button>

  <button>Done</button>


    </div>
  );
};

export default Header;
