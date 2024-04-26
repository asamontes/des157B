(function(){
    'use strict';

    let globalData;
    async function getData(){
        const songs = await fetch('data.json');
        const data = await songs.json();
        // Gets the keys and puts them in an array
        const dataPoints = Object.keys(data);
        // Gets the values and puts them in the globalData array
        globalData = Object.values(data);
    }

    function showTime(point, data){
        const images = [
            '<img src= "images/330.png" alt="food images" width="500" height="300">',
            '<img src= "images/3_45.png" alt="food images" width="500" height="300">',
            '<img src= "images/4pm.png" alt="food images" width="500" height="300">',
            '<img src= "images/4_15.png" alt="food images" width="500" height="300">',
            '<img src= "images/4_30.png" alt="food images" width="500" height="300">',
            '<img src= "images/4_45.png" alt="food images" width="500" height="300">',
            '<img src= "images/5pm.png" alt="food images" width="500" height="300">',
            '<img src= "images/5_15.png" alt="food images" width="500" height="300">',
            '<img src= "images/5_30.png" alt="food images" width="500" height="300">'
        ];
        document.querySelector('#time').innerHTML = images[ data[point].time ];
        document.querySelector('#songs').innerHTML = data[point].songs;
    }
})();