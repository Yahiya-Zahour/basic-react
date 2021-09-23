import React from "react";
import "./Header.css";
import { Navbar,NavDropdown,Nav,Form,FormControl,Button } from "react-bootstrap";
const Header = () => {
  return (
    <div>
     
      <Navbar className="Navmain" >
  <Navbar.Brand href="#"> <span>NAGUR INFRA </span></Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="#action1">Home</Nav.Link>
      <Nav.Link href="#action2">Services</Nav.Link>
      
      <NavDropdown title="Contact us" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">Contact</NavDropdown.Item>
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
<button>login</button>
<button>login</button>





    </div>
  );
};

export default Header;
