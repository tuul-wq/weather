import React from 'react';
import {Title} from './title/title';
import {Switch} from './switch/switch';
import {Info} from './info/info';
import './weather-details.scss';

export const WeatherDetails = (props) => {
    const {current, data, tempType, onTempTypeChanged, index} = props;
    return (
        <div id="details">
            <div className="header">
                <Title link={current.type.link} {...{index}}/>
                <Switch {...{onTempTypeChanged}} {...{tempType}}/>
            </div>
            <div className="details">
                <div className="info"><Info {...{current}} {...{tempType}}/></div>
                {/* <div className="details-switch"><DetailsSwitch /></div> */}
            </div>
        </div>
    )
}
