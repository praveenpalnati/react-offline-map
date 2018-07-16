import React from 'react'

import {convertLat, convertLng} from "./CoordinateConverter";


class Polylines extends React.Component {

    createPaths() {
        return this.props.paths.map((plan, i) => {
            var color = plan.color;
            var path = plan.points.map((point, j) => {
                var ans;
                if (j < plan.points.length-1) {
                    var curr = point.split(",");
                    var next = plan.points[j+1].split(",");
                    ans = <line key={i.toString() + j.toString()}
                                x1={convertLng(parseFloat(curr[1]), this.props.width, this.props.bounds)}
                                y1={convertLat(parseFloat(curr[0]), this.props.height, this.props.bounds)}
                                x2={convertLng(parseFloat(next[1]), this.props.width, this.props.bounds)}
                                y2={convertLat(parseFloat(next[0]), this.props.height, this.props.bounds)}
                                style={{stroke: color, strokeWidth: plan.width}} />
                }
                return ans;
            });
            path.pop();
            return path;
        });
    }

    render() {

        return (
            <svg>
                {this.createPaths()}
            </svg>
        )
    }
}

export default Polylines;

