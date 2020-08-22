let body = document.getElementById('body');
let button = document.getElementById('button');

let hexDigits = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];

function createHex() {

    let hex = "#";

    for (let i = 0; i < 6; i++) {
        
        let randomHexNumber = Math.floor(Math.random() * hexDigits.length);
        hex = hex + hexDigits[randomHexNumber];
    };

    body.style.backgroundColor = hex;

};

button.addEventListener('click', createHex);

//setInterval(createHex, 1000);