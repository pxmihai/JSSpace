https://www.reddit.com/r/webdev/comments/a71rzg/javascript_functions_4_ways/
// function declaration
function square(x){
    return x*x;
}

//function expression
const square=function(){
    return x*x;
}

//Arrow Function Expression
const square=(x)=>{
    return x*x;
}

//Concise Arrow Function Expression
const square =x=> x * x;