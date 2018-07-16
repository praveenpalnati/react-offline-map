# React Offline Maps

This module allows users to create maps without any internet connectivity - simply using overlays of images.  
It makes use of svg-pan-zoom to display this map in a very user-friendly way.  

## Install
### NPM
```sh
npm install --save react-offline-map
```

## Props  
|Prop|Default|Type|Description|
|-----|------|-----|-----|
| width             | **required** | Number | Width of the viewer displayed on screen  |
| height            | **required** | Number | Height of the viewer displayed on screen |
| mapQuality        | 'medium'     | String | Creates a map of low, medium or high quality |
| images            | []           | Array  | Images to be displayed on the screen     |
| polylines         | []           | Array  | Polylines to be displayed on the screen  |
| circles           | []           | Array  | Circles to be displayed on the screen    |
| buttons           | []           | Array  | Buttons to be displayed on the screen    |
| polygons          | []           | Array  | Polygons to be displayed on the screen   |
| showWorldMap      | true         | bool   | Decides whether background includes world map |
| initialPos        | {'lat': 0, 'lng': 0, 'zoom': 1} | Object | Sets the initial position of the viewer |
| bounds            | {'topLat': 90, 'topLng': -180, 'bottomLat': -90, 'bottomLng': 180} | Object | Sets the bounds for a viewer |

  
NOTE: all coordinates given in Lat/Long (UTM not accepted)  

  
##### mapQuality 
must be a string of value 'low', 'medium' or 'high'. No other options
##### images 
in form:   
[{'url': String, 'topLat': num, 'topLng', num, 'bottomLat', num, 'bottomLng': num], ..., ]  
such that top left point of image is at coordinate {topLat, topLng},
bottom left of image is at coordinate {bottomLat, bottomLng}

##### polylines 
in form:   
[{'points': ["lat1,lng1", "lat2,lng2", lat3,lng3", ...], 'color': String, 'width': num}, ..., ]  
where the first line will draw points between coordinates {lat1,lng1}, {lat2,lng2}, {lat3,lng3}, ...  

##### circles 
in form:   
[{'lat': num, 'lng': num, 'r', num, 'fill', String]}, ..., ]  
such that each circle is centred at coordinate {lat,lng} with radius r  

##### polygon 
in form:   
[{'points': ["lat1,lng1", "lat2,lng2", lat3,lng3", ...], 'fill': String}, ..., ]  
where the first polygon will draw points with coordinates {lat1,lng1}, {lat2,lng2}, {lat3,lng3}, ... and filled using fill color.  
This is essentially the same as polyline, but the shape is filled.

##### buttons 
in form:   
[{'name': String, 'lat': num, 'lng', num, 'zoom', num]}, ..., ]  
such that a button is created with title 'name' (same as <button>{button.name}</button>).  
When clicked, button will jump the viewer to coordinate {lat,lng}, with zoom=button.zoom.

##### bounds
Helps with rendering if, for example, you only want to view a very small area on the map. Shows only a portion of the map. 
Eg. If you just want to view UK, you would put bounds={{'topLat': 60, 'topLng': -15, 'bottomLat': 50, 'bottomLng': 5}}
NOTE: "top" and "bottom" refer to measurements at the top-left and bottom-right corners of an image respectively.  
Therefore, although it may seem counter-intuitive, topLat > bottomLat and bottomLng > topLng.
In a normal map (default), top-right corner will be (90,-180) and bottom-right will be (-90,180) -- measurements in form (lat,long).  
Therefore, default values are {'topLat': 90, 'topLng': -180, 'bottomLat': -90, 'bottomLng': 180}.

## Examples of Use

### Most Basic Implementation
```javascript
import React  from 'react';
import Map from 'react-offline-map'

class Basic extends React.Component {
    return (
        <div>
            <Map width={800} height={600} />
        </div>
    
}
```

### Advanced
```javascript
import React  from 'react';
import Map from 'react-offline-map'
import iraq from '../images/iraq.png';
import sanfran from '../images/sanfran.png';
import mojave from '../images/mojave.png';
import baja from '../images/baja_peninsula.png';
import bajaZoom from '../images/baja_peninsula_zoom.png';


class Advanced extends React.Component {
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

export default Advanced;

```
  
  
### Additions?

This is still a very new project, and there's many more features I could add if people feel they are necessary.  
Feel free to open an issue with any bugs or enhancements you think I should work on!
