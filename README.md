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
  
  
### Additions?

This is still a very new project, and there's many more features I could add if people feel they are necessary.  
Feel free to open an issue with any bugs or enhancements you think I should work on!
