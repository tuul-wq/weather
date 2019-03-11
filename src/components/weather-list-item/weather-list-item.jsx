import React, { Component } from 'react';
import './weather-list-item.scss';

const TempType = {
    C: 0,
    F: 1
}

export default
class WeatherListItem extends Component {

    constructor(props) {
        super(props);
        const {temperature} = this.props;
        let tempType = 0; //FIXME:
        const tempArray = tempType === TempType.C ? temperature.tempC : temperature.tempC;
        this.avgDayTemp = this.getDayTemp(tempArray);
        this.avgNightTemp = this.getNightTemp(tempArray);
    }

    selectItem = () => {
        this.props.onSelectItem();
    }

    getNightTemp = (tempArray) => {
        const values = [...tempArray.slice(0, 2), ...tempArray.slice(6, 8)];
        return Math.round(values.reduce((sum, v) => sum + v, 0) / (tempArray.length / 2));
    }

    getDayTemp = (tempArray) => {
        const values = tempArray.slice(1, 6);
        return Math.round(values.reduce((sum, v) => sum + v, 0) / (tempArray.length / 2));
    }

    render() {
        const {type, selected} = this.props;
        const selectedClass = selected ? "selected" : '';
        return (
            <div className={"weather-item " + selectedClass} onClick={this.selectItem}>
                <div className={'img-' + type.code} alt="weather type"></div>
                <div className="avg">{this.avgDayTemp}°</div>
                <div className="avg night">{this.avgNightTemp}°</div>
            </div>
        )
    }
}
