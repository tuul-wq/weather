import React from 'react';
import './point.scss';

export const Point = (props) => {
    const {value, height} = props;
    return (
        <div className="point-wrapper">
            {/* <div className="point-value">{value}</div> */}
            <div className="point-column" style={{height: height + '%'}}></div>
        </div>
    )
}