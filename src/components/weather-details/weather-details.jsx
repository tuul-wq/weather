import React from 'react';
import {Title} from './title/title';
import {Switch} from './switch/switch';
import {Info} from './info/info';
import {Chart} from './chart/chart';
import './weather-details.scss';

export const WeatherDetails = ({details, tempType, onTempTypeChanged}) => {
    const {type} = details;
    return (
        <div id="details">
            <div className="header">
                <Title link={type.link}/>
                <Switch {...{onTempTypeChanged}} {...{tempType}}/>
            </div>
            <div className="details">
                <div className="info"><Info {...{details}} {...{tempType}}/></div>
                {/* <div className="details-switch"><DetailsSwitch /></div> */}
            </div>
            <div className="chart"><Chart /></div>
        </div>
    )
}
