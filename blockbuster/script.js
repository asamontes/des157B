(function(){
    'use strict'
    const fs = document.querySelector('.fa-fish');     
    
    fs.addEventListener('click', function() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    });

    console.log('reading');
            const myVideo = document.querySelector('#myVideo');
            const line1 = document.querySelector('#line1');
            const line2 = document.querySelector('#line2');
            const line3 = document.querySelector('#line3');
            const line4 = document.querySelector('#line4');
            const line5 = document.querySelector('#line5');

            const poem = {
                start: [0, 7, 15, 22, 30],
                stop: [4, 11, 19, 26, 35],
                line: [line1, line2, line3, line4, line5]
            }

            const intervalID = setInterval(checkTime, 1000);

            function checkTime() {
                console.log(parseInt(myVideo.currentTime));

                // if (poem.start[0] < myVideo.currentTime && myVideo.currentTime < poem.stop[0]) {
                //     poem.line[0].className = "showing";
                // } else {
                //     line1.className = "hidden";
                // }
                // if (5 < myVideo.currentTime && myVideo.currentTime < 7) {
                //     line2.className = "showing";
                // } else {
                //     line2.className = "hidden";
                // }

                // if (8 < myVideo.currentTime && myVideo.currentTime < 10) {
                //     line3.className = "showing";
                // } else {
                //     line3.className = "hidden";
                // }

                for (let i = 0; i < poem.start.length; i++) {
                    if (poem.start[i] < myVideo.currentTime && myVideo.currentTime < poem.stop[i]) {
                        poem.line[i].className = "showing";
                    } else {
                        poem.line[i].className = "hidden";
                    }
                };
            }

            // myVideo.addEventListener('mousemove', function(event) {
            //     console.log(event.clientX);
            //     myVideo.playbackRate = event.clientX / 300 + .25;
            //   })
})();