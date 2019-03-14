import React from 'react';
import {fullWeekDays} from '../../../mock/weekDays';
import './title.scss';

export const Title = ({link, index}) => {
    return (
        <div className="title-info">
            <div className="date">{getDate(index)}</div>
            <div className="link">{link}</div>
        </div>
    )
}

function getDate(index) {
    const date = new Date();
    date.setDate(date.getDate() + index);
    const time = date.toLocaleString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });
    const weekDay = fullWeekDays[date.getDay()];
    return weekDay + ', ' + time;
}
