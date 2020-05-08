import React, { Component } from 'react';

import OpacityBackgroundImg from './OpacityBackgroundImg';
import WeatherWidget from './WeatherWidget';
import AboutPanel from './AboutPanel';
import Footer from './Footer';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      about:false
    };
    this.openAboutPanel = this.openAboutPanel.bind(this);
    this.closeAboutPanel = this.closeAboutPanel.bind(this);
  }

  openAboutPanel(){
    this.setState({about:true})
  }
  closeAboutPanel(){
    this.setState({about:false})
  }
  render() {
    return (
      <div className="main">
        <OpacityBackgroundImg imgSrc={'weather-background.jpg'} opacity={0.2} />
        <div className='app'>
          <h1 className='app-header'>Weather Widget</h1>
          <WeatherWidget />
          <Footer openAboutPanel={this.openAboutPanel}/>
        </div>
        {this.state.about?<AboutPanel close={this.closeAboutPanel}/>:null}
      </div>
    );
  }
}

export default App;
