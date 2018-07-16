import React from 'react'

import {convertLat, convertLng} from "./CoordinateConverter";

class Images extends React.Component {

    createImages() {
        return this.props.images.map((plan, i) => {
            var url = plan.url;
            var minX = convertLng(plan.topLng, this.props.width, this.props.bounds);
            var minY = convertLat(plan.topLat, this.props.height, this.props.bounds);
            var maxX = convertLng(plan.bottomLng, this.props.width, this.props.bounds);
            var maxY = convertLat(plan.bottomLat, this.props.height, this.props.bounds);
            return <image preserveAspectRatio={'none'} key={i} x={minX} y={minY} width={maxX-minX} height={maxY-minY} href={url}/>
        });
    }

    render() {

        return (
            <svg>
                {this.createImages()}
            </svg>
        )
    }
}

export default Images;

