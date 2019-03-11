import React, { Component, Fragment } from 'react';
import WeatherList from '../weather-list/weather-list';
import './app.scss';

class App extends Component {

  render() {
    return (
      <Fragment>
        <WeatherList />
      </Fragment>
    );
  }
}

export default App;
