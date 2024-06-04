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

    // document.querySelector('.btn').addEventListener('click', function(event){
    //     event.preventDefault();
    //     document.querySelector('#overlay').className = "show";
    // });
    
    // enterNm.addEventListener('submit', function (event) {
    //     event.preventDefault();
    //     document.querySelector('#overlay').className = "show";
    //     processNameData(nameData);
    // });

    // function processNameData(nameData){
    //     const names = [];

    //     for (const eachWord of nameData){
    //         if (eachWord.value){
    //             words.push(eachWord.value);
    //         } else {
    //             addName(words);
    //         }
    //     }

        // function processNameData(nameData){
        //     const names = [];
    
        //     for (const eachWord of nameData){
        //         if (eachWord.value){
        //             names.push(eachWord.value);
        //         } else{
        //             emptyfields.push(counter);
        //         }
        //         counter++;
        //     }
        //     if (emptyfields.length>0){
        //         showErrors(nameData, emptyfields);
        //     } else {
        //         addName(names);
        //     }
        // }

    // function addName(names){
    //     document.querySelector('#overlay').className = 'show';

    //     const myText = `Hello, I’m ${names}. I’m a journalist from Earth, year 2024, and I’m researching work culture and its effects on autistic people. I’m visiting two universes to see if there are any lessons I can take back home to Earth.`;

    //     username.innerHTML = myText;
    //     for (const eachField of nameData){
    //         eachField.value = '';
    //     }
    // }
})();