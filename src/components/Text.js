import React from 'react'
import {convertLat, convertLng} from "./CoordinateConverter";


class Text extends React.Component {

    createText() {
        return this.props.text.map((plan, i) => {
            var x = convertLng(plan.lng, this.props.width, this.props.bounds);
            var y = convertLat(plan.lat, this.props.height, this.props.bounds);
            return <svg key={i}>
                <text style={plan.style} x={x} y={y}>{plan.text}</text>
            </svg>
        });
    }

    render() {

        return (
            <svg>
                {this.createText()}
            </svg>
        )
    }
}

export default Text;

