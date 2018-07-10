import React, { Component } from 'react';
import Map from '../Map'
import testImage from '../images/mojave.png';


class Continents extends Component {
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

    createLngArray() {
        var lngArray = [];
        for (var lng = 0; lng < 36; lng++) {
            lngArray.push(
                {'points': ['90,' + (lng*10 - 180),  "-90," + (lng*10 - 180)], 'color': 'black', width: 1}
            )
        }
        return lngArray
    }

    createLatArray() {
        var latArray = [];
        for (var lat = 0; lat < 36; lat++) {
            latArray.push(
                {'points': [(lat*10 - 90) + ",180", (lat*10 - 90) + ",-180"], 'color': 'black', width: 1}
            )
        }
        return latArray
    }

    render() {
        var images = [
            {'url': testImage, 'topLat': 35.184619089603586, 'topLng': -116.19619200291318, 'bottomLat': 35.173016651002655, 'bottomLng': -116.18129480877964}
        ];

        var polylines = this.createLatArray().concat(this.createLngArray());

        var northAmerica = {'points': ['83.97622,-86.99726', '83.43702,-2.2707', '75.577,03.67695', '55.36265,-49.38',
                    '20.60567,-64.1457', '3.4845,-93.67695', '55.16232,-169.61445', '70.95024,-168.55976'],
                'fill': '#ffff0088'};

        var southAmerica = {'points': ['15.93347,-59.92695', '0.32259,-27.58320', '-59.37036,-60.98164', '-56.76860,-87.34882',
                '12.52628,-83.48164'],
            'fill': '#ff000088'};

        var europe = {'points': ['78.69343,74.72149', '39.07347,50.81524', '43.81362,33.23711', '33.40726,16.01055',
                '33.43707,17.76836', '37.69567,10.03399', '33.70024,-17.03632', '66.9187,-28.63789'],
            'fill': '#0066ff88'};

        var africa = {'points': ['35.15012,22.69024', '-9.82423,68.39336', '-51.85368,22.69024', '10.80485,-35.66914',
                '35.15012,-5.43476'],
            'fill': '#66330099'};

        var asia = {'points': ['78.69343,74.72149', '77.22090,175.32402', '28.86548,179.19121', '2.74732,149.3084',
                '-23.30026,92.00371', '-9.82423,68.39336', '35.15012,22.69024', '43.81362,33.23711', '39.07347,50.81524'],
            'fill': '#ff660099'};

        var australia = {'points': ['-38.32302,179.1291', '-60.79047,134.54277', '-23.30026,92.00371', '2.74732,149.3084'],
            'fill': '#00cc0099'};


        var oceans = [
            {'lat': 35.69, 'lng': -39, 'r': 5, 'fill': 'blue', 'text': 'North Atlantic Ocean'},
            {'lat': -32.3, 'lng': -14.5, 'r': 5, 'fill': 'brown', 'text': 'South Atlantic Ocean'},
            {'lat': -30.69, 'lng': 80, 'r': 5, 'fill': 'orange', 'text': 'Indian Ocean'},
            {'lat': 83.82, 'lng': 45.95, 'r': 5, 'fill': 'blue', 'text': 'Arctic Ocean'},
            {'lat': 33.96, 'lng': -161.4, 'r': 5, 'fill': 'yellow', 'text': 'North Pacific Ocean'},
            {'lat': -34.36, 'lng': -137.5666, 'r': 5, 'fill': 'red', 'text': 'South Pacific Ocean'}
        ]

        var buttons = [
            {'name': 'North America', 'lat': 38.334, 'lng': -85, 'zoom': 2},
            {'name': 'South America', 'lat': -19, 'lng': -60, 'zoom': 2.3},
            {'name': 'Europe', 'lat': 48.5, 'lng': 9.8, 'zoom': 3},
            {'name': 'Africa', 'lat': 3.94, 'lng': 22, 'zoom': 2},
            {'name': 'Asia', 'lat': 46.85, 'lng': 73.4, 'zoom': 2},
            {'name': 'Australia', 'lat': -26.045, 'lng': 137, 'zoom': 3.5},
        ];

        var polygons = [northAmerica, southAmerica, europe, africa, asia, australia];

        return (
            <div className="App">
                <button onClick={this.updateMap}>Toggle world map</button>
                <Map
                     images={images}
                     width={window.innerWidth * 0.9}
                     height={window.innerHeight * 0.9}
                     polylines={polylines}
                     buttons={buttons}
                     circles={oceans}
                     polygons={polygons}
                     showWorldMap={this.state.showWorldMap}
                     mapQuality={'high'}
                />
            </div>
        );
    }
}

export default Continents;
