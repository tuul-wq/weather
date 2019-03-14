import React, {Fragment} from 'react';
import {Point} from './point/point';
import {Square} from './square/square';
import axis from '../../assets/images/axis.png';
import './weather-chart.scss';

export const WeatherChart = (props) => {
    const {temps, current} = props;
    const values = current.tempC; //TODO: верный тип температуры
    const hours = ['12 am', '3 am', '6 am', '9 am',
        '12 pm', '3 pm', '6 pm', '9 pm', '12 am'];

    const heights = getHeight(temps);
    return (
        <div className="chart-details">
            <div className="graph">
                {values.map((v, index) =>
                    (<Fragment key={index}>
                        <Point key={index+'a'} value={v} height={heights[index]}/>
                        {(index !== values.length - 1) ?
                            <Square key={index+'b'} start={heights[index]} end={heights[index+1]} /> : null}
                    </Fragment>)
                )}
            </div>
            <div className="hours-wrapper">
                <div className="img-wrapper">
                    <img src={axis} alt="axis"/>
                </div>
                <div className="hour-values">
                    {hours.map((h, index) => <div key={index} className="hour">{h}</div>)}
                </div>
            </div>
        </div>
    )
}

function getHeight(values) {
    const tempMap = values.reduce((v, result) => [...result, ...v], [])
                          .filter((t, index, self) => self.indexOf(t) === index)
                          .sort((a, b) => a - b);
    const relativeCalues = tempMap.map((tm, index) => ({[tm]: +(index / tempMap.length).toFixed(2) }));
    console.log(relativeCalues);
    
    return [10, 70, 30, 40, 90, 60, 40, 80, 100];
}
