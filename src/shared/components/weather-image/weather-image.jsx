import React from 'react';
import './weather-image.scss';

export const WeatherImage = ({code, size}) => {
    return (
        <div className={`weather-image ${code} ${size}`} alt="weather type"></div>
    )
}