import React from 'react'
import './OpenWeatherIcon.css';

//TODO: fix alts breaking page on mobile.

const OpenWeatherIcon = ({
 weather
}) => (
  <div className='weather-icon-container'>
    <img
      className='weather-icon'
      src={`https://openweathermap.org/img/w/${weather.icon}.png`}
      alt={weather.description}
    />
  </div>
)

export default OpenWeatherIcon
