import React from 'react';

import './Footer.css';

const Footer = ({
  openAboutPanel
})=>(
  <div id="footer">
    <a
      className='footer-link'
      href="https://github.com/M-Michelini/react-weather-widget"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-github"></i>
    </a>
    <div
      className='footer-link'
      onClick={openAboutPanel}
    >
      <i className="fas fa-info-circle"></i>
    </div>
  </div>
)

export default Footer;
