import React from 'react';
import {Title} from './title/title';
import {Switch} from './switch/switch';
import {Info} from './info/info';
import './weather-details.scss';

export const WeatherDetails = (props) => {
    const {weather, tempType, onTempTypeChanged, index} = props;
    return (
        <div id="details">
            <div className="header">
                <Title link={weather.type.link} {...{index}}/>
                <Switch {...{onTempTypeChanged}} {...{tempType}}/>
            </div>
            <div className="details">
                <Info {...{weather}} {...{tempType}}/>
                {/* <div className="details-switch"><DetailsSwitch /></div> TODO: in version 1.1 */ }
            </div>
        </div>
    )
}
