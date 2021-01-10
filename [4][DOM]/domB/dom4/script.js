// let newDiv = document.createElement("div");

let button = document.createElement("button");
    button.innerText = "I am a button created with JavaScript!";

let container1 = document.getElementById("container");
    container1.appendChild(button);

let linkToBeRemoved = document.querySelector("a");

let container2 = document.getElementById("container");
    container2.removeChild(linkToBeRemoved);

let divs = document.querySelectorAll("div");
    // divs.style.backgroundColor = "red"; // this will not work, try to understand the error you receive!

// we have to use a loop for each one instead.
for (let i = 0; i < divs.length; i++) {
    divs[i].style.backgroundColor = "red"; // this will work!
}