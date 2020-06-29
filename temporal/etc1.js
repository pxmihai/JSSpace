let value=100;
function ping(x){
    console.log(x+" was used")
}

function and(x,ping){
    ping(x);
}

and(value,ping);