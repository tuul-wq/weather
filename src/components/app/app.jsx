import React, { Component } from 'react';
import {weatherData, TempType} from '../../mock/data';
import {WeatherList} from '../weather-list/weather-list';
import {WeatherDetails} from '../weather-details/weather-details';
import './app.scss';

class App extends Component {

  constructor() {
    super();
    this.state = {
      data: weatherData,
      selected: 0,
      tempType: TempType.Celsius
    };
  }

  onSelectItem = (key) => {
    this.setState({
      selected: key
    });
  }

  onTempTypeChanged = () => {
    this.setState(({tempType}) => {
      return {tempType: tempType === TempType.Celsius ? TempType.Fahrenheit : TempType.Celsius};
    });
  }

  render() {
    const {data, selected, tempType} = this.state;
    return (
      <div className="content">
        <WeatherDetails details={data[selected]} {...{tempType}} onTempTypeChanged={this.onTempTypeChanged}/>
        <WeatherList {...this.state} onSelectItem={this.onSelectItem}/>
      </div>
    );
  }
}

export default App;
