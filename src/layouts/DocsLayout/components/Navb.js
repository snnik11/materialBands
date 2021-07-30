import React from 'react';
import './Navbar.css';
import { Navbar, Nav } from 'react-bootstrap';
//import logo from '../images/logo.png';

const navlinkStyle= {
 paddingRight: '15px',
  paddingTop: '10px',
  paddingBottom: '10px',
 
  fontSize: '30px',
  color: 'white',
  textAlign: 'right',
  backgroundColor: ' #cbd3d8 ',

}

const navbarStyle = {
  paddingRight: '25px',
  paddingTop: '10px',
  paddingBottom: '10px',
  fontSize: '28px',
  color: 'white',
 // textAlign: 'right',
  backgroundColor: ' #cbd3d8 ',

  //justifyContent: 'right',
};
function Navb() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="light"
        //style={{ background: 'grey' }}
      >
        {/* <Navbar.Brand
          href="/"
          className="header"
          style={{ fontWeight: 'bolder', fontSize: '40px' }}
        > */}
        {/* <img
            className="bands-logo"
            src="https://mybands.s3.ap-southeast-2.amazonaws.com/events/bandslogo.png"
            alt="BANDS"
            style={{
              width: 140,
              height: 140,

              fontFamily: 'Lato',
            }}
          ></img> */}
        {/* QUTBANDS */}
        {/* </Navbar.Brand> */}
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
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

          <Nav className="mr-auto" style={navbarStyle}>
            <span >
              <img
                className="bands-logo"
                src="https://mybands.s3.ap-southeast-2.amazonaws.com/events/bandslogo.png"
                alt="BANDS"
                style={{
                  width: 130,
                  height: 130,
                  paddingTop: '10px',

                  paddingLeft: '20px',
                  fontFamily: 'Lato',
                }}
              ></img>
             
            </span>
            <span >
            {/* QUTBANDS */}
            <Nav.Link className="nav-links" href="/" style={{paddingRight: '15px',
  paddingTop: '10px',
  paddingBottom: '10px',
 paddingLeft:"1090px",
  fontSize: '30px',
  color: 'white',
  textAlign: 'right',
  backgroundColor: ' #cbd3d8 '}}>
              Home
            </Nav.Link>
            <Nav.Link className="nav-links" href="/about" style={navlinkStyle}>
              About Us
            </Nav.Link>
            {/* <Nav.Link className = "nav-links"  href="/team">Team</Nav.Link> */}
            <Nav.Link
              className="nav-links"
              href="/blog-reach-view"
              style={navlinkStyle}
            >
              Events
            </Nav.Link>
            {/* <Nav.Link className="nav-links" href="/Rental">
              ind
            </Nav.Link> */}
            {/* <Nav.Link href="/faqs">FAQs</Nav.Link> */}
            {/* <Nav.Link className = "nav-links" href="/blog">Blog</Nav.Link> */}
            <Nav.Link className="nav-links" href="/Rental" style={navlinkStyle}>
              Industry Partners
            </Nav.Link>
            </span>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navb;
