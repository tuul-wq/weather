import React from 'react';
import {TempType} from '../../../mock/data';
import {WeatherImage} from '../../shared/weather-image/weather-image';
import './info.scss';

export const Info = ({current, tempType}) => {
    let temp = current.temperature.tempC;
    let metric = '°C';
    if (tempType === TempType.Fahrenheit) {
        temp = current.temperature.tempF;
        metric = '°F';
    }
    return (
        <div className="info">
            <WeatherImage code={current.type.code} size={'medium'}/>
            <div className="temp">{getCurrentTemperature(temp) + metric}</div>
        </div>
    )
}

function getCurrentTemperature(values) {
    const date = new Date();
    return values[Math.round(date.getHours() * (values.length - 1) / 24)];
}
