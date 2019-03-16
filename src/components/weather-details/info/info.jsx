import React from 'react';
import {TempType} from '../../../mock/data';
import {WeatherImage} from '../../../shared/components/weather-image/weather-image';
import './info.scss';

export const Info = ({weather, tempType}) => {
    const metric = tempType === TempType.Celsius ? '°C' : '°F';
    return (
        <div className="info">
            <WeatherImage code={weather.type.code} size={'medium'}/>
            <div className="temp">{getCurrentTemperature(weather.temperature) + metric}</div>
        </div>
    )
}

function getCurrentTemperature(values) {
    const date = new Date();
    return values[Math.round(date.getHours() * (values.length - 1) / 24)];
}
