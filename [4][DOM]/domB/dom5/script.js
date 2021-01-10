//     Select the section with an id of container without using querySelector.
        document.getElementById('container');
//     Select the section with an id of container using querySelector.
        document.querySelector('#container');/* add the #*/
//     Select all of the list items with a class of "second".
        document.getElementsByClassName('second');

//     Select a list item with a class of third, but only the list item inside of the ol tag.
        let ol=document.querySelector('ol');
            ol.getElementsByClassName('third');

            // ?

           document.querySelector("ol .third");
//     Give the section with an id of container the text "Hello!".
        let selected=document.querySelector("#container");
            selected.innerText='Hello';

//     Add the class main to the div with a class of footer.
        let main=document.querySelector('.footer');

            main.classList.add('main2');


//     Remove the class main on the div with a class of footer.
        let remove=document.querySelector('.footer');
        remove.classList.remove('footer');

//     Create a new li element.
//         let newLi=document.createElement('li');
let newLi = document.createElement("li");

//     Give the li the text "four".
//         newLi.innerText='four';
        newLi.innerText = "four"

//     Append the li to the ul element.
//         let ul=document.querySelector('ul');
//         ul.appendChild(newLi);

        // let ul= document.querySelector('ul');
        // // console.log(ul);
        // ul.appendChild(newLi);
let list = document.querySelector("ul");
list.appendChild(newLi);

//     Loop over all of the lis inside the ol tag and give them a background color of "green".
//         let ali=document.querySelectorAll('li');

        // for(let i=0;i<ali.length;i++)
        //         ali[i].style.backgroundColor="green";

//     Remove the div with a class of footer.
