import React  from 'react';
import Map from '../Map'

import europeanCities from '../data/europe_cities.json'


class Example1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            showWorldMap: true
        })
    }

    render() {

        var circles = europeanCities.map(city => {
            var population = city.population;
            population = population.replace(",", "").replace(",", "");
            population = parseInt(population, 10);
            return {'lat': parseFloat(city.latitude), 'lng': parseFloat(city.longitude),
                'r': population ** 0.5 / 1000, 'fill': 'red', 'text': city.city}
        });

        var buttons = europeanCities.map(city => {
            return {'lat': parseFloat(city.latitude), 'lng': parseFloat(city.longitude), 'zoom': 20, 'name': city.city}
        });

        return (
            <div className="App">
                <Map
                    width={window.innerWidth * 0.9}
                    height={window.innerHeight * 0.9}
                    circles={circles}
                    buttons={buttons}
                    mapQuality={'high'}
                    initialPos={{'lat': 40, 'lng': 30, 'zoom': 3}}
                />
            </div>
        );
    }
}

export default Example1;
