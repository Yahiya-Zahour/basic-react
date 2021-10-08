import React from "react";
import "./Header.css";
import { Navbar,NavDropdown,Nav,Form,FormControl,NavLink } from "react-bootstrap";
const Header = () => {
  return (
    <div>
     
      <Navbar  >
  <Navbar.Brand href="#"> <span>NAGUR INFRA </span></Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <NavLink to="/Home">Home</NavLink>
      <NavLink to="/Service">Services</NavLink>
      
      <NavDropdown title="Contact us" id="navbarScrollingDropdown">
        <NavDropdown.Item href="">Contact</NavDropdown.Item>
        <NavDropdown.Item href="#action4">About us</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Our work done</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#" disabled>
        <link rel="stylesheet" href="Service.jsx" />
      </Nav.Link>
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
    </Form>
    
  </Navbar.Collapse>
</Navbar>

<button>login</button>

    </div>
  );
};

export default Header;
