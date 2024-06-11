(function(){
    'use strict';
    console.log('read JS');

    document.addEventListener(
        'DOMContentLoaded',
        () => {
          const scroller = new SweetScroll({
            /* some options */
            horizontal: true, // Enable horizontal scrolling
            vertical: false,  // Disable vertical scrolling
          }, '#overlay2 .charas', '#overlay3 .charas2'); //Targets for sweetscroll
        },
        false,
      );

    const enterNm = document.querySelector('#titlepage');
    const nameData = document.querySelector("input[type=text]");
    const overlay = document.querySelector('#overlay');
    const username = document.querySelector('#username');
    const button = document.querySelector('.btn');
    const items = document.querySelector('#items');

    button.addEventListener('click', function(event){
        event.preventDefault();
        if (nameData.value.trim() !== "") {
            items.classList.remove('hidden');
            overlay.classList.remove('hidden');
            addName(nameData.value.trim());
        } else {
            alert("Please enter your name.");
        }
    });

    function addName(name) {
        const myText = `Hello, I’m ${name}. I’m a journalist from Earth, year 2024, and I’m researching work culture and its effects on autistic people. I’m visiting two universes to see if there are any lessons I can take back home to Earth.`;
        username.textContent = myText;
        nameData.value = '';
    }

    const overlay1 = document.querySelector('#overlay1')
    const overlay2 = document.querySelector('#overlay2');
    const nextbtn = document.querySelector('.btn2');

    nextbtn.addEventListener('mousedown', function(e){
        e.preventDefault();
        username.innerHTML = 'After my travels, I have to submit an article. Feel free to take notes using the notebook button. Once I feel like I’ve gathered enough information, I’m going to click the star button to wrap up. Safe travels!'

        // Wait for a brief moment to ensure DOM updates
            setTimeout(function() {
                // Hide #overlay and show #overlay1
                overlay.classList.add('hidden');
                overlay1.classList.remove('hidden');
            }, 10000); // Adjust the delay as necessary
            
        // items.classList.remove('hidden');
    
    });

    const overlay3 = document.querySelector('#overlay3');
    document.addEventListener('click', function(event){
        event.preventDefault();
        if(event.target.id == 'universe1'){
            //do something
            overlay2.classList.remove('hidden');
            overlay.className.add('hidden');
            
        } if (event.target.id == 'universe2'){
            overlay3.classList.remove('hidden');
            overlay.className.add('hidden');

            $(".welcome").fadeIn().delay(1000).fadeOut();
        }
    });

    SweetScroll.create({
        horizontal: true,
      }, ".characters");

    // const newButton = document.createElement('button');
    // newButton.id = 'next2';
    // newButton.style.paddingLeft = '64px'
    // newButton.style.paddingright = '64px'
    // newButton.style.paddingBottom = '15px'
    // newButton.style.marginBottom = '.4em'
    
    // nextbtn.addEventListener('mousedown', function(e){
    //     e.preventDefault();
    //     username.innerHTML = 'After my travels, I have to submit an article. Feel free to take notes using the notebook button. Once I feel like I’ve gathered enough information, I’m going to click the star button to wrap up. Safe travels!'
    //     newButton.textContent = 'Next';
    //     overlay.appendChild(newButton);
    //     items.className.change('show');
    //     details.className.add('hidden');
    // });

})();