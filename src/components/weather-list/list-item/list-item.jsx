import React from 'react';
import {WeatherImage} from '../../../shared/components/weather-image/weather-image';
import './list-item.scss';

export const ListItem = (props) => {
    const {type, selected, week, onSelectItem, temperature} = props;
    const selectedClass = selected ? "selected" : '';
    return (
        <div className={"weather-item " + selectedClass} onClick={onSelectItem}>
            <div className="week">{week}</div>
            <WeatherImage code={type.code} size={'small'}/>
            <div className="avg-temp">
                <div className="day">{getDayTemp(temperature)}°</div>
                <div className="night">{getNightTemp(temperature)}°</div>
            </div>
        </div>
    )
}

function getNightTemp (temps) {
    const values = [...temps.slice(0, 2), ...temps.slice(6, 8)];
    return Math.round(values.reduce((sum, v) => sum + v, 0) / (temps.length / 2));
}

function getDayTemp (temps) {
    const values = temps.slice(1, 6);
    return Math.round(values.reduce((sum, v) => sum + v, 0) / (temps.length / 2));
}
