import React, { Component } from 'react';
import Map from '../Map'
import iraq from '../images/iraq.png';
import sanfran from '../images/sanfran.png';
import mojave from '../images/mojave.png';
import baja from '../images/baja_peninsula.png';
import bajaZoom from '../images/baja_peninsula_zoom.png';


class Overlays extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            showWorldMap: true
        })
    }

    updateMap = () => {
        this.setState({
            showWorldMap: !this.state.showWorldMap
        })
    };
    render() {
        var images = [
            {'url': mojave, 'topLat': 35.184619089603586, 'topLng': -116.19619200291318, 'bottomLat': 35.173016651002655, 'bottomLng': -116.18129480877964},
            {'url': iraq, 'topLat': 33.61611111, 'topLng': 44.09638889, 'bottomLat': 33.01611111, 'bottomLng': 44.69638889},
            {'url': sanfran, 'topLat': 38.28555556, 'topLng': -122.80972222, 'bottomLat': 37.28555556, 'bottomLng': -121.81000000},
            {'url': baja, 'topLat': 32.533305, 'topLng': -117.123229, 'bottomLat': 22.837566, 'bottomLng': -109.396867},
            {'url': bajaZoom, 'topLat': 32.533305, 'topLng': -117.123229, 'bottomLat': 31.981218, 'bottomLng': -115.213926}
        ];

        var averageLatMojave = (35.184619089603586 + 35.173016651002655) / 2;
        var averageLngMojave = (-116.19619200291318 + -116.18129480877964) / 2;

        var averageLatIraq = (33.61611111 + 33.01611111) / 2;
        var averageLngIraq = (44.09638889 + 44.69638889) / 2;

        var averageLatSanFran = (38.28555556 + 37.28555556) / 2;
        var averageLngSanFran = (-122.80972222 + -121.81000000) / 2;

        var averageLatBaja = (32.533305 + 22.837566) / 2;
        var averageLngBaja = (-117.123229 + -109.396867) / 2;

        var averageLatBajaZoom = (32.533305 + 31.981218) / 2;
        var averageLngBajaZoom = (-117.123229 + -115.213926) / 2;

        var buttons = [
            {'name': 'Example Zoom 1: Baja (x10)', 'lat': averageLatBaja, 'lng': averageLngBaja, 'zoom': 10},
            {'name': 'Example Zoom 2: Baja zoom (x100)', 'lat': averageLatBajaZoom, 'lng': averageLngBajaZoom, 'zoom': 100},
            {'name': 'Example Zoom 3: San Francisco (x200)', 'lat': averageLatSanFran, 'lng': averageLngSanFran, 'zoom': 200},
            {'name': 'Big zoom: Iraq (x400)', 'lat': averageLatIraq, 'lng': averageLngIraq, 'zoom': 400},
            {'name': 'Extreme zoom: Mojave desert (x20000)', 'lat': averageLatMojave, 'lng': averageLngMojave, 'zoom': 20000}
        ];

        var circles = [
            {'lat': 32.1322, 'lng': -116.3452, 'r': 0.1, 'fill': 'red'},
            {'lat': 32.1022, 'lng': -115.7452, 'r': 0.1, 'fill': 'red'},
            {'lat': 32.2722, 'lng': -115.8252, 'r': 0.05, 'fill': 'red'},
        ];

        var polylines = [
            {'points': ['32.1322,-116.3452', '32.1022,-115.7452', '32.2722,-115.8252', '32.1322,-116.3452'], 'color': 'blue', 'width': 0.05},
            {'points': ['35.177319,-116.194', '35.18,-116.192', '35.177319,-116.19', '35.18,-116.188', '35.177319,-116.186'],
                'color': 'blue', 'width': 0.00005},
        ];

        var polygons = [
            {'points': ['35.179319, -116.1834', '35.181319, -116.1834', '35.181319, -116.1854', '35.179319, -116.1854'], 'fill': 'yellow'}
        ];

        return (
            <div className="App">
                <button onClick={this.updateMap}>Toggle world map</button>
                <Map
                    images={images}
                    width={window.innerWidth * 0.9}
                    height={window.innerHeight * 0.9}
                    buttons={buttons}
                    showWorldMap={this.state.showWorldMap}
                    mapQuality={'high'}
                    circles={circles}
                    polylines={polylines}
                    polygons={polygons}
                />
            </div>
        );
    }
}

export default Overlays;
