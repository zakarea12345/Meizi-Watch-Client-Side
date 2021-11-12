import React from 'react';
import {Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css';
import icon from '../../../images/icon.png';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {
    const {user, logout} = useAuth();
    return (
        <>
          <div className="top-bar">
              <p>FREE SHIPPING FOR ORDERS OVER $359 !</p>
          </div> 
          <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="main-bar">
               <Container>
               <Navbar.Brand className="site-name">
               <img
                  alt=""
                  src={icon}
                  className="d-inline-block align-top"
                />
                   MeiziWatch
                </Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                 <Nav className="ms-auto">
                   <Nav.Link as={Link} to="/home" style={{fontWeight:'bolder'}}>Home</Nav.Link>
                   {
                     user.email ?
                      <Button variant="light" onClick={logout}>LogOut</Button>

                     :
                     <Nav.Link eventKey={2} as={Link} to="/login" style={{fontWeight:'bolder'}}>
                       Login
                     </Nav.Link>
                   }
                 </Nav>
               </Navbar.Collapse>
               </Container>
           </Navbar>  
        </>
    );
};

export default Navigation;