(function(){
    'use strict'
    const fs = document.querySelector('.fa-bug');     
    
    fs.addEventListener('click', function() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    });
})();