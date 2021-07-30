import React from 'react';
//import instagram from '../images/instagram.png';
//import linkedin from '../images/linkedin.png';
//import fb from '../images/fb.png';
// const FooterEnd = () => (
//   <footer className="footer">
//     <h2 style={{ fontStyle: "italic" }}>Don't be a stranger?</h2>
//   </footer>
// );
const paddingStyle = { padding: '30px 30px 20px 30px', fontSize: '15px' };
export default function Footer() {
  return (
    <div>
      {/* <FooterEnd /> */}
      <div className="contact" style={paddingStyle}>
        <ul className="foot-list" style={{ textAlign: 'center' }}>
          <li>
            <a href="https://www.linkedin.com/company/qutbands/mycompany/">
              <img
                src="https://mybands.s3.ap-southeast-2.amazonaws.com/icons/linkedin.png"
                //"https://mybands.s3.ap-southeast-2.amazonaws.com/icons/fb.png"
                //{linkedin}
                style={{
                  width: '80px',
                  height: '80px',
                  padding: '10px',
                  pointerEvents: 'all',
                }}
                alt="linkedin"
              />{' '}
            </a>
            {'\t'}
            <a href="https://www.instagram.com/qutbands/">
              {' '}
              <img
                src="https://mybands.s3.ap-southeast-2.amazonaws.com/icons/instagram.png"
                //"https://mybands.s3.ap-southeast-2.amazonaws.com/icons/fb.png"
                //{instagram}
                style={{
                  width: '80px',
                  height: '80px',
                  padding: '10px',
                  pointerEvents: 'all',
                }}
                alt="insta"
              />{' '}
            </a>

            {'\t'}
            <a href="https://www.facebook.com/QutBands">
              {' '}
              <img
                src="https://mybands.s3.ap-southeast-2.amazonaws.com/icons/fb.png"
                // {fb}
                style={{
                  width: '80px',
                  height: '80px',
                  padding: '10px',
                  pointerEvents: 'all',
                }}
                alt="fb"
              />{' '}
            </a>
          </li>
        </ul>
      </div>
    </div>

    /* <div className="footer-items">
        <div className="col-lg-3 col-md-3" >
          <ul className="foot-list" >
            <li> <img
                src={instagram}
                style={{
                  width: "100px",
                  height: "100px",
                  pointerEvents: "all",
                }}  alt="fb"
                onClick="https://www.instagram.com/qutbands/"
              />      {"\t"}
              <img
                src={linkedin}
                style={{
                  width: "100px",
                  height: "100px",
                  pointerEvents: "all",
                }} alt="linkedin"
                onClick="https://www.instagram.com/qutbands/"
              />
         
      {"\t"}
              <img
                src={instagram}
                style={{
                
                  width: "100px",
                  height: "100px",
                  pointerEvents: "all",
                }}  alt="insta"
                onClick="https://www.instagram.com/qutbands/"
              />  
        
             
            </li>
          </ul>
        </div>
      </div> */
  );
}
