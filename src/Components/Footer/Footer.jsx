import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaTwitter, FaHome, FaMobile, FaRegCopyright } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

export const Footer = () => {
  return (
    <footer>
     
      <div className="container my-5 mx-auto d-block">
      <hr />
        <div className="row g-3">
          <div className="col-12 col-sm-6 col-md-4">
            <div className="footer-logo">
              <a href="#"><img src="https://www.inrecruit.in/images/logo/fynd-career.png" alt="Inrecruit HR Services Logo" className="img-fluid navbar-brand mx-auto d-block"  style={{ maxWidth: '180px' }} /></a>
            </div>
            <div className="footer-content">
              <p style={{ textAlign: 'justify' }}>
                Elevate your career with premier overseas job placements at Inrecruit HR Services. Get expert guidance for international job opportunities. Contact us now for tailored career solutions!
              </p>
            </div>
            <div className="footer-icon d-flex flex-row align-items-center justify-content-around">
                <div className="social-icon facebook-icon badge rounded-circle py-2" style={{ backgroundColor: '#fe5722', color: 'white', fontSize: '18px' }}>
                  <FaFacebookF />
                </div>
                <div className="social-icon linkedin-icon  badge rounded-circle py-2" style={{ backgroundColor: '#fe5722', color: 'white', fontSize: '18px' }}>
                  <FaLinkedinIn />
                </div>
                <div className="social-icon instagram-icon  badge rounded-circle py-2" style={{ backgroundColor: '#fe5722', color: 'white', fontSize: '18px' }}>
                  <FaInstagram />
                </div>
                <div className="social-icon youtube-icon  badge rounded-circle py-2" style={{ backgroundColor: '#fe5722', color: 'white', fontSize: '18px' }}>
                  <FaYoutube />
                </div>
                <div className="social-icon twitter-icon  badge rounded-circle py-2" style={{ backgroundColor: '#fe5722', color: 'white', fontSize: '18px' }}>
                  <FaTwitter />
                </div>
              </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 mt-4">
            <div className="link-header">
              <h4 className="text-capitalize fw-bold text-center">Useful Links</h4>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-evenly mt-4">
              <div className="d-flex flex-column align-items-center">
                <div className="footer-content">
                  <p className="text-capitalize fw-normal">Home</p>
                  <p className="text-capitalize fw-normal">About Us</p>
                  <p className="text-capitalize fw-normal">Services</p>
                  <p className="text-capitalize fw-normal">Industries</p>
                  <p className="text-capitalize fw-normal">Process</p>
                </div>
              </div>
              <div className="d-flex flex-column align-items-center">
                <div className="footer-content">
                  <p className="text-capitalize fw-normal">Overseas Recruitment</p>
                  <p className="text-capitalize fw-normal">Ticket Immigration</p>
                  <p className="text-capitalize fw-normal">Permanent Hiring</p>
                  <p className="text-capitalize fw-normal">Contact Hiring</p>
                  <p className="text-capitalize fw-normal">Job Fair</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 mt-4">
            <div className="link-header">
              <h4 className="text-capitalize text-center">Contact</h4>
            </div>
            <div className="contact-details">
              <div className="contact-address">
                <div className="d-flex flex-row align-items-center justify-content-center gap-2">
                 
                  <div className="d-flex flex-column">
                    <p className='fs-6' style={{ fontSize: '0.9rem', textAlign: 'justify' }}>
                     <span className='fs-5 pe-2'  style={{ color: '#fe5722' }}><FaHome /></span> Daaru Complex, No.17/A2, 
                    <span className='text-break  '>  Gandhi Road, Alwarthirunagar, </span>
                     <span className='text-break'>  Chennai 600087, Tamilnadu, India </span>
                   
                    </p>
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center justify-content-start gap-2">
                  
                  <div className="d-flex flex-column">
                   <p className='fs-5 ' style={{ fontSize: '0.9rem', textAlign: 'justify' }}>
                   <span className=' pe-2' style={{ color: '#fe5722' }}><IoIosMail /></span> cv@inrecruit.in
                    </p>
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center justify-content-start gap-2">
                 
                  <div className="d-flex flex-column">
                    <p className='fs-5' style={{ fontSize: '0.9rem', textAlign: 'justify' }}>
                     <span className=' pe-2' style={{ color: '#fe5722' }}><FaMobile /></span> +91-98403 11684
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container-fluid " style={{ backgroundColor: '#0f2239', color: 'white' }}>
        <div className="container">
          <div className="row g-3">
            
            <div className="col-12  ">
            
              
                <p className='text-center' style={{ fontSize: '0.9rem' }}>
                 <span><FaRegCopyright /></span> 2024 Copyright: <span>InRecruit</span>
                </p>
             
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
