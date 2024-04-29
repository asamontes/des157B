(function(){
    'use strict';

    let globalData;
    let numDataPoints;
    async function getData(){
        const songs = await fetch('data.json');
        const data = await songs.json();
        // Gets the keys and puts them in an array
        const dataPoints = Object.keys(data);
        // Gets the values and puts them in the globalData array
        globalData = Object.values(data);
        // Gets the number of entries in the JSON file
        numDataPoints = dataPoints.length;
        //console.log(globalData, numDataPoints);
    }

    function showTime(point, data){
        const images = [
            '<img src= "images/3_45.png" alt="3:45pm" width="550" height="300">',
            '<img src= "images/4pm.png" alt="4:00pm" width="550" height="300">',
            '<img src= "images/4_15.png" alt="4:15pm" width="550" height="300">',
            '<img src= "images/4_30.png" alt="4:30pm" width="550" height="300">',
            '<img src= "images/4_45.png" alt="4:45pm" width="550" height="300">',
            '<img src= "images/5pm.png" alt="5:00pm" width="550" height="300">',
            '<img src= "images/5_15.png" alt="5:15pm" width="550" height="300">',
            '<img src= "images/5_30.png" alt="5:30pm" width="550" height="300">'
        ];
        document.querySelector('#timestamp').innerHTML = images[point];
        document.querySelector('#songs').innerHTML = data[point].songs;
    }

    document.addEventListener('mousemove', reportPos);

    let prevLoc = 1;
    function reportPos(event) {
        const windowSize = window.innerWidth;
        //The window needs to be divided into sections for each time in the JSON data
        const songSection = windowSize / numDataPoints;
        const xPos = event.clientX;
        // changeSong will be a number from 0-6
        const changeSong = Math.floor(xPos / songSection);

        // When you move the mouse into the next segment, change the interface.
        if (changeSong !== prevLoc) {
            //console.log(changeSong);
            showTime(changeSong, globalData);
            prevLoc = changeSong;
        }
    }
    getData();
})();