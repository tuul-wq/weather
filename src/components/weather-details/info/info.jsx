import React from 'react';
import {TempType} from '../../../mock/data';
import {WeatherImage} from '../../shared/weather-image/weather-image';
import './info.scss';

export const Info = ({details, tempType}) => {
    let temp = details.temperature.tempC;
    let metric = '°C';
    if (tempType === TempType.Fahrenheit) {
        temp = details.temperature.tempF;
        metric = '°F';
    }
    return (
        <div className="info">
            <WeatherImage code={details.type.code} size={'medium'}/>
            <div className="temp">{getCurrentTemperature(temp) + metric}</div>
        </div>
    )
}

function getCurrentTemperature(values) {
    // tempC: [-11, -10, -7, -2, 1, 0, -1, -1],

    const date = new Date();
    const time = date.toLocaleString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });
    console.log(time);
    return 5;
}
