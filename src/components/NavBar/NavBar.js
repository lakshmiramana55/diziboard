import "./NavBar.css";
import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

const NavBar = (props) => {
  const { displayOrHide } = props;


  

  return (
    <div className="fixed-top col-md-4">
      <div className="navbar-container portfolio-scroll ">
       
        <Navbar.Brand className="me-auto  portfolio-scroll" href="#home">
          <img
            className="navbar-logo"
            alt="nav-logo"
            src="http://192.168.0.116:8080/images/logo_small.png"
          />
        </Navbar.Brand>
        
         <Navbar.Collapse id="responsive-navbar-nav portfolio-scroll">
          <Nav className="header portfolio-scroll space-around">
            <Nav.Link href="#home" className="navbar-heading">HOME</Nav.Link>
            <Nav.Link href="#about" className="navbar-heading">ABOUT</Nav.Link>
            <Nav.Link href="#features" className="navbar-heading">FEATURES</Nav.Link>
            <Nav.Link href="#screens" className="navbar-heading">SCREENS</Nav.Link>
            <Nav.Link href="#download" className="navbar-heading">DOWNLOAD</Nav.Link>
            <Nav.Link href="#contact" className="navbar-heading">CONTACT</Nav.Link>
            <Link className="navbar-heading" to="/registration">
              REGISTRATION
            </Link>
            <Link className="navbar-heading" to="/login">
              SIGNIN
            </Link>
          </Nav>
          
        </Navbar.Collapse> 
        




       
        </div>
     
       
    </div>
  );
};

export default NavBar;




