import React from 'react'
import {Link} from 'react-router-dom';
import './Footer.scss';


function Footer() {
  return (
    <footer className='footer container-center'>
      <div className="width-page">
        <div>
          <ul className="footer-nav">
            <li>
              <Link to="/about-us">About us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Signup</Link>
            </li>
          </ul>
          <p className='p-desc'>© Your Website 2023. All Rights Reserved.</p>
        </div>
        <div className="footer-socials">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
      </div>
    </footer>
  )
}

export default Footer
