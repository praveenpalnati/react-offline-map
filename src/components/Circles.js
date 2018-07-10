import React from 'react'
import {convertLat, convertLng} from "./CoordinateConverter";


class Circles extends React.Component {

    createCircles() {
        return this.props.circles.map((plan, i) => {
            var cx = convertLng(plan.lng, this.props.width);
            var cy = convertLat(plan.lat, this.props.height);
            return <svg key={i}>
                <circle cx={cx} cy={cy} r={plan.r} fill={plan.fill}/>
                <text style={{fontSize: plan.r*2, fill: 'white'}} x={cx-plan.r*2} y={cy-plan.r}>{plan.text}</text>
            </svg>
        });
    }

    render() {

        return (
            <svg>
                {this.createCircles()}
            </svg>
        )
    }
}

export default Circles;

