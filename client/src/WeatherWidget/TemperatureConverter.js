import React, {Component} from 'react';

import './TemperatureConverter.css';
import {kelvinConverter} from './_utils'

const TempUnit = ({type,isCelcius,switchUnit}) => (
  <div className={`temperature-unit${isCelcius===(type!=="F")?'-active':''}`} onClick={()=>switchUnit(type)}>
    <span className='superscript'>
      o
    </span>
    {type}
  </div>
)
const TempSwitch = ({isCelcius,switchUnit})=>(
  <div className='temperature-switch'>
    <TempUnit isCelcius={isCelcius} type="C" switchUnit={switchUnit} />
    <TempUnit isCelcius={isCelcius} type="F" switchUnit={switchUnit} />
  </div>
)
const TempValue = ({value})=>(
  <div className='temperature-value'>{value}</div>
)

export default class TemperatureConverter extends Component{
  constructor(){
    super();
    const unitType = window.localStorage.getItem('unit-type');
    this.state = {
      isCelcius: unitType!=="F"
    }

    this.switchUnit = this.switchUnit.bind(this);
  }

  switchUnit(type){
    window.localStorage.setItem('unit-type',type)
    this.setState({isCelcius:type!=='F'});
  }

  render(){
    const temp = this.state.isCelcius ?
      kelvinConverter.toCelcius(this.props.temp):
      kelvinConverter.toFarenheight(this.props.temp);
    return(
      <div
        className='temperature-container'
        onClick={this.toggle}
      >
        <TempValue value={temp} />
        <TempSwitch isCelcius={this.state.isCelcius} switchUnit={this.switchUnit} />
      </div>
    )
  }
}
