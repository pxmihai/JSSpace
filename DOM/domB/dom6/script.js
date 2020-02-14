// 8 - Create a new li element.

var newLi = document.createElement("li");

// 9 - Give the li the text "four".

newLi.innerText = "four"

// 10 - Append the li to the ul element.

var list = document.querySelector("ul");
list.appendChild(newLi);