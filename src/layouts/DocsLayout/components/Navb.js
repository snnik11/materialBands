import React from 'react';
import './Navbar.css';
import { Navbar, Nav } from 'react-bootstrap';
//import logo from '../images/logo.png';

const navlinkStyle = {
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '26px',
  color: '#3f51b5',
  backgroundColor: '#e8eaf6',
  marginHorizontal: '10px',
  paddingHorizontal: '23px',
};

const navbarStyle = {
  fontSize: '25px',
  color: 'black',
  display: 'flex',
  textAlign: 'justify',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  backgroundColor: '#e8eaf6',
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

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" style={navbarStyle}>
            <span>
              <a href="/">
                <img
                  className="bands-logo"
                  src="https://mybands.s3.ap-southeast-2.amazonaws.com/logosem2/bands.png"
                  //"https://mybands.s3.ap-southeast-2.amazonaws.com/logos/bands.png"
                  //"https://mybands.s3.ap-southeast-2.amazonaws.com/events/bandslogo.png"
                  alt="BANDS"
                  style={{
                    width: 'auto',
                    height: '6.9rem',
                    padding: '10px 15px',
                    fontFamily: 'Lato',
                    display: 'flex',
                  }}
                ></img>
              </a>
            </span>

            {/* QUTBANDS */}
            <div style={{ navlinkStyle }}>
              <Nav.Link className="nav-links" href="/">
                Home
              </Nav.Link>
            </div>
            <div style={{ navlinkStyle }}>
              <Nav.Link className="nav-links" href="/about">
                About Us
              </Nav.Link>
            </div>
            {/* <Nav.Link className = "nav-links"  href="/team">Team</Nav.Link> */}
            <div style={{ navlinkStyle }}>
              <Nav.Link className="nav-links" href="/ourevents">
                Events
              </Nav.Link>
            </div>
            {/* <Nav.Link className="nav-links" href="/IndustryPartners">
              ind
              </Nav.Link> */}
            {/* <Nav.Link href="/faqs">FAQs</Nav.Link> */}
            {/* <Nav.Link className = "nav-links" href="/blog">Blog</Nav.Link> */}
            <div style={{ navlinkStyle }}>
              <Nav.Link className="nav-links" href="/industry_partners">
                Industry Partners
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navb;
