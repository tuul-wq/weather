import React from 'react';
import './switch.scss';

export const Switch = ({tempType, onTempTypeChanged}) => {
    return (
        <div className="switch">
            <span className="title">{tempType.title}</span>
            <label className="toggle">
                <input type="checkbox" onChange={onTempTypeChanged}/>
                <span className="slider round"></span>
            </label>
        </div>
    )
}
