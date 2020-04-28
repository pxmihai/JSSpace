if(0){
    // https://www.reddit.com/r/webdev/comments/a71rzg/javascript_functions_4_ways/
// function declaration
// function 4 ways
    function square(x){
        return x*x;
    }

//function expression
    let square=function({} ){
        return x*x+a;
    }


//Arrow Function Expression
    let square=(x)=>{
        return x*x;
    }

//Concise Arrow Function Expression
    const square =x=> x * x;

}






let set = [{"color":"blue"},{"color":"green"},{"color":"red"},{"color":"green"}];
let results = set.filter(function (entry) { return entry.color === "green"; });

function findByMatchingProperties(set, properties) {
    return set.filter(function (entry) {
        return Object.keys(properties).every(function (key) {
            return entry[key] === properties[key];
        });
    });
}

let results = findByMatchingProperties(set, { color: "green" });