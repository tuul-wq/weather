import React, {Component} from 'react';
import {weatherData} from '../../mock/data';
import WeatherListItem from '../weather-list-item/weather-list-item';
import './weather-list.scss';

export default
class WeatherList extends Component {

    constructor() {
        super();
        this.state = {
            data: weatherData,
            selected: 0
        };
    }

    selectItem = (key) => {
        this.setState({selected: key});
    }

    render() {
        const {data, selected} = this.state;
        return (
            <div className="weather-list">
                { data.map((weather, i) =>
                    <WeatherListItem key={i} {...weather} selected={selected === i} onSelectItem={() => this.selectItem(i)}/>) }
            </div>
        )
    }
}
