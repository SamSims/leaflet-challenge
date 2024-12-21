//set up url for data recovery
let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"


function onEachFeature(feature, layer){
layer.bindPopup(`Location: ${feature.properties.place}<br>Magnitude: ${feature.properties.mag}<br>Depth: ${feature.geometry.coordinates[2]}`);
}
function rsize(mag){

}
function fcolor(depth){

}
function pointToLayer(feature, latlng){
    return L.circleMarker(latlng,{
        radius:rsize(feature.properties.mag),
        fillColor:fcolor(feature.geometry.coordinates[2])
    })
}
d3.json(url).then(function(response) {
    console.log(response);
// Create a map object.
let myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5
  });
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

L.geoJSON(response,{onEachFeature:onEachFeature},{pointToLayer:pointToLayer}).addTo(myMap);
});