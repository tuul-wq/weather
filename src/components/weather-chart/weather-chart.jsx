import React, {Fragment} from 'react';
import {Point} from './point/point';
import {Square} from './square/square';
import axis from '../../assets/images/axis.png';
import './weather-chart.scss';

export const WeatherChart = (props) => {
    const {allTemps, temps} = props;
    const hours = ['12 am', '3 am', '6 am', '9 am',
        '12 pm', '3 pm', '6 pm', '9 pm', '12 am'];

    const heights = getHeight(allTemps, temps);
    return (
        <div className="chart-details">
            <div className="graph">
                {temps.map((v, i) =>
                    (<Fragment key={i}>
                        <Point key={i+'a'} value={v} height={heights[i]} isCurrentHour={isCurrentHour(temps, i)}/>
                        {(i !== temps.length - 1) ?
                            <Square key={i+'b'} start={heights[i]} end={heights[i+1]} /> : null}
                    </Fragment>)
                )}
            </div>
            <div className="hours-wrapper">
                <div className="img-wrapper">
                    <img src={axis} alt="axis"/>
                </div>
                <div className="hour-values">
                    {hours.map((h, i) => <div key={i} className="hour">{h}</div>)}
                </div>
            </div>
        </div>
    )
}

function isCurrentHour(values, index) {
    const date = new Date();
    return Math.round(date.getHours() * (values.length - 1) / 24) === index;
}

function getHeight(allTemps, current) {
    const tempMap = allTemps.reduce((result, v) => [...result, ...v.temperature], [])
                          .filter((t, i, self) => self.indexOf(t) === i)
                          .sort((a, b) => a - b);
    const relativeValues = tempMap.reduce((result, tm, i) =>
        ({...result, [tm]: +(i / tempMap.length * 100 + 5).toFixed(0)}), {});

    return current.map(temp => Object.entries(relativeValues).find(rv => +rv[0] === temp)[1])
}
