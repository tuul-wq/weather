import React from 'react';
import './square.scss';

export const Square = (props) => {
    const {start, end} = props;
    const style = {
        clipPath: `polygon(0 ${100 - start}%, 100% ${100 - end}%, 100% 100%, 0% 100%)`
    }
    return (
        <div className="square" style={style}></div>
    )
}
