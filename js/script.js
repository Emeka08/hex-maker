let body = document.getElementById("main");
let screen = document.getElementsByClassName("screen")[0];
let button = document.getElementById("button");

createHex = () => {
  let hexValue = `#${Math.random().toString(16).substr(2, 6)}`;
  body.style.backgroundColor = hexValue;
  screen.innerText = `Hex Code ${hexValue}`;
  button.setAttribute("class", "button");
}

button.addEventListener("click", createHex);