import React from 'react';
import './point.scss';

export const Point = (props) => {
    const {value, height, isCurrentHour} = props;
    const selectedClass = isCurrentHour ? 'selected' : '';
    return (
        <div className="point-wrapper">
            <div className={'point-column ' + selectedClass} style={{height: height + '%'}}>
                <div className="point-value">{value}</div>
            </div>
        </div>
    )
}
