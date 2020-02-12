// let newDiv = document.createElement("div");

let button = document.createElement("button");
    button.innerText = "I am a button created with JavaScript!";

let container1 = document.getElementById("container");
    container1.appendChild(button);

let linkToBeRemoved = document.querySelector("a");

let container2 = document.getElementById("container");
    container2.removeChild(linkToBeRemoved);