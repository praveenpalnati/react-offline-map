import React from 'react'

import {convertLat, convertLng} from "./CoordinateConverter";

class Polygons extends React.Component {

    createPolygons() {
        return this.props.polygons.map((polygon, i) => {
            var fill = polygon.fill;
            var points = polygon.points.map(point => {
                var split = point.split(',');
                var x = convertLng(parseFloat(split[1]), this.props.width);
                var y = convertLat(parseFloat(split[0]), this.props.height);
                return x.toString() + ',' + y.toString()
            }).join(" ");
            return <polygon key={i} points={points} fill={fill}/>
        })
    }

    render() {

        return (
            <svg>
                {this.createPolygons()}
            </svg>
        )
    }
}

export default Polygons;

