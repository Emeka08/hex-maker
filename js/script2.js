let body = document.getElementById("main");
let screen = document.getElementsByClassName("screen")[0];
let button = document.getElementById("button");

let hexDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

createHex = () => {
  let hex = "#";

  for (let i = 0; i < 6; i++) {
    let randomHexNumber = Math.floor(Math.random() * hexDigits.length);
    hex += hexDigits[randomHexNumber];
  }

  body.style.backgroundColor = hex;
  screen.innerText = `Hex Code ${hex}`;
  button.setAttribute("class", "button");
};

button.addEventListener("click", createHex);