let body = document.getElementById('body');
let button = document.getElementById('button');

let hex = ['a','b','c','d','e','f',0,1,2,3,4,5,6,7,8,9];

button.addEventListener('click', run);

function run(){
    let hexValue = "#";
    for (i = 0; i < 6; i++) {

        let randomHex = Math.floor(Math.random() * hex.length);
        hexValue += hex[randomHex];
        //console.log(randomHex);
        console.log(hexValue);

    }
    //console.log(hexValue);
    
    body.style.backgroundColor = hexValue;
}