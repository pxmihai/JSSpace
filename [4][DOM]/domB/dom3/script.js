let container = document.getElementById("container");
        container.childNodes; // // this contains all of the nodes (including text nodes) that are children
        container.childNodes.length; // 11
        container.children; // this contains all of the elements that are children of the element we have selected
        container.children.length; // 5

let link = document.querySelector("a");
        link.parentElement; // <body id="container">...</body>
        link.previousElementSibling; // <div class="hello">Hello Everyone!</div>
        link.previousSibling; // text node
        link.nextSibling; // text node
        link.nextElementSibling; // <button>​Click me!​</button>​
