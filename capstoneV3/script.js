(function(){
    'use strict';
    console.log('read JS');

    const enterNm = document.querySelector('#titlepage');
    const nameData = document.querySelector("input[type=text]");
    const overlay = document.querySelector('#overlay');
    const username = document.querySelector('#username');
    const button = document.querySelector('.btn');

    button.addEventListener('click', function(event){
        event.preventDefault();
        if (nameData.value.trim() !== "") {
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

    // const overlay2 = document.querySelector('#overlay2');
    const rightbtn = document.querySelector('.right');
    const newButton1 = document.createElement('button');
    newButton1.id = 'universe1';
    //newButton1.setAttribute('id', 'universe1')
    const newButton2 = document.createElement('button');
    let arrows = document.querySelector('.arrows');
    
    rightbtn.addEventListener('mousedown', function(e){
        e.preventDefault();
        username.innerHTML = 'Which universe should I travel to first? Don’t worry, we’ll be able to travel between the two easily later.'
        
        newButton1.textContent = 'Universe 1';
        arrows.appendChild(newButton1);

        newButton2.textContent = 'Universe 2';
        arrows.appendChild(newButton2);
    });

    document.addEventListener('click', function(event){
        event.preventDefault();
        if(event.tartget.id == 'universe1')[
            //do something
        ]
        // if
    });

    // rightbtn.addEventListener('mousedown', function(event){
    //     event.preventDefault();
    //     overlay2.classList.remove('hidden');
    //     overlay.className.add('hidden');
    // });
})();