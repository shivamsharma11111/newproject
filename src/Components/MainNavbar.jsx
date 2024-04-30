import React from 'react'
import { Link } from "react-router-dom"; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 


const MainNavbar = () => {
  const handleClick = () => {
    const element = document.getElementById('closeNavigation');
    if (element) {
        element.click();
      }
  };
  
  return (
    <>

 
 <Navbar className='navbar' expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src='img/logo.png' />  </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" id="closeNavigation" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav onClick={handleClick} className="me-auto">
            <Nav.Link>  <Link to="/"> Home </Link>   </Nav.Link>
            <Nav.Link>  <Link to="/about"> About us </Link>   </Nav.Link> 
            <Nav.Link > <Link to="/OurProject"> Our Projects</Link></Nav.Link> 
            <Nav.Link > <Link to="/Developments"> DEVELOPMENTS</Link></Nav.Link> 
            <Nav.Link > <Link to="/Gallery"> Gallery</Link></Nav.Link> 
            <Nav.Link > <Link to="/ContactUs"> Contact Us</Link></Nav.Link>  
            <div className='' href="#"><a href="product.html" class="cat-btn header-btn"> Location </a></div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
   
   
 
    </>
  )
}

export default MainNavbar
