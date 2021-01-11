function eventHandler(){

    let parentDiv=document.createElement('div');
    let textAreaValue = document.getElementById('sticky').textContent;

    let textAreaNode=document.createTextNode(textAreaValue);
    let textDate=document.createTextNode(new Date());

    parentDiv.appendChild(textAreaNode);
    parentDiv.appendChild(textDate);
//  document.getElementById('sticky).appendChild(node);
    let el=document.getElementById('container').appendChild(parentDiv);
}


 let element=document.createElement('div');
 element.id="named";
 document.getElementById('content').appendChild(element);


document.getElementById('buttonAdd1')
    .addEventListener('click', function() {
        // document.getElementById('writeMe').innerHTML =  document.getElementById('sticky').value;
        document.getElementById('writeMe').innerHTML =  document.getElementById('sticky').value;
    });

document.getElementById('buttonRemove1')
    .addEventListener('click', function() {
        document.getElementById('writeMe').innerHTML =  "";
    });

document.getElementById('buttonAdd2')
    .addEventListener('click', function() {
        element.textContent = document.getElementById('sticky').value;
    });

document.getElementById("named").style.backgroundColor = "yellow";

document.getElementById('buttonRemove2')
    .addEventListener('click', function() {
        element.textContent = "";
    });

document.getElementById('buttonRemove')
    .addEventListener('click', function() {
        document.getElementById('writeMe').innerHTML ="";
    });



// add onclick get data from textarea and write inside writeme

// document.getElementById('writeMe').innerHTML='added text'