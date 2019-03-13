import React from 'react';
import {fullWeekDays} from '../../../mock/weekDays';
import './title.scss';

export const Title = ({link}) => {
    return (
        <div className="title-info">
            <div className="date">{getDate()}</div>
            <div className="link">{link}</div>
        </div>
    )
}

function getDate() {
    const date = new Date();
    const time = date.toLocaleString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });
    const weekDay = fullWeekDays[date.getDay()];
    return weekDay + ', ' + time;
}
