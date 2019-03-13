import React from 'react';
import {WeatherImage} from '../../shared/weather-image/weather-image';
import {TempType} from '../../../mock/data';
import './list-item.scss';

export const ListItem = (props) => {
    const {type, tempType, selected, week, onSelectItem} = props;
    const tempArray = tempType === TempType.Celsius ? props.temperature.tempC : props.temperature.tempF;
    const selectedClass = selected ? "selected" : '';
    return (
        <div className={"weather-item " + selectedClass} onClick={onSelectItem}>
            <div className="week">{week}</div>
            <WeatherImage code={type.code} size={'small'}/>
            <div className="avg">{getDayTemp(tempArray)}°</div>
            <div className="avg night">{getNightTemp(tempArray)}°</div>
        </div>
    )
}

function getNightTemp (tempArray) {
    const values = [...tempArray.slice(0, 2), ...tempArray.slice(6, 8)];
    return Math.round(values.reduce((sum, v) => sum + v, 0) / (tempArray.length / 2));
}

function getDayTemp (tempArray) {
    const values = tempArray.slice(1, 6);
    return Math.round(values.reduce((sum, v) => sum + v, 0) / (tempArray.length / 2));
}
