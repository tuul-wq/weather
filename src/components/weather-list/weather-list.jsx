import React from 'react';
import {ListItem} from './list-item/list-item';
import {shortWeekDays} from '../../mock/weekDays';
import './weather-list.scss';

export const WeatherList = (props) => {

    const {data, selected, onSelectItem, tempType} = props;
    return (
        <div className="weather-list">
            { data.map((weather, i) =>
                <ListItem key={i} {...weather} {...{tempType}} selected={selected === i}
                week={getWeek(i)} onSelectItem={() => onSelectItem(i)}/>) }
        </div>
    )
}

function getWeek (key) {
    let day = new Date();
    day.setDate(day.getDate() + key);
    return shortWeekDays[day.getDay()];
}
