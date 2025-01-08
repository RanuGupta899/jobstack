import React from 'react';
import {Link} from "react-router-dom";

import { Navbar, Nav, Container, Button ,NavDropdown} from 'react-bootstrap';



const Header = () => {
  return (
<>

    <Navbar expand="lg" className="navbar-custom bg-dark" >
      <Container>
        <Navbar.Brand href="/" className="navbar-logo">
          JobPortal
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" nav -item ms-auto " >
            <Nav  className="nav-link-custom"><Link to="/" style={{textDecoration:'none',color:'white',marginTop:'6px'}}>Home</Link></Nav>
            <NavDropdown className="nav-link-custom"   title={<span style={{ color: "white" }}>Jobs</span>}
 id="basic-nav-dropdown">
            <NavDropdown.Item><Link to="/Joblist"style={{textDecoration:'none',color:'seagreen',marginTop:'6px'}}>Joblist</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/JobCard"style={{textDecoration:'none',color:'seagreen',marginTop:'6px'}}>JobCard</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to="/Jobdet"style={{textDecoration:'none',color:'seagreen',marginTop:'6px'}}>Jobdetails</Link></NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/4">Consultation</NavDropdown.Item>
          </NavDropdown>
            <Nav className="nav-link-custom"><Link  to="/About"style={{textDecoration:'none',color:'white',marginTop:'6px'}} >About Us</Link></Nav>
            <Nav className="nav-link-custom"><Link to="/Contact"style={{textDecoration:'none',color:'white',marginTop:'6px'}}>Contact</Link></Nav>
          </Nav>
          <Button  variant="outline-success" className="sign-in-button"><Link to='/SigninForm'style={{textDecoration:'none',color:'white',marginTop:'6px'}}>Sign In</Link></Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
 
    </>
  );
};

export default Header;
