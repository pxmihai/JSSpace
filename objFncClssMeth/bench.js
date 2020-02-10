function Mushroom (name) {
    this.name = name;
}

Mushroom.prototype.grow = function () {
    console.log(`${this.name} looks like red.`);
}

class Champignon extends Mushroom {
    grow() {
        console.log(`${this.name} grows.`);
    }
}

let d = new Champignon('Pizza');
d.grow(); // Pizza grows.

//NB: For similar methods, the child's method takes precedence over parent's method


function Ciorba(a,b,c,d){
    let sare=a;
    let apa=b;
    let patrunjel=c;
    let volum=d;
}

Ciorba.prototype.amestec= function(){
    console.log('Total unitati');
}

class omg extends Ciorba{
    a(){}
    b(){}
    c(){}
    d(){}

}

let amazing= new omg(2,1,2,2);
amazing.amestec();