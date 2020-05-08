import React from 'react';
import './AboutPanel.css';

const AboutPanel = ({close}) => (
  <div id="about-container">
    <div id="about-opaque-background" onClick={close}/>
    <section id="about-panel">
      <i onClick={close} id='about-close' className="fa fa-times-circle"></i>
      <h3 id="about-title">Description</h3>
      <p>
        A weather application that gets the weather at a given location, or the users
        current location if permission is given. The app was built with Node.js
        and Express on the backend, and React.js on the client side. All data and icons related to
        weather are from <a
          href="https://openweathermap.org"
          target="_blank"
          rel="noopener noreferrer"
        >openweathemap.org</a>. For any other developer info, you can head over
        to my <a
          href="https://github.com/M-Michelini/react-weather-widget"
          target="_blank"
          rel="noopener noreferrer"
        >github</a>.
      </p>
      <h3 id="about-usage">Usage</h3>
      <p>
        Getting the weather is simple! You can search in 3 possible formats, If the input is;
      </p>
      <ul>
        <li>empty, your location is used.</li>
        <li>inside square brackets, it will be parsed as 2 comma seperated
        decimal degree values, representing the latitude and longitude respectively.
        </li>
        <li>of any other format, it will be parsed as the locations name.</li>
      </ul>
    </section>
  </div>
)

export default AboutPanel;
