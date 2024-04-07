import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={{ height: '80px' }}>
      <Container>
        <Navbar.Brand href="#home" style={{ fontSize: '24px' }}>TypeSprint</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="https://TypeSprint.netlify.app/">Home</Nav.Link>  
            <Nav.Link as={Link} to="/practice">Practice</Nav.Link> {/* Use Link instead of href */}         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
