import React, {Component} from 'react';
import {weatherData, TempType} from '../../mock/data';
import {WeatherList} from '../weather-list/weather-list';
import {WeatherChart} from '../weather-chart/weather-chart';
import {WeatherDetails} from '../weather-details/weather-details';
import './app.scss';

export default
class App extends Component {

  constructor() {
    super();
    this._initialWeatherData = weatherData;
    this.state = {
      data: this._setupWeather(TempType.Celsius),
      selected: 0,
      tempType: TempType.Celsius
    };
  }

  _setupWeather = (tempType) => {
    const key = tempType === TempType.Celsius ? 'tempC' : 'tempF';
    return this._initialWeatherData.map(data => ({...data, temperature: data.temperature[key]}));
  }

  onSelectItem = (key) => {
    this.setState({ selected: key });
  }

  onTempTypeChanged = () => {
    this.setState(({tempType}) => {
      const newTempType = tempType === TempType.Celsius ? TempType.Fahrenheit : TempType.Celsius;
      return {
        data: this._setupWeather(newTempType),
        tempType: newTempType
      };
    });
  }

  render() {
    const {data, selected, tempType} = this.state;
    return (
      <div className="content">
        <WeatherDetails weather={data[selected]} index={selected} {...{tempType}} onTempTypeChanged={this.onTempTypeChanged}/>
        <WeatherChart temps={data[selected].temperature} allTemps={data}/>
        <WeatherList {...this.state} onSelectItem={this.onSelectItem}/>
      </div>
    );
  }
}
