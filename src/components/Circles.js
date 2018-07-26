import React from 'react'
import {convertLat, convertLng} from "./CoordinateConverter";


class Circles extends React.Component {

    createCircles() {
        return this.props.circles.map((plan, i) => {
            var cx = convertLng(plan.lng, this.props.width, this.props.bounds);
            var cy = convertLat(plan.lat, this.props.height, this.props.bounds);
            return <svg key={i}>
                <circle cx={cx} cy={cy} r={plan.r} fill={plan.fill} stroke={'black'} strokeWidth={0.2}/>
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

