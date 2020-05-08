import React,{Component} from 'react';

import OpenWeatherIcon from './OpenWeatherIcon'
import TemperatureConverter from './TemperatureConverter';
import SearchBar from './SearchBar';

import './index.css'

const ResetIcon = ({onClick}) => (
  <i className='weather-search-button fas fa-redo' onClick={onClick}></i>
);

const Location = ({city,country})=>(
  <div className='weather-location'>{city}, {country}</div>
);
const Description = ({description})=>(
  <div className='weather-description'>
    {description[0].toUpperCase()+description.substring(1)}
  </div>
);

const WeatherPanel = ({
  city,
  country,
  weather,
  temp,
  reset,
  transitioning
}) => (  weather ?
  <div className={`weather-panel${transitioning?' transitioning':''}`}>
    <Location city={city} country={country} />
    <Description description={weather.description} />
    <div style={{display:'flex', alignItems:'center',width:300}}>
      <OpenWeatherIcon weather={weather} />
      <TemperatureConverter temp={temp} />
    </div>
    <ResetIcon onClick={reset} />
  </div> : <div/>
)

export default class WeatherWidget extends Component{
  constructor(){
    super();
    this.state = {
      city:null,
      country:null,
      temp:null,
      weather:null,
      transitioning:false,
    }
    this.setWeatherData = this.setWeatherData.bind(this);
    this.clearWeatherData = this.clearWeatherData.bind(this);
  }
  setWeatherData(data){
    this.setState({transitioning:true});
    setTimeout(()=>{
      this.setState({
        city:data.name,
        country:data.sys.country,
        temp:data.main.temp,
        weather:data.weather[0],
        transitioning:false
      });
    },400);
  }

  clearWeatherData(){
    this.setState({transitioning:true});
    setTimeout(()=>{
      this.setState({
        city:null,
        country:null,
        temp:null,
        weather:null,
        transitioning:false
      })
    },400);
  }
  render(){
    return(
      !this.state.weather?
      <SearchBar
        onFound={this.setWeatherData}
        transitioning={this.state.transitioning}
      />:
      <WeatherPanel
        city={this.state.city}
        country={this.state.country}
        temp={this.state.temp}
        celcius={this.state.celcius}
        weather={this.state.weather}
        transitioning={this.state.transitioning}
        reset={this.clearWeatherData}
        toggleTemp={this.toggleTemp}
      />
    )
  }
}
