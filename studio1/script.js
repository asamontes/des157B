(function(){
    'use strict'
    console.log('reading');
    const fs = document.querySelector('.fa-fish');     
    
    fs.addEventListener('click', function() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    });

    const myVideo = document.querySelector('#myVideo');
    const myVideo2 = document.querySelector('#myVideo2');
    const line1 = document.querySelector('#line1');
    const line2 = document.querySelector('#line2');
    const line3 = document.querySelector('#line3');
    const line4 = document.querySelector('#line4');
    const line5 = document.querySelector('#line5');
    
    const poem = {
        start: [0, 5, 8, 11, 14],
        stop: [4, 7, 10, 13, 16],
        line: [line1, line2, line3, line4, line5]
    };
    
    const intervalID = setInterval(checkTime, 1000);
    
    function checkTime() {
        console.log(parseInt(myVideo.currentTime));
        
        for (let i = 0; i < poem.start.length; i++) {
            if (poem.start[i] < myVideo.currentTime && myVideo.currentTime < poem.stop[i]) {
                poem.line[i].className = "showing";
            } else {
                poem.line[i].className = "hidden";
            }
        };
    }
    

    const daCircle = document.querySelector('.image');

    daCircle.addEventListener('mousedown', function(event){
        console.log(event.clientX);
        myVideo.style.display = 'none';
        myVideo2.style.display = 'block';
    })

    daCircle.addEventListener('mouseup', function(event){
        console.log(event.clientx);
        myVideo.style.display = 'block';
        myVideo2.style.display = 'none';
    })
})();