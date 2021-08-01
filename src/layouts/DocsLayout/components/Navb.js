import React from 'react';
import './Navbar.css';
import { Navbar, Nav } from 'react-bootstrap';
//import logo from '../images/logo.png';

const navlinkStyle = {
  //paddingRight: '35px',
  // paddingTop: '30px',
  // paddingBottom: '20px',
  fontWeight: 'bold',
  fontSize: '30px',
  color: '#3b4454',
  //justifyContent: 'space-evenly',
  //'black',
  // 'white',
  // textAlign: 'right',
  backgroundColor: '#e8eaf6',
  // marginRight: 'auto',
  // marginLeft: 'auto',
  paddingLeft: '10px',
  //'black',
  // ' #cbd3d8 ',
};

const navbarStyle = {
  paddingRight: '25px',
  //paddingLeft: '1300px',
  paddingTop: '10px',
  paddingBottom: '20px',
  fontSize: '28px',
  color: 'black',

  display: 'flex',
  //'white',
  textAlign: 'justify',
  //'right',
  backgroundColor: '#e8eaf6',
  // 'black',
  //' #cbd3d8 ',

  justifyContent: 'right',
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
          <span>
            <img
              className="bands-logo"
              src="https://mybands.s3.ap-southeast-2.amazonaws.com/logos/bands.png"
              //"https://mybands.s3.ap-southeast-2.amazonaws.com/events/bandslogo.png"
              alt="BANDS"
              style={{
                width: 135,
                height: 120,
                paddingTop: '10px',

                paddingLeft: '20px',
                fontFamily: 'Lato',
              }}
            ></img>
          </span>
          <Nav className="mr-auto" style={navbarStyle}>
            <span>
              {/* QUTBANDS */}
              <Nav.Link
                className="nav-links"
                href="/"
                style={{
                  navlinkStyle,

                  // paddingRight: '35px',
                  // paddingTop: '10px',
                  // paddingBottom: '20px',
                  // paddingLeft: '10px',
                  // fontSize: '30px',
                  // fontWeight: 'bold',
                  // color: '#3b4454',

                  // 'black',
                  //'white',
                  // textAlign: 'right',
                  // backgroundColor: '#e8eaf6',

                  //  display: 'flex',
                  //'black',
                  //  ' #cbd3d8 ',
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                className="nav-links"
                href="/about"
                style={navlinkStyle}
              >
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
              <Nav.Link
                className="nav-links"
                href="/Rental"
                style={navlinkStyle}
              >
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
