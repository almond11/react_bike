import React, {Component} from 'react';
import {fetchWeather} from './_utils';

import './SearchBar.css';

const ErrorMessage = ({message}) => (
  <div id='search-error'><i className="fas fa-exclamation-triangle"></i> {message}</div>
)
const Spinner = () => (
  <i id="search-spinner" className="fas fa-spinner"></i>
)

export default class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state={
      search:'',
      error:null,
      loading:false
    }
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.setLoading = this.setLoading.bind(this);
    this.handleSearchError = this.handleSearchError.bind(this);
    this.getWeather = this.getWeather.bind(this);
  }
  setLoading(bool){
    const update = {
      loading:!!bool
    }
    if(this.state.error){
      update.error = null;
    }
    this.setState(update)
  }
  handleChange(e){
    const update = {
      search:e.target.value.length!==1 ? e.target.value : e.target.value.toUpperCase()
    }
    if(this.state.error){
      update.error = null;
    }
    this.setState(update);
  }
  handleSearchError(err){
    console.log(err);
    this.setState({error:err.message,loading:false});
  }

  getWeather(search){
    this.setLoading(true);
    fetchWeather(search)
    .then(res=>{
      this.setLoading(false);
      return res;
    })
    .then(this.props.onFound)
    .catch(this.handleSearchError);
  }

  handleGeolocation(){
    if(navigator && navigator.geolocation){
      return navigator
        .geolocation
        .getCurrentPosition(pos=>{
          const {latitude,longitude} = pos.coords;
          this.getWeather(`[${latitude},${longitude}]`);
        },posError=>{
          this.handleSearchError({message:"Geolocation permission denied."})
        })
    }else{
      this.handleSearchError({message:"Geolocation unavailable."})
    }
  }

  onSubmit(e){
    e.preventDefault();
    if(this.props.transitioning||this.state.loading) return;
    if(this.state.search===''){
      this.handleGeolocation();
    }else{
      this.getWeather(this.state.search);
    }
  }

  render(){
    return(
      <div className={`search-container${this.props.transitioning?' transitioning':''}`}>
        <form
          onSubmit={this.onSubmit}
          className='search-form'
        >
          <input
            className="search-bar"
            type="text"
            value={this.state.search}
            placeholder='Location'
            onChange={this.handleChange}
          />
          <button
            className='search-button'
            onClick={this.onSubmit}
          >
            <i className="fas fa-map-marker-alt fa-2x"></i>
          </button>
        </form>
        {this.state.error ? <ErrorMessage message={this.state.error}/>:null}
        {this.state.loading ? <Spinner />:null}
      </div>
    )
  }
}
