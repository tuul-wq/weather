import React, { Component } from 'react';
import {weatherData, TempType} from '../../mock/data';
import {WeatherList} from '../weather-list/weather-list';
import {WeatherChart} from '../weather-chart/weather-chart';
import {WeatherDetails} from '../weather-details/weather-details';
import './app.scss';

export default
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
    // FIXME: выбор массива температур ЗДЕСЬ
    this.setState(({tempType}) => {
      return {tempType: tempType === TempType.Celsius ? TempType.Fahrenheit : TempType.Celsius};
    });
  }

  cartTemps = () => {
    const {tempType, data} = this.state;
    const string = tempType === TempType.Celsius ? 'tempC' : 'tempF';
    return data.map(d => d.temperature[string]);
  }

  render() {
    const {data, selected, tempType} = this.state;
    const chartTemps = data
    return (
      <div className="content">
        <WeatherDetails current={data[selected]} index={selected} {...{tempType}} onTempTypeChanged={this.onTempTypeChanged}/>
        <WeatherChart current={data[selected].temperature} temps={this.cartTemps()}/>
        <WeatherList {...this.state} onSelectItem={this.onSelectItem}/>
      </div>
    );
  }
}
