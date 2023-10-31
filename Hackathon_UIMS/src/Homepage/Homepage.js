import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Hp.css';
import 'bootstrap/dist/css/bootstrap.css';



import logo from '../Images/logo.png'


export default function Homepage() {
  return (
    <div>
    <sectionA classname="secA">
         <Navbar expand="lg" className="navcol">
      <Container>
        <Navbar.Brand href="#home"> <img 
			className="logo"
src={logo}
			alt="logo"
		/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="homepage">Home</Nav.Link>
            <Nav.Link href="business">Business Solutions</Nav.Link>
            <Nav.Link href="about">About Us</Nav.Link>
            <Nav.Link href="contact">Contact Us</Nav.Link> 
            <Nav.Link href="register"><button className="b1">Register</button></Nav.Link>  
            <Nav.Link href="login"><button className="b2" >Login</button></Nav.Link>
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </sectionA>
    
	</div>
  )
}
