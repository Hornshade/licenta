import React from 'react'
import { Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../images/logoV4.png'

const NavbarComp = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top' sticky='top' className='nav'>
            <Navbar.Brand href="/" className='logo'>
              <img src={logo} className='logoImg'></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
                <Nav className='navAuth'>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                </Nav>
            </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarComp