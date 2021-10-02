import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './NavBar.css';
import Logo from '../../Images/profile.png' 

const NavBar = () => {
    return (
        <div className="navBar">
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <div className="logoName">
                            <img src={Logo} alt=""/>
                            <h1>
                                HASIBUL ISLAM
                            </h1>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Home</Nav.Link>
                            <Nav.Link href="#memes">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;