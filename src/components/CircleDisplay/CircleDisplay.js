import React from 'react';

import './CircleDisplay.css';

const CircleDisplay = (props) => {
    
    const displayEuros = (cost) => {
        let res = "€";
        for (let index = 1; index < cost; index++) {
            res += "€"
        }
        return res;
    };
    const displayTime = (minutes) => {
        let h = Math.floor(minutes / 60);
        let m = minutes % 60;
        m = m < 10 ? '0' + m : m;
        let result = minutes > 60 ? `${h} h ${m} mn` : `${m} mn`
        return result;
    }

    let value;
    if (props.unit === 'time' ) {
        value = displayTime(props.val)
    } else if (props.unit === 'euros') {
        value = displayEuros(props.val)
    }
    
    return (
        <div className="overview-circle">{value}</div>
    )
}

export default CircleDisplay;