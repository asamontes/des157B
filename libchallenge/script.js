(function(){
    'use strict';

    // add your script here
    var map = L.map('map').setView([34.063198, -118.236061], 13);
    var marker = L.marker([34.063198, -118.236061]).addTo(map);

    var circle = L.circle([34.062195, -118.239048], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);

    var polygon = L.polygon([
        [34.041238, -118.234277],
        [34.048684, -118.238742],
        [34.050287, -118.242280]
    ]).addTo(map);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);

    marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
    circle.bindPopup("I am a circle.");
    polygon.bindPopup("I am a polygon.");
    
    var popup = L.popup()
    .setLatLng([34.063198, -118.236061])
    .setContent("I am a standalone popup.")
    .openOn(map);

    function onMapClick(e) {
        alert("You clicked the map at " + e.latlng);
    }
    
    map.on('click', onMapClick);

    var popup = L.popup();
    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    }
    
    map.on('click', onMapClick);
}());