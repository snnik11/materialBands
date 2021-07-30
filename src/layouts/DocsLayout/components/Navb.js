import React from 'react';
import './Navbar.css';
import { Navbar, Nav } from 'react-bootstrap';
//import logo from '../images/logo.png';

function Navb() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="light ">
        <Navbar.Brand
          href="/"
          className="header"
          style={{ fontWeight: 'bolder', fontSize: '40px' }}
        >
          <img
            className="bands-logo"
            src="https://mybands.s3.ap-southeast-2.amazonaws.com/events/bandslogo.png"
            alt="BANDS"
            style={{
              width: 140,
              height: 140,
              padding: '5px',
            }}
          ></img>
          QUTBANDS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}

          <Nav
            className="ml-auto"
            style={{ fontSize: '25px', fontFamily: 'arsenal' }}
          >
            <Nav.Link className="nav-links" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="nav-links" href="/about">
              About Us
            </Nav.Link>
            {/* <Nav.Link className = "nav-links"  href="/team">Team</Nav.Link> */}
            <Nav.Link className="nav-links" href="/blog-reach-view">
              Events
            </Nav.Link>
            {/* <Nav.Link className="nav-links" href="/Rental">
              ind
            </Nav.Link> */}
            {/* <Nav.Link href="/faqs">FAQs</Nav.Link> */}
            {/* <Nav.Link className = "nav-links" href="/blog">Blog</Nav.Link> */}
            <Nav.Link className="nav-links" href="/Rental">
              Industry Partners
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navb;
